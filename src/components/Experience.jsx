import { timeline } from '../data/content';
import './Experience.css';

/**
 * 職歴・学歴（左に日付、右に title / 所属 / 説明）。
 * @returns {JSX.Element}
 */
export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <h2 className="section-title">職歴・学歴</h2>

        <div className="timeline">
          {timeline.map((t) => (
            <div className="tl-item" key={`${t.date}-${t.title}`}>
              <div className="tl-date">{t.date}</div>
              <div className="tl-body">
                <div className="tl-title">{t.title}</div>
                <div className="tl-org">{t.org}</div>
                <div className="tl-desc">{t.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
