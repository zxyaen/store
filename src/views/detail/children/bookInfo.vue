<template>
  <div class="box">
    <div class="bookInfo">
      <img :src="res.bookImg" alt="" class="bookImg" />
      <div class="bookInfoLf">
        <div class="bookname">{{ res.bookName }}</div>
        <div>价格：{{ res.bookPrice }} 元</div>
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
    <div class="info">
      <p>详情介绍：</p>
      <p> {{ res.bookInfo }}</p>
     
    </div>
  </div>
</template>

<script>
import { getBooks, saveCart, DBbooks } from "@/network/goods";
import { mapState, mapMutations } from "vuex";

export default {
  name: "bookInfo",
  data() {
    return {
      res: "",
      buyNum: "1",
      // banner: null,
    };
  },
  props: ["bookId"],
  computed: {
    ...mapState(["dbCartList", "cartList"]),
  },
  methods: {
    ...mapMutations(["saveDbCart", "pushProductToCart"]),
    // // 存储购物车数据到本地
    // handler(value) {
    //   localStorage.setItem("cartList", JSON.stringify(value));
    // },

    // 自动存储购物车内容到数据库
    saveDB(value) {
      let Books = [];
      for (let i = 0; i < value.length; i++) {
        Books = Books.concat(new DBbooks(value[i]));
      }
      console.log("存储到数据库了");
      saveCart(Books)
        .then((res) => {
          if (res.result === "ok") {
            return;
          }
        })
        .catch((err) => {
          this.mes = "出错啦";
          this.open();
          console.log(err);
        });
    },

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
            console.log(this.cartList);
            this.saveDB(this.cartList);
            this.addBookSuccess();
            // this.handler(this.cartList);
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
        this.pushProductToCart(bookInfo);
        // this.$store.commit("pushProductToCart", bookInfo);
        this.saveDB(this.cartList);

        this.addBookSuccess();
        // this.handler(this.cartList);

        return;
      } else {
        this.notLogin();
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
      console.log(res);
      // this.banner = res.banner;
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
@media screen and (max-width: 600px) {
  .bookInfo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90%;
  }

  .bookImg {
    width: 100px;
    margin: 0;
  }
  .bookInfoLf {
    /* margin-left: 0.5rem !important; */
  }
}

  .box {
    margin: 1rem;
    /* background-color: blanchedalmond; */
    border-radius: 2.5rem;
    border: 1px solid rgb(169, 165, 165);
  }
.bookImg {
  width: 300px;
  height: 300px;
  margin: 1rem 0;
  /* border-bot: 1px solid rgb(246, 209, 209); */
}
.bookInfo {
  display: flex;
  border-bottom: 1px solid rgb(211, 208, 208);
  margin: 1rem;
}
.bookInfoLf {
  position: relative;
  margin-left: 1rem;
}
.bookInfoLf .bookname {
  /* margin-top: 2rem; */
  font-family:'方正经黑手写简体' ;

  font-size: 2rem !important;
}
.bookInfoLf div {
  margin-top: 1.5rem;
}
.buyNum {
  /* margin-right: 20px; */
}
.addBookBtnBox {
  /* position: absolute; */
  /* width: 200%; */
  /* bottom: 100px; */
  margin-left: -0.5rem;
  padding-bottom: 2rem;
}
.addBookBtn {
  margin-top: 1.5rem;
}
.info {
  padding: 2rem;
  margin: 10px auto;
  width: 80%;
  line-height: 2rem;

}
.info p:nth-child(1){
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: bold;
  font-family:'方正经黑手写简体' ;
}
.info p:nth-child(2){
  text-indent: 2em;
  font-family:'方正经黑手写简体' ;

  /* background-color: aqua; */
}
</style>
