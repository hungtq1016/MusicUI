import { toast } from 'vue3-toastify';

export const successNotification = (message:string) => {
    toast(message, {
        position: 'bottom-right',
        type: 'success',
    })
}

export const errorNotification = (message:string) => {
    toast(message, {
        position: 'bottom-right',
        type: 'error',
    })
}

export const infoNotification = (message:string) => {
    toast(message, {
        position: 'bottom-right',
        type: 'info',
    })
}

export const warningNotification = (message:string) => {
    toast(message, {
        position: 'bottom-right',
        type: 'warning',
    })
}