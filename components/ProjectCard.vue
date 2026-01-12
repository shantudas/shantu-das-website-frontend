<template>
  <NuxtLink 
    :to="`/projects/${project.slug}`"
    class="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 block"
  >
    <!-- Cover Image -->
    <div class="aspect-[16/9] overflow-hidden relative">
      <img 
        :src="project.coverImage" 
        :alt="project.title"
        class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        @error="handleImageError"
      />
      <!-- Overlay for featured projects -->
      <div 
        v-if="project.featured" 
        class="absolute top-4 left-4 inline-flex items-center rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white"
      >
        Featured
      </div>
    </div>

    <!-- Content -->
    <div class="p-6">
      <!-- Technologies Badge -->
      <div class="mb-3" v-if="project.technologies && project.technologies.length > 0">
        <span class="inline-flex items-center rounded-md bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
          {{ project.technologies[0] }}
        </span>
      </div>

      <!-- Title -->
      <h3 class="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
        {{ project.title }}
      </h3>

      <!-- Description -->
      <p class="mt-2 text-sm text-gray-600 line-clamp-3">
        {{ project.description }}
      </p>

      <!-- Technologies -->
      <div class="mt-4 flex flex-wrap gap-1.5" v-if="project.technologies && Array.isArray(project.technologies)">
        <span 
          v-for="tech in project.technologies.slice(0, 3)" 
          :key="tech"
          class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10"
        >
          {{ tech }}
        </span>
        <span 
          v-if="project.technologies.length > 3"
          class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600"
        >
          +{{ project.technologies.length - 3 }} more
        </span>
      </div>

      <!-- Action Button -->
      <div class="mt-4 pt-4 border-t border-gray-100">
        <span class="inline-flex items-center gap-x-1.5 text-sm font-medium text-blue-600 group-hover:text-blue-500 transition-colors">
          View Details
          <svg class="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd" />
          </svg>
        </span>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
interface Project {
  id: number
  slug: string
  title: string
  description: string
  technologies: string[]
  features?: string[]
  link?: string | null
  github?: string | null
  coverImage: string
  featured: boolean
}

interface Props {
  project: Project
}

defineProps<Props>()

const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement
  // Fallback to a placeholder if image fails to load
  img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIyNSIgdmlld0JveD0iMCAwIDQwMCAyMjUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjI1IiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0yMDAgMTEyLjVMMTc1IDg3LjVIMTI1VjE1MEgyNzVWODcuNUgyMjVMMjAwIDExMi41WiIgZmlsbD0iIzlDQTNBRiIvPgo8L3N2Zz4K'
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