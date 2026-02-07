import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { LANGUAGES_TUPLE } from '@/i18n/config';

const langEnum = z.enum(LANGUAGES_TUPLE);

// Schema SEO per contenuti indicizzabili
const seoSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(10).max(160),
  lang: langEnum,
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: seoSchema.extend({
    pubDate: z.coerce.date(),
    category: z.enum([
      'cat-autopsia',
      'cat-sistemi',
      'cat-psicologia',
      'cat-esecuzione',
    ]),
    draft: z.boolean().default(false),
  }),
});

const dictionary = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/dictionary' }),
  schema: seoSchema.extend({
    ipa: z.string(), // Trascrizione fonetica obbligatoria
    draft: z.boolean().default(false),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: seoSchema,
});

const legal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/legal' }),
  schema: z.object({
    title: z.string().min(1),
    lang: langEnum,
    updateDate: z.coerce.date(),
  }),
});

export const collections = { blog, dictionary, pages, legal };