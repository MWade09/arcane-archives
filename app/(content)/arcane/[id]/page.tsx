import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ARCANE_ENTRIES, CATEGORIES, findEntry } from '@/lib/arcane/data'
import ReadingTracker from '@/app/components/ReadingTracker'
import SmartSummarizer from '@/app/components/SmartSummarizer'

interface Props {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const entry = findEntry(id)
  if (!entry) return { title: 'Not Found' }
  return {
    title: `${entry.title} — Arcane Archive`,
    description: entry.summary,
  }
}

export async function generateStaticParams() {
  return ARCANE_ENTRIES.map(e => ({ id: e.id }))
}

export default async function ArcaneEntryPage({ params }: Props) {
  const { id } = await params
  const entry = findEntry(id)
  if (!entry) notFound()

  const cat = CATEGORIES[entry.category]
  const related = entry.related
    .map(rid => findEntry(rid))
    .filter(Boolean)

  const statusLabel =
    entry.status === 'complete' ? 'Complete'
    : entry.status === 'in-progress' ? 'In Progress'
    : 'Stub'

  return (
    <>
      <ReadingTracker />
      {/* ── BREADCRUMB NAV ───────────────────────────────────── */}
      <nav className="arc-entry-nav" aria-label="Breadcrumb">
        <Link href="/" className="arc-nav-home">The Archive</Link>
        <span className="arc-nav-sep" aria-hidden="true">/</span>
        <Link href="/arcane" className="arc-nav-home">Arcane Archive</Link>
        <span className="arc-nav-sep" aria-hidden="true">/</span>
        <span className="arc-nav-title">{entry.title}</span>
      </nav>

      <article className="arc-entry">
        {/* ── ENTRY HEADER ───────────────────────────────────── */}
        <header className="arc-entry__header container">
          <span
            className="arc-entry__sigil"
            aria-hidden="true"
            style={{ color: cat.color }}
          >
            {entry.sigil}
          </span>
          <span
            className="arc-entry__badge"
            style={{ color: cat.color }}
          >
            {cat.label}
          </span>
          <span className={`arc-entry__badge arc-status arc-status--${entry.status}`}>
            {statusLabel}
          </span>
          <h1 className="arc-entry__title">{entry.title}</h1>
          <p className="arc-entry__tagline">{entry.tagline}</p>
        </header>

        <div className="arc-entry__body container">
          {/* ── AI SUMMARY ───────────────────────────────────── */}
          <SmartSummarizer />

          {/* ── SUMMARY ──────────────────────────────────────── */}
          <p className="arc-entry__summary">{entry.summary}</p>

          {/* ── CONTENT ──────────────────────────────────────── */}
          {entry.content ? (
            <div
              className="arc-content"
              dangerouslySetInnerHTML={{ __html: entry.content }}
            />
          ) : (
            <div className="arc-content arc-content--pending">
              <div className="arc-pending">
                <span style={{ display: 'block', fontSize: '2.5rem', marginBottom: '1rem', opacity: 0.3 }} aria-hidden="true">
                  {entry.sigil}
                </span>
                Full article for <strong>{entry.title}</strong> is being written.
                Check back soon, or explore related entries below.
              </div>
            </div>
          )}

          {/* ── SOURCES ──────────────────────────────────────── */}
          {entry.sources.length > 0 && (
            <section className="arc-sources">
              <h2 className="arc-section-heading">Sources</h2>
              <ul className="arc-sources__list">
                {entry.sources.map((src, i) => (
                  <li key={i}>
                    {typeof src === 'string' ? (
                      <span>{src}</span>
                    ) : (
                      <a href={src.url} target="_blank" rel="noopener noreferrer">
                        {src.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* ── RELATED ──────────────────────────────────────── */}
          {related.length > 0 && (
            <section className="arc-related">
              <h2 className="arc-section-heading">Related Entries</h2>
              <div className="arc-related__grid">
                {related.map(rel => rel && (
                  <Link key={rel.id} href={`/arcane/${rel.id}`} className="arc-related__card">
                    <span
                      className="arc-related__sigil"
                      aria-hidden="true"
                      style={{ color: CATEGORIES[rel.category].color }}
                    >
                      {rel.sigil}
                    </span>
                    <span>{rel.title}</span>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </article>

      {/* ── FOOTER ───────────────────────────────────────────── */}
      <footer className="site-footer">
        <div className="container">
          <span className="sigil large" aria-hidden="true">✦</span>
          <nav className="footer-stories" aria-label="Other sections">
            <p className="footer-stories__label">Explore Further</p>
            <Link href="/arcane" className="footer-stories__link">
              <span className="footer-stories__sigil" aria-hidden="true">✦</span>
              <span>All Arcane Entries</span>
            </Link>
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
