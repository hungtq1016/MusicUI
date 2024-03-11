import { createI18n } from 'vue-i18n'
import { ref } from 'vue'
import enUS from '@/utils/common/locales/en-US.json';
import viVN from '@/utils/common/locales/vi-VN.json';
import jaJP from '@/utils/common/locales/ja-JP.json';
import { changeCookie, getCookie, isCookieExist, removeCookie, setCookie } from '@/utils/helpers/cookie.helper';

export const locale = ref<string>('vi-VN');

if (!isCookieExist('locale')) {
    setCookie('locale', 'vi-VN');
    locale.value = 'vi-VN';
}else{
    locale.value = getCookie('locale') as string;
}

export const i18n = createI18n({
    legacy: false,
    locale: locale.value,
    globalInjection: true,
    messages: {
        'en-US': enUS,
        'vi-VN': viVN,
        'ja-JP': jaJP
    }
    
});

export const changeLocale = (value: any, options?: any) => {
    changeCookie('locale', value, options);
}

