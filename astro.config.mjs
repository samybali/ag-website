import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  server: {
    host: true,
    port: 3000
  },
  // La partie magique pour corriger l'erreur :
  vite: {
    preview: {
      allowedHosts: ['19wires.com', 'www.19wires.com']
    }
  }
});