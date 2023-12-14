// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Your proxy configurations if needed
    },
  },
  build: {
    outDir: 'dist', // Output directory for production build
  },
});