<template>
  <UMain class="mt-20 px-4">
    <UContainer class="relative min-h-screen max-w-7xl mx-auto">
      <UPage v-if="page">
        <ULink to="/articles" class="text-sm flex items-center gap-1 text-gray-600 hover:text-gray-900 mb-8">
          <UIcon name="lucide:chevron-left" />
          Back To Articles
        </ULink>

        <!-- Centered Article Header -->
        <div class="max-w-4xl mx-auto mb-12">
          <div class="flex text-xs text-gray-500 items-center justify-center gap-2 mb-4">
            <span v-if="page.series" class="inline-flex items-center rounded-full bg-purple-50 px-3 py-1.5 text-xs font-semibold text-purple-700 ring-1 ring-inset ring-purple-700/10">
              {{ page.series }}
            </span>
            <span v-if="page.date">
              {{ formatDate(page.date) }}
            </span>
            <span v-if="page.date && page.minRead">•</span>
            <span v-if="page.minRead">
              {{ page.minRead }} MIN READ
            </span>
          </div>
          <NuxtImg v-if="page.image" :src="page.image" :alt="page.title"
            class="rounded-lg w-full h-full object-fill object-center mb-6" />
          <h1 class="text-4xl text-center font-bold max-w-3xl mx-auto mb-4">
            {{ page.title }}
          </h1>
          <p class="text-gray-600 text-center max-w-2xl mx-auto text-lg mb-4">
            {{ page.description }}
          </p>
  
          <!-- article tags -->
          <div v-if="page.tags && page.tags.length > 0" class="flex flex-wrap gap-2 justify-center mt-6">
            <span
              v-for="tag in page.tags"
              :key="tag"
              class="inline-flex items-center rounded-full bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10"
            >
              {{ tag }}
            </span>
          </div>
        </div>

        <!-- Two Column Layout: Content + TOC -->
        <div class="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8 max-w-6xl mx-auto">
          <!-- Main Content -->
          <div class="prose prose-gray max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h3:text-xl prose-p:text-gray-700 prose-p:leading-relaxed border border-gray-200 px-6 py-6 rounded-lg bg-white">
            <ContentRenderer v-if="page.body" :value="page" />
          </div>

          <!-- Table of Contents Sidebar -->
          <aside class="hidden lg:block">
            <div class="sticky top-24 bg-gray-50 border border-gray-200 px-6 py-2 rounded-lg">
              <UContentToc :links="page.body?.toc?.links || []" class="text-sm" />
            </div>
          </aside>
        </div>

        <!-- Navigation to Previous/Next Articles -->
        <div v-if="filteredSurround.length > 0 && (filteredSurround[0] || filteredSurround[1])" class="mt-16 mb-12 max-w-6xl mx-auto">
          <div v-if="page.series" class="text-center mb-6">
            <span class="inline-flex items-center rounded-full bg-purple-50 px-4 py-2 text-sm font-semibold text-purple-700 ring-1 ring-inset ring-purple-700/10">
              More from {{ page.series }}
            </span>
          </div>
          <UContentSurround :surround="filteredSurround" />
        </div>
      </UPage>
    </UContainer>
  </UMain>
</template>

<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'
import { mapContentNavigation } from '@nuxt/ui/utils/content'
import { findPageBreadcrumb } from '@nuxt/content/utils'

const route = useRoute()
const slug = route.params.slug as string

const { data: page } = await useAsyncData(`article-${slug}`, () =>
  queryCollection('articles').path(`/articles/${slug}`).first()
)
if (!page.value) throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })

// Get all published articles for surround navigation
const { data: allArticles } = await useAsyncData('all-articles', () =>
  queryCollection('articles')
    .where('status', '=', 'published')
    .order('date', 'DESC')
    .all()
)

// Filter and create surround navigation based on series
const filteredSurround = computed(() => {
  if (!allArticles.value || !page.value) return []
  
  const currentSeries = page.value.series
  const currentPath = page.value.path
  
  // Filter articles based on series
  let articles = allArticles.value
  if (currentSeries) {
    articles = articles.filter((article: any) => article.series === currentSeries)
  }
  
  // Find current article index
  const currentIndex = articles.findIndex((article: any) => article.path === currentPath)
  if (currentIndex === -1) return []
  
  // Create surround array [prev, next]
  const surround: any[] = []
  
  // Previous article
  if (currentIndex > 0) {
    surround[0] = articles[currentIndex - 1]
  } else {
    surround[0] = null
  }
  
  // Next article
  if (currentIndex < articles.length - 1) {
    surround[1] = articles[currentIndex + 1]
  } else {
    surround[1] = null
  }
  
  return surround
})

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation', ref([]))
const articlesNavigation = computed(() => navigation.value.find(item => item.path === '/articles')?.children || [])

const breadcrumb = computed(() => mapContentNavigation(findPageBreadcrumb(articlesNavigation?.value, page.value?.path)).map(({ icon, ...link }) => link))

const title = page.value?.title
const description = page.value?.description

useSeoMeta({
  title,
  description,
  ogDescription: description,
  ogTitle: title,
  ogImage: page.value?.image
})

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

// Enable smooth scrolling for TOC links
onMounted(() => {
  document.documentElement.style.scrollBehavior = 'smooth'
})

onUnmounted(() => {
  document.documentElement.style.scrollBehavior = ''
})
</script>