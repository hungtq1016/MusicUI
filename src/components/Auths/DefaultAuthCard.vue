<script setup lang="ts">
const props = defineProps(['subtitle', 'title', 'customClasses'])
</script>

<template>
  <!-- ====== Forms Section Start -->
  <div
    class="rounded-sm border border-zumthor-100 bg-white shadow-default dark:border-oxford-blue-900 dark:bg-big-stone-950 "
  >
    <div class="flex flex-wrap items-center">
      <div class="hidden w-full xl:block xl:w-1/2">
        <div class="py-17.5 px-26 text-center">
          <router-link class="mb-5.5 inline-block" to="/">
            <img class="hidden dark:block" src="./favico.ico" alt="Logo" />
            <img class="dark:hidden" src="./favico.ico" alt="Logo" />
          </router-link>

          <p class="font-medium 2xl:px-20">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit suspendisse.
          </p>

          <span class="mt-15 inline-block">
            <img src="@/assets/images/illustration/illustration-03.svg" alt="illustration" />
          </span>
        </div>
      </div>
      <div class="w-full border-zumthor-100 dark:border-oxford-blue-900 xl:w-1/2 xl:border-l-2">
        <div class="w-full p-4 sm:p-12.5 xl:p-17.5">
          <span class="mb-1.5 block font-medium">{{ props.subtitle }}</span>
          <h2 class="mb-9 text-2xl font-bold text-ebony-clay-950 dark:text-white sm:text-title-xl2">
            {{ props.title }}
          </h2>

          <slot></slot>
        </div>
      </div>
    </div>
  </div>
  <!-- ====== Forms Section End -->
</template>
