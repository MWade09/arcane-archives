import { NextResponse, NextRequest } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function POST(request: NextRequest) {
  const supabase = await createClient()
  await supabase.auth.signOut()
  // Derive origin from the request so redirects work correctly in all environments
  const origin = request.headers.get('origin') ?? new URL(request.url).origin
  return NextResponse.redirect(new URL('/', origin))
}
