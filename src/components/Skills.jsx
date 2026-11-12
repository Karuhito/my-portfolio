import { Code, Database, Layers } from 'lucide-react';
import { skills, skillLevels } from '../data/content';
import './Skills.css';

// content.js の icon 文字列から Lucide コンポーネントを引く対応表
const skillIcons = { Code, Database, Layers };

/**
 * 段階の順位（0 が最も高い）を返す。skillLevels にない値は -1。
 * @param {string} level
 * @returns {number}
 */
const levelRank = (level) => skillLevels.indexOf(level);

/**
 * 技術スタック（カテゴリごとのカードのグリッド）。
 * @returns {JSX.Element}
 */
export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>

        <div className="skills-grid">
          {skills.map((s) => {
            const Icon = skillIcons[s.icon];
            return (
              <div className="skill-card" key={s.title}>
                <div className="skill-card-head">
                  {Icon && <Icon size={16} strokeWidth={2} aria-hidden="true" />}
                  <h3 className="skill-card-title">{s.title}</h3>
                </div>
                <ul className="skill-items">
                  {s.items.map((item) => {
                    const rank = levelRank(item.level);
                    return (
                      <li className="skill-item" key={item.name}>
                        <span className="skill-name">{item.name}</span>
                        {/* 段階は文字色の濃さだけで差をつける（定義外の値は表示しない） */}
                        {rank >= 0 && (
                          <span className={`skill-level skill-level-${rank}`}>{item.level}</span>
                        )}
                        {item.note && <span className="skill-note">{item.note}</span>}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
