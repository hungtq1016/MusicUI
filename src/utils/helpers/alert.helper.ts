import Confirm from "@/components/Alerts/AlertConfirm.vue";
import { useToast } from "vue-toastification";
import { POSITION, type PluginOptions } from 'vue-toastification'
const toast = useToast();

const options: PluginOptions = {
    position: POSITION.BOTTOM_RIGHT,
    timeout: 1500,
    closeOnClick: true,
    transition: "Vue-Toastification__bounce",
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    closeButton: "button",
    icon: true,
}

export const successNotification = (message: string, duration: number = 1500) => {
    options.timeout = duration;
    toast.success(message, options);
}

export function confirmNotification(message: string, event: ()=>void, duration: number = 1500) {
    toast.warning(
    {
        component:Confirm,
        listeners: {
            confirmClick: () => {
                successNotification(message, duration)
                event();
            }
        },
    }, 
    {
        position: POSITION.BOTTOM_RIGHT,
        timeout: 3000,
        closeOnClick: true,
        pauseOnFocusLoss: false,
        pauseOnHover: false,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        closeButton: "button",
        icon: true,
        rtl: false
    });
}

export const errorNotification = (message: string, duration: number = 1500) => {
    options.timeout = duration;
    toast.error(message, options);
}

export const infoNotification = (message: string, duration: number = 1500) => {
    options.timeout = duration;
    toast.info(message, options);
}

export const warningNotification = (message: string, duration: number = 1500) => {
    options.timeout = duration;
    toast.warning(message, options);
}