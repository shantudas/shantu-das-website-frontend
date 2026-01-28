<template>
  <div class="relative">
    <!-- Carousel Container -->
    <div class="overflow-hidden">
      <div 
        ref="carouselTrack"
        class="flex transition-transform duration-700 ease-in-out"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div
          v-for="(recommendation, index) in recommendations"
          :key="recommendation.id"
          class="w-full flex-shrink-0 px-4 sm:px-8 lg:px-16"
        >
          <!-- Compact Testimonial -->
          <div class="mx-auto max-w-3xl">
            <div class="text-center">
              <!-- Quote Marks -->
              <div class="flex justify-center mb-6">
                <svg class="w-12 h-12 sm:w-16 sm:h-16 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>

              <!-- Recommendation Text -->
              <blockquote class="mb-8">
                <p 
                  class="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-600 font-normal italic line-clamp-5 cursor-pointer hover:text-gray-800 transition-colors"
                  @click="openLinkedIn(recommendation.linkedinUrl)"
                >
                  {{ recommendation.recommendation }}
                </p>
                <button
                  v-if="recommendation.recommendation.length > 400"
                  @click="openLinkedIn(recommendation.linkedinUrl)"
                  class="mt-3 text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors inline-flex items-center gap-1"
                >
                  READ MORE
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </blockquote>

              <!-- Author Info -->
              <div class="flex flex-col items-center">
                <!-- Avatar -->
                <div class="mb-4">
                  <div v-if="recommendation.photo" class="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden shadow-lg ring-4 ring-white">
                    <img 
                      :src="recommendation.photo" 
                      :alt="recommendation.name"
                      class="w-full h-full object-cover"
                      @error="handleImageError"
                    />
                  </div>
                  <div v-else class="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                    {{ getInitials(recommendation.name) }}
                  </div>
                </div>
                
                <!-- Author Details -->
                <div class="mb-4">
                  <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                    {{ recommendation.name }}
                  </h3>
                  <p class="text-sm sm:text-base text-gray-500">
                    {{ recommendation.title }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation Controls -->
    <div class="flex items-center justify-center gap-3 mt-8">
      <!-- Dots Indicator -->
      <div class="flex items-center gap-2">
        <button
          v-for="(_, index) in recommendations"
          :key="index"
          @click="goToSlide(index)"
          :class="[
            'transition-all duration-300',
            currentIndex === index
              ? 'w-8 h-2 bg-indigo-600 rounded-full'
              : 'w-2 h-2 bg-gray-300 rounded-full hover:bg-gray-400'
          ]"
          :aria-label="`Go to testimonial ${index + 1}`"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Recommendation {
  id: number
  name: string
  title: string
  date: string
  relationship: string
  linkedinUrl: string
  photo?: string
  recommendation: string
}

interface Props {
  recommendations: Recommendation[]
  autoplay?: boolean
  autoplayDelay?: number
}

const props = withDefaults(defineProps<Props>(), {
  autoplay: true,
  autoplayDelay: 5000
})

const currentIndex = ref(0)
const carouselTrack = ref<HTMLElement | null>(null)
let autoplayInterval: NodeJS.Timeout | null = null

const next = () => {
  if (currentIndex.value < props.recommendations.length - 1) {
    currentIndex.value++
  } else if (props.autoplay) {
    currentIndex.value = 0 // Loop back to start
  }
}

const prev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}

const goToSlide = (index: number) => {
  currentIndex.value = index
  resetAutoplay()
}

const getInitials = (name: string) => {
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .substring(0, 2)
    .toUpperCase()
}

const openLinkedIn = (url: string) => {
  window.open(url, '_blank', 'noopener,noreferrer')
}

const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement
  // Hide the image and show initials fallback
  if (img.parentElement) {
    const name = props.recommendations[currentIndex.value]?.name || ''
    const initials = getInitials(name)
    img.parentElement.innerHTML = `<div class="w-full h-full rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-2xl">
      ${initials}
    </div>`
  }
}

const startAutoplay = () => {
  if (props.autoplay && props.recommendations.length > 1) {
    autoplayInterval = setInterval(() => {
      next()
    }, props.autoplayDelay)
  }
}

const stopAutoplay = () => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval)
    autoplayInterval = null
  }
}

const resetAutoplay = () => {
  stopAutoplay()
  startAutoplay()
}

onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  stopAutoplay()
})

// Pause autoplay on hover
const handleMouseEnter = () => {
  stopAutoplay()
}

const handleMouseLeave = () => {
  startAutoplay()
}
</script>

<style scoped>
.line-clamp-5 {
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
