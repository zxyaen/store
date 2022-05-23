<template>
  <div>
    <ShortCar />
    <HeaderTop />

    <div class="shoppingCart">
      <table>
        <tr>
          <th>全选</th>
          <th>商品名称</th>
          <th>单价</th>
          <th>数量</th>
          <th>总价</th>
          <th>操作</th>
        </tr>
        <tr v-for="item in getCart">
          <td><img :src="item.img" /></td>
          <td>
            <router-link
              :to="{ name: 'Detail', params: { id: item.id } }"
              target="_blank"
            >
              {{ item.name }}
            </router-link>
          </td>
          <td>{{ item.price }}</td>
          <td>
            <el-input-number
              v-model="item.buyNum"
              @change="handleChange"
              :min="1"
              :max="99"
              size="mini"
              label="描述文字"
            ></el-input-number>
          </td>
          <td>{{ itemPrice(item.price, item.buyNum) }}</td>
          <td>
            <el-button
              type="danger"
              icon="el-icon-delete"
              circle
              @click="removeBook(item.id)"
            ></el-button>
          </td>
        </tr>
      </table>

      <p class="btnRight">
        <span> <el-button plain  type="primary" @click="checkout" class="check">结算</el-button></span>
        <!-- <span><button class="checkout" >结算</button></span> -->
        <span v-show="total" class="total">总计：{{ total }}</span>
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState, mapMutations } from "vuex";
import HeaderTop from "components/headerTop.vue";
import ShortCar from "components/shortCar.vue";

export default {
  name: "ShoppingCart",
  data() {
    return {
      num: 1,
      total: "",
    };
  },
  components: {
    HeaderTop,
    ShortCar,
  },
  computed: {
    // 利用计算属性，获取到vuex中state中添加到购物车的数据
    getCart() {
      return this.$store.state.cartList;
    },
    ...mapState(["allPrice"]),
    // ...mapGetters(["cartTotalPrice"]),
  },

  mounted() {

    this.handleChange()
  },

  methods: {
    ...mapMutations([
      "deleteCartItem",
      "incrementItemQuantity",
      "setCartItems",
      "cartTotalPrice",
      // "changeBookNum",
    ]),
    // 计数器
    handleChange() {
      // console.log(value);
      this.cartTotalPrice();
      this.total = this.allPrice;
    },
    // 消息弹窗
    open() {
      this.$notify({
        title: "删除商品成功",
        // message: h('i', { style: 'color: teal' }, '这是提示文案'),
        type: "success",
      });
    },
    // 删除图书
    removeBook(id) {
      this.deleteCartItem(id);
      this.open();
      this.handleChange()
    },

    // 计算单项价格
    itemPrice(price, count) {
      let p = price * count;
      this.allPrice = p;
      return p;
    },
    checkout() {
      this.$router.push("/check");
    },
  },
};
</script>
<style scoped>
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
.check{
  margin-right: 30px;
}
.total{
  margin-right:30px ;
}
</style>
