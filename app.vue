<script setup lang="ts">
const [{ data: navigation }] = await Promise.all([
  useAsyncData('navigation', () => {
    return Promise.all([
      queryCollectionNavigation('articles')
    ])
  }, {
    transform: data => data.flat()
  })
])

provide('navigation', navigation)
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>