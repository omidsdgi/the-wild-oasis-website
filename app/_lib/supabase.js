// app/_lib/supabase.js
import {createClient} from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

console.log('🔍 Checking env variables:');
console.log('URL:', supabaseUrl);
console.log('Key exists:', !!supabaseKey);
console.log('Key length:', supabaseKey?.length);



export const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY
);
if (!supabaseUrl || !supabaseKey) {
    throw new Error('Missing Supabase environment variables. Check .env.local file.');
}