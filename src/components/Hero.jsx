import './Hero.css';

/**
 * ファーストビュー（名前・肩書き・主要ボタン）。
 * @param {{ scrollTo: (id: string) => void }} props
 * @returns {JSX.Element}
 */
export default function Hero({ scrollTo }) {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <h1 className="hero-name">榎本 和斗</h1>
        <p className="hero-en">Enomoto Kazuto</p>
        <p className="hero-sub">Python を主軸にする バックエンドエンジニア。</p>
        <div className="hero-cta">
          <a href="#projects" className="btn-primary" onClick={(e) => { e.preventDefault(); scrollTo('projects'); }}>
            制作物を見る
          </a>
          <a href="#contact" className="btn-outline" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}>
            連絡する
          </a>
        </div>
      </div>
    </section>
  );
}
