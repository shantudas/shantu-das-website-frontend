<template>
  <nav class="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-black/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-3 shadow-xl">
    <div class="flex items-center space-x-8">
      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center space-x-8">
        <NuxtLink 
          to="/"
          class="text-gray-800 hover:text-gray-900 transition-colors font-medium text-sm [text-shadow:0_1px_2px_rgba(255,255,255,0.8)]"
          :class="{ 'text-gray-900 font-semibold': $route.path === '/' }"
        >
          Home
        </NuxtLink>
        <NuxtLink 
          to="/projects"
          class="text-gray-800 hover:text-gray-900 transition-colors font-medium text-sm [text-shadow:0_1px_2px_rgba(255,255,255,0.8)]"
          :class="{ 'text-gray-900 font-semibold': $route.path === '/projects' }"
        >
          Projects
        </NuxtLink>
        <NuxtLink 
          to="/contact"
          class="text-gray-800 hover:text-gray-900 transition-colors font-medium text-sm [text-shadow:0_1px_2px_rgba(255,255,255,0.8)]"
          :class="{ 'text-gray-900 font-semibold': $route.path === '/contact' }"
        >
          Contact
        </NuxtLink>
      </div>

      <!-- Mobile Navigation -->
      <div class="md:hidden flex items-center space-x-4">
        <NuxtLink 
          to="/"
          class="text-gray-800 hover:text-gray-900 transition-colors font-medium text-sm [text-shadow:0_1px_2px_rgba(255,255,255,0.8)]"
          :class="{ 'text-gray-900 font-semibold': $route.path === '/' }"
        >
          Home
        </NuxtLink>
        <NuxtLink 
          to="/projects"
          class="text-gray-800 hover:text-gray-900 transition-colors font-medium text-sm [text-shadow:0_1px_2px_rgba(255,255,255,0.8)]"
          :class="{ 'text-gray-900 font-semibold': $route.path === '/projects' }"
        >
          Projects
        </NuxtLink>
        <NuxtLink 
          to="/contact"
          class="text-gray-800 hover:text-gray-900 transition-colors font-medium text-sm [text-shadow:0_1px_2px_rgba(255,255,255,0.8)]"
          :class="{ 'text-gray-900 font-semibold': $route.path === '/contact' }"
        >
          Contact
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
// No additional functionality needed for this simple navigation
</script>