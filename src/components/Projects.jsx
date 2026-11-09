import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/content';
import ProjectThumbnail from './ProjectThumbnail';
import './Projects.css';

/**
 * 制作物の一覧（サムネイル | 本文 | リンク の3カラム）。
 * @returns {JSX.Element}
 */
export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">制作物</h2>

        <div className="projects-list">
          {projects.map((p) => (
            <div className="project-row" key={p.link}>
              <ProjectThumbnail src={p.thumbnail} alt={`${p.title}のスクリーンショット`} />
              <div className="project-info">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="project-tags">
                  {p.tags.map((t) => (
                    <span className="project-tag" key={t}>{t}</span>
                  ))}
                </div>
              </div>
              <a href={p.link} target="_blank" rel="noreferrer" className="project-link">
                GitHub
                <ArrowUpRight size={16} strokeWidth={2} aria-hidden="true" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
