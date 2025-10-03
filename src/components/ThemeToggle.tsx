import { useState, useEffect } from 'react'
import './ThemeToggle.css'

const ThemeToggle = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.setAttribute('data-theme', savedTheme)
    } else {
      document.documentElement.setAttribute('data-theme', 'dark')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)
  }

  return (
    <nav className="top-navbar">
      <button 
        className="theme-toggle" 
        onClick={toggleTheme} 
        aria-label="Toggle theme"
      >
        <i className={theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun'}></i>
      </button>
    </nav>
  )
}

export default ThemeToggle