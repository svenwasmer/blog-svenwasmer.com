import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string().optional(),
    published: z.coerce.date(),
    updated: z.coerce.date().optional().or(z.string().optional()),
    draft: z.boolean().optional(),
    author: z.string().optional(),
    lang: z.string().optional(),
    tags: z.array(z.string()).optional(),
    pin: z.number().optional(),
    toc: z.boolean().optional(),
    image: image().optional().or(z.string().optional()),
  }),
});

export const collections = { blog };
