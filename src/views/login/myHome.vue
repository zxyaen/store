<template>
  <div>
    <ShortCar />
    <HeaderTop />
    <hr>
    <h2>个人中心页面</h2>
    <!-- <div @click="quitLogin">退出登录</div> -->
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { loginOut } from "@/network/cookie";
import { getDbCart } from "@/network/goods";
import ShortCar from "@/components/shortCar.vue";
import HeaderTop from "@/components/headerTop.vue";

export default {
  name: "myHome",
  data() {
    return {};
  },
  components: { ShortCar, HeaderTop },
  methods: {
    ...mapMutations(["IsHomeFalse", "changeIsLogin"]),
    // 退出登录
    quitLogin() {
      console.log("退出登录");
      loginOut().then((res) => {
        console.log(res);
      });
    },
  },
  created() {},
};
</script>

<style></style>
