<template>
  <!-- search制作 -->
  <div class="search">
    <input
      type="text"
      class="text"
      placeholder="请输入要查找的图书"
      v-model="Bname"
      @blur="hide"
      @keyup.enter="Sbook(Bname)"
    />
    <el-button
      icon="el-icon-search"
      class="btn"
      circle
      @click="Sbook(Bname)"
    ></el-button>
    <div class="searchBook" v-show="show" @mouseleave="hide">
      <ul>
        <router-link
          :to="{ name: 'Detail', params: { id: item.bookId } }"
          class="bookItem"
          v-for="item in sBook"
        >
          <li>{{ item.bookName }}</li>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
import { searchBook } from "@/network/goods";

export default {
  name: "search",
  data() {
    return {
      Bname: "",
      sBook: "",
      show: false,
    };
  },
  methods: {
    Sbook(Bname) {
      if (Bname) {
        searchBook(Bname).then((res) => {
          this.sBook = res.data;
        });
        this.show = true;
      }
    },
    // 失去焦点隐藏搜素数据
    hide() {
      this.show = false;
    },
  },
};
</script>

<style scoped>
.search {
  /* margin-right: 1.5em; */
  position: relative;
  /* margin-right: 45px; */
}
imput {
  border: none !important;
}
.text {
  border-radius: 15px;
  padding-left: 4px;
  width: 210px;
  height: 50px;
  border-color: rgb(177, 188, 188);
  color: rgba(86, 96, 106, 0.3);
}
.search .btn {
  position: absolute;
  right: 5px;
  top: 6px;

  /* padding: 4px; */
  /* padding-right: 2px; */
  border: none !important;
}
.searchBook {
  width: 210px;
  position: absolute;
  background-color: rgba(234, 244, 253, 0.6);
  border-radius: 0 0 5px 5px;
  z-index: 3;
}
.searchBook .bookItem {
  margin-top: 10px;
}
.searchBook li {
  /* position: absolute; */
  color: rgb(62, 61, 61);
  margin: 10px 0;
  width: inherit;
  overflow: hidden;
  height: 20px;
  line-height: 20px;
}
</style>
