import { createClient } from '@/lib/supabase/server'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { autoLinkEsoteric } from '@/lib/notes/autolink'

interface Props {
  params: Promise<{ id: string }>
}

export default async function SharedNotePage({ params }: Props) {
  const { id } = await params
  const supabase = await createClient()

  // Fetch only if is_public = true
  const { data: note, error } = await supabase
    .from('notes')
    .select('*')
    .eq('id', id)
    .single()

  if (error || !note || !note.is_public) {
    notFound()
  }

  return (
    <div className="shared-note-page">
      <nav className="shared-note-nav">
        <Link href="/" className="sigil">✦ The Archive</Link>
        <span className="shared-note-badge">Shared Research Snapshot</span>
      </nav>

      <article className="shared-note container">
        <header className="shared-note__header">
          <div className="shared-note__meta">
            {new Date(note.updated_at).toLocaleDateString()}
            {note.tags && note.tags.length > 0 && (
              <span className="shared-note__tags">
                {" · "}{note.tags.map((t: string) => `#${t}`).join(' ')}
              </span>
            )}
          </div>
          <h1 className="shared-note__title">{note.title}</h1>
        </header>

        <div className="shared-note__content markdown-body">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {autoLinkEsoteric(note.content)}
          </ReactMarkdown>
        </div>

        <footer className="shared-note__footer">
          <p>
            Interested in esoteric research? 
            <Link href="/login"> Join The Archive</Link> to start your own collection.
          </p>
        </footer>
      </article>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .shared-note-page { background: #0a0a0f; min-height: 100vh; color: #ddd5c0; padding-bottom: 5rem; }
        .shared-note-nav { padding: 2rem; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(200,170,90,0.1); }
        .shared-note-badge { font-size: 0.7rem; text-transform: uppercase; color: #c8a84a; border: 1px solid #c8a84a; padding: 0.2rem 0.6rem; border-radius: 4px; }
        .shared-note { margin-top: 4rem; max-width: 800px; margin-inline: auto; }
        .shared-note__header { margin-bottom: 3rem; }
        .shared-note__meta { font-size: 0.85rem; color: #8a7f6a; margin-bottom: 1rem; font-family: sans-serif; }
        .shared-note__title { font-family: 'Cinzel', serif; font-size: 2.5rem; color: #c8a84a; margin: 0; }
        .shared-note__footer { margin-top: 5rem; padding-top: 2rem; border-top: 1px solid rgba(200,170,90,0.1); text-align: center; font-size: 0.9rem; color: #8a7f6a; }
        .shared-note__footer a { color: #c8a84a; text-decoration: underline; }
      `}} />
    </div>
  )
}
