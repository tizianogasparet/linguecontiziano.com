// astro.config.ts
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';
import mdx from '@astrojs/mdx';
import { supportedLanguages, defaultLang } from './src/i18n/config';

export default defineConfig({
  site: 'https://linguecontiziano.com',
  i18n: {
    locales: supportedLanguages,
    defaultLocale: defaultLang,
    routing: {
      prefixDefaultLocale: false,
      fallbackType: 'redirect',
    },
  },
  integrations: [sitemap(), mdx()],
  adapter: node({ mode: 'standalone' }),
  build: { inlineStylesheets: 'always' },
});