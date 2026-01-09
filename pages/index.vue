<template>
  <div class="relative isolate overflow">
    <!-- Background -->
    <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
      <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-600 to-purple-600 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
    </div>

    <!-- Hero Section -->
    <section class="relative px-6 lg:px-8">
      <div class="mx-auto max-w-3xl pt-32 pb-24 sm:pt-40 sm:pb-32">
        <div class="text-center">
          <!-- Profile Image -->
          <div class="mb-8 flex justify-center">
            <div class="relative h-24 w-24 sm:h-32 sm:w-32">
              <div class="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-0.5">
                <div class="flex h-full w-full items-center justify-center rounded-full bg-white text-2xl sm:text-4xl font-bold text-gray-900">
                  SD
                </div>
              </div>
            </div>
          </div>

          <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Shantu Chandra Das
          </h1>
          
          <p class="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Senior Mobile Application Developer with 8+ years of experience in Android, Flutter, and AI-integrated mobile solutions.
          </p>
          
          <div class="mt-8 flex items-center justify-center gap-x-6">
            <NuxtLink 
              to="/projects"
              class="rounded-md bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition-colors"
            >
              View my work
            </NuxtLink>
            <NuxtLink 
              to="/contact" 
              class="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-700 transition-colors"
            >
              Get in touch <span aria-hidden="true">→</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="py-16 sm:py-24">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
          <h2 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Technical Expertise
          </h2>
          <p class="mt-4 text-base leading-7 text-gray-600">
            Specialized in building scalable, secure, and high-performance mobile applications.
          </p>
        </div>
        
        <div class="mx-auto mt-12 max-w-2xl sm:mt-16 lg:mt-20 lg:max-w-none">
          <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-12 lg:max-w-none lg:grid-cols-3">
            <div class="flex flex-col items-center text-center">
              <dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <div class="h-5 w-5 flex-none rounded-full bg-blue-600"></div>
                Android Development
              </dt>
              <dd class="mt-4 flex flex-auto flex-col text-sm leading-6 text-gray-600">
                <p class="flex-auto">Java, Kotlin, Clean Architecture, MVVM, Jetpack Compose, and modern Android development practices.</p>
              </dd>
            </div>
            <div class="flex flex-col items-center text-center">
              <dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <div class="h-5 w-5 flex-none rounded-full bg-purple-600"></div>
                Flutter Development
              </dt>
              <dd class="mt-4 flex flex-auto flex-col text-sm leading-6 text-gray-600">
                <p class="flex-auto">Cross-platform development with Dart, state management, and custom UI implementations.</p>
              </dd>
            </div>
            <div class="flex flex-col items-center text-center">
              <dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <div class="h-5 w-5 flex-none rounded-full bg-cyan-600"></div>
                AI Integration
              </dt>
              <dd class="mt-4 flex flex-auto flex-col text-sm leading-6 text-gray-600">
                <p class="flex-auto">Machine learning models, computer vision, and AI-powered features in mobile applications.</p>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="bg-gray-50 py-16 sm:py-24">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:max-w-none">
          <div class="text-center">
            <h2 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Impact & Results
            </h2>
            <p class="mt-4 text-base leading-7 text-gray-600">
              Building applications that make a difference
            </p>
          </div>
          <dl class="mt-12 grid grid-cols-2 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-4">
            <div class="flex flex-col bg-white p-6">
              <dt class="text-xs font-semibold leading-5 text-gray-600">Years of Experience</dt>
              <dd class="order-first text-2xl font-semibold tracking-tight text-gray-900">8+</dd>
            </div>
            <div class="flex flex-col bg-white p-6">
              <dt class="text-xs font-semibold leading-5 text-gray-600">App Downloads</dt>
              <dd class="order-first text-2xl font-semibold tracking-tight text-gray-900">300K+</dd>
            </div>
            <div class="flex flex-col bg-white p-6">
              <dt class="text-xs font-semibold leading-5 text-gray-600">Projects Delivered</dt>
              <dd class="order-first text-2xl font-semibold tracking-tight text-gray-900">25+</dd>
            </div>
            <div class="flex flex-col bg-white p-6">
              <dt class="text-xs font-semibold leading-5 text-gray-600">Performance Improvement</dt>
              <dd class="order-first text-2xl font-semibold tracking-tight text-gray-900">40%</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>

    <!-- Featured Projects -->
    <section class="py-16 sm:py-24">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
          <h2 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Featured Projects</h2>
          <p class="mt-4 text-base leading-7 text-gray-600">
            Showcasing innovative mobile applications with cutting-edge technology
          </p>
        </div>
        <div class="mx-auto mt-12 grid max-w-2xl auto-rows-fr grid-cols-1 gap-6 sm:mt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <article 
            v-for="project in featuredProjects" 
            :key="project.title"
            class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-6 pb-6 pt-64 sm:pt-48 lg:pt-64"
          >
            <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
            <div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
            
            <div class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
              <div class="mr-8">{{ project.category }}</div>
              <div class="-ml-4 flex items-center gap-x-4">
                <svg viewBox="0 0 2 2" class="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                  <circle cx="1" cy="1" r="1" />
                </svg>
                <div class="flex gap-x-2.5">{{ project.status }}</div>
              </div>
            </div>
            <h3 class="mt-3 text-lg font-semibold leading-6 text-white">
              <span class="absolute inset-0"></span>
              {{ project.title }}
            </h3>
            <p class="mt-2 text-sm leading-6 text-gray-300">{{ project.description }}</p>
          </article>
        </div>
        <div class="mt-12 text-center">
          <NuxtLink 
            to="/projects"
            class="inline-flex items-center gap-x-2 rounded-md bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition-colors"
          >
            View all projects
            <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
            </svg>
          </NuxtLink>
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
import { ref } from 'vue'

// SEO
useHead({
  title: 'Shantu Chandra Das - Senior Mobile App Developer',
  meta: [
    { name: 'description', content: 'Senior Mobile Application Developer with 8+ years experience in Android, Flutter, and AI-integrated solutions. Based in Dhaka, Bangladesh.' },
    { property: 'og:title', content: 'Shantu Chandra Das - Senior Mobile App Developer' },
    { property: 'og:description', content: 'Expert in Android, Flutter, and Clean Architecture with 300K+ app downloads' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' }
  ]
})

// Featured projects data
const featuredProjects = ref([
  {
    title: 'Niyog',
    category: 'AI-Powered',
    description: 'AI-based job matching platform with personalized recommendations and smart filtering for enhanced user experience.',
    status: 'Live'
  },
  {
    title: 'Blaze',
    category: 'Identity Verification',
    description: 'AI-powered identity verification with facial recognition and document scanning for secure authentication.',
    status: 'Live'
  },
  {
    title: 'MUV Ride-Sharing',
    category: 'Transportation',
    description: 'Complete ride-sharing platform with real-time tracking and dynamic pricing for seamless transportation.',
    status: 'Live'
  }
])
</script>