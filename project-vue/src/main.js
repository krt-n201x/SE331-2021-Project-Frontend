import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import PrimeVue from 'primevue/config'
import Button from 'primevue/button'

import 'primeflex/primeflex.css'
import 'primevue/resources/themes/saga-blue/theme.css'      
import 'primevue/resources/primevue.min.css'                 
import 'primeicons/primeicons.css'                      

createApp(App)
.use(router,PrimeVue)
.component('Button', Button)
.provide('Store', store)
.mount('#app')
