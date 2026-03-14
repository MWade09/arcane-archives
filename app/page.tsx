import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Archive',
  description:
    'A platform for deep esoteric research — explore Saturn, the Arcane Archive, and build your own knowledge base.',
}

export default function HomePage() {
  return (
    <div className="landing">
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="landing-hero">
        <p className="landing-eyebrow">A Living Repository of Esoteric Knowledge</p>
        <div className="landing-sigil" aria-hidden="true">⊕</div>
        <h1 className="landing-title">The Archive</h1>
        <p className="landing-subtitle">
          Deep explorations of myth, symbol, and philosophy — from the Saturn archetype to
          the hermetic inheritance. Read, annotate, collect, and repurpose what you find.
        </p>
        <div className="landing-cta-row">
          <Link href="/saturn" className="btn btn--primary">Begin Reading</Link>
          <Link href="/arcane" className="btn btn--ghost">Arcane Archive</Link>
        </div>
      </section>

      {/* ── PORTAL GRID ──────────────────────────────────────────── */}
      <div className="landing-portal-grid">
        <Link href="/saturn" className="portal-card">
          <span className="portal-card__sigil" aria-hidden="true">♄</span>
          <span className="portal-card__label">Long-Form Study</span>
          <h2 className="portal-card__title">Saturn — The Celestial King</h2>
          <p className="portal-card__desc">
            A fourteen-chapter symbolic and philosophical exploration of Saturn: from the Golden Age
            and Hyperborea to alchemy, the Black Cube, and the spiritual quest for the primordial self.
          </p>
          <span className="portal-card__arrow" aria-hidden="true">→</span>
        </Link>

        <Link href="/arcane" className="portal-card">
          <span className="portal-card__sigil" aria-hidden="true">✦</span>
          <span className="portal-card__label">Reference Directory</span>
          <h2 className="portal-card__title">The Arcane Archive</h2>
          <p className="portal-card__desc">
            A growing directory of esoteric traditions, foundational figures, primary texts,
            symbols, and core concepts of the Western hermetic inheritance.
          </p>
          <span className="portal-card__arrow" aria-hidden="true">→</span>
        </Link>

        <Link href="/dashboard" className="portal-card">
          <span className="portal-card__sigil" aria-hidden="true">◈</span>
          <span className="portal-card__label">Your Workspace</span>
          <h2 className="portal-card__title">Dashboard</h2>
          <p className="portal-card__desc">
            Take notes while you read, bookmark passages, organize findings into collections,
            and build your own research archive from what you discover here.
          </p>
          <span className="portal-card__arrow" aria-hidden="true">→</span>
        </Link>
      </div>

      {/* ── AUTH CALL-OUT ─────────────────────────────────────────── */}
      <section className="landing-auth">
        <h2>Save Your Research</h2>
        <p>
          Create a free account to unlock note-taking, bookmarks, and your personal
          knowledge dashboard — all linked to what you read here.
        </p>
        <div className="landing-auth-row">
          <Link href="/signup" className="btn btn--primary">Create Account</Link>
          <Link href="/login" className="btn btn--ghost">Sign In</Link>
        </div>
      </section>

      <footer className="landing-footer">
        <p>
          The Archive · A platform for esoteric study · Entries added as research is sourced
          and verified
        </p>
      </footer>
    </div>
  )
}
