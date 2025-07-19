// vite.config.js
import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'url';

// Detecta si estamos en dev-server o build de producción.
export default defineConfig(({ command }) => ({
  // En desarrollo: "/", en GitHub Pages: "/productify/"
  base: command === 'build' ? '/productify/' : '/',
  resolve: {
    alias: {
      // Facilita el acceso a la carpeta src/
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
}));