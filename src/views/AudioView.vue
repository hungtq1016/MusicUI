<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup lang="ts">
import { ref } from 'vue'
import BreadcrumbDefault from '@/components/Breadcrumbs/BreadcrumbDefault.vue'
import TableOne from '@/components/Tables/TableOne.vue'

import DefaultLayout from '@/layouts/DefaultLayout.vue'
import { headers, items, pagination, paginationOptions, fetch } from '@/logistics/managerment/audio.logistic'
import { onMounted } from 'vue';
import TableExpandAudio from '@/components/Tables/Expand/TableExpandAudio.vue'
onMounted(async () => {
    await fetch()
})

</script>

<template>
    <DefaultLayout>
        <!-- Breadcrumb Start -->
        <BreadcrumbDefault :pageTitle="'navigation.audio'" />
        <!-- Breadcrumb End -->

        <div class="flex flex-col gap-10">
            <TableOne 
            v-bind:="{ headers, items, pagination, paginationOptions,fetch }" 
            route="audio"  
            :expand-component="TableExpandAudio"/>
        </div>
    </DefaultLayout>
</template>
