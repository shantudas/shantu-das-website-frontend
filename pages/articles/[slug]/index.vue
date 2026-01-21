<template>
  <div class="relative isolate">
    <!-- Top Background -->
    <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
      <div
        class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-600 to-purple-600 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]">
      </div>
    </div>

    <div class="relative px-6 lg:px-8">
      <div class="mx-auto max-w-4xl pt-20 pb-16 sm:pt-32 sm:pb-24">
        <div class="mb-8">
          <NuxtLink to="/articles"
            class="inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-900">
            <svg class="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back to Articles
          </NuxtLink>
        </div>

        <header class="text-center">
          <div class="flex items-center justify-center gap-x-4 text-xs mb-4">
            <time :datetime="article?.publishedAt" class="text-gray-500">
              {{ formatDate(article?.publishedAt) }}
            </time>
            <span class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600">
              {{ article?.category }}
            </span>
            <span class="text-gray-400">•</span>
            <span class="text-gray-500">{{ article?.readingTime }}</span>
          </div>

          <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
            {{ article?.title }}
          </h1>

          <p class="text-lg leading-8 text-gray-600 max-w-2xl mx-auto mb-8">
            {{ article?.description }}
          </p>

          <!-- <div class="flex items-center justify-center gap-x-4 mb-8">
            <div class="text-sm leading-6">
              <p class="font-semibold text-gray-900">{{ article?.author }}</p>
            </div>
          </div> -->

             <!-- <pre>article {{ article }}</pre> -->

          <div class="flex flex-wrap justify-center gap-2 mb-8">
            <span v-for="tag in article?.tags" :key="tag"
              class="inline-flex items-center rounded-md bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
              {{ tag }}
            </span>
          </div>
        </header>

        <template>
          <h1 class="text-4xl">
            <slot mdc-unwrap="p" />
          </h1>
        </template>

        <article class="prose prose-lg prose-gray mx-auto mt-16 max-w-none">
          <MDC v-if="article" :value="article.body" />
          <div v-else class="text-center py-16 text-gray-400">
            Loading article...
          </div>
        </article>

        <footer class="mt-16 pt-8 border-t border-gray-200">
          <div class="flex items-center justify-between flex-wrap gap-y-4">
            <div class="flex items-center gap-x-4">
              <div class="text-sm leading-6">
                <p class="font-semibold text-gray-900">{{ article?.author }}</p>
                <p class="text-gray-600">Senior Mobile App Developer</p>
              </div>
            </div>
            <div class="flex gap-x-4">
              <button class="text-gray-400 hover:text-gray-500">
                <span class="sr-only">Share on Twitter</span>
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
                </svg>
              </button>
              <button class="text-gray-400 hover:text-gray-500">
                <span class="sr-only">Share on LinkedIn</span>
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                    clip-rule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </footer>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { useRoute, useHead, watchEffect } from '#imports'

// Get slug from route
const route = useRoute()
const slug = route.params.slug as string

// Parse YAML frontmatter
const parseFrontmatter = (content: string) => {
  const match = content.match(/^---\n([\s\S]*?)\n---/)
  if (!match) return {}

  const frontmatter = match[1]
  const lines = frontmatter.split('\n')
  const result: any = {}

  for (const line of lines) {
    const [key, ...valueParts] = line.split(':')
    if (key && valueParts.length > 0) {
      const value = valueParts.join(':').trim()
      if (value.startsWith('[') && value.endsWith(']')) {
        // Parse array
        result[key.trim()] = value.slice(1, -1).split(',').map((item: string) => item.trim().replace(/"/g, ''))
      } else {
        result[key.trim()] = value.replace(/"/g, '')
      }
    }
  }

  return result
}

// Load articles using import.meta.glob (same as list page)
const articleModules = import.meta.glob('/content/articles/*.md', {
  query: '?raw',
  import: 'default',
  eager: true
})

const allArticles = Object.entries(articleModules).map(([path, content]) => {
  const frontmatter = parseFrontmatter(content as string)
  return {
    ...frontmatter,
    _path: path,
    body: (content as string).replace(/^---[\s\S]*?---\n/, '')
  }
})

// Find the article by slug
const article = computed(() => allArticles.find(a => a.slug === slug))

// Format date helper
const formatDate = (dateString?: string) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// Set SEO after article loads
watchEffect(() => {
  if (!article.value) return

  useHead({
    title: article.value.title,
    meta: [
      {
        name: 'description',
        content: article.value.description || ''
      }
    ]
  })
})
</script>