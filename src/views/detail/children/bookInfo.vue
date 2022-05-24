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
import { showCart } from "@/network/shopCar";
import { getBooks } from "@/network/goods";

export default {
  name: "bookInfo",
  data() {
    return {
      res: "",
      buyNum: "1",
      banner: null,
    };
  },
  props: ["bookId"],
  methods: {
    // 获取store中图书id，若未登录->提示先登录在添加；
    // 若已登录->判断购物车中是否存在同钟，若存在只改变buyNum，若不存在添加书详细信息到购物车
    AddBook() {
      // 判断是否登录
      if (this.$store.state.isLogin) {
        // 判断购物车是否存在同种书
        let book = this.$store.state.cartList;
        for (let i = 0; i < book.length; i++) {
          // 若添加的书在购物车中已存在，则只改变buyNum
          if (book[i].id === this.res.bookId) {
            book[i].buyNum += this.buyNum;
            this.addBookSuccess();
            return;
          }
        }
        // 不存在添加详细信息到购物车
        // 获取购物车图书需要信息
        const bookInfo = {};
        bookInfo.name = this.res.bookName;
        bookInfo.img = this.res.bookImg;
        bookInfo.id = this.res.bookId;
        bookInfo.price = this.res.bookPrice;
        bookInfo.buyNum = this.buyNum;

        // 将信息添加到vuex中托管，进一步添加到购物车中
        this.$store.commit("pushProductToCart", bookInfo);
        this.addBookSuccess();
        return;
      } else {
        this.notLogin()
      }
    },
    // 消息提示
    addBookSuccess() {
      this.$message({
        message: "添加购物车成功",
        type: "success",
      });
    },
    notLogin() {
      this.$message({
        message: "请先登录，再进行添加",
        type: "warning",
      });
    },
    
    // // 添加书到购物车
    // AddBook() {
    //   this.getBookId();
    // },
  },

  created() {
    getBooks().then((res) => {
      this.banner = res.banner;
      //将bookId与点击到的相应bookId对比，相同的传信息给bookDetail进行渲染
      for (let i = 1; i < Object.keys(res.data).length + 1; i++) {
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
