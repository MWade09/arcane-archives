'use client'

import { useState, useMemo, useEffect, useRef } from 'react'
import Link from 'next/link'
import { ARCANE_ENTRIES, CATEGORIES } from '@/lib/arcane/data'

const ALL = 'all'

export default function ArcanePage() {
  const [activeCategory, setActiveCategory] = useState<string>(ALL)
  const [query, setQuery] = useState('')
  const gridRef = useRef<HTMLUListElement>(null)

  const filtered = useMemo(() => {
    let list = ARCANE_ENTRIES
    if (activeCategory !== ALL) {
      list = list.filter(e => e.category === activeCategory)
    }
    if (query.trim()) {
      const q = query.toLowerCase()
      list = list.filter(
        e =>
          e.title.toLowerCase().includes(q) ||
          e.summary.toLowerCase().includes(q) ||
          e.tagline.toLowerCase().includes(q),
      )
    }
    return list
  }, [activeCategory, query])

  /* ── Card reveal via IntersectionObserver ─────────────────── */
  useEffect(() => {
    const grid = gridRef.current
    if (!grid) return

    const cards = Array.from(grid.querySelectorAll<HTMLElement>('.arc-card'))
    // Remove is-visible from all so re-filters animate in fresh
    cards.forEach(c => c.classList.remove('is-visible'))

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' },
    )

    // Stagger the observation start so entrance is sequential
    cards.forEach((card, i) => {
      setTimeout(() => observer.observe(card), i * 35)
    })

    return () => observer.disconnect()
  }, [filtered])

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <header className="arc-hero">
        <div className="arc-hero__content">
          <Link href="/" className="arc-hero__back">← The Archive</Link>
          <span className="arc-hero__sigil" aria-hidden="true">✦</span>
          <p className="arc-hero__eyebrow">Reference Directory</p>
          <h1 className="arc-hero__title">The Arcane Archive</h1>
          <p className="arc-hero__subtitle">
            A curated directory of esoteric traditions, figures, texts, symbols, and concepts.
          </p>
        </div>
      </header>

      {/* ── STICKY FILTER BAR ────────────────────────────────── */}
      <div className="arc-filters">
        <div className="container arc-filters-inner">
          <nav className="arc-tab-list" aria-label="Filter by category">
            <button
              className={`arc-tab${activeCategory === ALL ? ' is-active' : ''}`}
              onClick={() => setActiveCategory(ALL)}
            >
              All
            </button>
            {Object.entries(CATEGORIES).map(([key, cat]) => (
              <button
                key={key}
                className={`arc-tab${activeCategory === key ? ' is-active' : ''}`}
                onClick={() => setActiveCategory(key)}
              >
                {cat.label}
              </button>
            ))}
          </nav>
          <div className="arc-filters-right">
            <span className="arc-count" aria-live="polite">
              {filtered.length} of {ARCANE_ENTRIES.length}
            </span>
            <input
              type="search"
              className="arc-search"
              placeholder="Search…"
              value={query}
              onChange={e => setQuery(e.target.value)}
              aria-label="Search arcane entries"
            />
          </div>
        </div>
      </div>

      {/* ── GRID ─────────────────────────────────────────────── */}
      <main className="arc-main">
        <div className="container container--wide">
          {filtered.length === 0 ? (
            <p className="arc-empty">No entries match your search.</p>
          ) : (
            <ul className="arc-grid" ref={gridRef} aria-live="polite">
              {filtered.map(entry => (
                <li key={entry.id}>
                  <Link href={`/arcane/${entry.id}`} className="arc-card">
                    <span
                      className="arc-card__sigil"
                      aria-hidden="true"
                      style={{ color: CATEGORIES[entry.category].color }}
                    >
                      {entry.sigil}
                    </span>
                    <span
                      className="arc-card__badge"
                      style={{ color: CATEGORIES[entry.category].color }}
                    >
                      {CATEGORIES[entry.category].label}
                    </span>
                    <h2 className="arc-card__title">{entry.title}</h2>
                    <p className="arc-card__tagline">{entry.tagline}</p>
                    <span className="arc-card__arrow" aria-hidden="true">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>

      {/* ── FOOTER ───────────────────────────────────────────── */}
      <footer className="site-footer">
        <div className="container">
          <span className="sigil large" aria-hidden="true">✦</span>
          <nav className="footer-stories" aria-label="Other sections">
            <p className="footer-stories__label">Explore Further</p>
            <Link href="/saturn" className="footer-stories__link">
              <span className="footer-stories__sigil" aria-hidden="true">♄</span>
              <span>Saturn — The Celestial King</span>
            </Link>
          </nav>
        </div>
      </footer>
    </>
  )
}
