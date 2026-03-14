import { redirect } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'

export default async function BookmarksPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const { data: bookmarks } = await supabase
    .from('bookmarks')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false })

  async function deleteBookmark(formData: FormData) {
    'use server'
    const id = formData.get('id') as string
    const supabase = await createClient()
    await supabase.from('bookmarks').delete().eq('id', id)
  }

  const byType = (bookmarks ?? []).reduce<Record<string, typeof bookmarks>>((acc, bm) => {
    if (!bm) return acc
    const type = bm.content_type as string
    if (!acc[type]) acc[type] = []
    acc[type]!.push(bm)
    return acc
  }, {})

  const typeLabels: Record<string, string> = {
    arcane: 'Arcane Archive',
    saturn: 'Saturn Article',
    article: 'Article',
  }

  return (
    <div className="dash-page">
      <header className="dash-page-header">
        <h1 className="dash-page-title">Bookmarks</h1>
        <p className="dash-page-subtitle">Saved content from the archive.</p>
      </header>

      {(!bookmarks || bookmarks.length === 0) ? (
        <div className="dash-empty dash-empty--centered">
          <span className="dash-empty__sigil" aria-hidden="true">⊳</span>
          <p>No bookmarks yet.</p>
          <Link href="/arcane" className="btn btn--ghost">Explore the archive →</Link>
        </div>
      ) : (
        <div className="bookmarks-layout">
          {Object.entries(byType).map(([type, items]) => (
            <section key={type} className="bookmarks-group">
              <h2 className="bookmarks-group__heading">
                {typeLabels[type] ?? type}
              </h2>
              <ul className="bookmarks-list">
                {(items ?? []).map(bm => bm && (
                  <li key={bm.id} className="bookmark-item">
                    <Link
                      href={
                        bm.content_type === 'arcane'
                          ? `/arcane/${bm.content_id}`
                          : `/${bm.content_type}`
                      }
                      className="bookmark-item__link"
                    >
                      <span className="bookmark-item__title">{bm.content_title}</span>
                      <span className="bookmark-item__date">
                        {new Date(bm.created_at).toLocaleDateString()}
                      </span>
                    </Link>
                    <form action={deleteBookmark} className="bookmark-item__delete-form">
                      <input type="hidden" name="id" value={bm.id} />
                      <button
                        type="submit"
                        className="bookmark-item__delete"
                        aria-label={`Remove bookmark: ${bm.content_title}`}
                      >
                        ×
                      </button>
                    </form>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      )}
    </div>
  )
}
