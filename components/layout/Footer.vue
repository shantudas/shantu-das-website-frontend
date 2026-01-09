<template>
  <footer class="border-t border-gray-200 py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row justify-between items-center gap-4">
        <div class="flex items-center gap-6">
          <p class="text-gray-600 text-sm">
            © {{ currentYear }} Shantu Das. All rights reserved.
          </p>
          <div class="flex space-x-4">
            <a href="https://github.com/shantudas" target="_blank"
              class="text-gray-400 hover:text-gray-600 transition-colors">
              <Github class="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/shantu-das" target="_blank"
              class="text-gray-400 hover:text-gray-600 transition-colors">
              <Linkedin class="w-5 h-5" />
            </a>
          </div>
        </div>
        <p class="text-gray-500 text-sm">
          Crafted with ❤️ & ☕
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Github, Linkedin } from 'lucide-vue-next'

const currentYear = computed(() => new Date().getFullYear())
</script>