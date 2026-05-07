// Header.jsx — Ahmed Hassan Portfolio
// Site header: wordmark + nav links + availability badge

const Header = ({ currentPage = 'work', onNavigate }) => {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { id: 'work',    label: 'Work' },
    { id: 'about',   label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      height: '64px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 48px',
      background: scrolled ? 'rgba(245,237,230,0.88)' : 'transparent',
      backdropFilter: scrolled ? 'blur(14px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(232,217,204,0.5)' : '1px solid transparent',
      transition: 'all 400ms cubic-bezier(0.25,0.1,0.25,1)',
    }}>
      {/* Wordmark */}
      <div
        onClick={() => onNavigate('work')}
        style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '3px' }}
      >
        <span style={{ fontFamily: 'Alexandria, sans-serif', fontWeight: 300, fontSize: '16px', letterSpacing: '0.20em', textTransform: 'uppercase', color: '#3E2F28', lineHeight: 1 }}>
          Ahmed Hassan
        </span>
        <div style={{ height: '0.5px', background: '#C9A882' }}></div>
      </div>

      {/* Desktop Nav */}
      <nav style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
        {links.map(link => (
          <button key={link.id} onClick={() => onNavigate(link.id)} style={{
            fontFamily: 'Alexandria, sans-serif',
            background: 'none', border: 'none', cursor: 'pointer', padding: '2px 0',
            fontSize: '11px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase',
            color: currentPage === link.id ? '#3E2F28' : '#7A6155',
            borderBottom: currentPage === link.id ? '1px solid #C9A882' : '1px solid transparent',
            transition: 'all 250ms cubic-bezier(0.25,0.1,0.25,1)',
          }}>
            {link.label}
          </button>
        ))}
        <span style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.10em', textTransform: 'uppercase', color: '#B0998F', marginLeft: '8px' }}>
          Available →
        </span>
      </nav>
    </header>
  );
};

Object.assign(window, { Header });
