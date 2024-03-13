<template>
    <button v-if="Boolean(item.enable)" @click="toggle"
    class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">{{$t('status.active')}}</button>
    <button v-else @click="toggle"
    class="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/20">{{$t('status.inactive')}}</button>
</template>

<script setup lang="ts">
import { fetch } from '@/logistics/managerment/audio.logistic';
import { put } from '@/utils/helpers/request.helper';
import type { Item } from 'vue3-easy-data-table';

const props = defineProps<{
  item: Item
}>();

const toggle = async () => {
  props.item.enable = !Boolean(props.item.enable);
  await put(`/audios/${props.item.id}`,props.item);
  await fetch();
}
  
</script>
