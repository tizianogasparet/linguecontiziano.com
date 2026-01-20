// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';
import mdx from '@astrojs/mdx';

/**
 * ⚠️ FILE IMMUTABILE
 * NON deve conoscere:
 * - lingue specifiche
 * - pagine
 * - categorie
 *
 * Le lingue sono importate come dato.
 */

// IMPORT STATICO (Node-safe)
import { supportedLanguages, defaultLang } from './src/i18n/config.ts';

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

  integrations: [
    /**
     * Sitemap:
     * - Rispetta automaticamente `sitemap: false` nel frontmatter
     * - Zero filtri hardcoded
     * - Zero manutenzione futura
     */
    sitemap(),
    mdx(),
  ],

  adapter: node({
    mode: 'standalone',
  }),

  build: {
    inlineStylesheets: 'always',
  },
});
