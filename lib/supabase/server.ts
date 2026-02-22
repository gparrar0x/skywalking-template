/**
 * Server Supabase client — use in Server Components and Route Handlers.
 * Respects RLS based on the authenticated user session via cookies.
 *
 * @example
 * import { createClient } from '@/lib/supabase/server'
 * const supabase = await createClient()
 */

// Replace `Database` with your generated Supabase types when available.
// import type { Database } from '@/lib/supabase/database.types'

export { createClient } from '@skywalking/core/supabase/server'
