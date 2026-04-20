'use client'

import { useEffect, useState, useCallback, useRef } from 'react'
import { createClient } from '@/lib/supabase/client'
import { usePathname } from 'next/navigation'

export function useReadingProgress() {
  const [percentage, setPercentage] = useState(0)
  const [lastChapter, setLastChapter] = useState<string | null>(null)
  const supabase = createClient()
  const pathname = usePathname()
  const syncTimerRef = useRef<NodeJS.Timeout | null>(null)

  const sync = useCallback(async (currentPercent: number, chapter: string | null) => {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return

    // UPSERT progress
    await supabase.from('reading_progress').upsert({
      user_id: user.id,
      path: pathname,
      percentage: currentPercent,
      last_chapter: chapter,
      updated_at: new Date().toISOString()
    }, { onConflict: 'user_id,path' })
  }, [supabase, pathname])

  const handleScroll = useCallback(() => {
    const scrolled = window.scrollY
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight
    if (totalHeight <= 0) return

    const ratio = Math.min(scrolled / totalHeight, 1)
    const p = Math.floor(ratio * 100)
    setPercentage(p)

    // Current Chapter Detection (if sections have [id])
    const sections = Array.from(document.querySelectorAll('section[id], article[id]'))
    let current = null
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= 100) {
        current = section.id
      }
    }
    if (current !== lastChapter) {
      setLastChapter(current)
    }

    // Debounce sync
    if (syncTimerRef.current) clearTimeout(syncTimerRef.current)
    syncTimerRef.current = setTimeout(() => {
      sync(p, current)
    }, 5000)
  }, [lastChapter, sync])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (syncTimerRef.current) clearTimeout(syncTimerRef.current)
    }
  }, [handleScroll])

  return { percentage, lastChapter }
}
