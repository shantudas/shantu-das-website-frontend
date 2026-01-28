<template>
  <nav class="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-black/10 backdrop-blur-lg border border-white/20 rounded-full px-2 py-2 shadow-xl">
    <div class="flex items-center space-x-2">
      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center space-x-2">
        <NuxtLink 
          to="/"
          class="text-gray-800 hover:text-gray-900 transition-all font-medium text-sm [text-shadow:0_1px_2px_rgba(255,255,255,0.8)] flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:bg-white/30"
          :class="{ 'text-gray-900 font-semibold bg-white/50 backdrop-blur-sm border border-white/60': $route.path === '/' }"
        >
          <UIcon name="lucide:home" class="w-4 h-4" />
          Home
        </NuxtLink>
        <NuxtLink 
          to="/projects"
          class="text-gray-800 hover:text-gray-900 transition-all font-medium text-sm [text-shadow:0_1px_2px_rgba(255,255,255,0.8)] flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:bg-white/30"
          :class="{ 'text-gray-900 font-semibold bg-white/50 backdrop-blur-sm border border-white/60': $route.path === '/projects' }"
        >
          <UIcon name="lucide:folder-open" class="w-4 h-4" />
          Projects
        </NuxtLink>
        <NuxtLink 
          to="/articles"
          class="text-gray-800 hover:text-gray-900 transition-all font-medium text-sm [text-shadow:0_1px_2px_rgba(255,255,255,0.8)] flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:bg-white/30"
          :class="{ 'text-gray-900 font-semibold bg-white/50 backdrop-blur-sm border border-white/60': $route.path === '/articles' }"
        >
          <UIcon name="lucide:newspaper" class="w-4 h-4" />
          Articles
        </NuxtLink>
        <NuxtLink 
          to="/contact"
          class="text-gray-800 hover:text-gray-900 transition-all font-medium text-sm [text-shadow:0_1px_2px_rgba(255,255,255,0.8)] flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:bg-white/30"
          :class="{ 'text-gray-900 font-semibold bg-white/50 backdrop-blur-sm border border-white/60': $route.path === '/contact' }"
        >
          <UIcon name="lucide:mail" class="w-4 h-4" />
          Contact
        </NuxtLink>
      </div>

      <!-- Mobile Navigation -->
      <div class="md:hidden flex items-center space-x-1">
        <NuxtLink 
          to="/"
          class="text-gray-800 hover:text-gray-900 transition-all font-medium text-sm [text-shadow:0_1px_2px_rgba(255,255,255,0.8)] flex items-center gap-1.5 px-2.5 py-1.5 rounded-full hover:bg-white/30"
          :class="{ 'text-gray-900 font-semibold bg-white/50 backdrop-blur-sm border border-white/60': $route.path === '/' }"
        >
          <UIcon name="lucide:home" class="w-4 h-4" />
          Home
        </NuxtLink>
        <NuxtLink 
          to="/projects"
          class="text-gray-800 hover:text-gray-900 transition-all font-medium text-sm [text-shadow:0_1px_2px_rgba(255,255,255,0.8)] flex items-center gap-1.5 px-2.5 py-1.5 rounded-full hover:bg-white/30"
          :class="{ 'text-gray-900 font-semibold bg-white/50 backdrop-blur-sm border border-white/60': $route.path === '/projects' }"
        >
          <UIcon name="lucide:folder-open" class="w-4 h-4" />
          Projects
        </NuxtLink>
        <NuxtLink 
          to="/articles"
          class="text-gray-800 hover:text-gray-900 transition-all font-medium text-sm [text-shadow:0_1px_2px_rgba(255,255,255,0.8)] flex items-center gap-1.5 px-2.5 py-1.5 rounded-full hover:bg-white/30"
          :class="{ 'text-gray-900 font-semibold bg-white/50 backdrop-blur-sm border border-white/60': $route.path === '/articles' }"
        >
          <UIcon name="lucide:newspaper" class="w-4 h-4" />
          Articles
        </NuxtLink>
        <NuxtLink 
          to="/contact"
          class="text-gray-800 hover:text-gray-900 transition-all font-medium text-sm [text-shadow:0_1px_2px_rgba(255,255,255,0.8)] flex items-center gap-1.5 px-2.5 py-1.5 rounded-full hover:bg-white/30"
          :class="{ 'text-gray-900 font-semibold bg-white/50 backdrop-blur-sm border border-white/60': $route.path === '/contact' }"
        >
          <UIcon name="lucide:mail" class="w-4 h-4" />
          Contact
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
// No additional functionality needed for this simple navigation
</script>