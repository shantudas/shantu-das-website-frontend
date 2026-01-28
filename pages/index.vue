<template>
  <div class="relative isolate overflow-hidden">
    <!-- Enhanced Background Elements - Document Level -->
    <div class="fixed inset-0 -z-10">
      <div class="absolute top-1/4 left-1/4 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 blur-3xl animate-pulse"></div>
      <div class="absolute bottom-1/4 right-1/4 h-72 w-72 translate-x-1/2 translate-y-1/2 rounded-full bg-gradient-to-br from-purple-400/20 to-indigo-400/20 blur-3xl animate-pulse animation-delay-1000"></div>
      <div class="absolute top-1/2 left-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-cyan-400/15 to-blue-400/15 blur-2xl animate-pulse animation-delay-2000"></div>
    </div>

    <!-- Animated Grid Background - Document Level -->
    <div class="fixed inset-0 -z-10 bg-gradient-to-br from-slate-50/80 to-blue-50/50">
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
    </div>

    <!-- Hero Section -->
    <section class="relative pt-24 pb-20 sm:pt-40 sm:pb-24 lg:pt-24 lg:pb-24 px-6 lg:px-8">
      <div class="relative mx-auto max-w-4xl text-center">
        <!-- Professional Status Badge -->
        <div class="mb-6 flex justify-center">
          <div class="inline-flex items-center rounded-full bg-gradient-to-r from-green-50 to-emerald-50 px-6 py-3 border border-green-200/50 shadow-lg backdrop-blur-sm">
            <div class="h-2 w-2 rounded-full bg-green-500 mr-3 animate-pulse"></div>
            <span class="text-sm font-semibold text-green-900">Available for new opportunities</span>
          </div>
        </div>

        <!-- Profile Image with Enhanced Design -->
        <div class="mb-8 flex justify-center">
          <div class="relative group">
            <!-- Outer glow ring -->
            <div class="absolute -inset-3 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 opacity-25 blur-lg group-hover:opacity-40 transition-opacity duration-500 animate-pulse"></div>
            <!-- Main profile container -->
            <div class="relative h-24 w-24 sm:h-32 sm:w-32">
              <div class="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-500 p-1 shadow-xl">
                <div class="flex h-full w-full items-center justify-center rounded-full bg-white overflow-hidden">
                  <img 
                    src="/profile/shantu-profile.jpeg" 
                    alt="Shantu Chandra Das"
                    class="h-full w-full object-cover rounded-full grayscale hover:grayscale-0 hover:scale-110 transition-all duration-700 group-hover:rotate-2"
                    @error="handleImageError"
                  />
                  <!-- Fallback initials if image fails to load -->
                  <div 
                    v-if="showFallback" 
                    class="absolute inset-0 flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-xl sm:text-3xl font-bold text-white"
                  >
                    SD
                  </div>
                </div>
              </div>
              <!-- Floating elements -->
              <div class="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 shadow-lg animate-bounce"></div>
              <div class="absolute -bottom-1 -left-1 h-3 w-3 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 shadow-lg animate-pulse"></div>
            </div>
          </div>
        </div>

        <!-- Main Heading with Enhanced Typography -->
        <div class="mb-6">
          <div class="inline-flex items-center rounded-full bg-gradient-to-r from-blue-50 to-purple-50 px-4 py-2 mb-4 border border-blue-200/50 backdrop-blur-sm">
            <svg class="mr-2 h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
            </svg>
            <span class="text-sm font-semibold text-blue-900">Senior Mobile Developer</span>
          </div>
          
          <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl mb-4">
            <span class="block">Shantu</span>
            <span class="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Chandra Das
            </span>
          </h1>
        </div>
        
        <!-- Enhanced Description -->
        <p class="mt-4 text-lg leading-7 text-gray-600 max-w-3xl mx-auto sm:text-xl font-light mb-8">
          Mobile Application Engineer with 
          <span class="font-semibold text-gray-900">8+ years</span> of experience specializing in 
          <span class="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Android</span> and 
          <span class="font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Flutter</span>. 
          Expert in Clean Architecture, MVVM, and AI-driven platforms with 
          <span class="font-semibold text-gray-900">300K+ downloads</span>.
        </p>
        
        <!-- Enhanced Action Buttons -->
        <div class="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
          <NuxtLink 
            to="/projects"
            class="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 px-6 py-3 text-base font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div class="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span class="relative flex items-center">
              <svg class="mr-2 h-4 w-4 transition-transform group-hover:rotate-12" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
              </svg>
              View My Portfolio
            </span>
          </NuxtLink>
          
          <NuxtLink 
            to="/contact" 
            class="group inline-flex items-center text-base font-semibold leading-6 text-gray-700 hover:text-gray-900 transition-all duration-300"
          >
            <span class="relative">
              Let's Connect
              <div class="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></div>
            </span>
            <svg class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </NuxtLink>
        </div>

        <!-- Professional Stats -->
        <div class="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          <div class="group cursor-pointer">
            <div class="text-center p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-white/30 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div class="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">8+</div>
              <div class="text-xs font-medium text-gray-600 mt-1">Years Experience</div>
            </div>
          </div>
          <div class="group cursor-pointer">
            <div class="text-center p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-white/30 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div class="text-2xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">300K+</div>
              <div class="text-xs font-medium text-gray-600 mt-1">Downloads</div>
            </div>
          </div>
          <div class="group cursor-pointer">
            <div class="text-center p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-white/30 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div class="text-2xl font-bold text-gray-900 group-hover:text-cyan-600 transition-colors duration-300">25+</div>
              <div class="text-xs font-medium text-gray-600 mt-1">Projects</div>
            </div>
          </div>
          <div class="group cursor-pointer">
            <div class="text-center p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-white/30 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div class="text-2xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors duration-300">40%</div>
              <div class="text-xs font-medium text-gray-600 mt-1">Performance Gain</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Technical Skills Section -->
    <section class="py-16 sm:py-24">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-3xl text-center">
          <div class="inline-flex items-center rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-2 mb-8">
            <svg class="mr-2 h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
            </svg>
            <span class="text-sm font-semibold text-blue-900">Core Expertise</span>
          </div>
          <h2 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Technical 
            <span class="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p class="mt-6 text-xl leading-8 text-gray-600 max-w-2xl mx-auto">
            Specialized in building scalable, secure, and high-performance mobile applications with cutting-edge technologies
          </p>
        </div>
        
        <!-- Core Skills Grid -->
        <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div class="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200 hover:shadow-xl transition-all duration-300">
            <div class="flex items-center gap-x-4">
              <div class="rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 p-3">
                <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900">Mobile Development</h3>
            </div>
            <div class="mt-6 space-y-3">
              <div class="flex flex-wrap gap-2">
                <span class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">Android (Java/Kotlin)</span>
                <span class="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">Flutter (Dart)</span>
                <span class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-700 ring-1 ring-inset ring-gray-700/10">iOS (Swift)</span>
              </div>
              <p class="text-sm leading-6 text-gray-600">
                MVVM, Clean Architecture, Jetpack Compose, Material Design, SwiftUI
              </p>
            </div>
          </div>
          
          <div class="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200 hover:shadow-xl transition-all duration-300">
            <div class="flex items-center gap-x-4">
              <div class="rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 p-3">
                <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.169.659 1.591L19.8 14.5M14.25 3.104c.251.023.501.05.75.082M19.8 14.5l-5.069 5.069A2.25 2.25 0 0113.5 19.8v-4.455c0-.618.201-1.216.574-1.716M19.8 14.5v2.25A2.25 2.25 0 0117.55 19h-4.455c-.618 0-1.216-.201-1.716-.574M10.5 19.8V15m9.3-.3h-4.8" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900">Architecture & State</h3>
            </div>
            <div class="mt-6 space-y-3">
              <div class="flex flex-wrap gap-2">
                <span class="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">BLoC</span>
                <span class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">Provider</span>
                <span class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-700/10">GetX</span>
              </div>
              <p class="text-sm leading-6 text-gray-600">
                Dependency Injection (Hilt/Dagger), ViewModel, LiveData, StateFlow
              </p>
            </div>
          </div>
          
          <div class="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200 hover:shadow-xl transition-all duration-300">
            <div class="flex items-center gap-x-4">
              <div class="rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 p-3">
                <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900">Backend & APIs</h3>
            </div>
            <div class="mt-6 space-y-3">
              <div class="flex flex-wrap gap-2">
                <span class="inline-flex items-center rounded-md bg-orange-50 px-2 py-1 text-xs font-medium text-orange-700 ring-1 ring-inset ring-orange-700/10">Laravel (PHP)</span>
                <span class="inline-flex items-center rounded-md bg-cyan-50 px-2 py-1 text-xs font-medium text-cyan-700 ring-1 ring-inset ring-cyan-700/10">RESTful APIs</span>
              </div>
              <p class="text-sm leading-6 text-gray-600">
                JWT/OAuth2, MySQL/PostgreSQL, Redis, Docker, Firebase
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Technologies Section -->
    <section class="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40">
      <!-- Background Elements -->
      <div class="absolute top-1/3 left-1/3 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-purple-400/20 to-blue-400/20 blur-3xl"></div>
      <div class="absolute bottom-1/3 right-1/3 h-64 w-64 translate-x-1/2 translate-y-1/2 rounded-full bg-gradient-to-br from-cyan-400/20 to-indigo-400/20 blur-3xl"></div>
      
      <div class="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-3xl text-center">
          <div class="inline-flex items-center rounded-full bg-gradient-to-r from-purple-50 to-cyan-50 px-4 py-2 mb-8">
            <svg class="mr-2 h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.169.659 1.591L19.8 14.5M14.25 3.104c.251.023.501.05.75.082M19.8 14.5l-5.069 5.069A2.25 2.25 0 0113.5 19.8v-4.455c0-.618.201-1.216.574-1.716M19.8 14.5v2.25A2.25 2.25 0 0117.55 19h-4.455c-.618 0-1.216-.201-1.716-.574M10.5 19.8V15m9.3-.3h-4.8" />
            </svg>
            <span class="text-sm font-semibold text-purple-900">Technology Stack</span>
          </div>
          <h2 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Technologies 
            <span class="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
              I Use
            </span>
          </h2>
          <p class="mt-6 text-xl leading-8 text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit for building world-class mobile applications with modern development practices
          </p>
        </div>
        
        <ClientOnly>
          <template v-if="technologiesPending">
            <div class="mt-16 animate-pulse">
              <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
                <div v-for="i in 4" :key="i" class="bg-white rounded-2xl p-8 h-64"></div>
              </div>
            </div>
          </template>
          <template v-else-if="technologies">
            <!-- Main Technology Categories -->
            <div class="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
              <!-- Mobile Development -->
              <div class="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100">
                <div class="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-600/20"></div>
                <div class="relative">
                  <div class="flex items-center gap-x-4 mb-8">
                    <div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg">
                      <svg class="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                      </svg>
                    </div>
                    <div>
                      <h3 class="text-2xl font-bold text-gray-900">Mobile Development</h3>
                      <p class="text-sm text-gray-500">Cross-platform expertise</p>
                    </div>
                  </div>
                  <div class="grid grid-cols-3 gap-4">
                    <div v-for="tech in technologies['Mobile Development'] || []" :key="tech.name" 
                         class="group/tech flex flex-col items-center p-4 rounded-2xl bg-gray-50/80 hover:bg-blue-50 hover:scale-105 transition-all duration-300 cursor-pointer">
                      <div class="relative mb-3">
                        <img :src="tech.logo" :alt="tech.name" 
                             class="h-10 w-10 drop-shadow-md transition-transform duration-300 group-hover/tech:scale-110" 
                             @error="handleLogoError" />
                      </div>
                      <span class="text-xs font-semibold text-gray-700 text-center leading-tight">{{ tech.name }}</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Architecture & State Management -->
              <div class="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100">
                <div class="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-gradient-to-br from-purple-500/20 to-purple-600/20"></div>
                <div class="relative">
                  <div class="flex items-center gap-x-4 mb-8">
                    <div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 shadow-lg">
                      <svg class="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.169.659 1.591L19.8 14.5M14.25 3.104c.251.023.501.05.75.082M19.8 14.5l-5.069 5.069A2.25 2.25 0 0113.5 19.8v-4.455c0-.618.201-1.216.574-1.716M19.8 14.5v2.25A2.25 2.25 0 0117.55 19h-4.455c-.618 0-1.216-.201-1.716-.574M10.5 19.8V15m9.3-.3h-4.8" />
                      </svg>
                    </div>
                    <div>
                      <h3 class="text-2xl font-bold text-gray-900">Architecture & State</h3>
                      <p class="text-sm text-gray-500">Scalable patterns</p>
                    </div>
                  </div>
                  <div class="grid grid-cols-3 gap-4">
                    <div v-for="tech in technologies['Architecture & State Management'] || []" :key="tech.name" 
                         class="group/tech flex flex-col items-center p-4 rounded-2xl bg-gray-50/80 hover:bg-purple-50 hover:scale-105 transition-all duration-300 cursor-pointer">
                      <div class="relative mb-3">
                        <img :src="tech.logo" :alt="tech.name" 
                             class="h-10 w-10 drop-shadow-md transition-transform duration-300 group-hover/tech:scale-110" 
                             @error="handleLogoError" />
                      </div>
                      <span class="text-xs font-semibold text-gray-700 text-center leading-tight">{{ tech.name }}</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- API & Networking -->
              <div class="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100">
                <div class="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-gradient-to-br from-cyan-500/20 to-cyan-600/20"></div>
                <div class="relative">
                  <div class="flex items-center gap-x-4 mb-8">
                    <div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-600 shadow-lg">
                      <svg class="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                      </svg>
                    </div>
                    <div>
                      <h3 class="text-2xl font-bold text-gray-900">API & Networking</h3>
                      <p class="text-sm text-gray-500">Data communication</p>
                    </div>
                  </div>
                  <div class="grid grid-cols-3 gap-4">
                    <div v-for="tech in technologies['API & Networking'] || []" :key="tech.name" 
                         class="group/tech flex flex-col items-center p-4 rounded-2xl bg-gray-50/80 hover:bg-cyan-50 hover:scale-105 transition-all duration-300 cursor-pointer">
                      <div class="relative mb-3">
                        <img :src="tech.logo" :alt="tech.name" 
                             class="h-10 w-10 drop-shadow-md transition-transform duration-300 group-hover/tech:scale-110" 
                             @error="handleLogoError" />
                      </div>
                      <span class="text-xs font-semibold text-gray-700 text-center leading-tight">{{ tech.name }}</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Backend & DevOps -->
              <div class="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100">
                <div class="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-gradient-to-br from-orange-500/20 to-orange-600/20"></div>
                <div class="relative">
                  <div class="flex items-center gap-x-4 mb-8">
                    <div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg">
                      <svg class="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.365 1.198.398 1.852z" />
                      </svg>
                    </div>
                    <div>
                      <h3 class="text-2xl font-bold text-gray-900">Backend & DevOps</h3>
                      <p class="text-sm text-gray-500">Server infrastructure</p>
                    </div>
                  </div>
                  <div class="grid grid-cols-2 gap-4">
                    <div v-for="tech in technologies['Backend & DevOps'] || []" :key="tech.name" 
                         class="group/tech flex flex-col items-center p-4 rounded-2xl bg-gray-50/80 hover:bg-orange-50 hover:scale-105 transition-all duration-300 cursor-pointer">
                      <div class="relative mb-3">
                        <img :src="tech.logo" :alt="tech.name" 
                             class="h-10 w-10 drop-shadow-md transition-transform duration-300 group-hover/tech:scale-110" 
                             @error="handleLogoError" />
                      </div>
                      <span class="text-xs font-semibold text-gray-700 text-center leading-tight">{{ tech.name }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Additional Technologies -->
            <div class="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <!-- Databases -->
              <div class="rounded-2xl bg-white p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div class="flex items-center gap-x-3 mb-6">
                  <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600">
                    <svg class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                    </svg>
                  </div>
                  <h4 class="text-lg font-bold text-gray-900">Storage & Databases</h4>
                </div>
                <div class="space-y-3">
                  <div v-for="tech in technologies['Local Storage & Databases'] || []" :key="tech.name"
                       class="flex items-center gap-3 p-3 rounded-xl hover:bg-emerald-50 transition-colors group cursor-pointer">
                    <img :src="tech.logo" :alt="tech.name" class="h-6 w-6 group-hover:scale-110 transition-transform" @error="handleLogoError" />
                    <span class="text-sm font-medium text-gray-700">{{ tech.name }}</span>
                  </div>
                </div>
              </div>

              <!-- CI/CD -->
              <div class="rounded-2xl bg-white p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div class="flex items-center gap-x-3 mb-6">
                  <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600">
                    <svg class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                  </div>
                  <h4 class="text-lg font-bold text-gray-900">CI/CD & Tools</h4>
                </div>
                <div class="space-y-3">
                  <div v-for="tech in technologies['CI/CD & Distribution'] || []" :key="tech.name"
                       class="flex items-center gap-3 p-3 rounded-xl hover:bg-indigo-50 transition-colors group cursor-pointer">
                    <img :src="tech.logo" :alt="tech.name" class="h-6 w-6 group-hover:scale-110 transition-transform" @error="handleLogoError" />
                    <span class="text-sm font-medium text-gray-700">{{ tech.name }}</span>
                  </div>
                </div>
              </div>

              <!-- Testing -->
              <div class="rounded-2xl bg-white p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div class="flex items-center gap-x-3 mb-6">
                  <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 to-rose-600">
                    <svg class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 class="text-lg font-bold text-gray-900">Testing & QA</h4>
                </div>
                <div class="space-y-3">
                  <div v-for="tech in technologies['Testing'] || []" :key="tech.name"
                       class="flex items-center gap-3 p-3 rounded-xl hover:bg-rose-50 transition-colors group cursor-pointer">
                    <img :src="tech.logo" :alt="tech.name" class="h-6 w-6 group-hover:scale-110 transition-transform" @error="handleLogoError" />
                    <span class="text-sm font-medium text-gray-700">{{ tech.name }}</span>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </ClientOnly>
      </div>
    </section>

    <!-- Professional Experience Section -->
    <section class="py-24 sm:py-32 bg-gray-50">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-3xl text-center">
          <div class="inline-flex items-center rounded-full bg-gradient-to-r from-green-50 to-emerald-50 px-4 py-2 mb-8">
            <svg class="mr-2 h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.054c-.676.051-1.358.082-2.037.106m-9.413-8.581v-.001c0-.424.144-.828.4-1.145l1.586-1.96A.75.75 0 0113.4 4.5h-2.8a.75.75 0 01-.6-.3l-1.586-1.96A2.178 2.178 0 007.014 1.5H5.25A2.25 2.25 0 003 3.75v.001" />
            </svg>
            <span class="text-sm font-semibold text-green-900">Career Journey</span>
          </div>
          <h2 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Professional 
            <span class="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p class="mt-6 text-xl leading-8 text-gray-600 max-w-2xl mx-auto">
            Building innovative solutions across diverse industries with a proven track record of success
          </p>
        </div>
        
        <div class="mx-auto mt-16 max-w-4xl">
          <!-- Current Position -->
          <div class="relative pl-8">
            <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600">
              <div class="h-4 w-4 rounded-full bg-white"></div>
            </div>
            <div class="ml-6">
              <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 class="text-xl font-bold text-gray-900">Software Engineer</h3>
                  <p class="text-lg font-medium text-blue-600">Patrons Venture Limited</p>
                </div>
                <div class="mt-1 sm:mt-0">
                  <span class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-sm font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Jul 2023 – Present</span>
                </div>
              </div>
              <ul class="mt-4 space-y-2 text-gray-600">
                <li class="flex items-start">
                  <span class="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-400"></span>
                  <span>Architected Flutter applications for AI-driven job matching with 100K+ downloads using Clean Architecture and BLoC</span>
                </li>
                <li class="flex items-start">
                  <span class="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-400"></span>
                  <span>Engineered secure RESTful APIs with Laravel (PHP), reducing data latency by 20% for 100K+ users</span>
                </li>
                <li class="flex items-start">
                  <span class="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-400"></span>
                  <span>Optimized deployment pipelines using Docker, improving application stability and CI/CD workflows</span>
                </li>
              </ul>
            </div>
          </div>
          
          <!-- Previous Position -->
          <div class="relative mt-12 pl-8">
            <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-purple-600">
              <div class="h-4 w-4 rounded-full bg-white"></div>
            </div>
            <div class="ml-6">
              <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 class="text-xl font-bold text-gray-900">Software Engineer</h3>
                  <p class="text-lg font-medium text-purple-600">MUV ASIA</p>
                </div>
                <div class="mt-1 sm:mt-0">
                  <span class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-sm font-medium text-gray-700 ring-1 ring-inset ring-gray-600/20">Jan 2017 – Jun 2023</span>
                </div>
              </div>
              <ul class="mt-4 space-y-2 text-gray-600">
                <li class="flex items-start">
                  <span class="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-400"></span>
                  <span>Led development of large-scale Android/Flutter applications including flagship ride-sharing platform</span>
                </li>
                <li class="flex items-start">
                  <span class="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-400"></span>
                  <span>Achieved 40% performance improvement in high-traffic applications using MVVM architecture</span>
                </li>
                <li class="flex items-start">
                  <span class="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-400"></span>
                  <span>Integrated GPS tracking and RBAC security for 200K+ users across mobile and backend systems</span>
                </li>
              </ul>
            </div>
            <!-- Timeline line -->
            <div class="absolute left-5 top-10 h-12 w-0.5 bg-gray-200"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Impact & Results Section -->
    <section class="relative py-24 sm:py-32 overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40"></div>
      <div class="absolute top-1/4 left-1/4 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-blue-400/20 to-cyan-400/20 blur-3xl"></div>
      <div class="absolute bottom-1/4 right-1/4 h-72 w-72 translate-x-1/2 translate-y-1/2 rounded-full bg-gradient-to-br from-purple-400/20 to-pink-400/20 blur-3xl"></div>
      
      <div class="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-3xl text-center">
          <div class="inline-flex items-center rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-2 mb-8">
            <svg class="mr-2 h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
            <span class="text-sm font-semibold text-blue-900">Measurable Impact</span>
          </div>
          <h2 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Impact & 
            <span class="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Results
            </span>
          </h2>
          <p class="mt-6 text-xl leading-8 text-gray-600 max-w-2xl mx-auto">
            Delivering measurable value through innovative mobile solutions that drive real business outcomes
          </p>
        </div>
        
        <!-- Stats Grid -->
        <div class="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <!-- Years Experience -->
          <div class="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100">
            <div class="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-gradient-to-br from-blue-500/10 to-blue-600/20 transition-all duration-500 group-hover:scale-150"></div>
            <div class="relative">
              <div class="flex items-center justify-between mb-6">
                <div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg class="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div class="text-right">
                  <div class="text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">8+</div>
                  <div class="text-xs font-medium text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">YEARS</div>
                </div>
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Years Experience</h3>
                <p class="text-sm text-gray-600 leading-relaxed">Deep expertise in mobile development and architecture</p>
              </div>
              <div class="mt-4 h-1 w-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full group-hover:w-full transition-all duration-500"></div>
            </div>
          </div>

          <!-- App Downloads -->
          <div class="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100">
            <div class="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-gradient-to-br from-purple-500/10 to-purple-600/20 transition-all duration-500 group-hover:scale-150"></div>
            <div class="relative">
              <div class="flex items-center justify-between mb-6">
                <div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg class="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                </div>
                <div class="text-right">
                  <div class="text-3xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">300K+</div>
                  <div class="text-xs font-medium text-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">DOWNLOADS</div>
                </div>
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-900 mb-2">App Downloads</h3>
                <p class="text-sm text-gray-600 leading-relaxed">Widespread adoption across all published applications</p>
              </div>
              <div class="mt-4 h-1 w-0 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full group-hover:w-full transition-all duration-500"></div>
            </div>
          </div>

          <!-- Projects Delivered -->
          <div class="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100">
            <div class="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-gradient-to-br from-cyan-500/10 to-cyan-600/20 transition-all duration-500 group-hover:scale-150"></div>
            <div class="relative">
              <div class="flex items-center justify-between mb-6">
                <div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-600 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg class="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                  </svg>
                </div>
                <div class="text-right">
                  <div class="text-3xl font-bold text-gray-900 group-hover:text-cyan-600 transition-colors duration-300">25+</div>
                  <div class="text-xs font-medium text-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">PROJECTS</div>
                </div>
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Projects Delivered</h3>
                <p class="text-sm text-gray-600 leading-relaxed">Complete end-to-end solutions across industries</p>
              </div>
              <div class="mt-4 h-1 w-0 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full group-hover:w-full transition-all duration-500"></div>
            </div>
          </div>

          <!-- Performance Boost -->
          <div class="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100">
            <div class="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-gradient-to-br from-emerald-500/10 to-emerald-600/20 transition-all duration-500 group-hover:scale-150"></div>
            <div class="relative">
              <div class="flex items-center justify-between mb-6">
                <div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg class="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 010 5.814c3.063.526 5.885 6.268 20.25 8.553l-.306-2.397a11.934 11.934 0 010-5.813z" />
                  </svg>
                </div>
                <div class="text-right">
                  <div class="text-3xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors duration-300">40%</div>
                  <div class="text-xs font-medium text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">FASTER</div>
                </div>
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Performance Boost</h3>
                <p class="text-sm text-gray-600 leading-relaxed">Significant optimization improvements achieved</p>
              </div>
              <div class="mt-4 h-1 w-0 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full group-hover:w-full transition-all duration-500"></div>
            </div>
          </div>
        </div>

        <!-- Additional Impact Metrics -->
        <!-- <div class="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div class="text-center">
            <div class="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-600 shadow-lg mb-4">
              <svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div class="text-2xl font-bold text-gray-900">200K+</div>
            <div class="text-sm font-semibold text-indigo-600 mb-1">Active Users</div>
            <div class="text-xs text-gray-600">Across all platforms</div>
          </div>
          <div class="text-center">
            <div class="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500 to-rose-600 shadow-lg mb-4">
              <svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
              </svg>
            </div>
            <div class="text-2xl font-bold text-gray-900">4.8/5</div>
            <div class="text-sm font-semibold text-rose-600 mb-1">Average Rating</div>
            <div class="text-xs text-gray-600">User satisfaction</div>
          </div>
          <div class="text-center">
            <div class="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 shadow-lg mb-4">
              <svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.228a25.8 25.8 0 012.456-.47M15.05 9.728a6.726 6.726 0 01-2.748 1.35m0 0V3.5c0-.621-.504-1.125-1.125-1.125H9.375c-.621 0-1.125.504-1.125 1.125v7.578m0 0h1.5s.067 0 .101.031c.265.235.6.356.954.56.448.257.927.568 1.415.961.732.589 1.54 1.359 2.303 2.094a9.08 9.08 0 00.712.598c.059.044.123.086.19.124l.002.001z" />
              </svg>
            </div>
            <div class="text-2xl font-bold text-gray-900">15+</div>
            <div class="text-sm font-semibold text-amber-600 mb-1">Industry Awards</div>
            <div class="text-xs text-gray-600">Recognition earned</div>
          </div>
        </div> -->
      </div>
    </section>

    <!-- LinkedIn Recommendations Section -->
    <section class="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/40">
      <!-- Background Elements -->
      <div class="absolute top-1/4 right-1/4 h-96 w-96 translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-indigo-400/20 to-purple-400/20 blur-3xl"></div>
      <div class="absolute bottom-1/4 left-1/4 h-96 w-96 -translate-x-1/2 translate-y-1/2 rounded-full bg-gradient-to-br from-purple-400/20 to-pink-400/20 blur-3xl"></div>
      
      <div class="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-3xl text-center">
          <div class="inline-flex items-center rounded-full bg-gradient-to-r from-indigo-50 to-purple-50 px-4 py-2 mb-8 border border-indigo-200/50">
            <svg class="mr-2 h-5 w-5 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <span class="text-sm font-semibold text-indigo-900">Professional Testimonials</span>
          </div>
          <h2 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            LinkedIn 
            <span class="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Recommendations
            </span>
          </h2>
          <p class="mt-6 text-xl leading-8 text-gray-600 max-w-2xl mx-auto">
            What colleagues and industry professionals say about working with me
          </p>
        </div>

        <!-- Recommendations Carousel -->
        <div class="mx-auto mt-12 sm:mt-16">
          <ClientOnly>
            <template v-if="recommendationsPending">
              <div class="animate-pulse">
                <div class="bg-gray-200 rounded-3xl h-96 max-w-4xl mx-auto"></div>
              </div>
            </template>
            <template v-else>
              <div v-if="!recommendations || recommendations.length === 0" class="text-center text-gray-500">
                No recommendations available.
                <div v-if="recommendationsError" class="text-red-500 mt-2">Error: {{ recommendationsError }}</div>
              </div>
              
              <RecommendationCarousel 
                v-else
                :recommendations="recommendations"
                :autoplay="true"
                :autoplay-delay="6000"
              />
            </template>
          </ClientOnly>
        </div>

        <!-- View All on LinkedIn Button -->
        <div class="mt-12 text-center">
          <a 
            href="https://www.linkedin.com/in/shantuchandradas/details/recommendations/"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-x-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 hover:scale-105"
          >
            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            View All Recommendations on LinkedIn
            <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>

    <!-- Featured Projects -->
    <section class="py-24 sm:py-32 bg-gray-50">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-3xl text-center">
          <div class="inline-flex items-center rounded-full bg-gradient-to-r from-orange-50 to-amber-50 px-4 py-2 mb-8">
            <svg class="mr-2 h-5 w-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
            </svg>
            <span class="text-sm font-semibold text-orange-900">Portfolio Showcase</span>
          </div>
          <h2 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Featured 
            <span class="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p class="mt-6 text-xl leading-8 text-gray-600 max-w-2xl mx-auto">
            Showcasing innovative mobile applications with cutting-edge technology and exceptional user experiences
          </p>
        </div>
        <div class="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-8 sm:mt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <ClientOnly>
            <template v-if="pending">
              <div v-for="i in 3" :key="i" class="animate-pulse">
                <div class="bg-gray-200 rounded-xl h-64"></div>
              </div>
            </template>
            <template v-else>
              <!-- Debug info -->
              <div v-if="!featuredProjects || featuredProjects.length === 0" class="col-span-3 text-center text-gray-500">
                No featured projects found. Total projects: {{ allProjects?.length || 0 }}
                <div v-if="error" class="text-red-500 mt-2">Error: {{ error }}</div>
              </div>
              
              <ProjectCard 
                v-for="project in featuredProjects" 
                :key="project.id"
                :project="project"
              />
            </template>
          </ClientOnly>
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
import { ref, computed } from 'vue'
// Explicit import to avoid auto-import issues
import ProjectCard from '~/components/ProjectCard.vue'
import RecommendationCarousel from '~/components/RecommendationCarousel.vue'

// Define interfaces for type safety
interface Technology {
  name: string
  logo: string
}

interface TechnologiesData {
  'Mobile Development': Technology[]
  'Architecture & State Management': Technology[]
  'API & Networking': Technology[]
  'Local Storage & Databases': Technology[]
  'Backend & DevOps': Technology[]
  'CI/CD & Distribution': Technology[]
  'Maps, Location & Realtime': Technology[]
  'Analytics & Monitoring': Technology[]
  'Testing': Technology[]
}

// Profile image state
const showFallback = ref(false)

// Handle profile image error
const handleImageError = () => {
  showFallback.value = true
}

// Handle logo errors
const handleLogoError = (event: Event) => {
  const img = event.target as HTMLImageElement
  // Set a fallback placeholder
  img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xMiA4VjE2TTggMTJIMTZNMTIgNEMxNi40MTgzIDQgMjAgNy41ODE3IDIwIDEyQzIwIDE2LjQxODMgMTYuNDE4MyAyMCAxMiAyMEM3LjU4MTcgMjAgNCA2LjQxODMgNDIIDNDNCA3LjU4MTcgNy41ODE3IDQgMTIgNFoiIHN0cm9rZT0iIzlDQTNBRiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+'
}

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

// Fetch projects and filter featured ones
const { data: allProjects, pending, error } = await useAsyncData('projects', () => 
  $fetch('/api/projects')
)
const featuredProjects = computed(() => {
  if (!allProjects.value || !Array.isArray(allProjects.value)) return []
  return allProjects.value.filter(project => project.featured)
})

// Fetch recommendations data
const { data: recommendations, pending: recommendationsPending, error: recommendationsError } = await useAsyncData('recommendations', () => 
  $fetch('/api/recommendations')
)

// Fetch technologies data with proper typing
const { data: technologiesData } = await useAsyncData('technologies', () => 
  $fetch<TechnologiesData>('/api/technologies')
)

// Create computed property for technologies with fallbacks
const technologies = computed(() => {
  if (!technologiesData.value) return null
  return technologiesData.value as TechnologiesData
})
</script>