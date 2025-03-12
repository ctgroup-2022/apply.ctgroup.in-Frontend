import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { terser } from "rollup-plugin-terser";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
      },
    },
  },
  define: {
    "process.env": {},
  },
});
