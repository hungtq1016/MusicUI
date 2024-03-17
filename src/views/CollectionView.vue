<script setup lang="ts">
import BreadcrumbDefault from '@/components/Breadcrumbs/BreadcrumbDefault.vue'
import TableOne from '@/components/Tables/TableOne.vue'

import DefaultLayout from '@/layouts/DefaultLayout.vue'
import { headers, items, pagination, paginationOptions, fetch } from '@/logistics/managerment/collection.logistic'
import { onMounted } from 'vue';

onMounted(async () => {
    await fetch()
})

</script>

<template>
    <DefaultLayout>
        <!-- Breadcrumb Start -->
        <BreadcrumbDefault :pageTitle="'navigation.collection'" />
        <!-- Breadcrumb End -->

        <div class="flex flex-col gap-10">
            <TableOne v-bind:="{ headers, items, pagination, paginationOptions,fetch }" route="collection"  />
        </div>
    </DefaultLayout>
</template>
