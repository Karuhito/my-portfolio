import { projects } from '../data/content';
import './Projects.css';

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="fade-in">
        <div className="section-label">03 projects</div>
        <div className="section-title">制作物</div>
      </div>
      <div className="projects-list fade-in">
        {projects.map((p, i) => (
          <div className="project-row" key={i}>
            <div className="project-num">0{i + 1}</div>
            <div className="project-info">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
            <div className="project-meta">
              <div className="project-tags">
                {p.tags.map((t) => (
                  <span className="project-tag" key={t}>{t}</span>
                ))}
              </div>
              <a href={p.link} className="project-link">VIEW →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
