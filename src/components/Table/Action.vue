<template>
  <div class="flex gap-x-1 divide-x-2">
    <button type="button" @click="remove">
      <TrashIcon class="h-5 w-5 text-red-400" />
    </button>
    <button class="pl-1" @click="copyClipboard">
      <DocumentDuplicateIcon class="h-5 w-5 text-gray-400" />
    </button>
    <button type="button" @click="view"
    class="pl-1">
      <EyeIcon class="h-5 w-5 text-sky-400" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { fetch } from '@/logistics/managerment/audio.logistic';
import type { Response } from '@/types/type';
import { infoNotification, successNotification } from '@/utils/helpers/alert.helper';
import { del } from '@/utils/helpers/request.helper';
import { i18n } from '@/utils/services/translations';
import { DocumentDuplicateIcon, TrashIcon } from '@heroicons/vue/24/outline';
import { EyeIcon } from '@heroicons/vue/24/solid';

const props = defineProps<{
  id: string
}>()

const remove = async () => {
  const response = await del<any,Response<boolean>>(`/audios/${props.id}`);
  
  if(response?.isError === false){
    successNotification(i18n.global.t('message.deleteSuccess',{name:"Audio"}) as string);
    await fetch();
  }
}

const copyClipboard = () => {
  navigator.clipboard.writeText(props.id);
  successNotification(i18n.global.t('message.copySuccess',{name:"Id"}) as string);
  console.log('copyClipboard')
}

const view = () => {
  infoNotification("This feature is not available yet");
}

</script>