<template>
    <div class="group">
        <div class="group-hover:hidden">
            {{ formatDistance(new Date(date), new Date(), { addSuffix: true, locale: locale }) }}
        </div>
        <div class="hidden group-hover:block">
            {{ format(new Date(date), 'Pp',{ locale: locale }) }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { i18n } from '@/utils/services/translations';
import { format, formatDistance } from 'date-fns'
import { vi, enUS, ja } from "date-fns/locale";
import { computed } from 'vue';

const props = defineProps<{
    date: string;
}>();

const locale = computed(() => {
    const currentLocale = String(i18n.global.locale.value);
    switch (currentLocale) {
        case 'vi-VN':
            return vi;
        case 'en-US':
            return enUS;
        case 'ja-JP':
            return ja;
        default:
            return enUS;
    }
});

</script>
