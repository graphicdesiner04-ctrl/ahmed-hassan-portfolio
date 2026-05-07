// Footer.jsx — Ahmed Hassan Portfolio

const Footer = ({ onNavigate }) => (
  <footer style={{ background: '#1A1210', padding: '64px 48px', fontFamily: 'Alexandria, sans-serif' }}>
    <div style={{ maxWidth: '1184px', margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '48px', marginBottom: '48px' }}>
        {/* Brand column */}
        <div>
          <div style={{ fontWeight: 300, fontSize: '20px', letterSpacing: '0.20em', textTransform: 'uppercase', color: '#FDFAF7', marginBottom: '4px' }}>Ahmed Hassan</div>
          <div style={{ height: '0.5px', background: '#C9A882', marginBottom: '16px', maxWidth: '200px' }}></div>
          <p style={{ fontSize: '14px', fontWeight: 400, lineHeight: 1.7, color: '#7A6155', maxWidth: '320px' }}>
            Creative Director & Visual Designer based in Cairo. Available for freelance projects worldwide.
          </p>
        </div>
        {/* Links */}
        <div>
          <div style={{ fontSize: '10px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#9E7A54', marginBottom: '20px' }}>Navigation</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {['Work', 'About', 'Contact'].map(l => (
              <button key={l} onClick={() => onNavigate(l.toLowerCase())} style={{ fontFamily: 'Alexandria, sans-serif', background: 'none', border: 'none', cursor: 'pointer', padding: 0, textAlign: 'left', fontSize: '13px', fontWeight: 400, color: '#7A6155', letterSpacing: '0.06em', transition: 'color 250ms' }}
                onMouseEnter={e => e.target.style.color = '#FDFAF7'}
                onMouseLeave={e => e.target.style.color = '#7A6155'}
              >{l}</button>
            ))}
          </div>
        </div>
        {/* Contact */}
        <div>
          <div style={{ fontSize: '10px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#9E7A54', marginBottom: '20px' }}>Contact</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <span style={{ fontSize: '13px', color: '#7A6155' }}>hello@ahmedhassan.design</span>
            <span style={{ fontSize: '13px', color: '#7A6155' }}>Behance · Instagram</span>
            <div style={{ marginTop: '8px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#C9A882' }}></div>
              <span style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#9E7A54' }}>Available for Freelance</span>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom rule */}
      <div style={{ height: '1px', background: 'rgba(232,217,204,0.12)', marginBottom: '24px' }}></div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '11px', color: '#5C4A40', letterSpacing: '0.08em' }}>© 2024 Ahmed Hassan. All rights reserved.</span>
        <span style={{ fontSize: '11px', color: '#5C4A40', letterSpacing: '0.08em', direction: 'rtl' }}>أحمد حسن</span>
      </div>
    </div>
  </footer>
);

Object.assign(window, { Footer });
