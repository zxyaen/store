<template>
  <div>
    <ShortCar />
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
    </div>
    <div class="box">
      <h1>总共消费 {{ total }} 元</h1>
    </div>

  </div>
</template>

<script>
import ShortCar from "components/shortCar.vue";

export default {
  name: "check",
  data() {
    return {
      total: null,
    };
  },
  components:{
    ShortCar,
  },
  methods: {},
  created() {
    this.total = this.$route.params.total;
  },
};
</script>

<style scoped>
.box {
  display: flex;
  height: 500px;
  justify-content: center;
  align-items: center;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4em;
  border-bottom:1px solid rgb(234, 231, 231) ;
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
