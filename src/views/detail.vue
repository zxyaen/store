<template>
  <div id="detail">
    <ShortCar />
    <HeaderTop />

    <!-- 这是购物车按钮部分 -->
    <!-- <button @click="ShowCart">显示购物车</button>
    <span @click="RemoveBook(5, 2)">删除</span> -->

    <div class="bookInfo">
      <div>
        <img :src="res.bookImg" alt="" class="bookImg" />
      </div>
      <div class="bookInfoLf">
        <div class="bookname">{{ res.bookName }}</div>
        <div>价格：{{ res.bookPrice }}¥</div>
        <div>
          <span class="buyNum">购买数量：</span>
          <el-input-number
            size="small"
            v-model="buyNum"
            :min="1"
            class="buyBtn"
          ></el-input-number>
        </div>
        <div class="addBookBtnBox">
          <el-button round @click="AddBook(bookId, buyNum)" class="addBookBtn"
            >加入购物车</el-button
          >
        </div>
      </div>
    </div>
    <HomeFooter />
  </div>
</template>

<script>
import ShortCar from "components/shortCar.vue";
import HeaderTop from "components/headerTop.vue";
import HomeFooter from "components/homeFooter.vue";
import { getBooks } from "@/network/goods";

import { addBook, showCart, removeBook } from "@/network/shopCar";
export default {
  name: "detail",
  data() {
    return {
      res: "",
      bookId: "",
      bookInfo: null,
      buyNum: "1",
    };
  },
  methods: {
    /**
     * 购物车部分内容
     * */
    // 添加书
    AddBook(bookId, bookNum) {
      // console.log(bookId);
      addBook(bookId, bookNum).then((res) => {
        if (res.result === "ok") {
          this.open();
        }
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
    RemoveBook(id, num) {
      removeBook(id, num).then((res) => {
        console.log(res);
      });
    },

    // 消息提示
    open() {
      this.$message({
        message: "添加购物车成功",
        type: "success",
      });
    },
  },
  created() {
    // 保存传入detail的bookno
    this.bookId = this.$route.params.id;
    // 发送请求获取图书数据

    getBooks().then((res) => {
      //将bookId与点击到的相应bookId对比，相同的传信息给bookDetail进行渲染
      for (let i = 1; i < Object.keys(res).length + 1; i++) {
        if (res[i].bookId === this.bookId) {
          this.res = res[i];
        }
      }
    });
  },
  components: { ShortCar, HeaderTop, HomeFooter },
};
</script>

<style scoped>
.bookImg {
  width: 250px;
  height: 300px;
  margin: 100px;
  border: 1px solid rgb(246, 209, 209);
}
.bookInfo {
  display: flex;
  border: 1px solid rgb(211, 208, 208);
  margin: 30px;
}
.bookInfoLf {
  position: relative;
  padding-right: 50px;
}
.bookInfoLf .bookname {
  margin-top: 120px;
  font-size: 24px;
}
.bookInfoLf div {
  margin-top: 30px;
}
.buyNum {
  margin-right: 20px;
}
.addBookBtnBox {
  position: absolute;
  width: 100%;
  bottom: 100px;
}
.addBookBtn {
}
</style>
