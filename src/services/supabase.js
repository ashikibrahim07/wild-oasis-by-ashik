import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://wqiyaryyjiphfdvotjss.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndxaXlhcnl5amlwaGZkdm90anNzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE4MjY0NzMsImV4cCI6MjA0NzQwMjQ3M30.zlH2FpzzT5cr9fAYXO44wXHQt74jnjfhrQOjpvAWMoU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
