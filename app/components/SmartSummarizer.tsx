'use client'

import { useState } from 'react'
import { getPageContext } from '@/lib/ai/scraper'

export default function SmartSummarizer() {
  const [summary, setSummary] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const distill = async () => {
    setIsLoading(true)
    setError(null)
    const context = getPageContext()

    try {
      const res = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [
            { role: 'user', content: 'Provide a concise, scholarly, and insightful "Esoteric Essence" of this text. Distill it into 3-4 bullet points that capture the core symbolic or philosophical meaning.' }
          ],
          context
        })
      })

      const data = await res.json()
      if (data.choices?.[0]?.message) {
        setSummary(data.choices[0].message.content)
      } else {
        setError('The archive spirit is silent.')
      }
    } catch (err) {
      setError('Transmission failed.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="smart-summarizer">
      {!summary && !isLoading && (
        <button className="distill-btn" onClick={distill}>
          <span className="distill-btn__icon">✦</span>
          <span className="distill-btn__label">Distill Essence</span>
        </button>
      )}

      {isLoading && (
        <div className="distill-status">
          <span className="distill-loader"></span>
          Distilling the core...
        </div>
      )}

      {error && !isLoading && (
        <div className="distill-error">{error}</div>
      )}

      {summary && (
        <div className="esoteric-essence">
          <header className="essence-header">
            <span className="sigil">✦</span>
            <h3>Esoteric Essence</h3>
            <button className="essence-close" onClick={() => setSummary(null)}>×</button>
          </header>
          <div className="essence-content">
            {summary.split('\n').map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
