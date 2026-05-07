// ProjectDetail.jsx — Ahmed Hassan Portfolio
// Behance-style long-scroll project detail page

const ProjectDetail = ({ project, onBack }) => {
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => { setTimeout(() => setVisible(true), 60); }, []);

  const fadeUp = (delay = 0) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(18px)',
    transition: `opacity 600ms cubic-bezier(0.25,0.1,0.25,1) ${delay}ms, transform 600ms cubic-bezier(0.25,0.1,0.25,1) ${delay}ms`,
  });

  // Mock image blocks for long-scroll layout
  const imageBlocks = [
    { aspect: '16/9', bg: project.bg, label: 'Hero Visual' },
    { aspect: '4/3', bg: project.bg.replace('135deg', '160deg'), label: 'Detail Shot' },
    { aspect: '1/1', bg: project.bg.replace('135deg', '110deg'), label: 'Brand Mark' },
    { aspect: '16/7', bg: project.bg.replace('135deg', '145deg'), label: 'Application' },
  ];

  return (
    <article style={{ background: '#F5EDE6', minHeight: '100vh', paddingTop: '80px' }}>
      {/* Back button */}
      <div style={{ padding: '32px 48px 0', maxWidth: '1184px', margin: '0 auto' }}>
        <button
          onClick={onBack}
          style={{
            fontFamily: 'Alexandria, sans-serif',
            background: 'none', border: 'none', cursor: 'pointer',
            fontSize: '11px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase',
            color: '#9E7A54', display: 'flex', alignItems: 'center', gap: '8px', padding: 0,
          }}
        >
          ← All Work
        </button>
      </div>

      {/* Header */}
      <div style={{ padding: '48px 48px 64px', maxWidth: '1184px', margin: '0 auto' }}>
        <div style={fadeUp(0)}>
          <span style={{ fontFamily: 'Alexandria, sans-serif', fontSize: '11px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#9E7A54', display: 'block', marginBottom: '16px' }}>
            {project.category} · {project.year}
          </span>
          <h1 style={{ fontFamily: 'Alexandria, sans-serif', fontWeight: 300, fontSize: 'clamp(44px, 6vw, 80px)', letterSpacing: '-0.02em', color: '#3E2F28', lineHeight: 1.06, marginBottom: '32px' }}>
            {project.title}
          </h1>
        </div>

        {/* Meta row */}
        <div style={{ ...fadeUp(120), display: 'flex', gap: '48px', paddingTop: '24px', borderTop: '1px solid #E8D9CC', marginBottom: '0' }}>
          {[
            { label: 'Client', value: project.title },
            { label: 'Scope', value: project.tags.join(', ') },
            { label: 'Year', value: project.year },
            { label: 'Location', value: 'Cairo, Egypt' },
          ].map((item, i) => (
            <div key={i}>
              <div style={{ fontFamily: 'Alexandria, sans-serif', fontSize: '10px', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#B0998F', marginBottom: '6px' }}>{item.label}</div>
              <div style={{ fontFamily: 'Alexandria, sans-serif', fontSize: '14px', fontWeight: 400, color: '#3E2F28' }}>{item.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Full-bleed hero image */}
      <div style={{ ...fadeUp(180), width: '100%', aspectRatio: '16/7', background: project.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '80px' }}>
        <span style={{ fontFamily: 'Alexandria, sans-serif', fontSize: '11px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(253,250,247,0.5)' }}>Full-Bleed Hero</span>
      </div>

      {/* Body content */}
      <div style={{ maxWidth: '1184px', margin: '0 auto', padding: '0 48px' }}>
        {/* Brief */}
        <div style={{ ...fadeUp(240), display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '64px', marginBottom: '80px' }}>
          <div>
            <h3 style={{ fontFamily: 'Alexandria, sans-serif', fontWeight: 500, fontSize: '13px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#3E2F28', marginBottom: '16px' }}>Brief</h3>
            <div style={{ height: '1px', background: '#E8D9CC', marginBottom: '20px' }}></div>
            <p style={{ fontFamily: 'Alexandria, sans-serif', fontSize: '15px', fontWeight: 400, lineHeight: 1.75, color: '#7A6155' }}>
              A complete visual identity system built to communicate elegance, heritage, and modern sensibility.
            </p>
          </div>
          <div>
            <h3 style={{ fontFamily: 'Alexandria, sans-serif', fontWeight: 500, fontSize: '13px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#3E2F28', marginBottom: '16px' }}>Approach</h3>
            <div style={{ height: '1px', background: '#E8D9CC', marginBottom: '20px' }}></div>
            <p style={{ fontFamily: 'Alexandria, sans-serif', fontSize: '15px', fontWeight: 400, lineHeight: 1.75, color: '#7A6155' }}>
              Starting from the brand's cultural roots, the identity system draws on minimal geometric forms, a warm editorial palette, and bilingual typesetting. Every element was designed to function across digital and print surfaces.
            </p>
          </div>
        </div>

        {/* 2-column image grid */}
        <div style={{ ...fadeUp(300), display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
          {imageBlocks.slice(1, 3).map((block, i) => (
            <div key={i} style={{ aspectRatio: block.aspect, background: block.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontFamily: 'Alexandria, sans-serif', fontSize: '10px', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(253,250,247,0.5)' }}>{block.label}</span>
            </div>
          ))}
        </div>

        {/* Full-width image */}
        <div style={{ ...fadeUp(360), aspectRatio: '16/7', background: imageBlocks[3].bg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '80px' }}>
          <span style={{ fontFamily: 'Alexandria, sans-serif', fontSize: '10px', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(253,250,247,0.5)' }}>Application</span>
        </div>

        {/* Project nav */}
        <div style={{ ...fadeUp(400), display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '40px', paddingBottom: '80px', borderTop: '1px solid #E8D9CC' }}>
          <button onClick={onBack} style={{ fontFamily: 'Alexandria, sans-serif', background: 'none', border: 'none', cursor: 'pointer', fontSize: '11px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#7A6155', padding: 0 }}>← Previous</button>
          <button onClick={onBack} style={{ fontFamily: 'Alexandria, sans-serif', background: 'none', border: 'none', cursor: 'pointer', fontSize: '11px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#7A6155', padding: 0 }}>Next →</button>
        </div>
      </div>
    </article>
  );
};

Object.assign(window, { ProjectDetail });
