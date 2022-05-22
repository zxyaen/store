<template>
  <div class="box">
          <hr />
    <h3 class="title">新书上市</h3>
    <BookNew v-for="item in res" :good-item="item"/>
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
          res: '',
      };
  },
  components: {
    BookNew,
  },
  methods: {},
  created() {
    getBooks().then((res) => {
      // console.log(res);
      this.res = res;
    });
  },
};
</script>

<style scoped>
.box {
  /* width: 100%; */
}
.title{
  text-align: center;
  padding: 20px 0;
}
</style>
