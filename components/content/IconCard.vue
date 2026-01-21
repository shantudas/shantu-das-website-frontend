<script setup>
const props = defineProps({
  title: {
    type: String,
    default: 'Default title'
  },
  description: {
    type: String,
    default: 'Default description'
  },
  icon: {
    type: String,
    default: '📦'
  },
  iconBg: {
    type: String,
    default: 'bg-blue-100 dark:bg-blue-900'
  },
  iconColor: {
    type: String,
    default: 'text-blue-600 dark:text-blue-400'
  }
})
</script>

<template>
  <div class="icon-card p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 my-4">
    <div 
      class="icon-wrapper w-14 h-14 rounded-lg flex items-center justify-center mb-4"
      :class="iconBg"
    >
      <span class="text-3xl" :class="iconColor">
        {{ icon }}
      </span>
    </div>
    
    <h3 class="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">
      {{ title }}
    </h3>
    
    <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
      {{ description }}
    </p>
    
    <div v-if="$slots.default" class="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.icon-card {
  position: relative;
  overflow: hidden;
}

.icon-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, #3b82f6, #8b5cf6);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

.icon-card:hover::before {
  transform: scaleX(1);
}

.icon-wrapper {
  transition: transform 0.3s ease;
}

.icon-card:hover .icon-wrapper {
  transform: scale(1.1);
}
</style>