import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xoyeshynepoflasuwlnz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhveWVzaHluZXBvZmxhc3V3bG56Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzE2MjAxMzcsImV4cCI6MTk4NzE5NjEzN30._MSGLUqK18n1wb-Q_QzPewQv7oBjxNxN-IRBRExP200";
const supabase = createClient(supabaseUrl, supabaseKey);
