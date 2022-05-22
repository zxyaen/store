<template>
  <div>
    <ShortCar />
    <HeaderTop />
    <p>这是详情页</p>
    <button @click="AddBook(5,12)">加入购物车</button>
    <button @click="ShowCart">显示购物车</button>
    <div v-for="item in bookInfo">
 
       数量： {{ item.booknumber }}
       名字： {{ item.bookname }}
       加个： {{ item.bookprice }}
       <!-- 总价：{{item.bookNum * item.bookprice}} -->
       <span @click="RemoveBook(5,2)">删除</span>
    </div>
    <!-- <div class="detail" v-for="item in res">
      <div class="detail-info-img">
        <img src="@/assets/image/bg.jpg" alt="" />
      </div>
      <div class="detail-info">
        <h2>商品名称:{{ item.bookname }}</h2>
        <p>商品价格：{{ item.bookprice }}</p>
        <p>商品数量：{{ item.booknumber }}</p>
        <button>加入购物车</button>
      </div>
    </div> -->
  </div>
</template>

<script>
import ShortCar from "./children/shortCar.vue";
import HeaderTop from "./children/headerTop.vue";

import { addBook, showCart ,removeBook} from "@/network/shopCar";
export default {
  name: "detail",
  data() {
    return {
      res: null,
      bookno: "",
      bookInfo: null,
    };
  },
  methods: {
    // 添加书
    AddBook(bookId, bookNum) {
      // console.log(bookId);
      addBook(bookId, bookNum).then((res) => {
        console.log(res);
      });
    },
    // 展示书
    ShowCart() {
      showCart().then((res) => {
        this.bookInfo = res;
        console.log(res);
      });
    },
    // 删除书
    RemoveBook(id,num){
      removeBook(id,num).then((res)=>{
        console.log(res);
      })
    }
  },
  created() {
    this.$bus.$on("info", (res) => {
      console.log(res);
    });
  },
  mounted() {},
  components: { ShortCar, HeaderTop },
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
