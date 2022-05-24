<template>
  <div>
      <ShortCar/>
    <h2>个人中心页面</h2>
    <div @click="quitLogin">退出登录</div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { checkLogin, getCode, getSession, loginOut } from "@/network/cookie";
import ShortCar from "@/components/shortCar.vue";

export default {
    name: "myHome",
    data() {
        return {};
    },
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
    components: { ShortCar }
};
</script>

<style></style>
