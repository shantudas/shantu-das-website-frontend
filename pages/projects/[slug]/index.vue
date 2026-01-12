<template>
  <div class="relative isolate min-h-screen">
    <!-- Background -->
    <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
      <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-600 to-purple-600 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
    </div>

    <div v-if="pending" class="flex items-center justify-center min-h-screen">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>

    <div v-else-if="error || !project" class="flex flex-col items-center justify-center min-h-screen px-6">
      <div class="text-center">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">Project Not Found</h1>
        <p class="text-lg text-gray-600 mb-8">The project you're looking for doesn't exist.</p>
        <NuxtLink to="/projects" class="inline-flex items-center gap-x-2 rounded-md bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500">
          <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clip-rule="evenodd" />
          </svg>
          Back to Projects
        </NuxtLink>
      </div>
    </div>

    <div v-else class="mx-auto max-w-7xl px-6 lg:px-8">
      <!-- Back Button -->
      <div class="pt-20 pb-8">
        <NuxtLink to="/projects" class="inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
          <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clip-rule="evenodd" />
          </svg>
          Back to Projects
        </NuxtLink>
      </div>

      <!-- Hero Section -->
      <div class="pb-12 sm:pb-16">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <!-- Left: Content -->
          <div class="order-2 lg:order-1">
            <!-- Featured Badge -->
            <div v-if="project.featured" class="mb-4">
              <span class="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
                ⭐ Featured Project
              </span>
            </div>

            <!-- Title -->
            <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
              {{ project.title }}
            </h1>

            <!-- Description -->
            <p class="text-lg leading-8 text-gray-600 mb-8">
              {{ project.description }}
            </p>

            <!-- Action Buttons -->
            <div class="flex flex-wrap gap-4">
              <a 
                v-if="project.link"
                :href="project.link" 
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-x-2 rounded-md bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors"
              >
                <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clip-rule="evenodd" />
                  <path fill-rule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clip-rule="evenodd" />
                </svg>
                Visit Website
              </a>
              
              <a 
                v-if="project.github"
                :href="project.github" 
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-x-2 rounded-md bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition-colors"
              >
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                </svg>
                View on GitHub
              </a>
            </div>
          </div>

          <!-- Right: Cover Image -->
          <div class="order-1 lg:order-2">
            <div class="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                :src="project.coverImage" 
                :alt="project.title"
                class="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Technologies Section -->
      <div class="border-t border-gray-200 py-12 sm:py-16">
        <div class="mb-8">
          <h2 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Technology Stack
          </h2>
          <p class="mt-2 text-base text-gray-600">
            Built with modern and reliable technologies
          </p>
        </div>
        
        <div class="flex flex-wrap gap-3">
          <span 
            v-for="tech in project.technologies" 
            :key="tech"
            class="inline-flex items-center rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 px-4 py-2.5 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200 hover:ring-blue-600 transition-all hover:scale-105"
          >
            <svg class="mr-2 h-2 w-2 fill-blue-600" viewBox="0 0 6 6">
              <circle cx="3" cy="3" r="3" />
            </svg>
            {{ tech }}
          </span>
        </div>
      </div>

      <!-- Features Section -->
      <div v-if="project.features && project.features.length > 0" class="border-t border-gray-200 py-12 sm:py-16">
        <div class="mb-8">
          <h2 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Key Features
          </h2>
          <p class="mt-2 text-base text-gray-600">
            Comprehensive functionality designed for real-world needs
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div 
            v-for="(feature, index) in project.features" 
            :key="index"
            class="flex gap-x-3 rounded-lg bg-white p-4 ring-1 ring-gray-200 hover:ring-blue-600 hover:shadow-md transition-all"
          >
            <div class="flex-shrink-0">
              <div class="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600">
                <svg class="h-3.5 w-3.5 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                </svg>
              </div>
            </div>
            <div class="flex-1">
              <p class="text-sm leading-6 text-gray-700">{{ feature }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Project Stats / Highlights (if available) -->
      <div class="border-t border-gray-200 py-12 sm:py-16">
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div class="relative overflow-hidden rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 px-6 py-8 shadow-lg">
            <div class="text-sm font-medium text-blue-100 mb-2">Platform</div>
            <div class="text-3xl font-bold text-white">
              {{ project.technologies[0] }}
            </div>
          </div>
          
          <div class="relative overflow-hidden rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 px-6 py-8 shadow-lg">
            <div class="text-sm font-medium text-purple-100 mb-2">Status</div>
            <div class="text-3xl font-bold text-white">
              {{ project.link ? 'Live' : 'In Development' }}
            </div>
          </div>
          
          <div class="relative overflow-hidden rounded-lg bg-gradient-to-br from-pink-500 to-pink-600 px-6 py-8 shadow-lg">
            <div class="text-sm font-medium text-pink-100 mb-2">Architecture</div>
            <div class="text-2xl font-bold text-white">
              {{ project.technologies.includes('Clean Architecture') ? 'Clean' : project.technologies.includes('MVVM') ? 'MVVM' : 'Modern' }}
            </div>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="border-t border-gray-200 py-12 sm:py-16">
        <div class="text-center">
          <h2 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-4">
            Interested in similar solutions?
          </h2>
          <p class="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how I can help bring your mobile app ideas to life with cutting-edge technology.
          </p>
          <div class="flex justify-center gap-4">
            <NuxtLink to="/contact" class="inline-flex items-center gap-x-2 rounded-md bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors">
              Get in Touch
              <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd" />
              </svg>
            </NuxtLink>
            <NuxtLink to="/projects" class="inline-flex items-center gap-x-2 rounded-md bg-white px-6 py-3 text-base font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition-colors">
              View All Projects
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Background decoration -->
    <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
      <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-blue-600 to-purple-600 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug as string

// Fetch all projects
const { data: projectsData, error, pending } = await useLazyFetch('/data/projects.json')

// Find the project by slug
const project = computed(() => {
  if (!projectsData.value || !Array.isArray(projectsData.value)) return null
  return projectsData.value.find((p: any) => p.slug === slug)
})

// SEO
useHead({
  title: computed(() => project.value ? `${project.value.title} - Shantu Chandra Das` : 'Project - Shantu Chandra Das'),
  meta: [
    { 
      name: 'description', 
      content: computed(() => project.value?.description || 'Mobile development project by Shantu Chandra Das')
    }
  ]
})
</script>
