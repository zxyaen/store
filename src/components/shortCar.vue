<template>
  <div class="shortcut">
    <div class="nav">
      <p v-if="isLogin">用户:{{ name }}-您好!-欢迎光临本商城</p>
      <p v-if="!isLogin" class="noLogin">
        <router-link to="/login"> 还未登录，点此去登录</router-link>
      </p>
      <!-- <router-link to="/login" v-if="!isLogin">登录/注册</router-link> -->
      <div class="boxRt">
        <!-- <p>
          <router-link to="/myhome" v-if="isLogin">个人中心</router-link>
        </p> -->
        <p v-if="isLogin" @click="loginOut">退出登录</p>
      </div>
    </div>
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
    logout() {
      this.$message({
        message: "已退出登录",
        type: "success",
      });
    },

    // 退出登录
    loginOut() {
      console.log("退出登录");
      loginOut()
        .then((res) => {
          this.GetSession();
          // 退出登录后，若在购物车界面则跳转到主页，若在其他界面则保持不跳转
          if (this.$route.path === "/shopCar") {
            this.$router.push({ name: "home" });
          }
          this.logout();
        })
        .catch((err) => {
          console.log(err);
        });
    },

    // 获取session状态,动态渲染是否登录
    GetSession() {
      getSession()
        .then((res) => {
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
    this.GetSession();
  },
};
</script>

<style scoped>
/* shortcut  start*/
.shortcut {
  line-height: 1.5rem;
}
.shortcut .headerTop {
  margin-bottom: 0;
}

.nav {
  padding: 0.2rem 0.8rem;
}

.shortcut .nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: #FAECE8; */
  border-bottom: 1px solid #efdad5;
  font-size: 0.5rem;
}
.shortcut p {
  font-size: 0.4rem;
  cursor: pointer;
}
.noLogin a {
  color: rgb(218, 46, 46) !important;
}
/* end */
</style>
