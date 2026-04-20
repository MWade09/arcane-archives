'use client'

import { useState, useEffect, useRef } from 'react'
import { getPageContext } from '@/lib/ai/scraper'

type Message = { role: 'user' | 'assistant', content: string }
type Model = 'google/gemma-4-31b-it:free'

export default function ResearchAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [model, setModel] = useState<Model>('google/gemma-4-31b-it:free')
  const [isLoading, setIsLoading] = useState(false)
  const chatEndRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMsg: Message = { role: 'user', content: input }
    setMessages(prev => [...prev, userMsg])
    setInput('')
    setIsLoading(true)

    const context = getPageContext()
    const metadata = {
      title: document.title,
      url: window.location.href
    }

    const userKey = localStorage.getItem('arcane_openrouter_key')

    try {
      const res = await fetch('/api/ai', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'X-User-OpenRouter-Key': userKey || ''
        },
        body: JSON.stringify({
          messages: [...messages, userMsg],
          model,
          context,
          metadata
        })
      })

      const data = await res.json()
      if (res.status === 403) {
        setMessages(prev => [...prev, { role: 'assistant', content: "⚠️ Access Denied: Regular users must provide their own OpenRouter API Key in Settings to use the Archive Spirit." }])
        return
      }
      if (data.choices?.[0]?.message) {
        setMessages(prev => [...prev, data.choices[0].message])
      } else {
        setMessages(prev => [...prev, { role: 'assistant', content: "I'm having trouble connecting to the archive's spirit right now. Please try again." }])
      }
    } catch (err) {
      setMessages(prev => [...prev, { role: 'assistant', content: "An error occurred in our transmission. Check your connection." }])
    } finally {
      setIsLoading(false)
    }
  }

  const resetChat = () => {
    setMessages([])
    setIsOpen(false)
  }

  return (
    <>
      <button 
        className={`research-toggle ${isOpen ? 'is-active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open AI Assistant"
        title="Spirit of the Archive — AI Assistant"
      >
        <span className="research-toggle__icon">✦</span>
      </button>

      <div className={`research-sidebar ${isOpen ? 'is-open' : ''}`}>
        <header className="research-sidebar__header">
          <div className="research-sidebar__title">
            <span className="sigil">✦</span>
            <h3>Archive Spirit</h3>
          </div>
          <button className="research-sidebar__close" onClick={() => setIsOpen(false)}>×</button>
        </header>

        <div className="research-sidebar__controls">
          <select 
            value={model} 
            onChange={(e) => setModel(e.target.value as Model)}
            className="research-sidebar__select"
          >
            <option value="google/gemma-4-31b-it:free">Gemma 4 31B (Free)</option>
          </select>
          <button onClick={resetChat} className="research-sidebar__reset">Clear</button>
        </div>

        <div className="research-sidebar__chat">
          {messages.length === 0 && (
            <div className="research-sidebar__empty">
              <p>Ask a question about this entry or any esoteric concept. I am aware of the current text.</p>
            </div>
          )}
          {messages.map((m, i) => (
            <div key={i} className={`chat-bubble chat-bubble--${m.role}`}>
              {m.content}
            </div>
          ))}
          {isLoading && <div className="chat-bubble chat-bubble--assistant is-loading">Searching the archive...</div>}
          <div ref={chatEndRef} />
        </div>

        <form onSubmit={handleSend} className="research-sidebar__input-area">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="What does Saturn represent?"
            className="research-sidebar__input"
          />
          <button type="submit" disabled={isLoading} className="research-sidebar__submit">→</button>
        </form>
      </div>
    </>
  )
}
