import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://comzqrwhkghjgkpoovkr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNvbXpxcndoa2doamdrcG9vdmtyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgxNTM2NTUsImV4cCI6MjA0MzcyOTY1NX0.KJ4VzBIRkAJROqtmgAdICwojGxT5e64hHPvIXbPEJF0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
