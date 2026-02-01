// astro.config.ts
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import { supportedLanguages, defaultLang } from './src/i18n/config';

export default defineConfig({
  site: 'https://linguecontiziano.com', 
  output: 'static',
  i18n: {
    locales: supportedLanguages,
    defaultLocale: defaultLang,
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [],
  adapter: node({ mode: 'standalone' }),
  build: { inlineStylesheets: 'always' },
});