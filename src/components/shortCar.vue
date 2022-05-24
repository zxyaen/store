<template>
  <div class="shortcut">
    <nav aria-label="breadcrumb">
      <p v-if="isLogin">您好！欢迎光临本商城,用户：{{ name }}</p>
      <p v-if="!isLogin">
        <router-link to="/login"> 还为登录，请前去登录</router-link>
      </p>
      <p v-if="isLogin" @click="loginOut">退出</p>

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
import { getCode, getSession, loginOut } from "@/network/cookie";
import { mapMutations } from "vuex";

export default {
  name: "shortCar",
  data() {
    return {
      name: "",
    };
  },
  computed: {
    isLogin() {
      return this.$store.state.isLogin;
    },
  },
  // inject: ["reload"],
  methods: {
    ...mapMutations(["changeIsLogin", "clearCart"]),

    loginOut() {
      console.log("退出登录");
      loginOut()
        .then((res) => {
          this.getSession();
          if (this.$route.path === "/shopcar") {
            this.$router.push({ name: "home" });
          }
          console.log(this.$route.path);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    // 获取session状态,动态渲染是否登录
    getSession() {
      getSession()
        .then((res) => {
          // console.log(res.login);
          if (res.login === "yes") {
            this.changeIsLogin(true);
            this.name = res.accountName;
            console.log("已经登录，登录账号为：" + res.accountName);
            return;
          }
          if (res.login === "no") {
            this.changeIsLogin(false);
            // this.reload();
            console.log("未登录");
            // 此处若用户为登录，切换到购物车页面，会造成添加到购物车的商品被删除，
            // 通过路由守卫，控制用户未登录状态不可访问购物车界面，强制跳转登录界面
            this.clearCart();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {},
  mounted() {
    // 获取session状态,动态渲染是否登录
    this.getSession();
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
