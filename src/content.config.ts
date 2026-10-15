import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/* Blog posts live as plain Markdown — a deliberate departure from the rest
   of the site's data-file-driven pattern (spaces.ts/plans.ts): real articles
   are long-form prose, which belongs in Markdown, not escaped inside JS
   template strings. `space` (optional) ties a post back to one of the six
   spaces' slugs in src/data/spaces.ts, for cross-linking in the post CTA. */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    space: z.string().optional(),
  }),
});

export const collections = { blog };
