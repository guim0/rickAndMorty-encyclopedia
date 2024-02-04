/// <reference types="vitest" />
/// <reference types="vite/client" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import ReactRefresh from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({ fastRefresh: true })],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/_test_/setup.ts"],
  },
});
