// Modules
import * as Sentry from "@sentry/react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// Styles
import "./main.css";

// Common
import { supabaseConfig, sentryConfig } from "@/common/configs.common";

// Helpers
import { initialiseSupabase } from "@/helpers/supabase.helper";

// Components
import { AppRouter } from "@/components/app-router";

// Initialise Sentry
if (sentryConfig.dsn) {
  Sentry.init({
    dsn: sentryConfig.dsn,
    integrations: [Sentry.replayIntegration()],
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
    tracesSampleRate: 1.0,
  });
}

// Initialise Supabase
initialiseSupabase(supabaseConfig);

// Create Root
const app = createRoot(document.getElementById("root") as HTMLElement);

// Render
app.render(
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>
);
