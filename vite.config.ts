import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    coverage: {
      enabled: true,
      include: ["src/**/*.{js,jsx}"],
      reporter: ["text", "json", "html"],
      provider: "v8",
    },
  },
});
