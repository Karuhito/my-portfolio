import { useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { getCurrentTheme, setTheme } from '../theme'
import './ThemeToggle.css'

/**
 * ライト/ダークを切り替えるボタン。
 * @returns {JSX.Element}
 */
export default function ThemeToggle() {
  const [theme, setThemeState] = useState(getCurrentTheme)
  const isDark = theme === 'dark'

  const handleClick = () => {
    const nextTheme = isDark ? 'light' : 'dark'
    setTheme(nextTheme)
    setThemeState(nextTheme)
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={handleClick}
      aria-label={isDark ? 'ライトモードに切り替え' : 'ダークモードに切り替え'}
    >
      {isDark ? <Sun size={16} strokeWidth={2} /> : <Moon size={16} strokeWidth={2} />}
    </button>
  )
}
