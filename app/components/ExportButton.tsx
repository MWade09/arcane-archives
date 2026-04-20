'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

interface Props {
  noteId: string
  title: string
}

export default function ExportButton({ noteId, title }: Props) {
  const [isExporting, setIsExporting] = useState<string | null>(null)
  const [isOpen, setIsOpen] = useState(false)
  const supabase = createClient()

  const fetchNote = async () => {
    const { data: note, error } = await supabase
      .from('notes')
      .select('*')
      .eq('id', noteId)
      .single()
    if (error || !note) throw new Error('Note not found')
    return note
  }

  const exportMD = async () => {
    setIsExporting('md')
    try {
      const note = await fetchNote()
      const mdContent = `---\ntitle: ${note.title}\ndate: ${new Date(note.updated_at).toLocaleDateString()}\ntags: ${note.tags?.join(', ') || ''}\nsource: ${note.source_type || 'Archive'} - ${note.source_id || 'Self'}\n---\n\n# ${note.title}\n\n${note.content}\n\n---\n*Exported from The Archive Research Suite on ${new Date().toLocaleString()}*`
      
      const blob = new Blob([mdContent], { type: 'text/markdown' })
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = `${note.title.replace(/\s+/g, '_')}_Archive.md`
      link.click()
      URL.revokeObjectURL(url)
    } finally {
      setIsExporting(null)
      setIsOpen(false)
    }
  }

  const exportPDF = async () => {
    setIsExporting('pdf')
    try {
      const note = await fetchNote()
      
      // Hidden container for rendering
      const el = document.createElement('div')
      el.style.cssText = 'position: absolute; left: -9999px; width: 600px; padding: 40px; background: #fff; color: #333; font-family: sans-serif;'
      el.innerHTML = `
        <h1 style="color: #c8a84a; font-family: serif; border-bottom: 2px solid #c8a84a; padding-bottom: 10px;">${note.title}</h1>
        <p style="color: #666; font-size: 12px; margin-bottom: 20px;">
          Date: ${new Date(note.updated_at).toLocaleDateString()} | Tags: ${note.tags?.join(', ') || 'None'}
        </p>
        <div style="line-height: 1.6; font-size: 14px;">${note.content.replace(/\n/g, '<br />')}</div>
        <hr style="margin-top: 30px; border: 0.5px solid #eee;" />
        <p style="font-size: 10px; color: #999; text-align: center;">Exported from The Archive Research Suite</p>
      `
      document.body.appendChild(el)
      
      const canvas = await html2canvas(el)
      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF()
      pdf.addImage(imgData, 'PNG', 0, 0, 210, (canvas.height * 210) / canvas.width)
      pdf.save(`${note.title.replace(/\s+/g, '_')}_Archive.pdf`)
      document.body.removeChild(el)
    } finally {
      setIsExporting(null)
      setIsOpen(false)
    }
  }

  return (
    <div className="export-menu">
      <button 
        className="export-btn" 
        onClick={(e) => { e.preventDefault(); e.stopPropagation(); setIsOpen(!isOpen); }}
        title="Export options"
      >
        {isExporting ? '...' : '↓ Export'}
      </button>

      {isOpen && (
        <div className="export-menu__dropdown">
          <button onClick={exportMD} disabled={!!isExporting}>Markdown (.md)</button>
          <button onClick={exportPDF} disabled={!!isExporting}>Premium PDF (.pdf)</button>
        </div>
      )}
    </div>
  )
}
