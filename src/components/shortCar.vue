<template>
  <div class="shortcut">
    <nav aria-label="breadcrumb">
      <p v-if="isLogin">您好！欢迎光临本商城</p>
      <p v-if="!isLogin">
        <router-link to="/login"> 还为登录，请前去登录</router-link>
      </p>

      <ol class="breadcrumb headerTop">
        <li class="breadcrumb-item"><a href="#">｜ 门店查询 </a></li>
        <li class="breadcrumb-item"><a href="#">｜ 帮助中心 </a></li>
        <li class="breadcrumb-item"><a href="#">在线客服 </a></li>
        <li class="breadcrumb-item login">
          <!-- <a href="/page/login.html">登录/ </a> -->
          <router-link to="/login" v-if="!isLogin">登录/注册</router-link>
          <router-link to="/myhome" v-if="isLogin">个人中心</router-link>
          <!-- <a href="/page/login.html">注册</a> -->
        </li>
      </ol>
    </nav>
  </div>
</template>

<script>
import { checkLogin, getCode, getSession, loginOut } from "@/network/cookie";
import { mapMutations } from "vuex";

export default {
  name: "shortCar",
  data() {
    return {};
  },
  computed: {
    isLogin() {
      return this.$store.state.isLogin;
    },
    ...mapMutations([ "changeIsLogin"]),

  },
  created() {
  //       // 获取session状态
  //   getSession().then((res) => {
  //     console.log(res);
  //     if (res.login === "yes") {
  //       this.changeIsLogin(true);
  //       console.log("已经登录，登录账号为：" + res.accountName);
  //       return
  //     }
  //   });
  getSession().then((res)=>{
    console.log(res);
  })
  },
};
</script>

<style scoped>
/* shortcut  start*/
.shortcut {
  line-height: 0;
}
.shortcut .headerTop {
  flex-direction: row-reverse;
  background-color: none;
  margin-bottom: 0;
}
.shortcut .login {
  margin-right: 20px;
}
.shortcut nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: #FAECE8; */
  border-bottom: 1px solid #efdad5;
  font-size: 12px;
}
.shortcut p {
  margin: 1em;
}
.shortcut .shopCar {
  font-family: "icomoon";
}
.icon-cart:before {
  content: "\e93a";
}
/* end */
</style>
