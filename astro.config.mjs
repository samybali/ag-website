import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],

  // Configuration du serveur
  server: {
    host: true,
    port: 3000
  },

  // Configuration de Vite (C'est ici qu'on corrige l'erreur)
  vite: {
    preview: {
      host: true,
      port: 3000,
      // On liste TOUS les noms possibles explicitement
      allowedHosts: [
        '19wires.com',
        'www.19wires.com',
        'localhost',
        '127.0.0.1'
      ]
    }
  }
});