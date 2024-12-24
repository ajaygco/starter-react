// Modules
import { createClient } from "@supabase/supabase-js";

// Global Types
import type { SupabaseClient, SupabaseConfig } from "@/types/app.types";

// Instance
let supabase;

// Initialise Supabase
export const initialiseSupabase = (config: SupabaseConfig): SupabaseClient => {
  supabase = createClient(config.projectUrl, config.projectKey);

  return supabase;
};

// Get Supabase
export const getSupabase = (): SupabaseClient => {
  return supabase;
};
