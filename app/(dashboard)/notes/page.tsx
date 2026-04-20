'use client'

import { useEffect, useState, useCallback, useRef } from 'react'
import { useSearchParams } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { autoLinkEsoteric } from '@/lib/notes/autolink'
import ExportButton from '@/app/components/ExportButton'

interface Note {
  id: string
  title: string
  content: string
  source_type: string | null
  source_id: string | null
  tags: string[]
  is_favorite: boolean
  is_public: boolean
  collection_id: string | null
  updated_at: string
  created_at: string
}

interface Collection {
  id: string
  name: string
}

export default function NotesPage() {
  const [notes, setNotes]           = useState<Note[]>([])
  const [collections, setCollections] = useState<Collection[]>([])
  const [active, setActive]         = useState<Note | null>(null)
  
  // Editor state
  const [title, setTitle]           = useState('')
  const [content, setContent]       = useState('')
  const [tags, setTags]             = useState<string[]>([])
  const [isFavorite, setIsFavorite] = useState(false)
  const [collectionId, setCollectionId] = useState<string | null>(null)
  const [isPublic, setIsPublic]     = useState(false)
  
  // UI state
  const [saving, setSaving]         = useState(false)
  const [loading, setLoading]       = useState(true)
  const [isNew, setIsNew]           = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [tagInput, setTagInput]     = useState('')
  const [activeCollection, setActiveCollection] = useState<string | null>(null)
  const [isPreview, setIsPreview]   = useState(false)
  const [isDirty, setIsDirty]       = useState(false)
  const [lastSaved, setLastSaved]   = useState<Date | null>(null)

  const supabase = createClient()
  const searchParams = useSearchParams()
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const loadData = useCallback(async () => {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return

    const [notesRes, collsRes] = await Promise.all([
      supabase
        .from('notes')
        .select('*')
        .eq('user_id', user.id)
        .order('updated_at', { ascending: false }),
      supabase
        .from('collections')
        .select('id, name')
        .eq('user_id', user.id)
        .order('name')
    ])

    const fetchedNotes = notesRes.data ?? []
    setNotes(fetchedNotes)
    setCollections(collsRes.data ?? [])
    setLoading(false)

    // Check for ID or Collection in URL
    const noteId = searchParams.get('id')
    const collId = searchParams.get('collection')
    
    if (noteId) {
      const match = fetchedNotes.find(n => n.id === noteId)
      if (match) openNote(match)
    }
    if (collId) {
      setActiveCollection(collId)
    }
  }, [supabase, searchParams])

  useEffect(() => { loadData() }, [loadData])

  // Track changes
  useEffect(() => {
    if (active || isNew) {
      // Compare current state with active note's state to determine if dirty
      const currentTitle = title;
      const currentContent = content;
      const currentTags = JSON.stringify(tags);
      const currentIsFavorite = isFavorite;
      const currentCollectionId = collectionId;

      const originalTitle = active?.title ?? '';
      const originalContent = active?.content ?? '';
      const originalTags = JSON.stringify(active?.tags ?? []);
      const originalIsFavorite = active?.is_favorite ?? false;
      const originalCollectionId = active?.collection_id ?? null;

      if (currentTitle !== originalTitle ||
          currentContent !== originalContent ||
          currentTags !== originalTags ||
          currentIsFavorite !== originalIsFavorite ||
          currentCollectionId !== originalCollectionId) {
        setIsDirty(true);
      } else {
        setIsDirty(false);
      }
    } else {
      setIsDirty(false); // No active note or new note, so not dirty
    }
  }, [title, content, tags, isFavorite, collectionId, active, isNew]);

  // Auto-save debounce
  useEffect(() => {
    if (!isDirty || saving || !content.trim()) return;
    
    const timer = setTimeout(() => {
      save(true); // Pass true for silent auto-save
    }, 3000);

    return () => clearTimeout(timer);
  }, [isDirty, content, title, tags, isFavorite, collectionId, saving, save]);

  function openNote(note: Note) {
    setActive(note)
    setTitle(note.title)
    setContent(note.content)
    setTags(note.tags || [])
    setIsFavorite(note.is_favorite)
    setCollectionId(note.collection_id)
    setIsPublic(note.is_public || false)
    setIsNew(false)
  }

  function newNote() {
    setActive(null)
    setTitle('')
    setContent('')
    setTags([])
    setIsFavorite(false)
    setCollectionId(null)
    setIsNew(true)
    setIsPreview(false)
  }

  async function save(isAuto = false) {
    if (!isAuto) setSaving(true)
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) { setSaving(false); return }

    const noteData = { 
      user_id: user.id, 
      title: title || 'Untitled', 
      content,
      tags,
      is_favorite: isFavorite,
      collection_id: collectionId,
      is_public: isPublic,
      updated_at: new Date().toISOString()
    }

    if (isNew || !active) {
      const { data } = await supabase
        .from('notes')
        .insert(noteData)
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
        .update(noteData)
        .eq('id', active.id)
        .select()
        .single()
      if (data) {
        setNotes(prev => prev.map(n => n.id === data.id ? data : n))
        // Preserve active state but update local metadata
        setActive(prev => prev ? { ...prev, ...noteData } : data)
      }
    }
    
    setIsDirty(false)
    setLastSaved(new Date())
    if (!isAuto) setSaving(false)
  }

  const filteredNotes = notes.filter(n => {
    const matchesSearch = 
      n.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      n.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      n.tags?.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const matchesCollection = !activeCollection || n.collection_id === activeCollection
    
    return matchesSearch && matchesCollection
  })

  function addTag(e: React.KeyboardEvent) {
    if (e.key === 'Enter' && tagInput.trim()) {
      e.preventDefault()
      if (!tags.includes(tagInput.trim())) {
        setTags([...tags, tagInput.trim()])
      }
      setTagInput('')
    }
  }

  function removeTag(tagToRemove: string) {
    setTags(tags.filter(t => t !== tagToRemove))
  }

  function insertImage() {
    const url = window.prompt('Enter image URL:')
    if (!url) return
    const alt = window.prompt('Enter image description:', 'Esoteric illustration') || 'Image'
    
    const markdown = `\n![${alt}](${url})\n`
    const textarea = textareaRef.current
    if (!textarea) {
      setContent(prev => prev + markdown)
      return
    }

    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const newContent = content.substring(0, start) + markdown + content.substring(end)
    setContent(newContent)
    
    // Focus back and set cursor
    setTimeout(() => {
      textarea.focus()
      textarea.setSelectionRange(start + markdown.length, start + markdown.length)
    }, 0)
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

          <div className="notes-sidebar-filters">
            <div className="notes-search">
              <input 
                type="text" 
                placeholder="Search notes or tags…" 
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="notes-search-input"
              />
            </div>

            <div className="notes-collection-filter">
              <select 
                value={activeCollection || ''}
                onChange={e => setActiveCollection(e.target.value || null)}
                className="notes-filter-select"
              >
                <option value="">All Collections</option>
                {collections.map(c => (
                  <option key={c.id} value={c.id}>{c.name}</option>
                ))}
              </select>
            </div>
          </div>

          {loading ? (
            <p className="notes-loading">Loading…</p>
          ) : filteredNotes.length === 0 && !isNew ? (
            <div className="dash-empty">
              <p>{searchTerm ? 'No matches found.' : 'No notes yet.'}</p>
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
              {filteredNotes.map(note => (
                <li
                  key={note.id}
                  className={`notes-list__item${active?.id === note.id ? ' notes-list__item--active' : ''}`}
                >
                  <button className="notes-list__btn" onClick={() => openNote(note)}>
                    <div className="notes-list__title-row">
                      <span className="notes-list__title">{note.title || 'Untitled'}</span>
                      {note.is_favorite && <span className="notes-list__fav">★</span>}
                    </div>
                    {note.tags && note.tags.length > 0 && (
                      <div className="notes-list__tags">
                        {note.tags.slice(0, 3).map(t => (
                          <span key={t} className="notes-list__tag">#{t}</span>
                        ))}
                      </div>
                    )}
                    <span className="notes-list__meta">
                      {new Date(note.updated_at).toLocaleDateString()}
                    </span>
                  </button>
                  <button
                    className="notes-list__delete"
                    aria-label={`Delete ${note.title}`}
                    onClick={(e) => { e.stopPropagation(); deleteNote(note.id); }}
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
                <button 
                  className={`notes-fav-toggle ${isFavorite ? 'is-active' : ''}`}
                  onClick={() => setIsFavorite(!isFavorite)}
                  title={isFavorite ? 'Unfavorite' : 'Favorite'}
                >
                  {isFavorite ? '★' : '☆'}
                </button>
                <input
                  type="text"
                  className="notes-title-input"
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  placeholder="Note title…"
                  aria-label="Note title"
                />
                <select 
                  className="notes-collection-select"
                  value={collectionId || ''}
                  onChange={e => setCollectionId(e.target.value || null)}
                >
                  <option value="">No Collection</option>
                  {collections.map(c => (
                    <option key={c.id} value={c.id}>{c.name}</option>
                  ))}
                </select>
                <button
                  className="btn btn--ghost btn--sm"
                  onClick={insertImage}
                  title="Insert Image"
                >
                  🖼
                </button>
                <button
                  className={`btn btn--ghost btn--sm ${isPreview ? 'is-active' : ''}`}
                  onClick={() => setIsPreview(!isPreview)}
                >
                  {isPreview ? 'Edit' : 'Preview'}
                </button>
                {active?.id && <ExportButton noteId={active.id} title={title} />}
                <button
                  className="btn btn--primary btn--sm"
                  onClick={() => save()}
                  disabled={saving}
                >
                  {saving ? 'Saving…' : 'Save'}
                </button>
                  <div className="notes-save-status">
                    {isDirty ? (
                      <span className="status-dirty">Unsaved changes…</span>
                    ) : lastSaved ? (
                      <span className="status-saved">Last saved {lastSaved.toLocaleTimeString()}</span>
                    ) : null}
                  </div>
                  <div className="notes-share-control">
                    <button 
                      className={`btn btn--ghost btn--xs ${isPublic ? 'is-active is-public' : ''}`}
                      onClick={() => { setIsPublic(!isPublic); setIsDirty(true); }}
                      title={isPublic ? 'Make Private' : 'Make Public'}
                    >
                      {isPublic ? '🌐 Public' : '🔒 Private'}
                    </button>
                    {isPublic && active?.id && (
                      <button 
                        className="btn btn--ghost btn--xs"
                        onClick={() => {
                          const url = `${window.location.origin}/share/${active.id}`;
                          navigator.clipboard.writeText(url);
                          alert('Share link copied!');
                        }}
                      >
                        Copy Link
                      </button>
                    )}
                  </div>
                </div>

              <div className="notes-tag-manager">
                <div className="notes-tags-list">
                  {tags.map(tag => (
                    <span key={tag} className="notes-tag">
                      #{tag}
                      <button onClick={() => removeTag(tag)} className="notes-tag-remove">×</button>
                    </span>
                  ))}
                </div>
                <input 
                  type="text"
                  className="notes-tag-input"
                  placeholder="Add tag and press Enter…"
                  value={tagInput}
                  onChange={e => setTagInput(e.target.value)}
                  onKeyDown={addTag}
                />
              </div>

              {isPreview ? (
                <div className="notes-preview markdown-body">
                  <ReactMarkdown 
                    remarkPlugins={[remarkGfm]}
                    components={{
                      a: ({ node, ...props }) => (
                        <Link href={props.href || '/'} {...(props as any)}>
                          {props.children}
                        </Link>
                      )
                    }}
                  >
                    {autoLinkEsoteric(content) || '*No content provided.*'}
                  </ReactMarkdown>
                </div>
              ) : (
                <textarea
                  ref={textareaRef}
                  className="notes-textarea"
                  value={content}
                  onChange={e => setContent(e.target.value)}
                  placeholder="Begin writing (Markdown supported)…"
                  aria-label="Note content"
                />
              )}
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
