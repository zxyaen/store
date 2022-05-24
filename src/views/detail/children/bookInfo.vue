<template>
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
        <el-button round @click="AddBook()" class="addBookBtn"
          >加入购物车</el-button
        >
      </div>

    </div>
  </div>
</template>

<script>
import {  showCart} from "@/network/shopCar";
import { getBooks } from "@/network/goods";

export default {
  name: "bookInfo",
  data() {
    return {
      res: "",
      buyNum: "1",
      banner:null,
    };
  },
  props: ["bookId"],
  methods: {
    // 消息提示
    open() {
      this.$message({
        message: "添加购物车成功",
        type: "success",
      });
    },
    // 添加书到购物车
    AddBook( ) {
       this.open();
                 // 获取购物车图书需要信息
          const bookInfo = {};
          bookInfo.name = this.res.bookName;
          bookInfo.img = this.res.bookImg;
          bookInfo.id = this.res.bookId;
          bookInfo.price = this.res.bookPrice;
          bookInfo.buyNum = this.buyNum;
          // 将信息添加到vuex中托管，进一步添加到购物车中
          this.$store.commit("pushProductToCart", bookInfo);
    },
  },

  created() {

    getBooks().then((res) => {
      console.log(res.data);
      this.banner=res.banner
      //将bookId与点击到的相应bookId对比，相同的传信息给bookDetail进行渲染
      for (let i = 1; i < Object.keys(res.data).length +1; i++) {
        if (res.data[i].bookId === this.bookId) {
          this.res = res.data[i];
        }
      }
    });
  },
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
