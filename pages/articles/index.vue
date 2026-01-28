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
    <section class="py-24 sm:py-32 bg-gray-50">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center mb-16">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            All Articles
          </h2>
          <p class="mt-6 text-lg leading-8 text-gray-600">
            Technical insights and experiences from the field
          </p>
        </div>
        
        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <ClientOnly>
            <template v-if="!articles || articles.length === 0">
              <div class="col-span-3 text-center text-gray-500">
                No articles found.
              </div>
            </template>
            <template v-else>
              <article
                v-for="article in articles"
                :key="article.id"
                class="group relative flex flex-col items-start p-6 bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 hover:shadow-lg hover:ring-gray-300 transition-all duration-200"
              >
                <div v-if="article.image" class="relative w-full mb-4 overflow-hidden rounded-lg">
                  <img
                    :src="article.image"
                    :alt="article.title"
                    class="w-full h-48 object-cover transition-transform duration-200 group-hover:scale-105"
                  />
                </div>

                <div class="flex items-center gap-x-4 text-xs mb-4">
                  <time v-if="article.date" :datetime="article.date" class="text-gray-500">
                    {{ formatDate(article.date) }}
                  </time>
                  <span v-if="article.minRead" class="text-gray-400">•</span>
                  <span v-if="article.minRead" class="text-gray-500">{{ article.minRead }} min read</span>
                </div>

                <h3 class="text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <NuxtLink :to="article.path">
                    <span class="absolute inset-0"></span>
                    {{ article.title }}
                  </NuxtLink>
                </h3>

                <p class="mt-3 text-sm leading-6 text-gray-600 line-clamp-3">
                  {{ article.description }}
                </p>

                <div v-if="article.author && article.author.name" class="mt-4 flex items-center gap-x-4">
                  <div class="text-sm leading-6">
                    <p class="font-semibold text-gray-900">
                      {{ article.author.name }}
                    </p>
                  </div>
                </div>
              </article>
            </template>
          </ClientOnly>
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
useSeoMeta({
  title: 'Articles - Shantu Chandra Das',
  description: 'Technical articles and insights about mobile development, AI integration, and Clean Architecture by Shantu Chandra Das.'
})

// Fetch articles using Nuxt Content
const { data: articles } = await useAsyncData('articles', async () => {
  try {
    const result = await queryCollection('articles').order('date', 'DESC').all()
    return result
  } catch (error) {
    console.error('Error fetching articles:', error)
    return []
  }
})

const formatDate = (dateString: string | Date) => {
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