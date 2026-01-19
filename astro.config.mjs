// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import node from "@astrojs/node";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: 'https://linguecontiziano.com',
  
  i18n: {
    locales: ["it", "en", "es"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: false,
      fallbackType: "redirect"
    }
  },

  integrations: [
    sitemap({
      // Esclude le pagine legali dalla sitemap per un SEO pulito
      filter: (page) => 
        !page.includes('privacy-policy') && 
        !page.includes('cookie-policy') && 
        !page.includes('termini-e-condizioni') &&
        !page.includes('terms-and-conditions') &&
        !page.includes('politica-de-privacidad')
    }), 
    mdx()
  ],

  adapter: node({
    mode: "standalone"
  }),

  // Ottimizzazioni build
  build: {
    inlineStylesheets: 'always'
  }
});