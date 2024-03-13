<template>
  <div class="basis-1/5">
    <div class="-m-1.5 flex items-center p-1.5">
      <img :src="getLocaleImage($i18n.locale)" class="h-6 shadow-sm" aria-hidden="true" />
      <select v-model="$i18n.locale"  @change="changeLocale($i18n.locale)"
        class="relative cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left focus:outline-none sm:text-sm border-none focus:ring-0">
        <option v-for="locale in $i18n.availableLocales" :value="locale">
          <transition leave-active-class="transition duration-100 ease-in" leave-from-class="opacity-100"
            leave-to-class="opacity-0">
              {{ getLocaleName(locale) }}          
          </transition>
        </option>
      </select>
    </div>
  </div>

</template>

<script setup lang="ts">
import { changeLocale } from '@/utils/services/translations';
import { getLocaleName, getLocaleImage } from '@/utils/utils/locale.util';

</script>