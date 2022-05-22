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
          <th>金额</th>
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
            <!-- <button @click="handleSubtract(book, $event)">-</button> -->
            {{ item.buyNum }}
            <!-- <button @click="handleAdd(book.id)">+</button> -->
          </td>
          <!-- <td>{{ cartItemPrice(item.id) | currency }}</td> -->
          <td>{{ itemPrice(item.price,item.buyNum) }}</td>
          <td>
            <button @click="deleteCartItem(item.id)">删除</button>
          </td>
        </tr>
      </table>

      <div>保存？</div>
      <button @click="deleteCartItem(item.id)">删除</button>
          <td>{{ itemPrice(price,num) }}</td>

      <div v-for="item in getCart">
        <div>{{ item.name }}</div>
      </div>
      <p class="btnRight">
        <span><button class="checkout" @click="checkout">结算</button></span>
        <!-- <span>总价： {{ cartTotalPrice | currency }}</span> -->
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
      price:2,
      num:12
    }
  },
  components: {
    HeaderTop,
    ShortCar,
  },
  computed: {
    // 利用计算属性，获取到vuex中state数据
    getCart() {
      return this.$store.state.cartList;
    },

    // ...mapGetters(["cartItemPrice", "cartTotalPrice"]),
  },

  mounted() {},

  methods: {
    ...mapMutations([
      "deleteCartItem",
      "incrementItemQuantity",
      "setCartItems",
    ]),
    // 计算单项价格
    itemPrice(price, count) {
      return price * count;
    },
    checkout() {
      this.$router.push("/check");
    },
  },

  //     handleAdd(id) {
  //       this.incrementItemQuantity({ id: id, quantity: 1 });
  //     },

  //     handleSubtract(book, e) {
  //       let quantity = book.quantity - 1;

  //       if (quantity <= 0) {
  //         e.target.disabled = true;
  //         this.$msgBox.show({
  //           title: "您确定要删除商品吗？",
  //           cancel: "取消",
  //           handleOk: () => this.deleteCartItem(book.id),
  //           handleCancel: () => {
  //             e.target.disabled = false;
  //           },
  //         });
  //       } else this.incrementItemQuantity({ id: book.id, quantity: -1 });
  //     },

  //   },
  // };
};
</script>
<style scoped>
.shoppingCart {
  /* text-align: center;
  margin-left: 45px; */
  /* width: 96%; */
  margin-top: 30px;
}
.shoppingCart table {
  border: solid 1px black;
  width: 100%;
  background-color: #eee;
}

.shoppingCart th {
  height: 50px;
}
.shoppingCart th,
.shoppingCart td {
  border-bottom: solid 1px #ddd;
  text-align: center;
}
.shoppingCart span {
  float: right;
  padding-right: 15px;
}

.shoppingCart img {
  width: 60px;
  height: 60px;
}
.shoppingCart .checkout {
  /*position: absolute;
    right: 0px;
    top: 0;*/
  float: right;
  width: 60px;
  height: 30px;
  margin: 0;
  border: none;
  color: white;
  background-color: red;
  cursor: pointer;
}
.btnRight {
  margin-top: 20px;
}
</style>
