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
import HomeBanner from "components/homeBanner.vue";
import HomeBody from "./children/homeBody.vue";
import HomeFooter from "components/homeFooter.vue";

import BackTop from "components/backTop.vue";

import {  mapMutations } from "vuex";

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
    ...mapMutations(["changeIsHome"])
  },
  created() {
    this.changeIsHome()
  },
};
</script>

<style></style>
