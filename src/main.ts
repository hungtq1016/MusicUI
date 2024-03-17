import 'vue3-easy-data-table/dist/style.css';
import './assets/css/style.css'
// import 'jsvectormap/dist/css/jsvectormap.min.css'
// import 'flatpickr/dist/flatpickr.min.css'
import "vue-toastification/dist/index.css";

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueApexCharts from 'vue3-apexcharts'
import {i18n} from '@/utils/services/translations'
import Vue3EasyDataTable from 'vue3-easy-data-table';
import Toast from "vue-toastification";

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueApexCharts)
app.use(i18n)
app.component('EasyDataTable', Vue3EasyDataTable);
app.use(Toast, { transition: "Vue-Toastification__bounce", maxToasts: 20, newestOnTop: true });

app.mount('#app')
