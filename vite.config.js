import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { port: 4000 },
  define: {
    "process.env.VITE_GITHUB_URL": JSON.stringify(process.env.VITE_GITHUB_URL),
    "process.env.VITE_GITHUB_TOKEN": JSON.stringify(
      process.env.VITE_GITHUB_TOKEN
    ),
  },
});
