import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'nprogress/nprogress.css'
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import TabMenu from 'primevue/tabmenu'
import MegaMenu from 'primevue/megamenu'
import Fieldset from 'primevue/fieldset'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from './plugins/foint-awesome'
import '@/services/AxiosInterceptorSetup.js'

import 'primeflex/primeflex.css'
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

createApp(App)
  .use(router, PrimeVue)
  .component('Button', Button)
  .component('TabMenu', TabMenu)
  .component('MegaMenu', MegaMenu)
  .component('Fieldset', Fieldset)
  .component('font-awesome-icon', FontAwesomeIcon)
  .provide('Store', store)
  .mount('#app')
