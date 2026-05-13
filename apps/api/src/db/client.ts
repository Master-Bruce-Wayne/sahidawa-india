import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseKey) {
  const msg = '⚠️ Supabase URL or Key is missing. Database connections will fail.';
  if (process.env.NODE_ENV === 'production') {
    throw new Error(msg);
  }
  console.warn(msg);
}

// We use service role key if available for administrative DB tasks on the backend.
// Guard against createClient receiving empty strings which causes cryptic errors.
export const supabase = (supabaseUrl && supabaseKey)
  ? createClient(supabaseUrl, supabaseKey)
  : null;
