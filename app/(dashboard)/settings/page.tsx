'use client'

import { useEffect, useState, useCallback } from 'react'
import { createClient } from '@/lib/supabase/client'

type Tab = 'account' | 'ai' | 'security'

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<Tab>('account')
  const [role, setRole] = useState('user')
  const [profile, setProfile] = useState({ full_name: '', display_name: '' })
  const [openRouterKey, setOpenRouterKey] = useState('')
  const [status, setStatus] = useState<{ msg: string; type: 'success' | 'err' } | null>(null)
  const [isValidating, setIsValidating] = useState(false)
  
  const supabase = createClient()

  const loadData = useCallback(async () => {
    const { data: { user } } = await supabase.auth.getUser()
    if (user) {
      const { data } = await supabase.from('profiles').select('*').eq('id', user.id).single()
      if (data) {
        setRole(data.role)
        setProfile({ full_name: data.full_name || '', display_name: data.display_name || '' })
      }
    }
    const savedKey = localStorage.getItem('arcane_openrouter_key')
    if (savedKey) setOpenRouterKey(savedKey)
  }, [supabase])

  useEffect(() => { loadData() }, [loadData])

  const notify = (msg: string, type: 'success' | 'err' = 'success') => {
    setStatus({ msg, type })
    setTimeout(() => setStatus(null), 3000)
  }

  const saveProfile = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return
    const { error } = await supabase.from('profiles').update({
      full_name: profile.full_name,
      display_name: profile.display_name,
      updated_at: new Date().toISOString()
    }).eq('id', user.id)

    if (error) notify("Failed to update profile", "err")
    else notify("Profile archived.")
  }

  const saveAI = () => {
    localStorage.setItem('arcane_openrouter_key', openRouterKey)
    notify("AI credentials saved.")
  }

  const testKey = async () => {
    if (!openRouterKey) return notify("No key provided", "err")
    setIsValidating(true)
    try {
      const res = await fetch('https://openrouter.ai/api/v1/models', {
        headers: { Authorization: `Bearer ${openRouterKey}` }
      })
      if (res.ok) notify("Key validated successfully!")
      else notify("Invalid API Key.", "err")
    } catch {
      notify("Network error.", "err")
    } finally {
      setIsValidating(false)
    }
  }

  return (
    <div className="dash-page settings-v2">
      <header className="dash-page-header">
        <h1 className="dash-page-title">Archives & Identity</h1>
        <p className="dash-page-subtitle">Master your research infrastructure and scholarly persona.</p>
      </header>

      <nav className="settings-tabs">
        <button className={activeTab === 'account' ? 'active' : ''} onClick={() => setActiveTab('account')}>✦ Scholarly Identity</button>
        <button className={activeTab === 'ai' ? 'active' : ''} onClick={() => setActiveTab('ai')}>⚡ AI Infrastructure</button>
        <button className={activeTab === 'security' ? 'active' : ''} onClick={() => setActiveTab('security')}>🔒 Security & Data</button>
      </nav>

      <div className="settings-content">
        {activeTab === 'account' && (
          <div className="settings-pane fade-in">
            <div className="settings-field">
              <label>Institutional Role</label>
              <div className={`role-badge role-badge--${role}`}>{role.toUpperCase()}</div>
              <p className="field-hint">Your authority level within the Archive's hierarchy.</p>
            </div>
            
            <div className="settings-field">
              <label>Display Name</label>
              <input 
                className="settings-input" 
                value={profile.display_name}
                onChange={e => setProfile({...profile, display_name: e.target.value})}
                placeholder="The Seeker"
              />
            </div>

            <div className="settings-field">
              <label>Full Name</label>
              <input 
                className="settings-input" 
                value={profile.full_name}
                onChange={e => setProfile({...profile, full_name: e.target.value})}
                placeholder="Hermes Trismegistus"
              />
            </div>

            <button className="btn btn--primary" onClick={saveProfile}>Update Persona</button>
          </div>
        )}

        {activeTab === 'ai' && (
          <div className="settings-pane fade-in">
            <div className="settings-field">
              <label>OpenRouter API Key (BYOK)</label>
              <div className="input-with-action">
                <input 
                  type="password" 
                  className="settings-input"
                  value={openRouterKey}
                  onChange={e => setOpenRouterKey(e.target.value)}
                  placeholder="sk-or-v1-..."
                />
                <button className="btn btn--ghost btn--sm" onClick={testKey} disabled={isValidating}>
                   {isValidating ? '...' : 'Test'}
                </button>
              </div>
              <p className="field-hint">Used for the Research Assistant. Stored exclusively in your browser.</p>
            </div>
            
            <button className="btn btn--primary" onClick={saveAI}>Lock Credentials</button>
          </div>
        )}

        {activeTab === 'security' && (
          <div className="settings-pane fade-in">
             <div className="settings-field">
              <label>Data Management</label>
              <div className="danger-zone">
                <div className="danger-info">
                  <h4>Wipe Local Cache</h4>
                  <p>Clears stored API keys and local theme preferences.</p>
                </div>
                <button className="btn btn--xs" onClick={() => { localStorage.clear(); window.location.reload(); }}>Reset Cloudless Data</button>
              </div>
            </div>

            <div className="settings-field">
              <label>Account Portability</label>
               <p className="field-hint">Request a full export of your notes and archive bookmarks in JSON format.</p>
               <button className="btn btn--ghost btn--sm" disabled>Request Data Export (v3.0)</button>
            </div>
          </div>
        )}
      </div>

      {status && (
        <div className={`toast toast--${status.type}`}>
          {status.msg}
        </div>
      )}

      <style jsx>{`
        .settings-v2 { max-width: 900px; }
        .settings-tabs { display: flex; gap: 2rem; border-bottom: 1px solid var(--clr-border); margin-bottom: 3rem; }
        .settings-tabs button {
          background: none; border: none; padding: 1rem 0; color: var(--clr-text-dim);
          font-family: var(--font-display); font-size: 0.9rem; text-transform: uppercase;
          letter-spacing: 0.1em; cursor: pointer; border-bottom: 2px solid transparent;
          transition: all 0.3s;
        }
        .settings-tabs button.active { color: var(--clr-gold-1); border-color: var(--clr-gold-1); }
        
        .settings-pane { animation: fadeIn 0.4s ease-out; }
        .settings-field { margin-bottom: 2.5rem; }
        .settings-field label { display: block; font-family: var(--font-display); color: var(--clr-gold-2); margin-bottom: 0.75rem; font-size: 0.85rem; }
        
        .settings-input {
          width: 100%; background: rgba(0,0,0,0.2); border: 1px solid var(--clr-border);
          color: #fff; padding: 0.8rem 1rem; border-radius: 4px; font-family: var(--font-ui);
          transition: border-color 0.2s;
        }
        .settings-input:focus { border-color: var(--clr-gold-3); outline: none; }
        
        .input-with-action { display: flex; gap: 0.75rem; align-items: center; }
        .input-with-action input { flex: 1; }

        .role-badge { display: inline-block; padding: 0.3rem 0.8rem; border-radius: 4px; font-weight: 800; font-size: 0.7rem; border: 1px solid rgba(200,168,74,0.3); color: var(--clr-gold-1); }
        .field-hint { font-size: 0.8rem; color: var(--clr-text-muted); margin-top: 0.6rem; }
        
        .danger-zone { 
          display: flex; justify-content: space-between; align-items: center; 
          border: 1px solid rgba(212, 60, 60, 0.2); background: rgba(212, 60, 60, 0.03);
          padding: 1.25rem; border-radius: 8px;
        }
        .danger-info h4 { margin: 0; color: #ef5350; font-size: 1rem; }
        .danger-info p { margin: 0.25rem 0 0; font-size: 0.8rem; color: var(--clr-text-muted); }

        .toast {
          position: fixed; bottom: 2rem; right: 2rem; padding: 1rem 2rem; border-radius: 4px;
          font-family: var(--font-display); font-size: 0.9rem; z-index: 3000;
          animation: slideUp 0.3s ease-out; background: var(--clr-gold-1); color: #000;
        }
        .toast--err { background: #ef5350; color: #fff; }

        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  )
}
