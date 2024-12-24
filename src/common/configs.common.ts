// Global Types
import type {
  AppConfig,
  SupabaseConfig,
  SentryConfig,
} from "@/types/app.types";

// App Config
export const appConfig: AppConfig = {
  appName: "Starter",
  developerName: "Ajay Gupta",
  developerUrl: "https://ajayg.co",
};

// Supabase
export const supabaseConfig: SupabaseConfig = {
  projectKey: import.meta.env.VITE_APP_SUPABASE_PROJECT_KEY,
  projectUrl: import.meta.env.VITE_APP_SUPABASE_PROJECT_URL,
};

// Sentry
export const sentryConfig: SentryConfig = {
  dsn: import.meta.env.VITE_APP_SENTRY_DSN,
};
