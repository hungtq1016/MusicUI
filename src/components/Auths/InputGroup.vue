<script setup lang="ts">
const props = defineProps(['label', 'type', 'placeholder'])
</script>

<template>
  <div class="mb-4">
    <label class="mb-2.5 block font-medium text-ebony-clay-950 dark:text-white">{{ props.label }}</label>
    <div class="relative">
      <input
        :type="props.type"
        :placeholder="props.placeholder"
        class="w-full rounded-lg border border-zumthor-100 bg-transparent py-4 pl-6 pr-10 outline-none focus:border-cerulean-blue-600 focus-visible:shadow-none dark:border-fiord-700 dark:bg-big-stone-950 dark:focus:border-cerulean-blue-600 text-ebony-clay-950 dark:text-white"
      />

      <span class="absolute right-4 top-4">
        <slot></slot>
      </span>
    </div>
  </div>
</template>
