import './assets/style.css'
import 'vue3-toastify/dist/index.css';
import 'vue3-easy-data-table/dist/style.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import {i18n} from '@/utils/services/translations'
import Vue3EasyDataTable from 'vue3-easy-data-table';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.component('EasyDataTable', Vue3EasyDataTable);

app.mount('#app')
