import { ARCANE_ENTRIES } from '@/lib/arcane/data'

/**
 * A simple utility to automatically link esoteric keywords in markdown.
 * It's safer to run this on the raw string BEFORE markdown parsing, 
 * however we must avoid breaking existing links or code blocks.
 */
export function autoLinkEsoteric(text: string): string {
  if (!text) return text

  // 1. Prepare keywords from Arcane Entries
  // We sort by length descending to ensure "The Emerald Tablet" matches before "Hermes" if they overlap.
  const entries = [...ARCANE_ENTRIES].sort((a,b) => b.title.length - a.title.length)
  
  let processed = text

  // Strategy: We only want to replace keywords that AREN'T inside [link](/url) or `code`.
  // This is hard with just RegEx on a raw string. 
  // However, for this project, I'll do a simple placeholder-based switch-out.

  // 1. Protection phase: Replace existing links and code with placeholders
  const placeholders: string[] = []
  
  // Replace code blocks
  processed = processed.replace(/```[\s\S]*?```|`[^`]+`/g, (match) => {
    placeholders.push(match)
    return `__PLACEHOLDER_${placeholders.length - 1}__`
  })

  // Replace existing links [text](url)
  processed = processed.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match) => {
    placeholders.push(match)
    return `__PLACEHOLDER_${placeholders.length - 1}__`
  })

  // 2. Replacement phase: Link entries
  entries.forEach(entry => {
    // Use word boundaries \b to avoid partial matches (e.g. "Alk" in "Alchemy")
    // Use case-insensitive matching but keep original text if we want [Original](/url)
    const regex = new RegExp(`\\b(${escapeRegExp(entry.title)})\\b`, 'gi')
    processed = processed.replace(regex, (match) => {
      return `[${match}](/arcane/${entry.id})`
    })
  })

  // 3. Special keywords
  const specialKeywords = [
    { name: 'Saturn', url: '/saturn' },
    { name: 'Arcane Archive', url: '/arcane' }
  ]

  specialKeywords.forEach(kw => {
    const regex = new RegExp(`\\b(${escapeRegExp(kw.name)})\\b`, 'gi')
    processed = processed.replace(regex, (match) => {
      // Don't re-link if it's already a link (which might have happened if it matched a title)
      if (match.startsWith('[')) return match 
      return `[${match}](${kw.url})`
    })
  })

  // 4. Restoration phase: Put back placeholders
  placeholders.forEach((p, i) => {
    processed = processed.replace(`__PLACEHOLDER_${i}__`, p)
  })

  return processed
}

function escapeRegExp(string: string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}
