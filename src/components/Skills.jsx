import { Server, Database, Code } from 'lucide-react';
import { skills } from '../data/content';
import './Skills.css';

// content.js の icon 文字列から Lucide コンポーネントを引く対応表
const skillIcons = { Server, Database, Code };

/**
 * 技術スタック（カテゴリごとのカードのグリッド）。
 * @returns {JSX.Element}
 */
export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title">技術スタック</h2>

        <div className="skills-grid">
          {skills.map((s) => {
            const Icon = skillIcons[s.icon];
            return (
              <div className="skill-card" key={s.title}>
                <div className="skill-card-head">
                  {Icon && <Icon size={16} strokeWidth={2} aria-hidden="true" />}
                  <h3 className="skill-card-title">{s.title}</h3>
                </div>
                <div className="skill-tags">
                  {s.tags.map((t) => (
                    <span className="skill-tag" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
