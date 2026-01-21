<script setup>
const props = defineProps({
  type: {
    type: String,
    default: 'info',
    validator: (value) => ['info', 'warning', 'success', 'error'].includes(value)
  }
})

const alertClass = computed(() => {
  return {
    info: 'bg-blue-50 border-blue-200 text-blue-900 dark:bg-blue-950 dark:border-blue-800 dark:text-blue-100',
    warning: 'bg-orange-50 border-orange-200 text-orange-900 dark:bg-orange-950 dark:border-orange-800 dark:text-orange-100',
    success: 'bg-green-50 border-green-200 text-green-900 dark:bg-green-950 dark:border-green-800 dark:text-green-100',
    error: 'bg-red-50 border-red-200 text-red-900 dark:bg-red-950 dark:border-red-800 dark:text-red-100'
  }[props.type]
})

const iconClass = computed(() => {
  return {
    info: 'text-blue-600 dark:text-blue-400',
    warning: 'text-orange-600 dark:text-orange-400',
    success: 'text-green-600 dark:text-green-400',
    error: 'text-red-600 dark:text-red-400'
  }[props.type]
})

const icon = computed(() => {
  return {
    info: '📘',
    warning: '⚠️',
    success: '✅',
    error: '❌'
  }[props.type]
})
</script>

<template>
  <div 
    class="alert my-4 p-4 border-l-4 rounded-r-lg flex items-start gap-3"
    :class="alertClass"
    role="alert"
  >
    <span class="text-xl flex-shrink-0 mt-0.5" :class="iconClass">
      {{ icon }}
    </span>
    <div class="flex-1">
      <slot mdc-unwrap="p" />
    </div>
  </div>
</template>

<style scoped>
.alert :deep(p) {
  margin: 0;
}

.alert :deep(strong) {
  font-weight: 600;
}

.alert :deep(a) {
  text-decoration: underline;
  font-weight: 500;
}

.alert :deep(code) {
  background: rgba(0, 0, 0, 0.1);
  padding: 0.125rem 0.25rem;
  border-radius: 0.25rem;
  font-size: 0.875em;
}
</style>