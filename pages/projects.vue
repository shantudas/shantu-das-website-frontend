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
    <section class="py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center mb-16">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            All Projects
          </h2>
          <p class="mt-6 text-lg leading-8 text-gray-600">
            Mobile applications that have made a real impact
          </p>
        </div>
        
        <div class="mx-auto grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <article 
            v-for="project in allProjects" 
            :key="project.id"
            class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80 hover:scale-105 transition-transform duration-300"
          >
            <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
            <div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
            
            <div class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
              <span class="mr-8">{{ project.category }}</span>
              <div class="-ml-4 flex items-center gap-x-4">
                <svg viewBox="0 0 2 2" class="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                  <circle cx="1" cy="1" r="1" />
                </svg>
                <span>{{ project.status }}</span>
              </div>
            </div>
            <h3 class="mt-3 text-lg font-semibold leading-6 text-white">
              {{ project.title }}
            </h3>
            <p class="mt-2 text-sm leading-6 text-gray-300">{{ project.description }}</p>
            <div class="mt-4 flex flex-wrap gap-2">
              <span 
                v-for="tech in project.technologies" 
                :key="tech"
                class="inline-flex items-center rounded-md bg-blue-400/10 px-2 py-1 text-xs font-medium text-blue-400 ring-1 ring-inset ring-blue-400/20"
              >
                {{ tech }}
              </span>
            </div>
            <div class="mt-4">
              <span class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                {{ project.downloads }}
              </span>
            </div>
          </article>
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

const allProjects = ref([
  {
    id: 1,
    title: 'Niyog',
    category: 'AI-Powered',
    description: 'AI-based job matching platform providing personalized job recommendations tailored to user skills and preferences.',
    technologies: ['Android', 'Kotlin', 'AI/ML', 'Clean Architecture'],
    downloads: '100K+ Downloads',
    status: 'Live'
  },
  {
    id: 2,
    title: 'Blaze',
    category: 'Identity Verification',
    description: 'AI-powered identity verification app with facial recognition and document scanning capabilities.',
    technologies: ['Flutter', 'Vertex AI', 'Computer Vision', 'Security'],
    downloads: '50K+ Downloads',
    status: 'Live'
  },
  {
    id: 3,
    title: 'MUV Ride-Sharing',
    category: 'Transportation',
    description: 'Complete ride-sharing platform with real-time tracking, dynamic pricing, and secure payment integration.',
    technologies: ['Android', 'Java', 'Real-time Tracking', 'Payment Gateway'],
    downloads: '100K+ Downloads',
    status: 'Live'
  },
  {
    id: 4,
    title: 'MUV HRT',
    category: 'Human Resources',
    description: 'Human Resource and field force management application for daily call planning and visit tracking.',
    technologies: ['Android', 'Java', 'Field Management', 'Analytics'],
    downloads: '1K+ Daily Users',
    status: 'Live'
  },
  {
    id: 5,
    title: 'Frontliner',
    category: 'Security',
    description: 'Secure visitor management system with pre-registration, contactless check-in/out, and badge printing.',
    technologies: ['Android', 'Kotlin', 'Security', 'Real-time Tracking'],
    downloads: '10K+ Downloads',
    status: 'Live'
  },
  {
    id: 6,
    title: 'Grid Delivery',
    category: 'Logistics',
    description: 'Furniture delivery management app with route optimization and real-time tracking.',
    technologies: ['Android', 'Kotlin', 'Route Optimization', 'GPS'],
    downloads: '5K+ Downloads',
    status: 'Live'
  },
  {
    id: 7,
    title: 'Rangs Dealer Shop',
    category: 'E-commerce',
    description: 'End-to-end dealer application for inventory management, sales tracking, and analytics.',
    technologies: ['Android', 'Kotlin', 'Analytics', 'Inventory Management'],
    downloads: '20K+ Downloads',
    status: 'Live'
  }
])
</script>