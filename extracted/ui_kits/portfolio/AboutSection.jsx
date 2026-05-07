// AboutSection.jsx — Ahmed Hassan Portfolio

const AboutSection = ({ onNavigate }) => {
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    const el = document.getElementById('about-section');
    if (el) obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const fadeUp = (delay = 0) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(20px)',
    transition: `opacity 700ms cubic-bezier(0.25,0.1,0.25,1) ${delay}ms, transform 700ms cubic-bezier(0.25,0.1,0.25,1) ${delay}ms`,
  });

  return (
    <section id="about-section" style={{ background: '#EFE4DA', padding: '96px 48px' }}>
      <div style={{ maxWidth: '1184px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
        {/* Image placeholder */}
        <div style={{ ...fadeUp(0), aspectRatio: '4/5', background: 'linear-gradient(160deg,#3E2F28,#1A1210)', display: 'flex', alignItems: 'flex-end', padding: '32px' }}>
          <div>
            <div style={{ fontFamily: 'Alexandria, sans-serif', fontWeight: 300, fontSize: '28px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#FDFAF7', lineHeight: 1.1 }}>Ahmed<br />Hassan</div>
            <div style={{ height: '0.5px', background: '#C9A882', marginTop: '10px', width: '60px' }}></div>
          </div>
        </div>
        {/* Text */}
        <div>
          <div style={fadeUp(100)}>
            <span style={{ fontFamily: 'Alexandria, sans-serif', fontSize: '11px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#9E7A54', display: 'block', marginBottom: '20px' }}>About</span>
            <h2 style={{ fontFamily: 'Alexandria, sans-serif', fontWeight: 300, fontSize: 'clamp(28px, 3vw, 44px)', letterSpacing: '-0.02em', color: '#3E2F28', lineHeight: 1.15, marginBottom: '28px' }}>
              Design is a language.<br />I help brands speak it.
            </h2>
          </div>
          <div style={fadeUp(200)}>
            <p style={{ fontFamily: 'Alexandria, sans-serif', fontSize: '15px', fontWeight: 400, lineHeight: 1.78, color: '#7A6155', marginBottom: '20px' }}>
              Cairo-based creative director specializing in brand identity, social media campaigns, and print design. Over 5 years of experience working with luxury, lifestyle, and F&B brands across the MENA region.
            </p>
            <p style={{ fontFamily: 'Alexandria, sans-serif', fontSize: '15px', fontWeight: 400, lineHeight: 1.78, color: '#7A6155', marginBottom: '36px', direction: 'rtl', textAlign: 'right' }}>
              مصمم بصري متخصص في الهوية التجارية وتصميم وسائل التواصل الاجتماعي.
            </p>
          </div>
          <div style={fadeUp(300)}>
            <div style={{ display: 'flex', gap: '40px', marginBottom: '36px' }}>
              {[['30+', 'Projects'], ['5+', 'Years'], ['MENA', 'Region']].map(([n, l], i) => (
                <div key={i}>
                  <div style={{ fontFamily: 'Alexandria, sans-serif', fontWeight: 300, fontSize: '32px', color: '#3E2F28', letterSpacing: '-0.02em', lineHeight: 1 }}>{n}</div>
                  <div style={{ fontFamily: 'Alexandria, sans-serif', fontSize: '11px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#B0998F', marginTop: '4px' }}>{l}</div>
                </div>
              ))}
            </div>
            <button
              onClick={() => onNavigate('contact')}
              style={{
                fontFamily: 'Alexandria, sans-serif', background: '#3E2F28', color: '#FDFAF7',
                border: 'none', padding: '12px 32px', fontSize: '11px', fontWeight: 500,
                letterSpacing: '0.14em', textTransform: 'uppercase', cursor: 'pointer',
                transition: 'background 300ms cubic-bezier(0.25,0.1,0.25,1)',
              }}
              onMouseEnter={e => e.target.style.background = '#1A1210'}
              onMouseLeave={e => e.target.style.background = '#3E2F28'}
            >
              Get in Touch →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { AboutSection });
