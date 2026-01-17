import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: true,
    port: 3000,
    allowedHosts: ['19wires.com', 'www.19wires.com', 'localhost']
  },
  preview: {
    host: true,
    port: 3000,
    allowedHosts: ['19wires.com', 'www.19wires.com', 'localhost']
  }
});