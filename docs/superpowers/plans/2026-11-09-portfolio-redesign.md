# ポートフォリオ改修 実装計画

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 現行の配置を保ったまま、派手な装飾を取り除き、ライト/ダーク切り替え・Lucide アイコン・制作物サムネイルを備えた落ち着いた見た目に作り直す。

**Architecture:** 色とフォントを `src/styles/global.css` の CSS 変数に集約し、`<html data-theme>` の値で切り替える。テーマの初期値は `index.html` のインラインスクリプトで React の描画前に決め、切り替えは `src/theme.js` の関数と `ThemeToggle` コンポーネントが担う。各セクションは既存のコンポーネントと CSS ファイルを書き換える（ファイル構成は維持する）。

**Tech Stack:** React 19 / Vite 8 / JSX / `lucide-react` / CSS（コンポーネント単位）

**Spec:** `docs/superpowers/specs/2026-11-09-portfolio-redesign-design.md`

## Global Constraints

- 色は spec 4.1 の6変数（`--bg` `--bg-soft` `--text` `--text-sub` `--border` `--link`）だけを使う。ライトは `:root`、ダークは `[data-theme="dark"]`
- フォントは `--font-body` / `--font-heading` の変数経由のみ。初期値は本文 `'JetBrains Mono', monospace`、見出し `'Syne', sans-serif`。Google Fonts の `@import` は `global.css` の1か所だけ
- `transition` / `animation` / `@keyframes` / `box-shadow` / `gradient` / `text-transform: uppercase` を使わない
- 角丸は 6px（タグのみ `999px`、About の写真のみ 8px）。コンテンツ最大幅 880px、左右余白 32px（768px 以下は 20px）
- アイコンは `lucide-react`、`size={16}` `strokeWidth={2}`。GitHub / Wantedly は既存 SVG パスを `currentColor` で流用
- `content.js` の文言・`skills[].tags`・`profile.interests` の値は変更しない（本人が後で直す）
- インデントはスペース2つ、コメントは日本語
- このプロジェクトにはテストフレームワークがない。各タスクの確認は `npm run lint` と `npm run build` の成功、`grep` による禁止パターンの不在、Playwright（MCP）でのブラウザ確認で行う

## Review Focus

1. **初回訪問でダーク設定の OS** → 最初の描画からダーク表示で、白いちらつきがない（Task 2 で、`prefers-color-scheme: dark` をエミュレートし、リロード直後の `data-theme` を確認する）
2. **`localStorage` が使えない環境（プライベートモードなど）** → 例外を出さずに OS 設定に従い、ボタンでの切り替えも動く（Task 2 で `localStorage.setItem` を throw させて確認する）
3. **サムネイル未設定、または画像パスが 404** → 行の高さが崩れず、`ImageOff` のプレースホルダーが出る（Task 6 で、存在しないパスを一時的に指定して確認する）
4. **スマホ幅（375px）** → 横スクロールが出ない。About と Projects が縦積みになり、Nav は名前とテーマボタンだけになる（Task 8 で `scrollWidth <= clientWidth` を確認する）
5. **ダークモードでのブランド SVG とアイコン** → GitHub / Wantedly のアイコンが背景に埋もれない（`currentColor` を使う）（Task 7 でダーク時のスクリーンショットを確認する）

---

### Task 0: 作業ブランチと準備

**Files:**
- Modify: `.gitignore`
- Commit: `docs/superpowers/specs/2026-11-09-portfolio-redesign-design.md`, `docs/superpowers/plans/2026-11-09-portfolio-redesign.md`

- [ ] **Step 1:** `git switch -c feature/redesign-calm` を実行する（main で直接作業しない）
- [ ] **Step 2:** `.gitignore` の末尾に `.superpowers/` を追加する
- [ ] **Step 3:** `npm install lucide-react` を実行する。`package.json` の dependencies に `lucide-react` が入ったことを確認する
- [ ] **Step 4:** `npm run build` を実行する。Expected: 成功（改修前の状態で build が通ることを確認する）
- [ ] **Step 5:** コミットする

```bash
git add .gitignore package.json package-lock.json docs/superpowers
git commit -m "ポートフォリオ改修の設計書・計画を追加し、lucide-react を導入"
```

### Task 1: 土台（色・フォント変数、カーソルとフェードインの削除、フッター）

**Files:**
- Modify: `src/styles/global.css`（全面書き換え）
- Modify: `src/App.jsx`
- Modify: `src/App.css`（`global.css` と重複しているフッター定義をここに一本化する）
- Modify: `index.html`

**Interfaces:**
- Produces: CSS 変数 `--bg` `--bg-soft` `--text` `--text-sub` `--border` `--link` `--font-body` `--font-heading`、クラス `.container`（最大幅 880px・中央寄せ・左右余白）、`.section-title`（20〜22px 太字）、`.btn-primary` / `.btn-outline`（既存クラス名を維持）。`[data-theme="dark"]` セレクタでダーク値に切り替わる

- [ ] **Step 1:** `global.css` を書き換える
  - 変数（spec 4.1 の値、`color-scheme: light` / `dark` を含む）、フォント変数、リセット、`body`、`section`（上下 56〜72px、下に 1px 線）、`.container`、`.section-title`、ボタン2種を定義する
  - 削除するもの: `.section-label`、`.fade-in`、`.cursor`、`.cursor-trail`、`@keyframes pulse`、スクロールバーの装飾、`cursor: none`、フッター定義
- [ ] **Step 2:** `App.jsx` から `cursorRef` / `trailRef`、2つの `useEffect`、カーソル用の `div` を削除する。`scrollTo(id: string): void` は残し、`window.matchMedia('(prefers-reduced-motion: reduce)').matches` が true のときは `behavior: 'auto'` にする
- [ ] **Step 3:** フッターを `<footer className="footer"><div className="container">© 2026 Enomoto Kazuto</div></footer>` にし、`App.css` に定義を一本化する
- [ ] **Step 4:** `index.html` の `<title>` を `Karuhito's portfolio` にする
- [ ] **Step 5:** 確認する
  - Run: `npm run lint && npm run build` → Expected: エラーなし
  - Run: `grep -rnE "cursor|fade-in|@keyframes|box-shadow|gradient|uppercase" src/styles src/App.jsx src/App.css` → Expected: 出力なし
- [ ] **Step 6:** コミットする: `git commit -am "土台のスタイルを落ち着いた配色に変更し、カーソル演出とフェードインを削除"`

（この時点では各コンポーネントの CSS に旧い装飾が残っているため、見た目が崩れていてよい）

### Task 2: テーマ切り替え

**Files:**
- Create: `src/theme.js`
- Create: `src/components/ThemeToggle.jsx`
- Modify: `index.html`（`<head>` にインラインスクリプトを追加する）

**Interfaces:**
- Produces:
  - `src/theme.js`: `export function getCurrentTheme(): 'light' | 'dark'`（`document.documentElement.dataset.theme` を読む）、`export function setTheme(theme: 'light' | 'dark'): void`（`data-theme` を設定し、`localStorage.setItem('theme', theme)` を try/catch で囲んで保存する）
  - `ThemeToggle`（props なしの default export）。ライト時は `Moon`、ダーク時は `Sun` を表示し、`aria-label` は「ダークモードに切り替え」/「ライトモードに切り替え」

- [ ] **Step 1:** `index.html` の `<head>` にインラインスクリプトを置く。`localStorage.getItem('theme')` が `'light'` か `'dark'` ならそれを、それ以外なら `matchMedia('(prefers-color-scheme: dark)')` で決めた値を `document.documentElement.dataset.theme` に設定する。全体を try/catch で囲み、例外時は OS 設定の値を使う
- [ ] **Step 2:** `src/theme.js` を実装する
- [ ] **Step 3:** `ThemeToggle.jsx` を実装する（`useState(getCurrentTheme)` で初期化し、クリックで `setTheme` を呼んでから state を更新する）。枠線 1px・角丸 6px の小さなボタンにする
- [ ] **Step 4:** `npm run dev` を起動し、Playwright で確認する
  - `browser_emulate_media` で `colorScheme: 'dark'` を指定し、`localStorage.clear()` してからリロードする → `document.documentElement.dataset.theme === 'dark'`
  - ボタンをクリックする → `'light'` になり、`localStorage.getItem('theme') === 'light'`。リロード後も `'light'` のまま
  - `browser_evaluate` で `Storage.prototype.setItem = () => { throw new Error() }` を入れてからクリックする → コンソールにエラーがなく、表示は切り替わる
- [ ] **Step 5:** `npm run lint && npm run build` を実行し、コミットする: `"ライト/ダークのテーマ切り替えを追加"`

（ThemeToggle を画面に置くのは Task 3）

### Task 3: Nav と Hero

**Files:**
- Modify: `src/components/Nav.jsx`, `src/components/Nav.css`
- Modify: `src/components/Hero.jsx`, `src/components/Hero.css`
- Modify: `src/data/content.js`（`profile.stats` を削除する）

**Interfaces:**
- Consumes: `ThemeToggle`（Task 2）、`.container` / `.btn-primary` / `.btn-outline`（Task 1）

- [ ] **Step 1:** Nav を実装する
  - 上部固定、背景 `--bg`、下に 1px 線を引く。左に `Enomoto Kazuto`（`--font-heading`・太字）、右に日本語リンクと `ThemeToggle` を置く
  - リンクは `[{ id: 'about', label: '自己紹介' }, { id: 'skills', label: '技術' }, { id: 'projects', label: '制作物' }, { id: 'experience', label: '経歴' }, { id: 'contact', label: '連絡先' }]`。768px 以下ではリンクを非表示にする
  - Nav 内の重複した `scrollTo` は削除し、App の `scrollTo` を props で受け取る
- [ ] **Step 2:** Hero を実装する
  - h1 に「榎本 和斗」、その下に英字 `Enomoto Kazuto`（小さく `--text-sub`）、既存の肩書き文（`hl` の色付けは外す）、ボタン2つ（「制作物を見る」= `.btn-primary`、「連絡する」= `.btn-outline`）を置く
  - グリッド背景、タグ、数値、`min-height: 100vh` は削除する
- [ ] **Step 3:** `content.js` から `profile.stats` を削除する
- [ ] **Step 4:** 確認する: `npm run lint && npm run build`。Playwright でライト/ダーク両方のスクリーンショットを撮り、モックアップ `current-layout-calm.html` の Nav・Hero と比べる。固定 Nav が Hero の見出しに重ならないこと
- [ ] **Step 5:** コミットする: `"Nav と Hero を落ち着いたデザインに変更"`

### Task 4: About

**Files:**
- Modify: `src/components/About.jsx`, `src/components/About.css`

- [ ] **Step 1:** ターミナル表示を削除し、`dl` で 所在地（`profile.location`）/ 主な言語（`profile.languages.join(', ')`）/ 学習中（`profile.interests.join(', ')`）を表示する
- [ ] **Step 2:** 写真を角丸 8px、220px 四方、1px 枠線にする。`photo-glow` / `photo-ring` は削除する。読み込みに失敗したら `useState` のフラグで `ImageOff` のプレースホルダーに切り替える（現行の DOM 直接操作の `onError` はやめる）
- [ ] **Step 3:** 2カラム（`1fr 220px`）にし、768px 以下では1カラムにする
- [ ] **Step 4:** `npm run lint && npm run build`、Playwright でライト/ダークを確認し、コミットする: `"About のターミナル表示を削除し、写真を角丸四角に変更"`

### Task 5: Skills

**Files:**
- Modify: `src/components/Skills.jsx`, `src/components/Skills.css`
- Modify: `src/data/content.js`（`skills`）

**Interfaces:**
- Produces: `skills[].icon` は `'Server' | 'Database' | 'Code'` の文字列。`Skills.jsx` 内で `const skillIcons = { Server, Database, Code }` から引く

- [ ] **Step 1:** `content.js` の `skills` を バックエンド（`icon: 'Server'`）→ データベース（`'Database'`）→ フロントエンド（`'Code'`）の順に並べ替える。`title` と `tags` は変えない。コメントアウトされたブロックは削除する
- [ ] **Step 2:** `Skills.jsx` でアイコンを描画する。見出し行にアイコンとタイトルを並べ、タグは pill 形にする。カード（1px 枠線・角丸 6px・影なし）のグリッドは維持する
- [ ] **Step 3:** `grep -n "🖥️\|⚙️\|🗄️" src -r` → Expected: 出力なし
- [ ] **Step 4:** `npm run lint && npm run build`、Playwright で確認し、コミットする: `"技術スタックのアイコンを Lucide に変更し、バックエンドを先頭に並べ替え"`

### Task 6: Projects（サムネイル）

**Files:**
- Create: `src/components/ProjectThumbnail.jsx`
- Modify: `src/components/Projects.jsx`, `src/components/Projects.css`

**Interfaces:**
- Produces: `ProjectThumbnail({ src?: string, alt: string })`。`src` が falsy、または `onError` が起きたら `ImageOff` のプレースホルダーを返す。`projects[].thumbnail` は任意の文字列（`/projects/xxx.png`）で、今回は未設定のままにする

- [ ] **Step 1:** `ProjectThumbnail.jsx` を実装する。`aspect-ratio: 16 / 10`、`object-fit: cover`、1px 枠線、角丸 6px、背景 `--bg-soft`。`<img>` に `alt` と `loading="lazy"` をつける
- [ ] **Step 2:** `Projects.jsx` の各行を `サムネイル(200px) | 本文 | リンク` の3カラムにする。連番は削除する。リンクは「GitHub」+ `ArrowUpRight`、`target="_blank" rel="noreferrer"` にする。768px 以下ではサムネイル → 本文 → リンクの縦積みにする
- [ ] **Step 3:** Playwright で確認する
  - 全行でプレースホルダーが出る
  - 一時的に1件へ `thumbnail: '/projects/not-found.png'` を入れても、プレースホルダーが出て行の高さが揃う。確認後はその値を戻す
- [ ] **Step 4:** `npm run lint && npm run build` を実行し、コミットする: `"制作物にサムネイル枠を追加"`

### Task 7: Experience と Contact

**Files:**
- Modify: `src/components/Experience.jsx`, `src/components/Experience.css`
- Modify: `src/components/Contact.jsx`, `src/components/Contact.css`

- [ ] **Step 1:** Experience を `日付(150px, --text-sub) | title(太字) / org(--text-sub) / desc` の2カラムにする。768px 以下では縦積みにする。`.section-label` と `.fade-in` を削除する
- [ ] **Step 2:** Contact は見出し・本文をそのまま残す。リンクを `.btn-outline` 相当の枠線ボタン3つ（`Mail` アイコン + `Email`、GitHub SVG + `GitHub`、Wantedly SVG + `Wantedly`）にする。ブランド SVG は `fill="currentColor"` にする
- [ ] **Step 3:** Playwright でダーク時のスクリーンショットを撮り、GitHub / Wantedly アイコンが背景に埋もれていないことを確認する
- [ ] **Step 4:** `npm run lint && npm run build` を実行し、コミットする: `"Experience と Contact を落ち着いたデザインに変更"`

### Task 8: 全体確認

- [ ] **Step 1:** 禁止パターンが残っていないか確認する
  - Run: `grep -rnE "transition|animation|@keyframes|box-shadow|gradient|uppercase|fade-in|section-label|--accent|#00d9ff|#7c3aed" src`
  - Expected: 出力なし
- [ ] **Step 2:** `grep -rn "font-family" src` → Expected: `global.css` の変数定義と `body` / 見出しの参照だけ
- [ ] **Step 3:** Playwright で 1280px / 375px × ライト / ダークの4枚のスクリーンショットを撮る。375px で `document.documentElement.scrollWidth <= document.documentElement.clientWidth` を確認する
- [ ] **Step 4:** `npm run lint && npm run build` → Expected: エラーなし
- [ ] **Step 5:** スクリーンショットを本人に見せ、確認を取る
