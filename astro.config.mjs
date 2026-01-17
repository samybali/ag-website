import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  // On laisse Astro gérer le démarrage basique, 
  // mais la sécurité avancée est maintenant gérée par vite.config.js
  server: {
    host: true,
    port: 3000
  }
});