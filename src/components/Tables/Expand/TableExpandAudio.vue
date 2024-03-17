<template>
    <div class="py-1">
        <audio ref="audio" controls class="p-2" v-if="route == 'audio'">
          <source :src="urlBuilder('/audios/'+item.path)" type="audio/mp3">
          {{$t('html.browserNotSupport',{element:'audio'})}}
        </audio>
      </div>
</template>

<script setup lang="ts">
import { urlBuilder } from '@/utils/utils/url.util';
import type { Item } from 'vue3-easy-data-table';

const props = defineProps<{
  item: Item,
  route: string
}>();
</script>
