import { defineStore } from 'pinia'
import { ref } from 'vue';

export const useMobile = defineStore('mobile', () => {

    const isNavigationOpen = ref<boolean>(true);

    const toggleNavigation = () => {
        isNavigationOpen.value = !isNavigationOpen.value;
    }

    const closeNavigation = () => {
        isNavigationOpen.value = false;
        console.log(isNavigationOpen.value)
    }

    const openNavigation = () => {
        isNavigationOpen.value = true;
        console.log(isNavigationOpen.value)
    }

    return { isNavigationOpen, toggleNavigation, closeNavigation, openNavigation };
});
