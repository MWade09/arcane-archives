import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Planetary Archives — The Archive',
  description:
    'Deep symbolic and esoteric explorations of the classical planets — Saturn, Jupiter, and Mars. Each entry is a multi-chapter excavation of myth, archetype, and hermetic tradition.',
}

const planets = [
  {
    href: '/saturn',
    sigil: '♄',
    label: 'Fourteen Chapters',
    title: 'Saturn',
    subtitle: 'The Celestial King',
    description:
      'From the Golden Age and Hyperborea to alchemy, the Black Cube, and the spiritual quest for the primordial self. The most comprehensive study in the Archive.',
    color: '#c8a84a',
  },
  {
    href: '/jupiter',
    sigil: '♃',
    label: 'Six Chapters',
    title: 'Jupiter',
    subtitle: 'The Cosmic Architect',
    description:
      'The lightning bearer, the law-giver, the sky father. Jupiter as the principle of expansion, ordered cosmos, and celestial kingship in esoteric tradition.',
    color: '#7aabdc',
  },
  {
    href: '/mars',
    sigil: '♂',
    label: 'Seven Chapters',
    title: 'Mars',
    subtitle: 'The Red Wanderer',
    description:
      'Warrior, iron, blood, and the mystery of the red star. Mars as the initiatic force of conflict, transformation, and the sovereign will to overcome.',
    color: '#d06040',
  },
]

export default function PlanetsPage() {
  return (
    <div className="planets-page">

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="planets-hero">
        <p className="planets-eyebrow">Long-Form Esoteric Study</p>
        <h1 className="planets-title">The Planetary Archives</h1>
        <p className="planets-subtitle">
          The classical planets are not merely celestial bodies — they are principles, archetypes,
          and governors of the inner and outer cosmos. Each entry is a deep symbolic excavation
          drawn from myth, alchemy, and hermetic tradition.
        </p>
        <Link href="/" className="planets-back">← Return to The Archive</Link>
      </section>

      {/* ── Planet Grid ───────────────────────────────────────── */}
      <div className="planets-grid">
        {planets.map((planet) => (
          <Link
            key={planet.href}
            href={planet.href}
            className="planet-card"
            style={{ '--planet-clr': planet.color } as React.CSSProperties}
          >
            <div className="planet-card__orb" aria-hidden="true">
              {planet.sigil}
            </div>
            <div className="planet-card__body">
              <p className="planet-card__label">{planet.label}</p>
              <h2 className="planet-card__title">{planet.title}</h2>
              <p className="planet-card__subtitle">{planet.subtitle}</p>
              <p className="planet-card__desc">{planet.description}</p>
            </div>
            <span className="planet-card__cta" aria-hidden="true">Begin Study →</span>
          </Link>
        ))}
      </div>

      <footer className="planets-footer">
        <p>More planets added as research is sourced and verified · <Link href="/arcane" className="planets-footer__link">Browse the Arcane Archive</Link></p>
      </footer>

    </div>
  )
}
