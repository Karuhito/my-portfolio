/**
 * 現在のテーマを返す。data-theme が dark 以外なら light とみなす。
 * @returns {'light'|'dark'}
 */
export function getCurrentTheme() {
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light'
}

/**
 * テーマを適用して localStorage に保存する。
 * localStorage が使えない環境でも例外を出さない。
 * @param {'light'|'dark'} theme
 * @returns {void}
 */
export function setTheme(theme) {
  document.documentElement.dataset.theme = theme
  try {
    localStorage.setItem('theme', theme)
  } catch {
    // 保存できなくても表示の切り替えは続ける
  }
}
