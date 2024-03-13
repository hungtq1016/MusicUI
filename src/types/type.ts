import type { EnableEnum } from "./enum";

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

export type PaginationRequest = {
    pageNumber: number
    pageSize: number
    enable : EnableEnum
}

export type FileResponse = {
    Title: string
    Alt: string
    Size: number
    Path: string
    Extension: string
}