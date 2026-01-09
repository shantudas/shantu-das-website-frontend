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
            My Projects
          </h1>
          <p class="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            A showcase of mobile applications built with cutting-edge technologies and innovative solutions
          </p>
        </div>
      </div>
    </section>

    <!-- Projects Grid -->
    <section class="py-24 sm:py-32 bg-gray-50">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center mb-16">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            All Projects
          </h2>
          <p class="mt-6 text-lg leading-8 text-gray-600">
            Mobile applications that have made a real impact
          </p>
        </div>
        
        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <ClientOnly>
            <template v-if="pending">
              <div v-for="i in 6" :key="i" class="animate-pulse">
                <div class="bg-gray-200 rounded-xl h-64"></div>
              </div>
            </template>
            <template v-else>
              <!-- Debug info -->
              <div v-if="!projects || projects.length === 0" class="col-span-3 text-center text-gray-500">
                No projects found. Check API response. Error: {{ error }}
              </div>
              
              <ProjectCard 
                v-for="project in projects" 
                :key="project.id"
                :project="project"
              />
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
useHead({
  title: 'Projects - Shantu Chandra Das',
  meta: [
    { name: 'description', content: 'Portfolio of mobile applications developed by Shantu Chandra Das - Android, Flutter, and AI-integrated solutions.' }
  ]
})

// Fetch projects from API
const { data: projects, error, pending } = await useLazyFetch('/api/projects')
</script>