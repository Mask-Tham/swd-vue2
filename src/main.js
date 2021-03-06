import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuesax from 'vuesax'

import 'vuesax/dist/vuesax.css' //Vuesax styles
import 'material-icons/iconfont/material-icons.css';

import VueApexCharts from 'vue-apexcharts'

Vue.config.productionTip = false

Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)
Vue.use(Vuesax)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
