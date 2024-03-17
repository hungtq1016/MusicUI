import type { FunctionalComponent, HTMLAttributes, VNodeProps } from "vue";
import type { EnableEnum } from "./enum";

export type TMenu =  {
    name: string,
    menuItems: TMenuItem[]
}

export type TMenuItem = {
    icon?: string | FunctionalComponent<HTMLAttributes & VNodeProps, {}, any, {}>,
    label: string,
    route: string,
    children?: TMenuItem[]
}

export type Response<T> = {
    data: T,
    message: string,
    statusCode: number,
    isError: boolean
};

export type TokenResponse = {
    accessToken: string,
    refreshToken: string,
    tokenType: string,
    expiredAt: string
}

export type LoginRequest = {
    email: string,
    password: string
}

export type Pagination = {
    pageNumber: number
    pageSize: number
    firstPage: number
    lastPage: number
    totalPages: number
    totalRecords: number
    nextPage: number
    previousPage: number
}

export type PaginationResponse<T> = Pagination & {
    data: T[],
}

export type SidebarItem = {
    label: string
  }
  

export type PaginationRequest = {
    pageNumber: number
    pageSize: number
    enable: EnableEnum
}

export type TFileResponse = {
    title: string
    alt: string
    size: number
    path: string
    extension: string
}

export type TOption = {
    name:string,
    value:string
}