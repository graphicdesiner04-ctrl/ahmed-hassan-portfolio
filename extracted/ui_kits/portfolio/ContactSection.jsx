// ContactSection.jsx — Ahmed Hassan Portfolio

const ContactSection = () => {
  const [sent, setSent] = React.useState(false);
  const [form, setForm] = React.useState({ name: '', email: '', message: '' });

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const handleSubmit = e => { e.preventDefault(); setSent(true); };

  const inputStyle = {
    fontFamily: 'Alexandria, sans-serif',
    width: '100%', padding: '14px 0',
    background: 'transparent', border: 'none',
    borderBottom: '1px solid #E8D9CC',
    fontSize: '15px', fontWeight: 400, color: '#3E2F28',
    outline: 'none', letterSpacing: '0.02em',
    transition: 'border-color 300ms cubic-bezier(0.25,0.1,0.25,1)',
  };

  return (
    <section style={{ background: '#F5EDE6', padding: '96px 48px' }}>
      <div style={{ maxWidth: '1184px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '96px' }}>
        {/* Left — info */}
        <div>
          <span style={{ fontFamily: 'Alexandria, sans-serif', fontSize: '11px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#9E7A54', display: 'block', marginBottom: '20px' }}>Contact</span>
          <h2 style={{ fontFamily: 'Alexandria, sans-serif', fontWeight: 300, fontSize: 'clamp(28px, 3vw, 48px)', letterSpacing: '-0.02em', color: '#3E2F28', lineHeight: 1.12, marginBottom: '32px' }}>
            Let's create<br />something together.
          </h2>
          <p style={{ fontFamily: 'Alexandria, sans-serif', fontSize: '15px', fontWeight: 400, lineHeight: 1.75, color: '#7A6155', marginBottom: '40px' }}>
            Available for branding, social media, print design, and logo projects. Based in Cairo; working globally.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[['Email', 'hello@ahmedhassan.design'], ['Instagram', '@ahmedhassan.design'], ['Behance', 'behance.net/ahmedhassan']].map(([l, v], i) => (
              <div key={i} style={{ display: 'flex', gap: '16px' }}>
                <span style={{ fontFamily: 'Alexandria, sans-serif', fontSize: '10px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#B0998F', minWidth: '80px', paddingTop: '2px' }}>{l}</span>
                <span style={{ fontFamily: 'Alexandria, sans-serif', fontSize: '14px', color: '#7A6155' }}>{v}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <div>
          {sent ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', height: '100%', gap: '16px' }}>
              <div style={{ height: '1px', background: '#C9A882', width: '48px' }}></div>
              <h3 style={{ fontFamily: 'Alexandria, sans-serif', fontWeight: 300, fontSize: '28px', color: '#3E2F28', letterSpacing: '-0.01em' }}>Message sent.</h3>
              <p style={{ fontFamily: 'Alexandria, sans-serif', fontSize: '15px', color: '#7A6155', lineHeight: 1.7 }}>Thank you for reaching out. I'll be in touch shortly.</p>
              <button onClick={() => setSent(false)} style={{ fontFamily: 'Alexandria, sans-serif', background: 'none', border: 'none', cursor: 'pointer', fontSize: '11px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#9E7A54', marginTop: '8px', padding: 0 }}>Send another →</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {['name', 'email'].map(field => (
                <div key={field}>
                  <label style={{ fontFamily: 'Alexandria, sans-serif', fontSize: '10px', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#B0998F', display: 'block', marginBottom: '2px' }}>{field}</label>
                  <input
                    type={field === 'email' ? 'email' : 'text'}
                    name={field} value={form[field]} onChange={handleChange}
                    placeholder={field === 'name' ? 'Your name' : 'your@email.com'}
                    style={inputStyle}
                    onFocus={e => e.target.style.borderBottomColor = '#C9A882'}
                    onBlur={e => e.target.style.borderBottomColor = '#E8D9CC'}
                  />
                </div>
              ))}
              <div>
                <label style={{ fontFamily: 'Alexandria, sans-serif', fontSize: '10px', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#B0998F', display: 'block', marginBottom: '2px' }}>Message</label>
                <textarea
                  name="message" value={form.message} onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                  style={{ ...inputStyle, resize: 'none', lineHeight: 1.7 }}
                  onFocus={e => e.target.style.borderBottomColor = '#C9A882'}
                  onBlur={e => e.target.style.borderBottomColor = '#E8D9CC'}
                />
              </div>
              <button type="submit" style={{
                fontFamily: 'Alexandria, sans-serif',
                background: '#3E2F28', color: '#FDFAF7',
                border: 'none', padding: '14px 36px', alignSelf: 'flex-start',
                fontSize: '11px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase',
                cursor: 'pointer', transition: 'background 300ms cubic-bezier(0.25,0.1,0.25,1)',
              }}
              onMouseEnter={e => e.target.style.background = '#1A1210'}
              onMouseLeave={e => e.target.style.background = '#3E2F28'}
              >
                Send Message →
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { ContactSection });
