import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { supportedLanguages, defaultLang } from './src/i18n/config';

export default defineConfig({
  site: 'https://linguecontiziano.com',
  output: 'static',
  i18n: {
    locales: supportedLanguages,
    defaultLocale: defaultLang,
    routing: {
      prefixDefaultLocale: false, // en -> /, it -> /it/
      fallbackType: 'redirect'
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-GB',
          it: 'it-IT',
          es: 'es-ES',
        },
      },
    }),
  ],
});