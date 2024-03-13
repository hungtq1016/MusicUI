<template>
    <Table v-bind:="{ headers, items, pagination,paginationOptions }" />
</template>

<script setup lang="ts">
import Table from '@/components/Table/index.vue'
import { headers, fetch, items, pagination,paginationOptions } from '@/logistics/managerment/audio.logistic'
import { onMounted } from 'vue';

onMounted(async () => {
    await fetch()
})
</script>
