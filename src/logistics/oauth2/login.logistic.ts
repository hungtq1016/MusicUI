import type { LoginRequest, TokenResponse } from "@/types/type";
import { ref } from "vue";
import type { Rules } from 'async-validator'
import { useAsyncValidator } from '@vueuse/integrations/useAsyncValidator'
import { post } from "@/utils/helpers/request.helper";
import { getPath } from "@/utils/utils/url.util";
import {useAuthInfo} from '@/utils/helpers/indexedDB.helper'
import { successNotification } from "@/utils/helpers/alert.helper";
import router from "@/router";
import { i18n } from '@/utils/services/translations'

const init_state: LoginRequest = {
    email: "",
    password: ""
}

const rules: Rules = {
    email: [
        {
            type: 'email',
            required: true,
            pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        },

        
    ],
    password: [
        {
            type: 'string',
            required: true,
            pattern: /^(?=.*[!@#$%^&*(),.?\"":{}|<>])(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/
        },
    ],
}

export const state = ref(init_state)

export const { pass, isFinished, errorFields } = useAsyncValidator(state, rules)

export const submit = async () => {

    const { updateAuthAsync } = useAuthInfo();

    const result = await post<LoginRequest,TokenResponse>(getPath('oauth2.login'), state.value)

    if (result?.isError === false) {

        const saveResult: boolean | undefined = await updateAuthAsync(result?.data as TokenResponse);

        if (saveResult) {
            await router.push('/')
            successNotification(i18n.global.t('message.login_success'))
        }
    }
}