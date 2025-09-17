import { glob } from 'astro/loaders'
import { defineCollection, z } from 'astro:content'
import { allLocales, themeConfig } from '@/config'

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    // required
    title: z.string(),

    // published: accept string or Date, coerce to Date
    published: z.preprocess(
      (val) => (typeof val === 'string' ? new Date(val) : val),
      z.date()
    ),

    // optional
    description: z.string().optional().default(''),

    updated: z.preprocess(
      (val) => (val === '' ? undefined : typeof val === 'string' ? new Date(val) : val),
      z.date().optional()
    ),

    tags: z.array(z.string()).optional().default([]),

    // NEW: coerce pin to a number (true→1, false→0, strings→number)
    pin: z.preprocess((val) => {
      if (typeof val === 'boolean') return val ? 1 : 0;
      if (typeof val === 'string' && val.trim() !== '') return Number(val);
      return val ?? 0;
    }, z.number().int().min(0).max(99)).optional().default(0),

    // keep your existing fields
    draft: z.boolean().optional().default(false),
    toc: z.boolean().optional().default(themeConfig.global.toc),
    lang: z.enum(['', ...allLocales]).optional().default(''),
    abbrlink: z.string().optional().default('').refine(
      abbrlink => !abbrlink || /^[a-z0-9\-]*$/.test(abbrlink),
      { message: 'Abbrlink can only contain lowercase letters, numbers and hyphens' },
    ),

    // (optional extras you added earlier)
    slug: z.string().optional(),
    author: z.string().optional().default('Sven'),
    image: z.string().optional(),
    canonicalUrl: z.string().url().optional(),
  }),
})


const about = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/about' }),
  schema: z.object({
    lang: z.enum(['', ...allLocales]).optional().default(''),
  }),
})

export const collections = { posts, about }
