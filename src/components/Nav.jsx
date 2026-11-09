import ThemeToggle from './ThemeToggle';
import './Nav.css';

const navLinks = [
  { id: 'about', label: '自己紹介' },
  { id: 'skills', label: '技術' },
  { id: 'projects', label: '制作物' },
  { id: 'experience', label: '経歴' },
  { id: 'contact', label: '連絡先' },
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
        <div className="nav-logo">Enomoto Kazuto</div>
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
