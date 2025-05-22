/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  base: "/niyu07.github.io/", // ← base の値を修正しました (スラッシュで囲むのが一般的です)
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: ["./src"],
  },
});