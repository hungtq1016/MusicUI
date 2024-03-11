import axios from 'axios';
import { stringify } from '@/utils/utils/string.util';
import { urlBuilder } from '@/utils/utils/url.util';
import type { AxiosRequestConfig } from 'axios'
import type { Response } from '@/types/type';
import {i18n} from '@/utils/services/translations'

// Define a helper function for making API requests
async function makeRequest<TRequest,TResponse>(method: string, path: string, data?: TRequest, queryParams?: any) {

    const url : string = urlBuilder(path,queryParams);

    const options : AxiosRequestConfig = {
        url: url,
        method,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
    };

    // Add request body if data is provided
    if (data) {
        options.data = stringify(data);
    }

    // Make the API request
    try {
        const response = await axios<Response<TResponse>>(options);
        return response.data;

    }
    catch (error) {
        console.error(i18n.global.t('error.server_error'), error);
        throw new Error(i18n.global.t('error.server_error'));
    }

    // Return the response data
}

// Define your REST API request methods
export async function get<TRequest, TResponse>(path: string, queryParams?: any) {
    return makeRequest<TRequest, TResponse>('GET', path, undefined, queryParams);
}

export async function post<TRequest, TResponse>(path: string, data?: any) {
    return makeRequest<TRequest, TResponse>('POST', path, data);
}

export async function put<TRequest, TResponse>(path: string, data?: any) {
    return makeRequest<TRequest, TResponse>('PUT', path, data);
}

export async function del<TRequest, TResponse>(path: string) {
    return makeRequest<TRequest, TResponse>('DELETE', path);
}