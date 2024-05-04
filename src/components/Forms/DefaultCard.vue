<script setup lang="ts">
const props = defineProps(['cardTitle'])
</script>

<template>
  <div
    class="rounded-sm border border-zumthor-100 bg-white shadow-default dark:border-oxford-blue-900 dark:bg-big-stone-950 "
  >
    <div class="border-b border-zumthor-100 py-4 px-6.5 dark:border-oxford-blue-900">
      <h3 class="font-medium text-ebony-clay-950 dark:text-white">{{ props.cardTitle }}</h3>
    </div>
    <slot></slot>
  </div>
</template>
