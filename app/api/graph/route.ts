import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { ARCANE_ENTRIES } from '@/lib/arcane/data'

export async function GET() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ nodes: [], links: [] })

  // 1. Fetch data
  const { data: notes } = await supabase.from('notes').select('id, title, content, tags, source_type, source_id').eq('user_id', user.id)
  const { data: bookmarks } = await supabase.from('bookmarks').select('content_type, content_id, content_title').eq('user_id', user.id)

  const nodes: any[] = []
  const links: any[] = []
  const nodeIds = new Set()

  // 2. Add Arcane Entries (Base nodes)
  ARCANE_ENTRIES.forEach(entry => {
    nodes.push({ id: entry.id, label: entry.title, type: 'arcane', sigil: entry.sigil, color: '#c8a84a', val: 5 })
    nodeIds.add(entry.id)
  });

  // 3. Add Notes
  notes?.forEach(note => {
    const nid = `note-${note.id}`
    nodes.push({ id: nid, label: note.title || 'Untitled Note', type: 'note', color: '#7b5ea7', val: 3 })
    nodeIds.add(nid)

    // Manual links to sources
    if (note.source_id && nodeIds.has(note.source_id)) {
      links.push({ source: nid, target: note.source_id, type: 'manual' })
    }

    // AI/Keyword suggested links (Example: share tags)
    note.tags?.forEach((tag: string) => {
      ARCANE_ENTRIES.forEach(entry => {
        if (entry.title.toLowerCase().includes(tag.toLowerCase())) {
          links.push({ source: nid, target: entry.id, type: 'keyword' })
        }
      })
    })
  })

  // 4. Add Saturn Chapters
  const saturnChapters = [
    { id: 'ch-intro', label: 'Intro' }, { id: 'ch-conspiracy', label: 'Conspiracy' },
    { id: 'ch-golden-age', label: 'Golden Age' }, { id: 'ch-seventh', label: 'Seventh Heaven' },
    { id: 'ch-hyperborea', label: 'Hyperborea' }, { id: 'ch-santa', label: 'Santa Claus' },
    { id: 'ch-titans', label: 'Titans' }, { id: 'ch-mortal', label: 'Mortal Body' }
  ]
  saturnChapters.forEach(ch => {
    const cid = `saturn-${ch.id}`
    nodes.push({ id: cid, label: ch.label, type: 'saturn', sigil: '♄', color: '#e2c774', val: 4 })
    nodeIds.add(cid)
  })

  return NextResponse.json({ nodes, links })
}
