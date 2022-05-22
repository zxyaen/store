<template>
  <div>
    <ShortCar />
    <HeaderTop />

    <div class="detail" v-for="item in res">
      <div class="detail-info-img">
        <img src="@/assets/image/bg.jpg" alt="" />
      </div>
      <div class="detail-info">
        <h2>商品名称:{{ item.bookname }}</h2>
        <p>商品价格：{{ item.bookprice }}</p>
        <p>商品数量：{{ item.booknumber }}</p>
        <button>加入购物车</button>
      </div>
    </div>
  </div>
</template>

<script>
import ShortCar from "./children/shortCar.vue";
import HeaderTop from "./children/headerTop.vue";
export default {
  name: "detail",
  data() {
    return {
      res: null,
      bookno,
    };
  },
  methods: {

  },
  created() {
    this.$bus.$on('info',(res)=>{
      console.log(res);
    })

  },
  mounted() {
    this.bookno=this.$store.state.bookno
  },
  components: { ShortCar, HeaderTop },
};
</script>

<style scoped>
.detail {
  display: flex;
  width: 1200px;
}
.detail-info-img {
  flex-grow: 1;

  background-color: aquamarine;
}
.detail-info-img img {
  width: 250px;
  height: 250px;
  padding-top: 50px;
  padding-left: 50px;
}
.detail-info {
  flex-grow: 8;
  height: 500px;
  overflow: hidden;
  padding-top: 50px;
  padding-left: 50px;
  background-color: bisque;
}
.detail-info h2,
.detail-info p,
.detail-info button {
  margin: 10px;
}
</style>
