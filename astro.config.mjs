import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  // On laisse Astro compiler le site normalement.
  // Plus besoin de config "server" ou "vite" ici car on utilise "serve" en prod.
});