<template>
    <div class="relative text-center">
        <p class="text-white dark:text-gray-300 mb-1">{{ i18n.global.t('message.confirmDelete') }}</p>
        <div class="flex justify-start items-center gap-x-2">
            <button type="submit" @click.stop="() => $emit('confirmClick')"
                class="text-white bg-amber-600 hover:bg-amber-700 font-medium rounded text-xs px-3 py-1.5  text-center inline-flex items-center">
                {{ i18n.global.t('button.confirm', { name: "Audio" }) }}
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { i18n } from '@/utils/services/translations';

const emit = defineEmits<{
    (e: 'confirmClick'): void
}>()
</script>
