// ══════════════════════════════════════════════════════════════
//  BEHANCE AUTO-SYNC ENGINE
//  Fetches live from Behance API → caches in localStorage
//  Falls back to projects.js if API key missing or request fails
// ══════════════════════════════════════════════════════════════
const Behance = (() => {
  const BASE      = 'https://api.behance.net/v2';
  const CACHE_KEY = 'bh_v2_cache';

  // ── Cache ────────────────────────────────────────────────
  function readCache() {
    try {
      const raw = localStorage.getItem(CACHE_KEY);
      if (!raw) return null;
      const { data, ts } = JSON.parse(raw);
      const ageMin = (Date.now() - ts) / 60000;
      if (CFG.behance.cacheMinutes > 0 && ageMin > CFG.behance.cacheMinutes) return null;
      console.info(`[Behance] cache hit (${Math.round(ageMin)}m old)`);
      return data;
    } catch { return null; }
  }

  function writeCache(data) {
    try { localStorage.setItem(CACHE_KEY, JSON.stringify({ data, ts: Date.now() })); }
    catch { /* storage full – skip */ }
  }

  // ── HTTP ─────────────────────────────────────────────────
  async function get(path, params = {}) {
    const q = new URLSearchParams({ api_key: CFG.behance.apiKey, ...params });
    const res = await fetch(`${BASE}${path}?${q}`, { mode: 'cors' });
    if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
    return res.json();
  }

  // ── Category classifier ──────────────────────────────────
  function classify(fields = [], tags = []) {
    const f = [...fields, ...tags].join(' ').toLowerCase();
    if (/social|media|instagram|post|رeel|feed/.test(f))  return 'Social';
    if (/print|poster|brochure|flyer|مطبوع|نشرة/.test(f)) return 'Print';
    if (/brand|identity|logo|شعار|هوية/.test(f))          return 'Branding';
    return 'Other';
  }

  // ── Transform a raw Behance project ─────────────────────
  function transform(raw, detail = null) {
    const d = detail;
    // Extract images from modules
    const images = [];
    if (d?.modules) {
      d.modules.forEach(m => {
        if (m.type === 'image' && m.src) images.push(m.src);
        if (m.type === 'media_collection' && m.components) {
          m.components.forEach(c => { if (c.src) images.push(c.src); });
        }
      });
    }

    // Extract dominant color from project colors
    const color = raw.colors?.[0]
      ? `rgb(${raw.colors[0].r},${raw.colors[0].g},${raw.colors[0].b})`
      : null;

    return {
      id:          raw.id,
      title:       raw.name,
      titleAr:     raw.name,
      desc:        d?.description || raw.description || '',
      descAr:      d?.description || raw.description || '',
      cover:       raw.covers?.['404']  || raw.covers?.original || '',
      coverLg:     raw.covers?.original || raw.covers?.['808']  || raw.covers?.['404'] || '',
      images,
      url:         raw.url,
      year:        new Date((raw.published_on || Date.now() / 1000) * 1000).getFullYear(),
      views:       raw.stats?.views         || 0,
      likes:       raw.stats?.appreciations || 0,
      tags:        raw.fields || [],
      tagsAr:      raw.fields || [],
      cat:         classify(raw.fields, raw.tags?.map(t => t.name) || []),
      color,
      featured:    !!raw.featured,
      wide:        false,
      _behance:    true,
    };
  }

  // ── Main fetch ───────────────────────────────────────────
  async function fetchAll() {
    if (!CFG.behance.apiKey) {
      console.info('[Behance] no API key — using projects.js fallback');
      return null;
    }

    // Check cache
    const cached = readCache();
    if (cached) return cached;

    console.info(`[Behance] fetching @${CFG.behance.username}…`);

    try {
      // 1. User profile + projects list
      const [userRes, projRes] = await Promise.all([
        get(`/users/${CFG.behance.username}`),
        get(`/users/${CFG.behance.username}/projects`, { per_page: 48, sort_by: 'published_on' }),
      ]);

      const user     = userRes.user;
      const rawProjs = projRes.projects || [];

      // 2. Fetch full details for up to 20 projects (rate-limit friendly)
      const DETAIL_LIMIT = 20;
      const detailResults = await Promise.all(
        rawProjs.slice(0, DETAIL_LIMIT).map(p =>
          get(`/projects/${p.id}`).then(r => r.project).catch(() => null)
        )
      );

      // 3. Transform
      const projects = rawProjs.map((p, i) => transform(p, detailResults[i] ?? null));

      const result = {
        user: {
          name:     user.display_name || user.username,
          username: user.username,
          avatar:   user.images?.['138'] || user.images?.['50'] || '',
          bio:      user.biography || '',
          location: user.location || '',
          links:    user.social_links || [],
          stats:    user.stats || {},
        },
        projects,
        fetchedAt: Date.now(),
      };

      writeCache(result);
      console.info(`[Behance] ✓ ${projects.length} projects loaded`);
      return result;

    } catch (err) {
      console.warn('[Behance] fetch failed:', err.message);
      return null;
    }
  }

  return { fetchAll };
})();
