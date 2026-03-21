import './Nav.css';

const sections = ['about', 'skills', 'projects', 'experience', 'contact'];

export default function Nav() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="nav">
      <div className="nav-logo">
        dev<span>.</span>portfolio
      </div>
      <ul className="nav-links">
        {sections.map((s) => (
          <li key={s}>
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); scrollTo(s); }}
            >
              {s}
            </a>
          </li>
        ))}
      </ul>
      <div className="nav-status">
        <span className="status-dot" />
        就活中
      </div>
    </nav>
  );
}
