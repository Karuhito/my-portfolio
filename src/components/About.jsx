import { profile } from '../data/content';
import './About.css';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="fade-in">
        <div className="section-label">01 about</div>
        <div className="section-title">自己紹介</div>
      </div>

      <div className="about-grid fade-in">

        {/* 左カラム: テキスト + ターミナル */}
        <div className="about-left">
          <div className="about-text">
            {profile.bio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="terminal">
            <div className="terminal-bar">
              <div className="t-dot" style={{ background: '#ff5f57' }} />
              <div className="t-dot" style={{ background: '#febc2e' }} />
              <div className="t-dot" style={{ background: '#28c840' }} />
            </div>
            <div className="terminal-body">
              <div><span className="t-dim">$ </span><span className="t-cmd">cat</span> profile.json</div>
              <div><span className="t-key">{'{'}</span></div>
              <div>&nbsp;&nbsp;<span className="t-key">"name"</span>: <span className="t-str">"{profile.name}"</span>,</div>
              <div>&nbsp;&nbsp;<span className="t-key">"role"</span>: <span className="t-str">"{profile.role}"</span>,</div>
              <div>&nbsp;&nbsp;<span className="t-key">"location"</span>: <span className="t-str">"{profile.location}"</span>,</div>
              <div>&nbsp;&nbsp;<span className="t-key">"lang"</span>: [{profile.languages.map((l, i) => (
                <span key={l}><span className="t-val">"{l}"</span>{i < profile.languages.length - 1 ? ', ' : ''}</span>
              ))}],</div>
              <div>&nbsp;&nbsp;<span className="t-key">"open_to_work"</span>: <span className="t-val">{String(profile.openToWork)}</span>,</div>
              <div>&nbsp;&nbsp;<span className="t-key">"interests"</span>: [</div>
              {profile.interests.map((interest, i) => (
                <div key={i}>&nbsp;&nbsp;&nbsp;&nbsp;<span className="t-str">"{interest}"</span>{i < profile.interests.length - 1 ? ',' : ''}</div>
              ))}
              <div>&nbsp;&nbsp;]</div>
              <div><span className="t-key">{'}'}</span></div>
              <div style={{ marginTop: 12 }}><span className="t-dim">$ </span>█</div>
            </div>
          </div>
        </div>

        {/* 右カラム: 円形写真 */}
        <div className="about-photo-col">
          <div className="photo-wrapper">
            {/* src/assets/profile.jpg に写真を配置してください */}
            <img
              src="/profile.jpg"
              alt="Profile photo"
              className="photo-img"
              onError={(e) => {
                // 写真がない場合はプレースホルダーを表示
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            {/* プレースホルダー（写真未設定時に表示） */}
            <div className="photo-placeholder">
              <span className="placeholder-icon">👤</span>
              <span className="placeholder-text">profile.jpg</span>
              <span className="placeholder-sub"></span>
            </div>
            {/* グロー装飾 */}
            <div className="photo-glow" />
            {/* アクセントリング */}
            <div className="photo-ring" />
          </div>

          {/* 写真下のバッジ */}
          <div className="photo-badge">
            <span className="badge-dot" />
            就活中 / Open to Work
          </div>
        </div>

      </div>
    </section>
  );
}
