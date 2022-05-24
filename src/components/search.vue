<template>
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
    <div class="searchBook">
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
      sBook:'',
    };
  },
  methods: {
    Sbook(Bname) {
      searchBook(Bname).then((res) => {
        this.sBook = res.data;
        // for (let i = 0; i < Object.keys(res.data).length; i++) {
        //   console.log(res.data[i]);
        // }
      });
    },
  },
};
</script>

<style scoped>
.header .headerRight .search {
  /* margin-right: 1.5em; */
  width: 185px;
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
.searchBook {
  width: 165px;
  position: absolute;
  background-color: rgba(234, 244, 253, 0.6);
  border-radius: 0 0 5px 5px;
  z-index: 3;
  left: 10px;
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
