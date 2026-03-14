import { redirect } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  return (
    <div className="dash-shell">
      {/* ── SIDEBAR ──────────────────────────────────────────── */}
      <aside className="dash-sidebar">
        <div className="dash-sidebar__brand">
          <Link href="/" className="dash-brand-link" aria-label="Back to The Archive">
            <span className="dash-brand-sigil" aria-hidden="true">⊕</span>
            <span className="dash-brand-name">The Archive</span>
          </Link>
        </div>

        <nav className="dash-nav" aria-label="Dashboard navigation">
          <Link href="/dashboard"   className="dash-nav__link">
            <span className="dash-nav__icon" aria-hidden="true">◈</span> Overview
          </Link>
          <Link href="/notes"       className="dash-nav__link">
            <span className="dash-nav__icon" aria-hidden="true">✏</span> Notes
          </Link>
          <Link href="/bookmarks"   className="dash-nav__link">
            <span className="dash-nav__icon" aria-hidden="true">⊳</span> Bookmarks
          </Link>
        </nav>

        <div className="dash-sidebar__divider" aria-hidden="true" />

        <nav className="dash-nav dash-nav--content" aria-label="Content navigation">
          <p className="dash-nav__group-label">Content</p>
          <Link href="/saturn"  className="dash-nav__link">
            <span className="dash-nav__icon" aria-hidden="true">♄</span> Saturn
          </Link>
          <Link href="/arcane"  className="dash-nav__link">
            <span className="dash-nav__icon" aria-hidden="true">✦</span> Arcane Archive
          </Link>
        </nav>

        <div className="dash-sidebar__footer">
          <p className="dash-sidebar__email">{user.email}</p>
          <form action="/api/auth/signout" method="post">
            <button type="submit" className="btn btn--ghost btn--sm dash-signout">
              Sign Out
            </button>
          </form>
        </div>
      </aside>

      {/* ── MAIN ─────────────────────────────────────────────── */}
      <main className="dash-main">
        {children}
      </main>
    </div>
  )
}
