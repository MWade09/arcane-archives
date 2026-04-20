'use client'

import { useEffect, useState, useCallback } from 'react'
import { createClient } from '@/lib/supabase/client'
import Link from 'next/link'

interface Collection {
  id: string
  name: string
  description: string | null
  created_at: string
  notes_count?: number
}

export default function CollectionsPage() {
  const [collections, setCollections] = useState<Collection[]>([])
  const [loading, setLoading]         = useState(true)
  const [name, setName]               = useState('')
  const [desc, setDesc]               = useState('')
  const [creating, setCreating]       = useState(false)
  const [stats, setStats]             = useState<Record<string, number>>({})

  const supabase = createClient()

  const loadCollections = useCallback(async () => {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return

    // Fetch collections and counts
    const [collsRes, notesRes] = await Promise.all([
      supabase
        .from('collections')
        .select('*')
        .eq('user_id', user.id)
        .order('name'),
      supabase
        .from('notes')
        .select('collection_id')
        .eq('user_id', user.id)
    ])

    const fetchedColls = collsRes.data ?? []
    const fetchedNotes = notesRes.data ?? []

    // Calculate counts
    const counts: Record<string, number> = {}
    fetchedNotes.forEach(n => {
      if (n.collection_id) {
        counts[n.collection_id] = (counts[n.collection_id] || 0) + 1
      }
    })

    setCollections(fetchedColls)
    setStats(counts)
    setLoading(false)
  }, [supabase])

  useEffect(() => { loadCollections() }, [loadCollections])

  async function createCollection(e: React.FormEvent) {
    e.preventDefault()
    if (!name.trim()) return
    setCreating(true)

    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return

    const { data, error } = await supabase
      .from('collections')
      .insert({ user_id: user.id, name: name.trim(), description: desc.trim() })
      .select()
      .single()

    if (data) {
      setCollections(prev => [...prev, data].sort((a,b) => a.name.localeCompare(b.name)))
      setName('')
      setDesc('')
    }
    setCreating(false)
  }

  async function deleteCollection(id: string) {
    if (!confirm('Are you sure you want to delete this collection? Notes will not be deleted, they will just be removed from the collection.')) return
    
    await supabase.from('collections').delete().eq('id', id)
    setCollections(prev => prev.filter(c => c.id !== id))
  }

  return (
    <div className="dash-page">
      <header className="dash-page-header">
        <h1 className="dash-page-title">Collections</h1>
        <p className="dash-page-subtitle">Group your research into thematic archives.</p>
      </header>

      <div className="collections-layout">
        <section className="collections-create-panel dash-panel">
          <h2 className="dash-panel__title">New Collection</h2>
          <form className="collections-form" onSubmit={createCollection}>
            <div className="form-group">
              <label htmlFor="coll-name">Name</label>
              <input 
                id="coll-name"
                type="text" 
                placeholder="e.g., Alchemy Studies" 
                value={name}
                onChange={e => setName(e.target.value)}
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="coll-desc">Description (Optional)</label>
              <textarea 
                id="coll-desc"
                placeholder="A brief overview of this collection…" 
                value={desc}
                onChange={e => setDesc(e.target.value)}
                className="form-input"
              />
            </div>
            <button 
              type="submit" 
              className="btn btn--primary btn--sm" 
              disabled={creating || !name.trim()}
            >
              {creating ? 'Creating…' : 'Create Collection'}
            </button>
          </form>
        </section>

        <section className="collections-grid">
          {loading ? (
            <p className="dash-loading">Loading collections…</p>
          ) : collections.length === 0 ? (
            <div className="dash-empty">
              <p>No collections yet. Create your first one to start organizing.</p>
            </div>
          ) : (
            <div className="collections-list">
              {collections.map(c => (
                <div key={c.id} className="collection-card dash-panel">
                  <div className="collection-card__header">
                    <h3 className="collection-card__name">{c.name}</h3>
                    <span className="collection-card__count">{stats[c.id] || 0} items</span>
                  </div>
                  {c.description && (
                    <p className="collection-card__desc">{c.description}</p>
                  )}
                  <div className="collection-card__footer">
                    <Link href={`/notes?collection=${c.id}`} className="collection-card__link">
                      Manage Notes →
                    </Link>
                    <button 
                      onClick={() => deleteCollection(c.id)}
                      className="collection-card__delete"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  )
}
