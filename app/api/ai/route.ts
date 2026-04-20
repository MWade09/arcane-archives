import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function POST(req: Request) {
  try {
    const { messages, model, context, metadata } = await req.json()
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    
    // 1. Determine which API Key to use
    let apiKey = process.env.OPENROUTER_API_KEY
    
    if (user) {
      const { data: profile } = await supabase.from('profiles').select('role').eq('id', user.id).single()
      const customKey = req.headers.get('X-User-OpenRouter-Key')

      if (profile?.role !== 'admin') {
        if (!customKey) {
          return NextResponse.json({ error: 'Regular users must provide their own OpenRouter API Key in Settings.' }, { status: 403 })
        }
        apiKey = customKey
      }
    }

    if (!apiKey) return NextResponse.json({ error: 'API Key not configured.' }, { status: 500 })

    // 2. Build Prompt
    let systemPrompt = `You are the "Spirit of the Archive," an esoteric research assistant.
Scholarly, insightful, and slightly mysterious. 

Page: ${metadata?.title || 'Unknown'}
URL: ${metadata?.url || 'Internal'}
Context: ${context}

When answering, weave in the themes of Saturn, archetypes, and hermeticism.`

    systemPrompt += `\n\nYour persona: The Philosophical Sage. Be expansive and poetic.`

    // 3. Call OpenRouter
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://saturn-archive.com',
        'X-Title': 'The Archive Research Assistant'
      },
      body: JSON.stringify({
        model: model || 'google/gemma-4-31b-it:free',
        messages: [{ role: 'system', content: systemPrompt }, ...messages],
        temperature: 0.8,
        max_tokens: 1200
      })
    })

    const data = await response.json()
    return NextResponse.json(data)
  } catch (err: any) {
    console.error('AI Route Error:', err)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
