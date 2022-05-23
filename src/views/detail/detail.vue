<template>
  <div id="detail">
    <ShortCar />
    <HeaderTop />
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
