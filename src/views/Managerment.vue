
<template>
  <div>
    <Mobile/>
    <Navigation/>
    <div class="lg:pl-72">
      <Search/>

      <main class="py-10">
        <div class="px-4 sm:px-6 lg:px-8">
          <RouterView/>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import Search from '@/components/Search/index.vue'
import Navigation from '@/components/inc/Navigation.vue'
import Mobile from '@/components/Mobile/index.vue'

</script>