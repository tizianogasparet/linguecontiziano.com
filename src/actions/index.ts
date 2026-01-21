// src/actions/index.ts
import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';
import { performSearch } from '@/utils/search';
import { LANGUAGES_TUPLE } from '@/i18n/config';

const langEnum = z.enum(LANGUAGES_TUPLE);

export const server = {
  search: defineAction({
    input: z.object({
      query: z.string().min(2),
      lang: langEnum,
    }),
    handler: async ({ query, lang }) => {
      try {
        const results = await performSearch(query, lang);
        return results;
      } catch (e) {
        console.error('[Search Action Error]:', e);
        return [];
      }
    },
  }),
};