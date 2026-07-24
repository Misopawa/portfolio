import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://Misopawa.github.io',
  base: '/portfolio', 
  integrations: [tailwind()],
});