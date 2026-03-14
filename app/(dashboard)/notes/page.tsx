'use client'

import { useEffect, useState, useCallback } from 'react'
import { createClient } from '@/lib/supabase/client'

interface Note {
  id: string
  title: string
  content: string
  source_type: string | null
  source_id: string | null
  updated_at: string
  created_at: string
}

export default function NotesPage() {
  const [notes, setNotes]         = useState<Note[]>([])
  const [active, setActive]       = useState<Note | null>(null)
  const [title, setTitle]         = useState('')
  const [content, setContent]     = useState('')
  const [saving, setSaving]       = useState(false)
  const [loading, setLoading]     = useState(true)
  const [isNew, setIsNew]         = useState(false)

  const supabase = createClient()

  const loadNotes = useCallback(async () => {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return
    const { data } = await supabase
      .from('notes')
      .select('*')
      .eq('user_id', user.id)
      .order('updated_at', { ascending: false })
    setNotes(data ?? [])
    setLoading(false)
  }, [supabase])

  useEffect(() => { loadNotes() }, [loadNotes])

  function openNote(note: Note) {
    setActive(note)
    setTitle(note.title)
    setContent(note.content)
    setIsNew(false)
  }

  function newNote() {
    setActive(null)
    setTitle('')
    setContent('')
    setIsNew(true)
  }

  async function save() {
    setSaving(true)
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) { setSaving(false); return }

    if (isNew || !active) {
      const { data } = await supabase
        .from('notes')
        .insert({ user_id: user.id, title: title || 'Untitled', content })
        .select()
        .single()
      if (data) {
        setNotes(prev => [data, ...prev])
        setActive(data)
        setIsNew(false)
      }
    } else {
      const { data } = await supabase
        .from('notes')
        .update({ title: title || 'Untitled', content, updated_at: new Date().toISOString() })
        .eq('id', active.id)
        .select()
        .single()
      if (data) {
        setNotes(prev => prev.map(n => n.id === data.id ? data : n))
        setActive(data)
      }
    }
    setSaving(false)
  }

  async function deleteNote(id: string) {
    await supabase.from('notes').delete().eq('id', id)
    setNotes(prev => prev.filter(n => n.id !== id))
    if (active?.id === id) {
      setActive(null)
      setTitle('')
      setContent('')
      setIsNew(false)
    }
  }

  return (
    <div className="dash-page notes-page">
      <div className="notes-layout">
        {/* ── NOTE LIST ────────────────────────────────────────── */}
        <aside className="notes-list-panel">
          <div className="notes-list-header">
            <h1 className="dash-page-title">Notes</h1>
            <button className="btn btn--primary btn--sm" onClick={newNote}>+ New</button>
          </div>

          {loading ? (
            <p className="notes-loading">Loading…</p>
          ) : notes.length === 0 && !isNew ? (
            <div className="dash-empty">
              <p>No notes yet.</p>
            </div>
          ) : (
            <ul className="notes-list">
              {isNew && (
                <li className="notes-list__item notes-list__item--active">
                  <button className="notes-list__btn" disabled>
                    <span className="notes-list__title">{title || 'New note…'}</span>
                    <span className="notes-list__meta">Just now</span>
                  </button>
                </li>
              )}
              {notes.map(note => (
                <li
                  key={note.id}
                  className={`notes-list__item${active?.id === note.id ? ' notes-list__item--active' : ''}`}
                >
                  <button className="notes-list__btn" onClick={() => openNote(note)}>
                    <span className="notes-list__title">{note.title || 'Untitled'}</span>
                    <span className="notes-list__meta">
                      {new Date(note.updated_at).toLocaleDateString()}
                    </span>
                  </button>
                  <button
                    className="notes-list__delete"
                    aria-label={`Delete ${note.title}`}
                    onClick={() => deleteNote(note.id)}
                  >
                    ×
                  </button>
                </li>
              ))}
            </ul>
          )}
        </aside>

        {/* ── EDITOR ───────────────────────────────────────────── */}
        <section className="notes-editor-panel">
          {active || isNew ? (
            <>
              <div className="notes-editor-toolbar">
                <input
                  type="text"
                  className="notes-title-input"
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  placeholder="Note title…"
                  aria-label="Note title"
                />
                <button
                  className="btn btn--primary btn--sm"
                  onClick={save}
                  disabled={saving}
                >
                  {saving ? 'Saving…' : 'Save'}
                </button>
              </div>
              <textarea
                className="notes-textarea"
                value={content}
                onChange={e => setContent(e.target.value)}
                placeholder="Begin writing…"
                aria-label="Note content"
              />
            </>
          ) : (
            <div className="notes-editor-empty">
              <span className="notes-editor-empty__sigil" aria-hidden="true">✏</span>
              <p>Select a note or create a new one.</p>
            </div>
          )}
        </section>
      </div>
    </div>
  )
}
