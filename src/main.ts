import './assets/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import {i18n} from '@/utils/services/translations'
import VueCookies from 'vue-cookies'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(VueCookies, { expires: '7d'})

app.mount('#app')
