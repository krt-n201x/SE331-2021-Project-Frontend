import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import TabMenu from 'primevue/tabmenu';
import Fieldset from 'primevue/fieldset';

import 'primeflex/primeflex.css'
import 'primevue/resources/themes/saga-blue/theme.css'      
import 'primevue/resources/primevue.min.css'                 
import 'primeicons/primeicons.css'                      

createApp(App)
.use(router,PrimeVue)
.component('Button', Button)
.component('TabMenu', TabMenu)
.component('Fieldset', Fieldset)
.provide('Store', store)
.mount('#app')
