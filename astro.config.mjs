import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://sh-ui.github.io',
  base: '/turkey-day-2025',
  integrations: [sitemap()],
  output: 'static',
  trailingSlash: 'ignore'
});

