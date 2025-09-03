import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Optimizaciones de build para mejor rendimiento
    target: 'es2015',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
    // Optimizar el tamaño del bundle
    chunkSizeWarningLimit: 1000,
  },
  server: {
    // Optimizaciones del servidor de desarrollo
    hmr: {
      overlay: false,
    },
  },
  optimizeDeps: {
    // Pre-bundle de dependencias
    include: ['react', 'react-dom'],
  },
});
