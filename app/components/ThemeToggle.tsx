'use client'

import { useState, useEffect } from 'react'

type Theme = 'midnight' | 'papyrus' | 'monolith'

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('midnight')
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('archive-theme') as Theme
    if (saved) {
      setTheme(saved)
      document.documentElement.setAttribute('data-theme', saved)
    }
  }, [])

  const changeTheme = (newTheme: Theme) => {
    setTheme(newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('archive-theme', newTheme)
    setIsOpen(false)
  }

  const themes: { id: Theme, label: string, icon: string }[] = [
    { id: 'midnight', label: 'Midnight', icon: '🌙' },
    { id: 'papyrus',  label: 'Papyrus',  icon: '📜' },
    { id: 'monolith', label: 'Monolith', icon: '🔲' },
  ]

  return (
    <div className="theme-toggle">
      <button 
        className="theme-toggle__trigger" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Change Theme"
        title="Reading Modes"
      >
        {themes.find(t => t.id === theme)?.icon}
      </button>

      {isOpen && (
        <div className="theme-toggle__menu">
          {themes.map(t => (
            <button 
              key={t.id} 
              className={`theme-toggle__option ${theme === t.id ? 'is-active' : ''}`}
              onClick={() => changeTheme(t.id)}
            >
              <span className="theme-toggle__icon">{t.icon}</span>
              <span className="theme-toggle__label">{t.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
