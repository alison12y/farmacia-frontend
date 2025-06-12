import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Ensures correct path for Vercel
  build: {
    outDir: 'dist', // Output directory for Vercel
  },
});