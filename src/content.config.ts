import { glob } from 'astro/loaders'
import { defineCollection, z, type CollectionEntry } from 'astro:content'

const blog = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: 'src/content/blog/' }),
    schema: z.object({
        draft: z.boolean().default(false),
        featured: z.boolean().default(false),
        title: z.string(),
        publishDate: z.date(),
        modifiedDate: z.date().optional(),
        description: z.string(),
        tags: z.array(z.string()).default([]),
    })
})

const sponsors = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: 'src/content/sponsors/' }),
    schema: z.object({
        name: z.string(),
        alt: z.string(),
        link: z.string().url()
    })
})

export const collections = { blog, sponsors }

export type PostData = CollectionEntry<'blog'>
export type SponsorData = CollectionEntry<'sponsors'>