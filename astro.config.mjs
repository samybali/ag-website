// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  vite: {
    server: {
      host: true, // Écoute sur toutes les adresses (0.0.0.0)
    },
    preview: {
      host: true,        // Force l'écoute sur le réseau
      allowedHosts: true, // ✅ DÉSACTIVE LA SÉCURITÉ DES NOMS DE DOMAINE
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    },
  },
});