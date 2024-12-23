// Global Types
import type {
  AppConfig,
  FirebaseConfig,
  SentryConfig,
} from "@/types/app.types";

// App Config
export const appConfig: AppConfig = {
  appName: "Starter",
  developerName: "Ajay Gupta",
  developerUrl: "https://ajayg.co",
};

// Firebase
export const firebaseConfig: FirebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_APP_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_APP_FIREBASE_MEASUREMENT_ID,
};

// Sentry
export const sentryConfig: SentryConfig = {
  dsn: import.meta.env.VITE_APP_SENTRY_DSN,
};
