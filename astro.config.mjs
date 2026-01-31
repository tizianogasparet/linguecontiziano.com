// astro.config.ts
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

export default defineConfig({
  site: 'https://linguecontiziano.com', 
  integrations: [], 
  adapter: node({ mode: 'standalone' }),
  build: { inlineStylesheets: 'always' },
});