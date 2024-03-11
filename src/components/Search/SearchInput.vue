<template>
    <form class="relative flex basis-1/2" action="#" method="GET">
        <label for="search-field" class="sr-only">Search</label>
        <MagnifyingGlassIcon class="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"
            aria-hidden="true" />
        <input id="search-field"
            class="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
            :placeholder="$t('form.place_holder.search')" type="search" name="search" 
            :value="isNavigationOpen"/>
    </form>
</template>

<script setup lang="ts">
import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid'
import { useMobile } from '@/stores/mobile'

const {isNavigationOpen} = useMobile()
</script>
