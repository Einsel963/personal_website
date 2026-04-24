import { defineCollection, z } from 'astro:content';

// Edit these schemas if you want to add new metadata fields to your Markdown content later.
const news = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string()
  })
});

const research = defineCollection({
  schema: z.object({
    title: z.string(),
    order: z.number(),
    keywords: z.array(z.string()),
    summary: z.string()
  })
});

const publications = defineCollection({
  schema: z.object({
    title: z.string(),
    authors: z.string(),
    venue: z.string(),
    year: z.number(),
    category: z.enum(['preprint', 'in-preparation', 'report']),
    status: z.string().optional()
  })
});

const talks = defineCollection({
  schema: z.object({
    title: z.string(),
    event: z.string(),
    location: z.string(),
    date: z.coerce.date(),
    type: z.enum(['research-talk']),
    category: z.string().optional(),
    year: z.number().optional(),
    status: z.string().optional(),
    pdf: z.string().optional()
  })
});

const notes = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    type: z.string().optional(),
    category: z.enum(['lecture-note', 'technical-note', 'lecture-notes']),
    audience: z.string(),
    year: z.number().optional(),
    status: z.string().optional(),
    pdf: z.string().optional()
  })
});

export const collections = {
  news,
  research,
  publications,
  talks,
  notes
};
