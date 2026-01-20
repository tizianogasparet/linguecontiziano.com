import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import type { LangCode } from '@/i18n/config';

/**
 * Enum lingue valide (attuali)
 */
const langEnum = z.enum(['en', 'it', 'es']);

/**
 * Schema base condiviso da tutte le collezioni
 */
const minimalSchema = z.object({
  translationId: z.string().min(1),
  lang: langEnum,
  title: z.string().min(1),
});

/**
 * Collezione BLOG
 */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/blog' }),
  schema: minimalSchema.extend({
    description: z.string().min(1),
    pubDate: z.coerce.date(),
    updateDate: z.coerce.date().optional(),
    category: z.enum([
      'cat-autopsia',
      'cat-sistemi',
      'cat-psicologia',
      'cat-esecuzione',
    ]),
    draft: z.boolean().default(false),
  }),
});

/**
 * Collezione PAGINE STATICHE
 */
const pages = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/pages' }),
  schema: minimalSchema.extend({
    description: z.string().min(1),
  }),
});

/**
 * Collezione LEGALI
 */
const legal = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/legal' }),
  schema: minimalSchema.extend({
    updateDate: z.coerce.date(),
  }),
});

/**
 * Tutte le collezioni
 * ✅ Scalabile: aggiungi nuove collezioni senza modificare il resto del sistema
 */
export const collections = { blog, pages, legal };
