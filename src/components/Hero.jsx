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
          <div>YAMADA</div>
          <div className="line2">TARO.</div>
        </h1>
        <p className="hero-sub">
          高負荷・高可用性システムの設計と実装が得意な
          <span className="hl"> バックエンドエンジニア</span>。<br />
          Go / Python を主軸に、クラウドネイティブな
          <span className="hl"> 分散システム</span>を構築。<br />
          スケーラビリティと信頼性を両立するアーキテクチャを追求しています。
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
