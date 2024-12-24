export type { SupabaseClient } from "@supabase/supabase-js";

export interface AppConfig {
  appName: string;
  developerName: string;
  developerUrl: string;
}

export interface SupabaseConfig {
  projectKey: string;
  projectUrl: string;
}

export interface SentryConfig {
  dsn: string;
}
