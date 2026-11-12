import { useState } from 'react';
import { ImageOff } from 'lucide-react';
import { profile } from '../data/content';
import './About.css';

/**
 * 自己紹介（文章・基本情報の定義リスト・写真）。
 * 写真の読み込みに失敗した場合は ImageOff のプレースホルダーを表示する。
 * @returns {JSX.Element}
 */
export default function About() {
  const [photoFailed, setPhotoFailed] = useState(false);

  const facts = [
    { label: '所在地', value: profile.location },
    { label: '主な言語', value: profile.languages.join(', ') },
    { label: 'データベース', value: profile.databases.join(', ') },
    { label: '学習中', value: profile.interests.join(', ') },
  ];

  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-grid">
          <div className="about-main">
            <div className="about-text">
              {profile.bio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <dl className="about-facts">
              {facts.map((fact) => (
                <div className="about-fact" key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="about-photo">
            {photoFailed ? (
              <div className="about-photo-placeholder" role="img" aria-label="写真を読み込めませんでした">
                <ImageOff size={24} strokeWidth={2} />
              </div>
            ) : (
              <img
                src="/myface.jpeg"
                alt="榎本 和斗の写真"
                className="about-photo-img"
                onError={() => setPhotoFailed(true)}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
