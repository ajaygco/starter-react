// Global Types
import type { AppConfig, SupabaseConfig } from "@/types/app.types";

// App Config
export const appConfig: AppConfig = {
  appName: "Starter",
  developerName: "The Rift",
  developerUrl: "https://therift.dev",
};

// Supabase
export const supabaseConfig: SupabaseConfig = {
  projectKey: import.meta.env.VITE_APP_SUPABASE_PROJECT_KEY,
  projectUrl: import.meta.env.VITE_APP_SUPABASE_PROJECT_URL,
};
