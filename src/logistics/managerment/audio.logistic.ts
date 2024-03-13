import { EnableEnum } from '@/types/enum';
import type { FileResponse, Pagination, PaginationRequest, PaginationResponse } from "@/types/type";
import { get } from "@/utils/helpers/request.helper";
import { getPath } from "@/utils/utils/url.util";
import { ref, watch } from "vue";
import type { Header } from "vue3-easy-data-table";

export const headers: Header[] = [
    { text: "table.id", value: "id" },
    { text: "table.title", value: "title", sortable: true },
    { text: "table.alt", value: "alt" },
    { text: "table.path", value: "path" },
    { text: "table.size", value: "size" },
    { text: "table.extension", value: "extension" },
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

export const items = ref<FileResponse[]>([]);
export const pagination = ref<Pagination>({ ...init_pagination });
export const fetch = async () => {
    const response = await get<any, PaginationResponse<FileResponse>>(getPath("api.audioPage"),paginationOptions.value);
    items.value = response?.data.data || [];
    pagination.value = response?.data || { ...init_pagination };
    console.log(items.value)
};

watch(paginationOptions, async() => {
    await fetch();
},{deep: true});