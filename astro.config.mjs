import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import alpinejs from '@astrojs/alpinejs';

export default defineConfig({
  site: 'https://Misopawa.github.io',
  base: '/portfolio',
  integrations: [
    alpinejs(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});