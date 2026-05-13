// ══════════════════════════════════════════════════════════════
//  PORTFOLIO CONFIG — edit ONCE, site updates automatically
//  Behance API key: https://www.adobe.io/console → New project → Add Behance API
// ══════════════════════════════════════════════════════════════
const CFG = {

  // ── Behance ────────────────────────────────────────────────
  behance: {
    username: 'ahmedhassanbahaa',
    apiKey: '',          // ← paste your Behance API key here
    cacheMinutes: 60,    // re-fetch after N minutes (0 = always fresh)
  },

  // ── Identity ───────────────────────────────────────────────
  name: {
    ar: { line1: 'أحمد', line2: 'حسن بهاء' },
    en: { line1: 'AHMED', line2: 'HASSAN BAHAA' },
  },
  role: {
    ar: ['مصمم جرافيك', 'مصمم هوية بصرية', 'مصمم مطبوعات', 'متخصص ذكاء اصطناعي'],
    en: ['Graphic Designer', 'Visual Identity', 'Print Designer', 'AI Specialist'],
  },
  bio: {
    ar: 'مصمم جرافيك مصري محترف متخصص في تصاميم السوشيال ميديا والهوية البصرية والمطبوعات. أدمج الأسلوب الإبداعي مع أحدث تقنيات الذكاء الاصطناعي لبناء علامات تجارية قوية ومميزة.',
    en: 'Egyptian graphic designer specialising in visual identity, social media design, and print. I merge creative direction with AI to build distinctive brands that stand apart.',
  },
  location: { ar: 'القاهرة، مصر', en: 'Cairo, Egypt' },
  available: true,

  // ── Contact ────────────────────────────────────────────────
  email:     'ahmed.hassan.bahaa@gmail.com',
  whatsapp:  '201550917070',
  instagram: 'https://www.instagram.com/ahmedhassanbahaa',
  facebook:  'https://www.facebook.com/share/18dEBWRK3a/',
  behanceUrl:'https://www.behance.net/ahmedhassanbahaa',

  // ── Local assets ───────────────────────────────────────────
  heroPhoto:  'assets/ahmed-hassan-photo.jpg',
  aboutPhoto: 'assets/ahmed-about-photo.png',
  logo:       'assets/ahmed-hassan-logo.webp',

  // ── Stats ──────────────────────────────────────────────────
  stats: {
    projects: { n: 30, label: { ar: 'مشروع', en: 'Projects' } },
    years:    { n: 5,  label: { ar: 'سنوات', en: 'Years' } },
    clients:  { n: 20, label: { ar: 'عميل',  en: 'Clients' } },
  },
};
