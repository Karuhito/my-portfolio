import { timeline } from '../data/content';
import './Experience.css';

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="fade-in">
        <div className="section-label">04 experience</div>
        <div className="section-title">職歴・学歴</div>
      </div>
      <div className="timeline fade-in">
        {timeline.map((t, i) => (
          <div className="tl-item" key={i}>
            <div className="tl-date">{t.date}</div>
            <div className="tl-title">{t.title}</div>
            <div className="tl-org">{t.org}</div>
            <div className="tl-desc">{t.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
