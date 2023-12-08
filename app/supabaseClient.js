import { createClient } from "@supabase/supabase-js";

// const supabaseURL = process.env.NEXT_PUBLIC_SUPABASE_URL;
// const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(
  "https://omvjxlaamtfrswhmlapp.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9tdmp4bGFhbXRmcnN3aG1sYXBwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIwMDg2MjMsImV4cCI6MjAxNzU4NDYyM30._cJ1AgZM5DkQATa2AxpsdP1Nb0KXftfQjJjTzUAhNB8"
);
