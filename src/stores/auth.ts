import { defineStore } from 'pinia'
import { post } from '@/utils/helpers/request.helper'
import type { Response, TokenResponse, LoginRequest } from '@/types/type';
import { getPath } from '@/utils/utils/url.util';

export const useAuthStore = defineStore('auth', () => {
  const checkAuth = async (): Promise<Response<TokenResponse>> => {
    const body : LoginRequest = {
      email: 'hungtq1016@gmail.com',
      password: 'Th1s1sP@ssword'
    };
    const response = await post<LoginRequest,TokenResponse>(getPath('oauth2.login'), body);
    return response;
  };

  return { checkAuth };
});
