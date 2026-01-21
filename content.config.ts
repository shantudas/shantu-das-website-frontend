import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md',
      schema: z.object({
        id: z.string(),
        slug: z.string(),
        title: z.string(),
        description: z.string(),
        date: z.string(),
        author: z.string(),
        category: z.string(),
        tags: z.array(z.string()),
        readingTime: z.string(),
        navigation: z.object({
          title: z.string().optional(),
          description: z.string().optional(),
        }).optional(),
        excerpt: z.object({
          type: z.string(),
          children: z.any(),
        }).optional(),
      })
    })
  }
})