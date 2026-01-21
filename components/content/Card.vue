<script setup>
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'bordered', 'elevated', 'flat'].includes(value)
  }
})

const cardClass = computed(() => {
  return {
    default: 'bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow',
    bordered: 'bg-white dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-600',
    elevated: 'bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl transition-shadow',
    flat: 'bg-gray-50 dark:bg-gray-800'
  }[props.variant]
})
</script>

<template>
  <div 
    class="card rounded-lg p-6 my-4"
    :class="cardClass"
  >
    <h3 v-if="title" class="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
      {{ title }}
    </h3>
    <div class="card-content text-gray-700 dark:text-gray-300">
      <slot mdc-unwrap="p" />
    </div>
  </div>
</template>

<style scoped>
.card-content :deep(p) {
  margin: 0;
  line-height: 1.6;
}

.card-content :deep(p:not(:last-child)) {
  margin-bottom: 0.75rem;
}

.card-content :deep(strong) {
  color: inherit;
  font-weight: 600;
}

.card-content :deep(em) {
  font-style: italic;
}

.card-content :deep(code) {
  background: rgba(0, 0, 0, 0.05);
  dark:background: rgba(255, 255, 255, 0.05);
  padding: 0.125rem 0.375rem;
  border-radius: 0.25rem;
  font-size: 0.875em;
  font-family: 'Courier New', monospace;
}

.card-content :deep(ul),
.card-content :deep(ol) {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
}

.card-content :deep(li) {
  margin-bottom: 0.25rem;
}
</style>