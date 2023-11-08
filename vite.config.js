import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/chat": {
        target: " http://13.125.14.153:10150/chat",
        changeOrigin: true,
        rewrite: (path) => {
          return path.replace(/^\/chat/, "");
        },
      },
      "/id": {
        target: "http://localhost:10149/login/id/",
        changeOrigin: true,
        rewrite: (path) => {
          return path.replace(/^\/id/, "");
        },
      },
      "/login": {
        target: "http://localhost:10149/login/check/",
        changeOrigin: true,
        rewrite: (path) => {
          return path.replace(/^\/login/, "");
        },
      },
      "/create": {
        target: "http://localhost:10149/login/create/",
        changeOrigin: true,
        rewrite: (path) => {
          return path.replace(/^\/create/, "");
        },
      },
      "/pro": {
        target: "http://localhost:10149/api/product/",
        changeOrigin: true,
        rewrite: (path) => {
          return path.replace(/^\/pro/, "");
        },
      },
    },
  },
});
