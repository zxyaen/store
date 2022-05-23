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
          placeholder="请输入要查找的图书"
          v-model="Bname"
        />
        <el-button
          icon="el-icon-search"
          class="btn"
          circle
          @click="Sbook(Bname)"
        ></el-button>
        <div>
          <ul>
            <li v-for="item in sBook">{{item.bookName}}</li>
          </ul>
        </div>
        <!-- <input type="buttonvalue="搜索" @click="Sbook(Bname)" /> -->
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
      sBook: "",
    };
  },
  methods: {
    Sbook(Bname) {
      searchBook(Bname).then((res) => {
        this.sBook = res;
        for (let i = 0; i < Object.keys(res).length; i++) {
          console.log(res[i]);
        }
      });
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
.header .headerRight .search {
  /* margin-right: 1.5em; */
  position: relative;
  margin-right: 50px;
}
.text {
  border-radius: 15px;
  padding-left: 4px;
  border-color: rgb(30, 32, 32);
  color: rgba(39, 52, 67, 0.3);
}
.header .headerRight .search .btn {
  position: absolute;
  right: 2px;
  top: 2px;
  padding: 4px;
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
