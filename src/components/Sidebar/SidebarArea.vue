<script setup lang="ts">
import { useSidebarStore } from '@/stores/sidebar'
import SidebarItem from './SidebarItem.vue'
import { menus,target } from '@/logistics/navigation.logistic'
import DropdownLocale from './DropdownLocale.vue';
import { onClickOutside } from '@vueuse/core';

const sidebarStore = useSidebarStore()

onClickOutside(target, () => {
    sidebarStore.isSidebarOpen = false
})

</script>

<template>
  <aside
    class="absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col justify-between py-5 overflow-y-hidden bg-ebony-clay-950 duration-300 ease-linear dark:bg-big-stone-950  lg:static lg:translate-x-0"
    :class="{
      'translate-x-0': sidebarStore.isSidebarOpen,
      '-translate-x-full': !sidebarStore.isSidebarOpen
    }" ref="target">
    <div class="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
      <!-- Sidebar Menu -->
      <nav class="px-4 lg:px-6">
        <template v-for="menuGroup in menus" :key="menuGroup.name">
          <div>
            <h3 class="mb-4 ml-4 text-sm font-medium text-regent-gray-600 ">{{ $t(menuGroup.name) }}</h3>

            <ul class="mb-6 flex flex-col gap-1.5">
              <SidebarItem v-for="(menuItem, index) in menuGroup.menuItems" :item="menuItem" :key="index"
                :index="index" />
            </ul>
          </div>
        </template>
      </nav>
      <!-- Sidebar Menu -->

    </div>
    <DropdownLocale />
  </aside>
</template>
