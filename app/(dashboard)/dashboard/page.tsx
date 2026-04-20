import { redirect } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import KnowledgeGraph from '@/app/components/KnowledgeGraph'
import ExportButton from '@/app/components/ExportButton'

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const [{ data: notes }, { data: bookmarks }, { data: readingProgress }] = await Promise.all([
    supabase
      .from('notes')
      .select('id, title, updated_at, is_favorite, tags')
      .eq('user_id', user.id)
      .order('updated_at', { ascending: false })
      .limit(5),
    supabase
      .from('bookmarks')
      .select('id, content_title, content_type, content_id, created_at, is_favorite')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false })
      .limit(5),
    supabase
      .from('reading_progress')
      .select('*')
      .eq('user_id', user.id)
      .order('updated_at', { ascending: false })
      .limit(3),
  ])

  function getPathName(path: string) {
    if (path === '/saturn') return 'Saturn — The Celestial King'
    if (path.startsWith('/arcane/')) {
      const id = path.split('/').pop()
      return id?.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()) || 'Archive Entry'
    }
    return 'Research Document'
  }

  return (
    <div className="dash-page">
      <header className="dash-page-header">
        <h1 className="dash-page-title">Overview</h1>
        <p className="dash-page-subtitle">Welcome back to your archive.</p>
        <KnowledgeGraph />
      </header>

      {/* ── STATS ──────────────────────────────────────────────── */}
      <div className="dash-stats-row">
        <div className="dash-stat-card">
          <span className="dash-stat-card__number">{notes?.length ?? 0}</span>
          <span className="dash-stat-card__label">Recent Notes</span>
        </div>
        <div className="dash-stat-card">
          <span className="dash-stat-card__number">{bookmarks?.length ?? 0}</span>
          <span className="dash-stat-card__label">Recent Bookmarks</span>
        </div>
      </div>

      <div className="dash-overview-grid">
        {/* ── RECENT NOTES ──────────────────────────────────────── */}
        <section className="dash-panel">
          <div className="dash-panel__header">
            <h2 className="dash-panel__title">Recent Notes</h2>
            <Link href="/notes" className="dash-panel__action">View all →</Link>
          </div>
          {notes && notes.length > 0 ? (
            <ul className="dash-list">
              {notes.map(note => (
                <li key={note.id} className="dash-list__item">
                  <div className="dash-list__item-content">
                    <Link href={`/notes?id=${note.id}`} className="dash-list__link">
                      <div className="dash-list__title-row">
                        <span className="dash-list__title">{note.title || 'Untitled'}</span>
                        {note.is_favorite && <span className="dash-list__fav">★</span>}
                      </div>
                      <div className="dash-list__meta">
                        {note.tags && note.tags.length > 0 && (
                          <span className="dash-list__tags">
                            {note.tags.slice(0, 2).map((t: string) => `#${t}`).join(' ')} ·{' '}
                          </span>
                        )}
                        {new Date(note.updated_at).toLocaleDateString()}
                      </div>
                    </Link>
                    <ExportButton noteId={note.id} title={note.title} />
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="dash-empty">
              <p>No notes yet.</p>
              <Link href="/notes?new=1" className="btn btn--ghost btn--sm">Write your first note →</Link>
            </div>
          )}
        </section>

        {/* ── RECENT BOOKMARKS ──────────────────────────────────── */}
        <section className="dash-panel">
          <div className="dash-panel__header">
            <h2 className="dash-panel__title">Recent Bookmarks</h2>
            <Link href="/bookmarks" className="dash-panel__action">View all →</Link>
          </div>
          {bookmarks && bookmarks.length > 0 ? (
            <ul className="dash-list">
              {bookmarks.map(bm => (
                <li key={bm.id} className="dash-list__item">
                  <Link
                    href={bm.content_type === 'arcane' ? `/arcane/${bm.content_id}` : `/${bm.content_type}`}
                    className="dash-list__link"
                  >
                    <span className="dash-list__title">{bm.content_title}</span>
                    <span className="dash-list__meta">
                      {bm.content_type} · {new Date(bm.created_at).toLocaleDateString()}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className="dash-empty">
              <p>No bookmarks yet.</p>
              <Link href="/arcane" className="btn btn--ghost btn--sm">Explore the archive →</Link>
            </div>
          )}
        </section>

        {/* ── READING PROGRESS ──────────────────────────────────── */}
        <section className="dash-panel dash-panel--full">
          <div className="dash-panel__header">
            <h2 className="dash-panel__title">Reading in Progress</h2>
          </div>
          {readingProgress && readingProgress.length > 0 ? (
            <div className="dash-progress-grid">
              {readingProgress.map(prog => (
                <div key={prog.id} className="dash-progress-card">
                  <div className="dash-progress-card__info">
                    <h3 className="dash-progress-card__title">{getPathName(prog.path)}</h3>
                    <span className="dash-progress-card__percent">{prog.percentage}%</span>
                  </div>
                  <div className="dash-progress-bar">
                    <div className="dash-progress-bar__fill" style={{ width: `${prog.percentage}%` }} />
                  </div>
                  <div className="dash-progress-card__meta">
                    {prog.last_chapter ? (
                      <span className="dash-progress-card__chapter">Current: {prog.last_chapter.replace('ch-', '').replace(/-/g, ' ')}</span>
                    ) : (
                      <span className="dash-progress-card__chapter">Exploring...</span>
                    )}
                    <Link href={prog.path} className="btn btn--ghost btn--xs">Continue →</Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="dash-empty">
              <p>No active readings tracked yet.</p>
              <Link href="/saturn" className="btn btn--ghost btn--sm">Start reading Saturn →</Link>
            </div>
          )}
        </section>
      </div>
    </div>
  )
}
