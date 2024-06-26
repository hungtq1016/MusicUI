<script setup lang="ts">
import { useSidebarStore } from '@/stores/sidebar'
import { useRoute } from 'vue-router'
import SidebarDropdown from './SidebarDropdown.vue'
import type { SidebarItem, TMenuItem } from '@/types/type';
import { ChevronDownIcon } from '@heroicons/vue/24/outline';

const sidebarStore = useSidebarStore()

const props = defineProps<{
  item: TMenuItem,
  index: number
}>()

const currentPage = useRoute().name

const handleItemClick = () => {
  const pageName = sidebarStore.page === props.item.label ? '' : props.item.label
  sidebarStore.page = pageName

  if (props.item.children) {
    return props.item.children.some((child: SidebarItem) => sidebarStore.selected === child.label)
  }
}

</script>

<template>
  <li>
    <router-link
      :to="item.route"
      class="group flex justify-between items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-link-water-200  duration-300 ease-in-out hover:bg-bright-gray-900 dark:hover:bg-oxford-blue-900"
      @click.prevent="handleItemClick"
      :class="{
        'bg-bright-gray-900 dark:bg-oxford-blue-900': sidebarStore.page === item.label
      }"
    >
      <div class="flex gap-x-2 items-center">
        <component :is="item.icon" class="w-5 h-5"></component>
        <span>{{ $t(item.label) }}</span>
      </div>
      <ChevronDownIcon v-if="item.children"
        class="w-5 h-5"
        :class="{ 'rotate-180': sidebarStore.page === item.label }"
      />
    </router-link>

    <!-- Dropdown Menu Start -->
    <div class="translate transform overflow-hidden" v-show="sidebarStore.page === item.label">
      <SidebarDropdown
        v-if="item.children"
        :items="item.children"
        :currentPage="currentPage"
        :page="item.label"
      />
      <!-- Dropdown Menu End -->
    </div>
  </li>
</template>
