<template>
  <div>
    <ShortCar />
    <HeaderTop />
    <HomeBanner />
    <HomeBody />
    <HomeFooter />
    <backTop />
  </div>
</template>

<script>
import ShortCar from "components/shortCar.vue";
import HeaderTop from "components/headerTop.vue";
// import HomeNav from "components/homeNav.vue";
import HomeBanner from "components/homeBanner.vue";
import HomeBody from "./children/homeBody.vue";
import HomeFooter from "components/homeFooter.vue";

import BackTop from "components/backTop.vue";

export default {
  name: "home",
  data() {
    return {
    };
  },
  components: {
    ShortCar,
    HeaderTop,
    // HomeNav,
    HomeBanner,
    HomeBody,
    HomeFooter,
    BackTop,
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
  },
  created() {},
};
</script>

<style></style>
