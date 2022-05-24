<template>
  <div class="box">
    <hr />
    <h3 class="title">新书上市</h3>
    <div class="bookNew">
      <BookNew v-for="item in bookInfo" :good-item="item" class="item"/>
    </div>
    <!-- <p>123</p> -->
  </div>
</template>

<script>
import { getBooks } from "@/network/goods";

import BookNew from "./bookNew.vue";
export default {
  name: "homeBody",
  data() {
    return {
      bookInfo: "",
    };
  },
  components: {
    BookNew,
  },
  methods: {},
  created() {
    getBooks().then((res) => {
      this.bookInfo = res.data;
    });
  },
};
</script>

<style scoped>
.box {
  /* width: 100%; */
}
.title {
  text-align: center;
  padding: 20px 0;
}
.bookNew{
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.item{
  flex: 1;
      height: 120px;
    margin: 0 5px 5px 0; 
    background-color: rgba(191, 216, 220, 0.2);
    width: calc((100% - 10px) / 3);  
    min-width: calc((100% - 10px) / 3); 
    /* max-width: calc((100% - 10px) / 3);  */
    /* &:nth-child(3n) { 
      margin-right: 0;
    } */

}
</style>
