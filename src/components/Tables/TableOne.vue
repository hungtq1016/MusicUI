<script setup lang="ts">
// Third-party libraries
import { computed, ref } from "vue";
import type { Header, Item } from "vue3-easy-data-table";

// Local modules
import TableSelectedHeader from "./TableSelectedHeader.vue";
import TableActiveField from "./TableActiveField.vue";
import TableDatetimeField from "./TableDatetimeField.vue";
import TableFooter from './TableFooter.vue';
import TableActionField from "./TableActionField.vue";
import TableSelectedItems from "./TableSelectedItems.vue";
import { numberToByte } from "@/utils/utils/number.util";
import { i18n } from "@/utils/services/translations";
import type { ComponentPublicInstance } from 'vue'

// Type imports
import type { Pagination, PaginationRequest } from "@/types/type";

const props = defineProps<{
  headers: Header[];
  items: Item[];
  pagination: Pagination;
  paginationOptions: PaginationRequest,
  route: string;
  fetch: () => Promise<void>;
  expandComponent?: ComponentPublicInstance
}>();

const itemsSelected = ref<Item[]>([]);
const localeHeaders = computed(() => {
  return selectedHeaders.value.map((header) => {
    return {
      ...header,
      text: i18n.global.t(header.text) as string,
    };
  });
});

const selectedHeaders = ref<Header[]>([...props.headers]);
const countItems = computed(() => itemsSelected.value.length);
</script>

<template>
  <div
    class="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
    <div class="pb-2 flex gap-x-2">
      <TableSelectedHeader :value="selectedHeaders" :options="headers"
        @update:modelValue="value => selectedHeaders = value" />
      <TableSelectedItems :total="countItems" :items="itemsSelected" :route="route" :fetch="fetch" />
    </div>

    <EasyDataTable v-model:items-selected="itemsSelected" :headers="localeHeaders" :items="items" :hide-footer="true"
      no-hover>
      <template #item-id="{ id }">
        <p class="truncate max-w-28">{{ id }}</p>
      </template>
      <template #item-title="{ title }">
        <p class="line-clamp-1 w-40 hover:line-clamp-2">{{ title }}</p>
      </template>
      <template #item-enable="item">
        <TableActiveField :item="item" :fetch="fetch" :route="route" />
      </template>
      <template #item-size="{ size }">
        <p class="whitespace-nowrap">{{ numberToByte(Number(size)) }} </p>
      </template>
      <template #item-createdAt="{ createdAt }">
        <TableDatetimeField :date="createdAt" />
      </template>
      <template #item-updatedAt="{ updatedAt }">
        <TableDatetimeField :date="updatedAt" />
      </template>
      <template #item-action="{ id }">
        <TableActionField v-bind="{ id, route, fetch }" />
      </template>
      <template #expand="item" v-if="expandComponent">
        <expandComponent v-bind="{ item, route }" />
      </template>
    </EasyDataTable>

    <TableFooter v-bind="{ pagination, paginationOptions }" />
  </div>
</template>
