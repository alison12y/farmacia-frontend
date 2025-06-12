import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'index.html',
        // Add more entry points if needed for other pages
        // dashboard: 'src/dashboard/Dashboard.jsx',
        // products: 'src/products/Products.jsx'
      }
    }
  },
});