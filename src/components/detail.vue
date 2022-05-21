<template>
  <div>
    <!-- shortcut 开始 -->
    <div class="shortcut">
      <nav aria-label="breadcrumb">
        <p>您好！欢迎光临本商城</p>

        <ol class="breadcrumb headerTop">
          <li class="breadcrumb-item"><a href="#">｜ 门店查询 </a></li>
          <li class="breadcrumb-item"><a href="#">｜ 帮助中心 </a></li>
          <li class="breadcrumb-item"><a href="#">在线客服 </a></li>
          <li class="breadcrumb-item login">
            <router-link to="/login">登录/注册</router-link>
          </li>
        </ol>
      </nav>
    </div>
    <!-- 结束 -->

    <!-- header部分 开始 -->
    <header class="w header">
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
          <input type="text" class="text" placeholder="请输入查找图书" />
          <input type="button" class="btn" value="搜索" />
        </div>
        <!-- shopcar -->
        <div class="shopcar">
          <!-- <i class="car"></i> -->
          <a href="/page/shopcar.html" class="mycar">我的购物车</a>
          <a class="shopCar"></a>
        </div>
      </div>
    </header>
    <!-- 结束 -->

    <div class="detail" v-for="item in res">
      <div class="detail-info-img">
        <img src="@/assets/image/bg.jpg" alt="" />
      </div>
      <div class="detail-info">
        <h2>商品名称:{{ item.bookname }}</h2>
        <p>商品价格：{{ item.bookprice }}</p>
        <p>商品数量：{{ item.booknumber }}</p>
        <button>加入购物车</button>
      </div>
    </div>
  </div>
</template>

<script>
import { getBooks } from "@/network/goods";
export default {
  name: "detail",
  data() {
    return {
      res: null,
    };
  },
  methods: {
    // getBooksData(){
    //     console.log("11");
    //     getBooks().then((res)=>{
    //         console.log(res);
    //         this.res=res
    //     })
    // }
  },
  created() {
    getBooks().then((res) => {
      console.log(res);
      this.res = res;
    });
  },
};
</script>

<style scoped>
.detail {
  display: flex;
  width: 1200px;
}
.detail-info-img {
  flex-grow: 1;

  background-color: aquamarine;
}
.detail-info-img img {
  width: 250px;
  height: 250px;
  padding-top: 50px;
  padding-left: 50px;
}
.detail-info {
  flex-grow: 8;
  height: 500px;
  overflow: hidden;
  padding-top: 50px;
  padding-left: 50px;
  background-color: bisque;
}
.detail-info h2,
.detail-info p,
.detail-info button {
  margin: 10px;
}
</style>
