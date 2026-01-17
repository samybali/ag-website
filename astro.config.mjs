import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  server: {
    host: true,
    port: 3000
  },
  vite: {
    preview: {
      allowedHosts: true,
      host: true,
      port: 3000,
    },
    server: {
      allowedHosts: true,
      host: true
    }
  }
});