<template>
  <div>
    <ShortCar />
    <HeaderTop />

    <div class="shoppingCart">
      <table>
        <tr class="title">
          <th>
            <div class="checkAll">
              <span>全选</span>
              <input type="checkbox"  />
            </div>
          </th>
          <th>商品</th>
          <th>单价</th>
          <th>数量</th>
          <th>总价</th>
          <th>操作</th>
        </tr>
        <tr v-for="item in cartList" class="goodsList">
          <td><input type="checkbox" /></td>
          <td class="goodInfoBox">
            <div class="goodInfo">
              <img :src="item.img" />
              <router-link
                :to="{ name: 'Detail', params: { id: item.id } }"
                class="content contentBookName"
              >
                {{ item.name }}
              </router-link>
            </div>
          </td>
          <td class="content">{{ item.price | numFilter }} 元</td>
          <td>
            <el-input-number
              v-model="item.buyNum"
              @change="handleChange"
              :min="1"
              :max="99"
              size="mini"
              label="描述文字"
              class="content"
              id="inputNum"
            ></el-input-number>
          </td>
          <td>{{ itemPrice(item.price, item.buyNum) | numFilter }}元</td>
          <td>
            <el-popconfirm
              title="确定删除商品吗？"
              @confirm="removeBook(item.id)"
            >
              <el-button slot="reference" class="content">删除</el-button>
            </el-popconfirm>
          </td>
        </tr>
      </table>

      <p class="btnRight">
        <span>
          <el-button
            plain
            type="primary"
            @click="checkout(cartBookInfo)"
            class="check"
            >结算</el-button
          >
        </span>
        <span v-show="allPrice || show" class="total"
          >总计：{{ allPrice | numFilter }} 元</span
        >
      </p>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import HeaderTop from "components/headerTop.vue";
import ShortCar from "components/shortCar.vue";
import { saveCart, DBbooks, books } from "@/network/goods";

export default {
  name: "ShoppingCart",
  data() {
    return {
      num: 1,
      show: "",
      cartBookInfo: [
        { bookId: 1, bookNum: 10 },
        { bookId: 5, bookNum: 51 },
      ],
    };
  },
  components: {
    HeaderTop,
    ShortCar,
  },
  computed: {
    ...mapState(["allPrice", "dbCartList", "cartList"]),

    // 计算总价格
    handleChange() {
      this.cartTotalPrice();
    },
  },
  filters: {
    // 保留价格后两位
    numFilter(value) {
      // 截取当前数据到小数点后两位
      let realVal = parseFloat(value).toFixed(2);
      return realVal;
    },
  },

  mounted() {
    // 改变isHome值，使搜索框不被渲染
    this.IsHomeFalse();
  },

  methods: {
    ...mapMutations([
      "deleteCartItem",
      "incrementItemQuantity",
      "setCartItems",
      "cartTotalPrice",
      "IsHomeFalse",
    ]),

    // 消息弹窗
    open() {
      this.$notify({
        title: "删除商品成功",
        type: "success",
      });
    },
    // 删除图书
    removeBook(id) {
      this.deleteCartItem(id);
      this.open();
      this.handleChange();
    },

    // 计算单项价格
    itemPrice(price, count) {
      let p = price * count;
      this.allPrice = p;
      return p;
    },

    // 点击结算跳转到结算页面，并向后端发送表单
    checkout(value) {
      let Books = [];
      /*
      [{ bookId: 1, bookNum: 10 },
        { bookId: 5, bookNum: 51 },],
      */
      for (let i = 0; i < value.length; i++) {
        Books = Books.concat(new DBbooks(value[i]));
      }

      // console.log(Books);
      // let a = new books(Books);
      console.log(JSON.stringify(Books));

      // console.log(this.$store.state.cartList);
      saveCart(JSON.stringify(Books))
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });

      // this.$router.push("/check");
    },
  },
};
</script>
<style scoped>
@media screen and (max-width: 600px) {
  #inputNum {
    width: 85%;
  }
}
.checkAll {
  display: flex;
  width: 3rem;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
}
.goodInfoBox {
  text-align: center;
}
.goodInfo {
  display: flex;
  width: 6rem;
  margin: 0 auto;
  flex-direction: column-reverse;
  align-items: center;
}
.goodInfo img {
  margin-top: 0.3rem;
}
.shoppingCart {
  /* text-align: center;
  margin-left: 45px; */
  /* width: 96%; */
  /* position: relative; */
  margin-top: 30px;
}
.shoppingCart table {
  border: solid 1px rgb(198, 246, 255);
  width: 100%;
  background-color: rgb(229, 243, 254);
}

.shoppingCart th {
  height: 50px;
}
.shoppingCart th,
.shoppingCart td {
  border-bottom: solid 1px #ddd;
  text-align: center;
}
/* .shoppingCart span {
  float: right;
  padding-right: 15px;
} */

.shoppingCart img {
  width: 60px;
  height: 60px;
}

.btnRight {
  margin-top: 60px;
  /* position: absolute; */
  right: 10px;
  bottom: -150px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  /* justify-content: center; */
}
.check {
  margin-right: 30px;
}
.total {
  border: 1px solid #d3dce6;
  border-radius: 4px;
  padding: 7px 10px;
  margin-right: 30px;
  cursor: pointer;
}
.title th {
  /* font-size: 1rem; */
}
.content {
  font-size: 1rem;
}
#inputNum {
  width: 6rem;
}
.contentBookName {
  display: block;
  width: 100%;
  height: 1.5rem;
  overflow: hidden;
}
.goodsList {
  height: 6rem;
}
</style>
