// src/content.config.ts
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro:schema';
import { LANGUAGES_TUPLE } from '@/i18n/config';

const langEnum = z.enum(LANGUAGES_TUPLE);

const baseSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  lang: langEnum,
  translationId: z.string().min(1),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/blog' }),
  schema: baseSchema.extend({
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

const pages = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/pages' }),
  schema: baseSchema,
});

const legal = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/legal' }),
  schema: baseSchema.extend({
    updateDate: z.coerce.date(),
  }),
});

export const collections = { blog, pages, legal };