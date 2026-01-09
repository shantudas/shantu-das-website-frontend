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
          <div class="mt-8">
            <span class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
              Coming Soon
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Coming Soon Content -->
    <section class="py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
          <div class="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 mb-8">
            <svg class="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0-1.125-.504-1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
            </svg>
          </div>
          
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
            Articles Coming Soon
          </h2>
          
          <p class="text-lg leading-8 text-gray-600 mb-12">
            I'm currently working on creating valuable content about mobile development, 
            Clean Architecture patterns, AI integration techniques, and my experiences 
            building apps with 300K+ downloads.
          </p>

          <dl class="mx-auto grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
            <div>
              <dt class="font-semibold text-gray-900">Mobile Development</dt>
              <dd class="mt-1">Android, Flutter best practices and performance optimization tips</dd>
            </div>
            <div>
              <dt class="font-semibold text-gray-900">AI Integration</dt>
              <dd class="mt-1">Real-world AI implementation in mobile apps with practical examples</dd>
            </div>
            <div>
              <dt class="font-semibold text-gray-900">Clean Architecture</dt>
              <dd class="mt-1">Scalable app architecture patterns and code organization strategies</dd>
            </div>
          </dl>

          <div class="mt-16">
            <h3 class="text-xl font-semibold text-gray-900 mb-6">Planned Article Topics</h3>
            <div class="flex flex-wrap justify-center gap-2 mb-8">
              <span v-for="topic in plannedTopics" :key="topic" class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-sm font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                {{ topic }}
              </span>
            </div>
          </div>

          <div class="mt-10 flex items-center justify-center gap-x-6">
            <NuxtLink 
              to="/contact"
              class="rounded-md bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
            >
              Get notified when articles go live
            </NuxtLink>
            <NuxtLink 
              to="/contact" 
              class="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-700"
            >
              Suggest a topic <span aria-hidden="true">→</span>
            </NuxtLink>
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

const plannedTopics = ref([
  'Building Scalable Android Apps',
  'Flutter Performance Optimization', 
  'AI-Powered Mobile Features',
  'Clean Architecture in Practice',
  'Kotlin Multiplatform Journey',
  'Mobile App Security'
])
</script>