<template>
  <div class="relative isolate">
    <!-- Background -->
    <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
      <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-600 to-purple-600 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
    </div>

    <!-- Hero Section -->
    <section class="relative px-6 lg:px-8">
      <div class="mx-auto max-w-4xl pt-20 pb-16 sm:pt-32 sm:pb-24">
        <div class="text-center">
          <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Articles & Insights
          </h1>
          <p class="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Sharing knowledge about mobile development, AI integration, and the latest tech trends
          </p>
        </div>
      </div>
    </section>

    <!-- Articles Grid -->
    <section class="py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:max-w-none">
          <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <article
              v-for="article in articles"
              :key="article.id"
              class="group relative flex flex-col items-start p-6 bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 hover:shadow-lg hover:ring-gray-300 transition-all duration-200"
            >
              <div class="flex items-center gap-x-4 text-xs mb-4">
                <time :datetime="article.publishedAt" class="text-gray-500">
                  {{ formatDate(article.publishedAt) }}
                </time>
                <span class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                  {{ article.category }}
                </span>
                <span class="text-gray-400">•</span>
                <span class="text-gray-500">{{ article.readingTime }}</span>
              </div>

              <h3 class="text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                <NuxtLink :to="`/articles/${article.slug}`">
                  <span class="absolute inset-0"></span>
                  {{ article.title }}
                </NuxtLink>
              </h3>

              <p class="mt-3 text-sm leading-6 text-gray-600 line-clamp-3">
                {{ article.description }}
              </p>

              <!-- <div class="mt-4 flex items-center gap-x-4">
                <div class="text-sm leading-6">
                  <p class="font-semibold text-gray-900">
                    {{ article.author }}
                  </p>
                </div>
              </div> -->

              <div class="mt-4 flex flex-wrap gap-2">
                <span
                  v-for="tag in article.tags.slice(0, 3)"
                  :key="tag"
                  class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10"
                >
                  {{ tag }}
                </span>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <!-- Background decoration -->
    <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
      <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-blue-600 to-purple-600 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
// SEO
useHead({
  title: 'Articles - Shantu Chandra Das',
  meta: [
    { name: 'description', content: 'Technical articles and insights about mobile development, AI integration, and Clean Architecture by Shantu Chandra Das.' }
  ]
})

// Load articles using import.meta.glob
const articles = ref([])

const loadArticles = () => {
  const articleModules = import.meta.glob(
    '/content/articles/*.md',
    {
      query: '?raw',
      import: 'default',
      eager: true
    }
  )

  articles.value = Object.entries(articleModules).map(([path, content]) => {
    const frontmatter = parseFrontmatter(content)

    return {
      ...frontmatter,
      _path: path,
      body: content.replace(/^---[\s\S]*?---\n/, '')
    }
  })
}


// Parse YAML frontmatter
const parseFrontmatter = (content: string) => {
  const match = content.match(/^---\n([\s\S]*?)\n---/)
  if (!match) return {}

  const frontmatter = match[1]
  const lines = frontmatter.split('\n')
  const result = {}

  for (const line of lines) {
    const [key, ...valueParts] = line.split(':')
    if (key && valueParts.length > 0) {
      const value = valueParts.join(':').trim()
      if (value.startsWith('[') && value.endsWith(']')) {
        // Parse array
        result[key.trim()] = value.slice(1, -1).split(',').map(item => item.trim().replace(/"/g, ''))
      } else {
        result[key.trim()] = value.replace(/"/g, '')
      }
    }
  }

  return result
}

onMounted(async () => {
  await loadArticles()
})

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>