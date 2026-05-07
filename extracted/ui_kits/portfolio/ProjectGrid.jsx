// ProjectGrid.jsx — Ahmed Hassan Portfolio
// Filterable project grid with category chips

const PROJECTS = [
  { id: 1, title: 'Zahra Jewels', category: 'Branding', year: '2024', tags: ['Brand Identity', 'Visual System'], aspect: '4/3', bg: 'linear-gradient(135deg,#E8D9CC,#D4C2B0)' },
  { id: 2, title: 'Ramadan Nights', category: 'Social', year: '2024', tags: ['Social Campaign', '12 Posts'], aspect: '1/1', bg: 'linear-gradient(135deg,#3E2F28,#5C4A40)' },
  { id: 3, title: 'Noir Collection', category: 'Print', year: '2023', tags: ['Print Design', 'Lookbook'], aspect: '3/4', bg: 'linear-gradient(160deg,#1A1210,#3E2F28)' },
  { id: 4, title: 'Al Waha Spa', category: 'Logo', year: '2024', tags: ['Logo Design', 'Monogram'], aspect: '4/3', bg: 'linear-gradient(135deg,#EFE4DA,#D4C2B0)' },
  { id: 5, title: 'Faris Coffee', category: 'Branding', year: '2023', tags: ['Brand Identity', 'Packaging'], aspect: '4/3', bg: 'linear-gradient(135deg,#C9A882,#9E7A54)' },
  { id: 6, title: 'Eid Mubarak', category: 'Social', year: '2024', tags: ['Social Campaign', 'Motion'], aspect: '1/1', bg: 'linear-gradient(160deg,#9E7A54,#C9A882)' },
];

const FILTERS = ['All', 'Social', 'Logo', 'Branding', 'Print'];

const ProjectCard = ({ project, onClick }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onClick={() => onClick(project)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        cursor: 'pointer', overflow: 'hidden',
        boxShadow: hovered ? '0 8px 40px rgba(62,47,40,0.12)' : 'none',
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
        transition: 'all 500ms cubic-bezier(0.25,0.1,0.25,1)',
      }}
    >
      {/* Image area */}
      <div style={{ aspectRatio: project.aspect, overflow: 'hidden', position: 'relative' }}>
        <div style={{
          width: '100%', height: '100%',
          background: project.bg,
          transform: hovered ? 'scale(1.04)' : 'scale(1)',
          transition: 'transform 600ms cubic-bezier(0.25,0.1,0.25,1)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <span style={{ fontFamily: 'Alexandria, sans-serif', fontSize: '10px', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(253,250,247,0.5)' }}>
            {project.category}
          </span>
        </div>
      </div>
      {/* Meta */}
      <div style={{ padding: '14px 0 20px', background: '#F5EDE6' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '4px' }}>
          <span style={{ fontFamily: 'Alexandria, sans-serif', fontSize: '15px', fontWeight: 500, color: '#3E2F28' }}>{project.title}</span>
          <span style={{ fontFamily: 'Alexandria, sans-serif', fontSize: '11px', fontWeight: 400, color: '#B0998F' }}>{project.year}</span>
        </div>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {project.tags.map((t, i) => (
            <span key={i} style={{ fontFamily: 'Alexandria, sans-serif', fontSize: '10px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#9E7A54' }}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectGrid = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = React.useState('All');

  const filtered = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeFilter);

  return (
    <section style={{ padding: '96px 48px', background: '#F5EDE6', minHeight: '80vh' }}>
      <div style={{ maxWidth: '1184px', margin: '0 auto' }}>
        {/* Section heading */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px' }}>
          <div>
            <span style={{ fontFamily: 'Alexandria, sans-serif', fontSize: '11px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#9E7A54', display: 'block', marginBottom: '10px' }}>Selected Works</span>
            <h2 style={{ fontFamily: 'Alexandria, sans-serif', fontWeight: 300, fontSize: 'clamp(32px, 4vw, 52px)', letterSpacing: '-0.02em', color: '#3E2F28', lineHeight: 1.1 }}>Projects</h2>
          </div>
          {/* Filters */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
            {FILTERS.map(f => (
              <button key={f} onClick={() => setActiveFilter(f)} style={{
                fontFamily: 'Alexandria, sans-serif',
                background: activeFilter === f ? '#3E2F28' : 'transparent',
                color: activeFilter === f ? '#FDFAF7' : '#7A6155',
                border: '1px solid', borderColor: activeFilter === f ? '#3E2F28' : '#E8D9CC',
                padding: '6px 16px', fontSize: '11px', fontWeight: 500,
                letterSpacing: '0.12em', textTransform: 'uppercase',
                cursor: 'pointer', borderRadius: '2px',
                transition: 'all 250ms cubic-bezier(0.25,0.1,0.25,1)',
              }}>
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '28px',
        }}>
          {filtered.map(project => (
            <ProjectCard key={project.id} project={project} onClick={onSelectProject} />
          ))}
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { ProjectGrid, PROJECTS });
