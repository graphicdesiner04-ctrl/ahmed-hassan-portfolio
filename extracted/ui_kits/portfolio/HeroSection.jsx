// HeroSection.jsx — Ahmed Hassan Portfolio
// Full-viewport hero with display heading, sub, and CTA

const HeroSection = ({ onNavigate }) => {
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => { setTimeout(() => setVisible(true), 80); }, []);

  const fadeUp = (delay = 0) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(22px)',
    transition: `opacity 700ms cubic-bezier(0.25,0.1,0.25,1) ${delay}ms, transform 700ms cubic-bezier(0.25,0.1,0.25,1) ${delay}ms`,
  });

  return (
    <section style={{
      minHeight: '100vh',
      background: '#F5EDE6',
      display: 'flex', alignItems: 'center',
      padding: '120px 48px 80px',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Background accent rule */}
      <div style={{ position: 'absolute', bottom: 80, right: 48, width: 1, height: 120, background: '#C9A882', opacity: 0.5 }}></div>

      <div style={{ maxWidth: '1184px', width: '100%' }}>
        {/* Label */}
        <div style={{ ...fadeUp(0), marginBottom: '32px' }}>
          <span style={{ fontFamily: 'Alexandria, sans-serif', fontSize: '11px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#9E7A54' }}>
            Creative Director · Visual Designer · Cairo
          </span>
        </div>

        {/* Main display headline */}
        <h1 style={{
          ...fadeUp(120),
          fontFamily: 'Alexandria, sans-serif',
          fontWeight: 300, fontSize: 'clamp(52px, 8vw, 96px)',
          lineHeight: 1.05, letterSpacing: '-0.02em',
          color: '#3E2F28', maxWidth: '900px',
          marginBottom: '12px',
        }}>
          Visual Identity<br />&amp; Brand Craft
        </h1>

        {/* Arabic subtitle */}
        <div style={{ ...fadeUp(200), marginBottom: '40px' }}>
          <span style={{ fontFamily: 'Alexandria, sans-serif', fontSize: '20px', fontWeight: 300, color: '#7A6155', letterSpacing: '0.02em', direction: 'rtl' }}>
            تصميم يحكي قصة
          </span>
        </div>

        {/* Body */}
        <p style={{
          ...fadeUp(280),
          fontFamily: 'Alexandria, sans-serif',
          fontSize: '17px', fontWeight: 400, lineHeight: 1.7,
          color: '#7A6155', maxWidth: '480px', marginBottom: '48px',
        }}>
          Social media campaigns, brand identities, print design, and logos — crafted for brands that value precision.
        </p>

        {/* CTA row */}
        <div style={{ ...fadeUp(360), display: 'flex', gap: '20px', alignItems: 'center' }}>
          <button
            onClick={() => onNavigate('projects')}
            style={{
              fontFamily: 'Alexandria, sans-serif',
              background: '#3E2F28', color: '#FDFAF7',
              border: 'none', padding: '14px 36px',
              fontSize: '11px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase',
              cursor: 'pointer', transition: 'background 300ms cubic-bezier(0.25,0.1,0.25,1)',
            }}
            onMouseEnter={e => e.target.style.background = '#1A1210'}
            onMouseLeave={e => e.target.style.background = '#3E2F28'}
          >
            View Work →
          </button>
          <button
            onClick={() => onNavigate('contact')}
            style={{
              fontFamily: 'Alexandria, sans-serif',
              background: 'transparent', color: '#3E2F28',
              border: '1px solid #3E2F28', padding: '14px 36px',
              fontSize: '11px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase',
              cursor: 'pointer', transition: 'all 300ms cubic-bezier(0.25,0.1,0.25,1)',
            }}
            onMouseEnter={e => { e.target.style.background = '#3E2F28'; e.target.style.color = '#FDFAF7'; }}
            onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = '#3E2F28'; }}
          >
            Get in Touch
          </button>
        </div>

        {/* Scroll indicator */}
        <div style={{ ...fadeUp(500), position: 'absolute', bottom: 36, left: 48, display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: 1, height: 40, background: '#C9A882', opacity: 0.6 }}></div>
          <span style={{ fontFamily: 'Alexandria, sans-serif', fontSize: '10px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#B0998F', writingMode: 'vertical-rl' }}>Scroll</span>
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { HeroSection });
