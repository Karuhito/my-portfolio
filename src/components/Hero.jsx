import { profile } from '../data/content';
import './Hero.css';

export default function Hero({ scrollTo }) {
  return (
    <section id="hero" className="hero">
      <div className="grid-bg" />
      <div className="hero-content">
        <div className="hero-tag">
          <span>▸</span> Backend Engineer
        </div>
        <h1 className="hero-name">
          <div>ENOMOTO</div>
          <div className="line2">KAZUTO.</div>
        </h1>
        <p className="hero-sub">
          Python を主軸にする<span className="hl"> バックエンドエンジニア</span>。
        </p>
        <div className="hero-cta">
          <a href="#" className="btn-primary" onClick={(e) => { e.preventDefault(); scrollTo('projects'); }}>
            VIEW PROJECTS
          </a>
          <a href="#" className="btn-outline" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}>
            GET IN TOUCH
          </a>
        </div>
      </div>
      <div className="hero-numbers">
        {profile.stats.map((s) => (
          <div className="hero-num-item" key={s.label}>
            <div className="hero-num-value">{s.value}</div>
            <div className="hero-num-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
