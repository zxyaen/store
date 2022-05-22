<template>
  <div id="detail">
    <ShortCar />
    <HeaderTop />

    <!-- 这是购物车按钮部分 -->
    <!-- <button @click="ShowCart">显示购物车</button>
    <span @click="RemoveBook(5, 2)">删除</span> -->
    <BookInfo :bookId="bookId" />
    <HomeFooter />
  </div>
</template>

<script>
import ShortCar from "components/shortCar.vue";
import HeaderTop from "components/headerTop.vue";
import BookInfo from "./children/bookInfo.vue";

import HomeFooter from "components/homeFooter.vue";

import { showCart, removeBook } from "@/network/shopCar";
export default {
  name: "detail",
  data() {
    return {
      bookId: "",
    };
  },
  methods: {
    /**
     * 购物车部分内容
     * */

    // 展示书
    ShowCart() {
      showCart().then((res) => {
        this.bookInfo = res;
        console.log(res);
      });
    },
    // 删除书
    RemoveBook(id, num) {
      removeBook(id, num).then((res) => {
        console.log(res);
      });
    },
  },
  created() {
    // 保存传入detail的bookId
    this.bookId = this.$route.params.id;

  },
  components: {
    ShortCar,
    HeaderTop,
    BookInfo,
    HomeFooter,
  },
};
</script>

<style scoped></style>
