'use client'

import { useState, useEffect, useCallback } from 'react'
import { usePathname } from 'next/navigation'

export default function HighlightMenu() {
  const [position, setPosition] = useState<{ x: number, y: number } | null>(null)
  const [selectedText, setSelectedText] = useState('')
  const pathname = usePathname()

  // Hide on dashboard pages
  const isDashboard = pathname.startsWith('/dashboard') || pathname.startsWith('/notes') || pathname.startsWith('/bookmarks')

  const handleSelection = useCallback(() => {
    if (isDashboard) return
    
    const selection = window.getSelection()
    const text = selection?.toString().trim()

    if (text && text.length > 3) {
      const range = selection?.getRangeAt(0)
      const rect = range?.getBoundingClientRect()
      
      if (rect) {
        // Position the menu above the selection
        setPosition({
          x: rect.left + rect.width / 2,
          y: rect.top + window.scrollY - 10
        })
        setSelectedText(text)
      }
    } else {
      setPosition(null)
    }
  }, [isDashboard])

  useEffect(() => {
    document.addEventListener('mouseup', handleSelection)
    document.addEventListener('keyup', handleSelection)
    return () => {
      document.removeEventListener('mouseup', handleSelection)
      document.removeEventListener('keyup', handleSelection)
    }
  }, [handleSelection])

  const createNoteFromHighlight = () => {
    if (!selectedText) return

    // Pre-format as a markdown quote
    const quote = `> ${selectedText}\n\n`
    
    // Dispatch a custom event that QuickNote listens to
    const event = new CustomEvent('open-quick-note', { 
      detail: { content: quote } 
    })
    window.dispatchEvent(event)
    
    // Hide this menu
    setPosition(null)
    // Clear selection
    window.getSelection()?.removeAllRanges()
  }

  if (!position || isDashboard) return null

  return (
    <button 
      className="highlight-menu-btn"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`
      }}
      onClick={(e) => {
        e.preventDefault()
        createNoteFromHighlight()
      }}
      aria-label="Create note from selection"
      title="Create note from selection"
    >
      ✏ Add Note
    </button>
  )
}
