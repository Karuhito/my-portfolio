import ThemeToggle from './ThemeToggle';
import './Nav.css';

const navLinks = [
  { id: 'about', label: 'About Me' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Career' },
  { id: 'contact', label: 'Contact' },
];

/**
 * 上部固定のナビゲーション。
 * @param {{ scrollTo: (id: string) => void }} props
 * @returns {JSX.Element}
 */
export default function Nav({ scrollTo }) {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <div className="nav-logo">Portfolio</div>
        <div className="nav-right">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.id); }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
