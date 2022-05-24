import Vue from 'vue'
import App from './App.vue'
import router from './router'

import store from './store/index'

// element-ui框架
import ElementUI from 'element-ui';
Vue.use(ElementUI);
import 'element-ui/lib/theme-chalk/index.css';

// 路由守卫
import VueRouter from "vue-router";
// import Cookies from 'vue-cookies' 
// axios
import axios from 'axios'
Vue.prototype.$axios = axios
axios.defaults.withCredentials = true;

// // 全局注册过滤器
// import { currency, factPrice, formatTime } from './utils/filters'
// Vue.filter('currency', currency)
// Vue.filter('factPrice', factPrice)
// Vue.filter('formatTime', formatTime)


// 事件总线
// const bus = new Vue()
// Vue.prototype.$bus = bus;

// Vue.use(Cookies)
// Vue.prototype.$Cookies = Cookies

Vue.config.productionTip = false



new Vue({
  router,
  axios,
  store,
  render: h => h(App),
}).$mount('#app')
