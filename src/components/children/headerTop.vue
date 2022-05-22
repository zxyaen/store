<template>
  <!-- header部分 开始 -->
  <div class="w header">
    <!-- logo -->
    <div>
      <div class="logo">
        <p class="logoLf">
          <router-link to="/"> logo </router-link>
        </p>

        <p class="logoRt">
          支持货到付款<br />
          点击关注店铺
        </p>
        <!-- <img src="img/logo.png" alt="logo"> -->
      </div>
    </div>

    <div class="headerRight">
      <!-- search制作 -->
      <div class="search">
        <input type="text" class="text" placeholder="请输入查找图书" v-model="Bname"/>
        <input type="button" class="btn" value="搜索" @click="Sbook(Bname)" />
      </div>
      <!-- shopcar -->
      <div class="shopcar">
        <!-- <i class="car"></i> -->
        <router-link to="/shopcar" class="mycar">我的购物车</router-link>
        <a class="shopCar"></a>
      </div>
    </div>

    <!-- hotwords -->
    <!-- <div class="hotwords">
            <a href="#" class="style-red">优惠购首发</a>
            <a href="#">9.9团购</a>
            <a href="#">每满99减30</a>
            <a href="#">办公用品</a>
            <a href="#">电脑</a>
            <a href="#">通信</a>

        </div> -->
  </div>
  <!-- 结束 -->
</template>

<script>
import {searchBook} from '@/network/goods';
export default {
  name: "headerTop",
  data() {
    return {
      Bname: '',
    };
  },
  methods: {
    Sbook(Bname){
      searchBook(Bname).then((res)=>{
        console.log(res);
      })
    }
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
}
</style>
