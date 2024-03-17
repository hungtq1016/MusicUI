import { EnableEnum } from '@/types/enum';
import type { TFileResponse, Pagination, PaginationRequest, PaginationResponse } from "@/types/type";
import { get } from "@/utils/helpers/request.helper";
import { getPath } from "@/utils/utils/url.util";
import { ref, watch } from "vue";
import type { Header } from "vue3-easy-data-table";

export const headers: Header[] = [
    { text: "table.id", value: "id", width: 100 },
    { text: "table.name", value: "name", sortable: true },
    { text: "table.slug", value: "slug" },
    { text: "table.enable", value: "enable" },
    { text: "table.createdAt", value: "createdAt" },
    { text: "table.updatedAt", value: "updatedAt" },
    { text: "table.action", value: "action" },
];

export const paginationOptions = ref<PaginationRequest>({
    pageNumber: 1,
    pageSize: 10,
    enable: EnableEnum.ALL
});

const init_pagination: Pagination = {
    pageNumber: 1,
    pageSize: 10,
    firstPage: 1,
    lastPage: 1,
    totalPages: 0,
    totalRecords: 0,
    nextPage: 1,
    previousPage: 1,
}

export const items = ref<TFileResponse[]>([]);
export const pagination = ref<Pagination>({ ...init_pagination });
export const fetch = async () => {
    
    const response = await get<any, PaginationResponse<TFileResponse>>(getPath("api.collection-page"), paginationOptions.value);
    items.value = response?.data.data || [];
    pagination.value = response?.data || { ...init_pagination };

};

watch(paginationOptions, async () => {
    await fetch();
}, { deep: true });