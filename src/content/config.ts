import { z, defineCollection } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    titleEn: z.string().optional(),
    date: z.coerce.date(),
    description: z.string(),
    descriptionEn: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

const proyectos = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    titleEn: z.string().optional(),
    description: z.string(),
    descriptionEn: z.string().optional(),
    stack: z.array(z.string()),
    github: z.string().optional(),
    date: z.coerce.date(),
  }),
});

export const collections = { blog, proyectos };
