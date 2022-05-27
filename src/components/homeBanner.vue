<template>
  <div id="banner">
    <!-- <el-carousel :interval="5000" arrow="always">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
     -->
    <el-carousel :interval="4000" type="card" :height="changeHeight">
      <el-carousel-item class="box" v-for="item in bannerImg">
        <router-link :to="{ name: 'Detail', params: { id: item.bookId } }">
          <img :src="item.bookBanner" alt="..." />
        </router-link>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import { getBooks } from "@/network/goods";
export default {
  name: "homeBanner",
  data() {
    return {
      bannerImg: [],
      height: "200px",
    };
  },
  computed: {
    changeHeight() {
      this.height = window.screen.width * 0.5;
    },
    
  },
  methods: {
    // 点击banner跳转detail
    bookDetail() {
      this.$router.push("/detail/" + 1);
    },
  },
  created() {
    getBooks()
      .then((res) => {
        this.bannerImg = res.banner;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  watch:{
    
    // handler(value){

    // }
  },
};
</script>

<style scoped>
#banner {
  /* margin: 10px 0; */
  /* width: 100%;
  height: 50%; */
  padding-top: 30px;
  border-top: 1px solid #e5e9ed;
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
