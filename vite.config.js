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
    },
  },
});
