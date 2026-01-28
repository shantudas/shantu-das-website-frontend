import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    articles: defineCollection({
      type: 'page',
      source: 'articles/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string(),
        image: z.string(),
        minRead: z.number(),
        author: z.object({
          name: z.string(),
          avatar: z.object({
            src: z.string(),
            alt: z.string()
          }).optional()
        })
      })
    })
  }
})