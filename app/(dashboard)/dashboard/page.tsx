import { redirect } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const [{ data: notes }, { data: bookmarks }] = await Promise.all([
    supabase
      .from('notes')
      .select('id, title, updated_at')
      .eq('user_id', user.id)
      .order('updated_at', { ascending: false })
      .limit(5),
    supabase
      .from('bookmarks')
      .select('id, content_title, content_type, content_id, created_at')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false })
      .limit(5),
  ])

  return (
    <div className="dash-page">
      <header className="dash-page-header">
        <h1 className="dash-page-title">Overview</h1>
        <p className="dash-page-subtitle">Welcome back to your archive.</p>
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
                  <Link href={`/notes/${note.id}`} className="dash-list__link">
                    <span className="dash-list__title">{note.title || 'Untitled'}</span>
                    <span className="dash-list__meta">
                      {new Date(note.updated_at).toLocaleDateString()}
                    </span>
                  </Link>
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
      </div>
    </div>
  )
}
