import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "http://13.125.14.153:10150/chat": {
        target: "http://13.125.14.153:10150/chat",
        changeOrigin: true,
        rewrite: (path) => {
          console.log(path);
          return path.replace(/^http:\/\/13.125.14.153:10150\/chat/, "");
        },
      },
      "/id": {
        target: "http://13.125.14.153:10149/login/id/",
        changeOrigin: true,
        rewrite: (path) => {
          return path.replace(/^\/id/, "");
        },
      },
      "/login": {
        target: "http://13.125.14.153:10149/login/check/",
        changeOrigin: true,
        rewrite: (path) => {
          return path.replace(/^\/login/, "");
        },
      },
      "/create": {
        target: "http://13.125.14.153:10149/login/create/",
        changeOrigin: true,
        rewrite: (path) => {
          return path.replace(/^\/create/, "");
        },
      },
      "/pro": {
        target: "http://13.125.14.153:10149/api/product/",
        changeOrigin: true,
        rewrite: (path) => {
          return path.replace(/^\/pro/, "");
        },
      },
      "/po": {
        target: "http://13.125.14.153:10149/api/pro/",
        changeOrigin: true,
        rewrite: (path) => {
          return path.replace(/^\/po/, "");
        },
      },
      "/addBucket": {
        target: "http://13.125.14.153:10149/api/bucket/add/",
        changeOrigin: true,
        rewrite: (path) => {
          return path.replace(/^\/addBucket/, "");
        },
      },
      "/getBucket": {
        target: "http://13.125.14.153:10149/api/bucket/get/",
        changeOrigin: true,
        rewrite: (path) => {
          return path.replace(/^\/getBucket/, "");
        },
      },
      "/cub": {
        target: "http://13.125.14.153:10149/api/bucket/new/",
        changeOrigin: true,
        rewrite: (path) => {
          return path.replace(/^\/cub/, "");
        },
      },
      "/delete": {
        target: "http://13.125.14.153:10149/api/bucket/delete/",
        changeOrigin: true,
        rewrite: (path) => {
          return path.replace(/^\/delete/, "");
        }
      },
      "/mod_item": {
        target: "http://13.125.14.153:10149/api/bucket/mode/",
        changeOrigin: true,
        rewrite: (path) => {
          return path.replace(/^\/mod_item/, "")
        }
      },
      "/get_festa": {
        target: "http://13.125.14.153:10149/api/festa/",
        changeOrigin: true,
        rewrite: (path) => {
          return path.replace(/^\/get_festa/, "")
        }
      }
    },
  },
});
