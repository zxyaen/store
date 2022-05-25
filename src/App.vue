<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

// import Home from './components/home.vue'

export default {
  name: "App",
  // data() {
  //   return {
  //     cartList:JSON.parse(localStorage.getItem("cartList")) || [],
  //   }
  // },
 
  // methods: {

  // },
  // // 添加监视事件
  // watch: {
  //   // 监视对象是todos
  //   cartList: {
  //     // 开启深度监视
  //     // handler回调函数，存储数据到本地
  //     handler(value) {
  //       localStorage.setItem("cartList", JSON.stringify(value));
  //     },
  //     deep: true,
  //   },
  // },

};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
@import "assets/css/base.css";
@import "assets/css/common.css";
</style>
