<script setup lang="ts">
import { useSidebarStore } from '@/stores/sidebar'
import DarkModeSwitcher from './DarkModeSwitcher.vue'
import DropdownMessage from './DropdownMessage.vue'
import DropdownNotification from './DropdownNotification.vue'
import DropdownUser from './DropdownUser.vue'
import SearchArea from './SearchArea.vue'

const { isSidebarOpen, toggleSidebar } = useSidebarStore()

</script>

<template>
  <header class="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-big-stone-950  dark:drop-shadow-none">
    <div class="flex flex-grow items-center justify-between py-4 px-4 shadow-2 md:px-6 2xl:px-11">
      <div class="flex items-center gap-2 sm:gap-4 lg:hidden">
        <!-- Hamburger Toggle BTN -->
        <button
          class="z-99999 block rounded-sm border border-zumthor-100 bg-white p-1.5 shadow-sm dark:border-oxford-blue-900 dark:bg-big-stone-950  lg:hidden"
          @click="() => toggleSidebar() ">
          <span class="relative block h-5.5 w-5.5 cursor-pointer">
            <span class="du-block absolute right-0 h-full w-full">
              <span
                class="relative top-0 left-0 my-1 block h-px w-0 rounded-sm bg-ebony-clay-950 delay-[0] duration-200 ease-in-out dark:bg-white"
                :class="{ '!w-full delay-300': !isSidebarOpen }"></span>
              <span
                class="relative top-0 left-0 my-1 block h-px w-0 rounded-sm bg-ebony-clay-950 delay-150 duration-200 ease-in-out dark:bg-white"
                :class="{ '!w-full delay-400': !isSidebarOpen }"></span>
              <span
                class="relative top-0 left-0 my-1 block h-px w-0 rounded-sm bg-ebony-clay-950 delay-200 duration-200 ease-in-out dark:bg-white"
                :class="{ '!w-full delay-500': !isSidebarOpen }"></span>
            </span>
            <span class="du-block absolute right-0 h-full w-full rotate-45">
              <span
                class="absolute left-2.5 top-0 block h-full w-px rounded-sm bg-ebony-clay-950 delay-300 duration-200 ease-in-out dark:bg-white"
                :class="{ '!h-0 delay-[0]': !isSidebarOpen }"></span>
              <span
                class="delay-400 absolute left-0 top-2.5 block h-px w-full rounded-sm bg-ebony-clay-950 duration-200 ease-in-out dark:bg-white"
                :class="{ '!h-0 dealy-200': !isSidebarOpen }"></span>
            </span>
          </span>
        </button>
        <!-- Hamburger Toggle BTN -->

      </div>

      <!-- Dark Mode Toggler -->
      <SearchArea />
      <!-- Dark Mode Toggler -->

      <div class="flex items-center gap-3 2xsm:gap-7">
        <ul class="flex items-center gap-2 2xsm:gap-4">
          <!-- Dark Mode Toggler -->
          <DarkModeSwitcher />
          <!-- Dark Mode Toggler -->

          <!-- Notification Menu Area -->
          <DropdownNotification />
          <!-- Notification Menu Area -->

          <!-- Chat Notification Area -->
          <DropdownMessage />
          <!-- Chat Notification Area -->

          <!-- User Area -->
          <DropdownUser />
          <!-- User Area -->

        </ul>


      </div>
    </div>
  </header>
</template>
