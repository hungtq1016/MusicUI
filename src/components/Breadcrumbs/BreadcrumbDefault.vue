<script setup lang="ts">
const props = defineProps(['pageTitle'])
</script>

<template>
  <div class="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
    <h2 class="text-title-md2 font-semibold text-ebony-clay-950 dark:text-white">
      {{ $t(props.pageTitle) }}
    </h2>

    <nav>
      <ol class="flex items-center gap-2">
        <li>
          <router-link class="font-medium" to="/"> {{ $t('navigation.dashboard') }} / </router-link>
        </li>
        <li class="font-medium text-cerulean-blue-600">{{ $t(props.pageTitle) }}</li>
      </ol>
    </nav>
  </div>
</template>
