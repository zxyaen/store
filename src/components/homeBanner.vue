<template>
  <div id="banner">
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item>
        <img src="@/assets/image/banner/banner1.png" alt="..." />
      </el-carousel-item>

      <el-carousel-item class="box">
        <img src="@/assets/image/banner/banner2.png" alt="..." />
      </el-carousel-item>


      <el-carousel-item>
        <img
          src="@/assets/image/banner/banner3.png"
          alt="..."
       
        />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "homeBanner",
  data() {
    return {};
  },
  methods: {
    // 点击banner跳转detail
    bookDetail() {
      this.$router.push("/detail/" + 1);
    },
  },
};
</script>

<style scoped>
#banner {
  margin: 20px 0;
  padding-top: 30px;
  border-top: 1px solid #475669;
}
.box {
  /* width: 100%; */
  height: 100%;
}
img {
  width: 100%;
  height: 100%;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
