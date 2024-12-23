// Modules
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";

// Styles
import "./main.css";

// Common
import { firebaseConfig } from "@/common/configs.common";

// Components
import { AppRouter } from "@/components/app-router";

// Initialise Firebase
initializeApp(firebaseConfig);

// Initialise Analytics
if (firebaseConfig.measurementId) {
  getAnalytics();
}

// Create Root
const app = createRoot(document.getElementById("root") as HTMLElement);

// Render
app.render(
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>
);
