<template>
  <!-- header部分 开始 -->
  <div class="w header">
    <!-- logo -->
    <div class="logoBox">
      <div class="logo">
        <div class="logoLf">
          <router-link to="/"> <img src="@/assets/logo.png" /> </router-link>
        </div>
        <router-link to="/">
          <div class="logoRt"><-回到<br /><-主页</div>
        </router-link>
        <!-- <img src="img/logo.png" alt="logo"> -->
      </div>
    </div>

    <!-- <div class="headerRight"> -->
    <div class="search">
      <Search v-show="getIsHome" />
    </div>

    <!-- shopCar -->
    <div class="shopCar">
      <router-link to="/shopCar" class="mycar">购物车</router-link>
    </div>
    <!-- </div> -->
  </div>
  <!-- 结束 -->
</template>

<script>
import Search from "./search.vue";
export default {
  name: "headerTop",
  data() {
    return {
      Bname: "",
      sBook: "",
    };
  },

  components: {
    Search,
  },
  computed: {
    getIsHome() {
      return this.$store.state.isHome;
    },
  },

};
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4em;
}
.header .headerRight {
  display: flex;
  align-items: center;
  /* width: 600px; */
  /* justify-content: space-between; */
}

.header .logo {
  display: flex;
}
.header .logoLf {
  /* border-right: 1px solid black; */
  /* margin-top: 20px;
  margin-right: 14px; */
}
.header .logoLf a {
  text-align: center;
  line-height: 36px;
}
.header .logoRt {
  font-size: 0.5em;
  margin-top: 7px;
  margin-left: 5px;
}
.shopCar {
  height: 100%;
  display: flex;
  align-items: center;
}
</style>
