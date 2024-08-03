import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://wwldymlhfdvpgijpdqoe.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind3bGR5bWxoZmR2cGdpanBkcW9lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE3MTIwNDYsImV4cCI6MjAzNzI4ODA0Nn0.iaB6SDe1aJz0vR2EX1NqtA6o3ejeuxAXA4IE8O9174s";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
