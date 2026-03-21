import { skills } from '../data/content';
import './Skills.css';

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="fade-in">
        <div className="section-label">02 skills</div>
        <div className="section-title">技術スタック</div>
      </div>
      <div className="skills-grid fade-in">
        {skills.map((s, i) => (
          <div className="skill-card" key={i}>
            <div className="skill-card-icon">{s.icon}</div>
            <div className="skill-card-title">{s.title}</div>
            <div className="skill-tags">
              {s.tags.map((t) => (
                <span className="skill-tag" key={t}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
