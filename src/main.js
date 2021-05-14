import Vue from "vue";
import App from "./App.vue";
import '@/assets/css/tailwind.css';

import '@/router'
import router from "./router";
import {dollarFilter,percentFilter} from '@/filter';

import Chartick from 'vue-chartkick';
import {VueSpinners} from '@saeris/vue-spinners';
import Chart from 'chart.js';

// vue.filter permite registrar de manera similar
// a como los componentes, un filtro de la app
Vue.filter('dollar', dollarFilter);
Vue.filter('percent', percentFilter);
//Permitirá usar las animaciones del loading
Vue.use(VueSpinners);
Vue.use(Chartick.use(Chart))

Vue.config.productionTip = false;

new Vue({
  router:router,
  render: (h) => h(App),
}).$mount("#app");

