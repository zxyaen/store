<template>
  <!-- header部分 开始 -->
  <div class="w header">
    <!-- logo -->
    <div class="logoBox">
      <div class="logo">
        <div class="logoLf">
          <router-link to="/"> <img src="@/assets/logo.png" /> </router-link>
        </div>
        <a href="javascript:;">
          <div class="logoRt">
            支持货到付款<br />
            点击关注店铺
          </div>
        </a>
        <!-- <img src="img/logo.png" alt="logo"> -->
      </div>
    </div>

    <div class="headerRight">
      <!-- search制作 -->
      <div class="search">
        <input
          type="text"
          class="text"
          placeholder="请输入查找图书"
          v-model="Bname"
        />
        <input type="button" class="btn" value="搜索" @click="Sbook(Bname)" />
      </div>
      <!-- shopcar -->
      <div class="shopcar">
        <!-- <i class="car"></i> -->
        <router-link to="/shopcar" class="mycar">我的购物车</router-link>
        <a class="shopCar"></a>
      </div>
    </div>
  </div>
  <!-- 结束 -->
</template>

<script>
import { searchBook } from "@/network/goods";
export default {
  name: "headerTop",
  data() {
    return {
      Bname: "",
    };
  },
  methods: {
    Sbook(Bname) {
      searchBook(Bname).then((res) => {
        console.log(res);
      });
    },
  },
};
</script>

<style scoped>
/* .logo{
  width: 50px;
  height: 50px;
  background-image: url('@/assets/logo.png');
} */
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4em;
}
.header .headerRight {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.header .headerRight .search {
  margin-right: 1.5em;
}
.header .headerRight .search .btn {
  padding: 5px;
}
.header .logo {
  display: flex;
}
.header .logoLf {
  border-right: 1px solid black;
  padding-right: 14px;
  margin-right: 14px;
}
.header .logoLf a {
  text-align: center;
  line-height: 36px;
}
.header .logoRt {
  font-size: 0.5em;
  margin-top: 10px;
}
</style>
