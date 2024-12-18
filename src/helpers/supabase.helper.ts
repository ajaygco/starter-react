// Modules
import { createClient } from "@supabase/supabase-js";

// Global Types
import type { SupabaseClient, SupabaseConfig } from "@/types/app.types";

// Instance
let supabase: SupabaseClient;

// Initialise Supabase
export const initialiseSupabase = ({
  projectKey,
  projectUrl,
}: SupabaseConfig) => {
  supabase = createClient(projectUrl, projectKey);
};

// Get Supabase
export const getSupabase = (): SupabaseClient => {
  return supabase;
};
