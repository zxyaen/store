import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import Cookies from 'vue-cookies'

const bus = new Vue()
Vue.prototype.$bus = bus;

Vue.use(Cookies)


Vue.use(ElementUI);
Vue.prototype.$axios = axios
Vue.prototype.$Cookies = Cookies

Vue.config.productionTip = false

axios.defaults.withCredentials = true;


new Vue({
  router,
  axios,
  store,
  render: h => h(App),
}).$mount('#app')
