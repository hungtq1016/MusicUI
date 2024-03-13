<template>
<div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
      <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4">
        <div class="flex h-16 shrink-0 items-center">
          <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
        </div>
        <nav class="flex flex-1 flex-col">
          <ul role="list" class="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" class="-mx-2 flex flex-col gap-y-1">
                <template v-for="(item) in navigation" :key="item.name">
                        <RouterLink :to="item.to" v-slot="{ href , navigate, isActive, isExactActive }">
                          <li
                            :class="[isActive ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800','rounded-md', isExactActive && 'router-link-exact-active']">
                            <a :href="href" @click="navigate" class="group flex gap-x-3 p-2 text-sm leading-6 font-semibold">
                              <component :is="item.icon" class="h-6 w-6 shrink-0" aria-hidden="true" />
                              {{ $t(item.name) }}
                            </a>
                          </li>
                        </RouterLink>
                  </template> 
              </ul>
            </li>
            <li class="mt-auto">
              <a href="#" class="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white">
                <Cog6ToothIcon class="h-6 w-6 shrink-0" aria-hidden="true" />
                {{ $t('navigation.setting') }}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
</template>

<script setup lang="ts">
import { navigation } from '@/logistics/inc/navigation.logistic'
import { Cog6ToothIcon } from '@heroicons/vue/24/outline';
</script>
