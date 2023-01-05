import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import TypeNav from '@/components/TypeNav'
import Pagination from '@/components/Pagination'
import store from '@/store'
import { Button, MessageBox } from 'element-ui';
import '@/mock/mockServe'
import 'swiper/css/swiper.css'
import * as API from '@/api'
import VueLazyload from 'vue-lazyload'
import atm from '@/assets/images/aoteman.gif'

Vue.component(TypeNav.name, TypeNav)
Vue.component(Pagination.name, Pagination)
Vue.component(Button.name, Button)

Vue.use(VueLazyload, {
  loading: atm,
})

import '@/plugins/validate'

Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;

new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
    Vue.prototype.$API = API
  },
  router,
  store
}).$mount('#app')
