import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  
  // Configuration du serveur de développement
  server: {
    host: true,
    port: 3000
  },

  // Configuration du serveur de prévisualisation (celui qui tourne sur Coolify)
  vite: {
    preview: {
      host: true,
      port: 3000,
      allowedHosts: true, // <--- LA SOLUTION : On autorise TOUT
    }
  }
});