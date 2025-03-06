/// <reference types="vitest" />

import analog from "@analogjs/platform";
import { defineConfig } from "vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  build: {
    target: ["es2020"],
  },
  resolve: {
    mainFields: ["module"],
    alias: {
      "@components": path.resolve(__dirname, "./src/app/components/"),
      "@pages": path.resolve(__dirname, "./src/app/pages/"),
      "@services": path.resolve(__dirname, "./src/app/services/"),
    },
  },
  plugins: [analog()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["src/test-setup.ts"],
    include: ["**/*.spec.ts"],
    reporters: ["default"],
  },
  define: {
    "import.meta.vitest": mode !== "production",
  },
}));
