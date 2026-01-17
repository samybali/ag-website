import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // 1. On active Tailwind ici
  integrations: [tailwind()],

  // 2. On garde la configuration serveur qui marche
  server: {
    host: true,
    port: 3000
  },
  vite: {
    preview: {
      allowedHosts: ['19wires.com', 'www.19wires.com', 'localhost'],
      host: true,
      port: 3000,
    },
    server: {
      allowedHosts: ['19wires.com', 'www.19wires.com', 'localhost'],
    }
  }
});