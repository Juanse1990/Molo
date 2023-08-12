import { createClient } from '@supabase/supabase-js';

// const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL
// const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_KEY

export const supabase = createClient(
	'https://lwkctzgoectztaepbnce.supabase.co',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx3a2N0emdvZWN0enRhZXBibmNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE2NzE0NTcsImV4cCI6MjAwNzI0NzQ1N30.muXnK6GHzYs7vxzBU6o0cA5x7ay3dDv2KwCE2gT45Ck',
);
