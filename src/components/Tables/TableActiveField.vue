<template>
    <button v-if="item.enable" @click="toggle"
    class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 whitespace-nowrap">{{$t('status.active')}}</button>
    <button v-else @click="toggle"
    class="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/20 whitespace-nowrap">{{$t('status.inactive')}}</button>
</template>

<script setup lang="ts">
import { successNotification } from '@/utils/helpers/alert.helper';
import { put } from '@/utils/helpers/request.helper';
import { i18n } from '@/utils/services/translations';
import { getPath } from '@/utils/utils/url.util';
import type { Item } from 'vue3-easy-data-table';

const props = defineProps<{
  item: Item,
  fetch : () => Promise<void>,
  route: string
}>();


const toggle = async () => {

  // eslint-disable-next-line vue/no-mutating-props
  props.item.enable = !props.item.enable;

  const response = await put(`${getPath('api.'+props.route)}/${props.item.id}`,props.item);
  if (response?.isError == false) {
    await props.fetch();
    successNotification(i18n.global.t('message.updateSuccess'));
  }
}
  
</script>
