<template>
  <div class="box">
    <hr />
    <h3 class="title">新书上市</h3>
    <div class="bookNew">
      <BookNew
        v-for="item in bookInfo"
        :good-item="item"
        class="item"
        id="item"
      />
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
@media screen and (max-width: 600px) {
  #item {
    flex: 1;
    height: 14rem;
    margin: 0 5px 5px 0;
    background-color: rgba(191, 216, 220, 0.2);
    width: calc((100% - 10px) / 3);
    min-width: calc((100% - 10px) / 3);
  }
}
.box {
  /* width: 100%; */
}
.title {
  text-align: center;
  padding: 20px 0;
}
.bookNew {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.item {
  flex: 1;
  /* height: 15rem; */
  padding-bottom: 1rem;
  margin: 0 5px 5px 0;
  background-color: rgba(191, 216, 220, 0.2);
  width: calc((100% - 10px) / 5);
  min-width: calc((100% - 10px) / 5);
  /* max-width: calc((100% - 10px) / 5);  */
  /* &:nth-child(3n) { 
      margin-right: 0;
    } */
}
</style>
