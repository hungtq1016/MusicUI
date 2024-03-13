<template>
  <div class="pb-2 flex gap-x-2">
    <SelectedHeader
      :value="selectedHeaders"
      :options="headers"
      @update:modelValue="value => selectedHeaders = value"
    />
    <SelectedItems :total="countItems" :items="itemsSelected" />
  </div>

  <EasyDataTable
    v-model:items-selected="itemsSelected"
    :headers="localeHeaders"
    :items="items"
    :hide-footer="true"
    no-hover
  >
    <template #item-enable="item">
      <Active :item="item" />
    </template>
    <template #item-size="{ size }">
      <span>{{ numberToByte(Number(size)) }} </span>
    </template>
    <template #item-createdAt="{ createdAt }">
      <Datetime :date="createdAt" />
    </template>
    <template #item-updatedAt="{ updatedAt }">
      <Datetime :date="updatedAt" />
    </template>
    <template #item-action="{ id }">
      <Action v-bind="{id}"/>
    </template>
    <template #expand="item">
      <div class="py-1">
        <audio ref="audio" controls class="p-2">
          <source :src="urlBuilder('/audios/'+item.path)" type="audio/mp3">
          {{$t('html.browserNotSupport',{element:'audio'})}}
        </audio>
      </div>
    </template>
  </EasyDataTable>

  <FooterTable v-bind="{pagination,paginationOptions}" />
</template>

<script setup lang="ts">
// Third-party libraries
import { computed, ref } from "vue";
import type { Header, Item } from "vue3-easy-data-table";

// Local modules
import SelectedHeader from "./SelectedHeader.vue";
import Active from "./Active.vue";
import Datetime from "./Datetime.vue";
import FooterTable from './Footer.vue';
import Action from "./Action.vue";
import SelectedItems from "./SelectedItems.vue";
import { urlBuilder } from "@/utils/utils/url.util";
import { numberToByte } from "@/utils/utils/number.util";
import { i18n } from "@/utils/services/translations";

// Type imports
import type { Pagination, PaginationRequest } from "@/types/type";


const props = defineProps<{
  headers: Header[];
  items: Item[];
  pagination: Pagination;
  paginationOptions: PaginationRequest
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
