// vite.config.js
import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'url';

export default defineConfig({
  resolve: {
    alias: {
      //Facilita el acceso a la carpeta src/ para futuras referencias url en el proyecto.
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
