<template>
  <div>
    <ShortCar />
    <HeaderTop />
    <!-- <HomeNav /> -->
    <HomeBanner />
    <HomeBody />
    <!-- <el-input-number
      v-model="num"
      @change="handleChange"
      :min="1"
      :max="10"
      label="描述文字"
      >123</el-input-number -->
    
    <HomeFooter />
    <backTop />
  </div>
</template>

<script>
import shortCar from "./children/shortCar";
import ShortCar from "./children/shortCar.vue";
import HeaderTop from "./children/headerTop.vue";
import HomeNav from "./children/homeNav.vue";

import BackTop from "./backTop.vue";
import HomeBanner from "./children/homeBanner.vue";
import HomeBody from "./children/homeBody.vue";

import HomeFooter from "./children/homeFooter.vue";

export default {
  name: "home",
  data() {
    return {
      num: 1,
    };
  },
  components: {
    shortCar,
    ShortCar,
    HeaderTop,
    BackTop,
    HomeNav,
    HomeBanner,
    HomeBody,
    HomeFooter,
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
  },
  created() {

  },
};
</script>

<style></style>
