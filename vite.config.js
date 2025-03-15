import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "src/styles/variables.scss";', // Add global SCSS variables or mixins
      },
    },
  },
  resolve: {
    alias: {
      "@assets": "/src/assets", // Define an alias for assets
    },
  },
});
