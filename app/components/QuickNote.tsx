'use client'

import { useState, useEffect, useRef } from 'react'
import { createClient } from '@/lib/supabase/client'
import { usePathname } from 'next/navigation'

export default function QuickNote() {
  const [isOpen, setIsOpen]     = useState(false)
  const [title, setTitle]       = useState('')
  const [content, setContent]   = useState('')
  const [tags, setTags]         = useState<string[]>([])
  const [tagInput, setTagInput] = useState('')
  const [saving, setSaving]     = useState(false)
  const [status, setStatus]     = useState('')
  const [user, setUser]         = useState<any>(null)
  
  const supabase = createClient()
  const pathname = usePathname()
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    async function getUser() {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)
    }
    getUser()

    // Listen for highlight events
    const handleOpen = (e: any) => {
      if (e.detail?.content) {
        setContent(prev => e.detail.content + prev)
        setIsOpen(true)
      }
    }
    window.addEventListener('open-quick-note', handleOpen)
    return () => window.removeEventListener('open-quick-note', handleOpen)
  }, [supabase])

  // Don't show the widget if we're in the dashboard itself
  if (pathname.startsWith('/dashboard') || pathname.startsWith('/notes') || pathname.startsWith('/bookmarks')) {
    return null
  }

  // Also don't show if not logged in
  if (!user) return null

  async function saveNote() {
    if (!content.trim()) return
    setSaving(true)
    setStatus('Saving…')

    const { error } = await supabase
      .from('notes')
      .insert({
        user_id: user.id,
        title: title || 'Quick Note — ' + new Date().toLocaleDateString(),
        content: content,
        tags: tags,
        source_type: pathname === '/' ? 'home' : pathname.replace('/', ''),
      })

    if (error) {
      console.error('Error saving note:', error)
      setStatus('Error!')
    } else {
      setStatus('Saved!')
      setTimeout(() => {
        setIsOpen(false)
        setTitle('')
        setContent('')
        setTags([])
        setTagInput('')
        setStatus('')
      }, 1000)
    }
    setSaving(false)
  }

  return (
    <div className="quick-note-container">
      <button 
        className={`quick-note-trigger ${isOpen ? 'is-active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="New Note"
        title="Quick Note"
      >
        {isOpen ? '×' : '✏'}
      </button>

      <div 
        ref={panelRef}
        className={`quick-note-panel ${isOpen ? 'is-visible' : ''}`}
      >
        <div className="quick-note-header">
          <h3>Quick Annotation</h3>
          <span className="sigil">♄</span>
        </div>
        
        <div className="quick-note-body">
          <input 
            type="text" 
            className="quick-note-title"
            placeholder="Title (optional)…" 
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea 
            className="quick-note-content"
            placeholder="Write your thoughts here…"
            value={content}
            onChange={e => setContent(e.target.value)}
            autoFocus={isOpen}
          />
          <div className="quick-note-tags-row">
            <div className="quick-note-tags-list">
              {tags.map(t => (
                <span key={t} className="quick-note-tag">
                  #{t}
                  <button onClick={() => setTags(tags.filter(tag => tag !== t))}>×</button>
                </span>
              ))}
            </div>
            <input 
              type="text"
              className="quick-note-tag-input"
              placeholder="Add tag…"
              value={tagInput}
              onChange={e => setTagInput(e.target.value)}
              onKeyDown={e => {
                if (e.key === 'Enter' && tagInput.trim()) {
                  e.preventDefault()
                  if (!tags.includes(tagInput.trim())) setTags([...tags, tagInput.trim()])
                  setTagInput('')
                }
              }}
            />
          </div>
        </div>

        <div className="quick-note-footer">
          {status && <span className="quick-note-status">{status}</span>}
          <button 
            className="btn btn--ghost btn--sm" 
            onClick={() => setIsOpen(false)}
            disabled={saving}
          >
            Cancel
          </button>
          <button 
            className="btn btn--primary btn--sm" 
            onClick={saveNote}
            disabled={saving || !content.trim()}
          >
            {saving ? 'Saving…' : 'Save Note'}
          </button>
        </div>
      </div>
    </div>
  )
}
