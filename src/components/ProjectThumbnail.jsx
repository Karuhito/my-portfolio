import { useState } from 'react';
import { ImageOff } from 'lucide-react';
import './ProjectThumbnail.css';

/**
 * 制作物のサムネイル枠（16:10）。
 * src が未設定、または読み込みに失敗した場合は ImageOff のプレースホルダーを表示する。
 * @param {{ src?: string, alt: string }} props
 * @returns {JSX.Element}
 */
export default function ProjectThumbnail({ src, alt }) {
  const [failed, setFailed] = useState(false);
  const showPlaceholder = !src || failed;

  return (
    <div className="project-thumb">
      {showPlaceholder ? (
        <div className="project-thumb-placeholder" role="img" aria-label="画像がありません">
          <ImageOff size={24} strokeWidth={2} />
        </div>
      ) : (
        <img
          className="project-thumb-img"
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
