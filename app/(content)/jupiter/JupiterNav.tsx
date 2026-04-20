'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

const CHAPTER_LABELS: Record<string, string> = {
  'jup-intro':      'Introduction',
  'jup-war':        'I — The War of Thrones',
  'jup-crown':      'II — The Cosmic Crown',
  'jup-architects': 'III — The Architects of Order',
  'jup-throne':     'IV — The Throne Beyond Thrones',
  'jup-sovereign':  'V — The Eternal Sovereign',
}

const CIRCUMFERENCE = 75.4 // 2π × 12

export default function JupiterNav() {
  const [visible, setVisible]           = useState(false)
  const [progress, setProgress]         = useState(0)
  const [chapterLabel, setChapterLabel] = useState('')
  const sectionsRef = useRef<NodeListOf<Element> | null>(null)

  useEffect(() => {
    sectionsRef.current = document.querySelectorAll('section[id]')

    // Scroll-reveal observer
    const revealEls = document.querySelectorAll(
      '.chapter-header, .chapter-body > *, .info-card, .jtriad-item, .architect-item, .sov-pole, .toc-card'
    )
    revealEls.forEach(el => el.classList.add('reveal'))
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const siblings = Array.from(entry.target.parentElement?.querySelectorAll('.reveal') ?? [])
          const idx = siblings.indexOf(entry.target as Element)
          ;(entry.target as HTMLElement).style.transitionDelay = Math.min(idx * 60, 360) + 'ms'
          entry.target.classList.add('is-visible')
          revealObserver.unobserve(entry.target)
        }
      })
    }, { rootMargin: '-8% 0px -8% 0px', threshold: 0.08 })
    revealEls.forEach(el => revealObserver.observe(el))

    // Image loader
    document.querySelectorAll<HTMLImageElement>('.chapter-image img').forEach(img => {
      const tryLoad = () => {
        if (img.naturalWidth > 0) { img.classList.add('is-loaded'); return }
        img.addEventListener('load', () => img.classList.add('is-loaded'))
        img.addEventListener('error', () => {})
      }
      if (img.complete) { tryLoad() } else { img.addEventListener('load', tryLoad) }
    })

    // Smooth anchor scroll
    const NAV_HEIGHT = 56
    const handleAnchorClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest('a[href^="#"]') as HTMLAnchorElement | null
      if (!a) return
      const id = a.getAttribute('href')?.slice(1)
      if (!id) return
      const target = document.getElementById(id)
      if (!target) return
      e.preventDefault()
      const top = target.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT - 24
      window.scrollTo({ top, behavior: 'smooth' })
    }
    document.addEventListener('click', handleAnchorClick)

    // Scroll handler
    const onScroll = () => {
      const scrolled    = window.scrollY
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress(Math.min(scrolled / totalHeight, 1))

      const heroEl    = document.querySelector('.hero') as HTMLElement | null
      const heroBottom = heroEl ? heroEl.offsetHeight * 0.6 : 400
      setVisible(scrolled > heroBottom)

      // Chapter tracking
      const sections = sectionsRef.current
      if (!sections) return
      let current = sections[0]
      sections.forEach(section => {
        const rect = section.getBoundingClientRect()
        if (rect.top <= NAV_HEIGHT + 40) current = section
      })
      if (current) setChapterLabel(CHAPTER_LABELS[current.id] ?? '')
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => {
      window.removeEventListener('scroll', onScroll)
      document.removeEventListener('click', handleAnchorClick)
      revealObserver.disconnect()
    }
  }, [])

  const strokeDashoffset = CIRCUMFERENCE * (1 - progress)

  return (
    <nav className={`site-nav${visible ? ' is-visible' : ''}`} aria-label="Site navigation">
      <Link href="/jupiter#top" className="site-nav__brand">♃ Jupiter</Link>
      <div className="site-nav__right">
        <span className="site-nav__chapter" aria-live="polite">{chapterLabel}</span>
        <svg className="progress-ring" viewBox="0 0 26 26" aria-hidden="true">
          <circle className="progress-ring__track" cx="13" cy="13" r="12" />
          <circle
            className="progress-ring__fill"
            cx="13" cy="13" r="12"
            style={{ strokeDashoffset }}
          />
        </svg>
      </div>
    </nav>
  )
}
