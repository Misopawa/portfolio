import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://Misopawa.github.io',
  base: '/portfolio', 
  integrations: [tailwind()],
});