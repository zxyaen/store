import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import 'bootstrap'
// import $ from 'jquery'
import Cookies from 'vue-cookies'
Vue.use(Cookies)


Vue.use(ElementUI);
Vue.prototype.$axios = axios
Vue.prototype.$Cookies = Cookies

Vue.config.productionTip = false

axios.defaults.withCredentials = true;


new Vue({
  router,
  axios,
  render: h => h(App),
}).$mount('#app')
