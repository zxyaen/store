<template>
  <div class="box">
    <!-- header部分 开始 -->
    <header class="w header">
      <!-- logo -->
      <div>
        <div class="logo">
          <p class="logoLf">
            <router-link to="/"> logo </router-link>
          </p>

          <p class="logoRt">
            xxxx<br />
            xxxx
          </p>
          <!-- <img src="img/logo.png" alt="logo"> -->
        </div>
      </div>

      <div class="headerRight">
        <!-- shopcar -->
        <div class="shopcar">
          <!-- <i class="car"></i> -->
          <span href="#" class="mycar">欢迎注册</span>
          <a class="shopCar"></a>
        </div>
      </div>
    </header>
    <!-- 结束 -->

    <!-- 注册 -->
    <div class="container">
      <div class="register-box">
        <h2 class="register-title">
          <span>没有账号，去</span>注册
        </h2>
        <!-- <form id="register" action="http://172.16.3.161:8080/examWeb_war_exploded/logIn" method="post"> -->
        <div class="input-box">
          <input type="text" placeholder="用户名" name="name" />
          <input type="password" placeholder="密码" name="pwd" />
          <input type="password" placeholder="确认密码" />
          <input type="text" placeholder="请输入验证码" name="Check" />
        </div>
        <input type="submit" class="button" value="注册" />
        <!-- </form> -->
        <!-- <img src="http://172.16.3.161:8080/examWeb_war_exploded/VerCode?" alt="" class="loginImg"> -->

        <!-- <button>注册</button> -->
      </div>
    </div>
    <!-- 登录 -->
    <div class="login-box slide-up">
      <div class="center">
        <h2 class="login-title" @click="titleClick">
          <span>已有账号，去</span>登录
        </h2>
        <!-- <form id="login" action="http://172.16.3.161:8080/examWeb_war_exploded/checkLogin"> -->
        <div class="input-box">
          <input type="text" placeholder="用户名" name="loginName" />
          <input type="password" placeholder="密码" name="loginPwd" />
          <input type="text" placeholder="请输入验证码" name="Check" />
        </div>
        <input type="submit" value="登录" class="button" />
        <!-- </form> -->
        <div class="verification-code">
          <!-- <img src="http://172.16.3.161:8080/examWeb_war_exploded/VerCode?" alt="" class="loginImg"> -->
        </div>
        <!-- <button class="btnLogin">登录</button> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
//     // 绑定标题点击事件
//     titleClick() {
//       // 判断是否收起，收起才可以点击
//       if (this.refs.login - box.classList.contains("slide-up")) {
//         this.refs.register - box.classList.add("slide-up");
//         this.refs.login - box.classList.remove("slide-up");
//       }
//     },
//     registerClick() {
//       if (this.refs.register - box.classList.contains("slide-up")) {
//         this.refs.login - box.classList.add("slide-up");
//         this.refs.register - box.classList.remove("slide-up");
//       }
//     },
//   },
// };
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
body {
  min-height: 100vh;
  /* 弹性布局 居中 */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9c6ba;
}
.container {
  background-color: #8d8482;
  width: 500px;
  height: 550px;
  /* width: 80%;
    height: 80%; */
  border-radius: 15px;
  overflow: hidden;
  position: relative;
}
.container::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: url("@/assets/image/bg.jpg") no-repeat;
  background-size: 500px;
  background-position: left bottom;
  opacity: 0.8;
}
/* 注册区域（登录区域很多样式和注册区域的一样，故而一些统一的样式写在了一起） */
.register-box {
  width: 70%;
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: 0.3s ease;
}
.register-title,
.login-title {
  color: #fff;
  font-size: 27px;
  text-align: center;
}
.register-title span,
.login-title span {
  color: rgba(0, 0, 0, 0.4);
  display: none;
}
.register-box .input-box,
.login-box .input-box {
  background-color: #f0e9e7;
  border-radius: 15px;
  overflow: hidden;
  margin-top: 50px;
  opacity: 1;
  visibility: visible;
  transition: 0.6s ease;
}
.register-box input,
.login-box input {
  width: 100%;
  height: 30px;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 12px;
  padding: 8px 0;
  text-indent: 15px;
  outline: none;
}
.register-box input:last-child,
.login-box input:last-child {
  border-bottom: none;
}
.register-box input::placeholder,
.login-box input::placeholder {
  color: rgba(0, 0, 0, 0.4);
}
.register-box .button,
.login-box .button {
  width: 100%;
  padding: 15px 45px;
  margin: 15px 0;
  background: rgba(225, 195, 195, 0.4);
  border: none;
  border-radius: 15px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 13px;
  font-weight: bold;
  cursor: pointer;
  opacity: 1;
  visibility: visible;
  transition: 0.3s ease;
}
.register-box .button:hover,
.login-box .button:hover {
  background-color: rgba(216, 179, 179, 0.8);
}
/* 登录区域 */
.login-box {
  position: absolute;
  inset: 0;
  top: 20%;
  z-index: 2;
  background-color: #fff;
  transition: 0.3s ease;
}
.login-box::before {
  content: "";
  background-color: #fff;
  width: 200%;
  height: 250px;
  border-radius: 50%;
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
}
.login-box .center {
  width: 70%;
  position: absolute;
  z-index: 3;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
}
.login-title {
  color: #000;
}
.login-box .input-box {
  border: 1px solid rgba(0, 0, 0, 0.1);
}
.login-box .button {
  background-color: #ebbbcb;
}
/* 注册、登录区域收起 */
.login-box.slide-up {
  top: 90%;
}
.login-box.slide-up .center {
  top: 10%;
  transform: translate(-50%, 0%);
}
.login-box.slide-up .login-title,
.register-box.slide-up .register-title {
  font-size: 16px;
  cursor: pointer;
}
.login-box.slide-up .login-title span,
.register-box.slide-up .register-title span {
  margin-right: 5px;
  display: inline-block;
}
.login-box.slide-up .input-box,
.login-box.slide-up .button,
.register-box.slide-up .input-box,
.register-box.slide-up .button {
  opacity: 0;
  visibility: hidden;
}
.register-box.slide-up {
  top: 6%;
  transform: translate(-50%, 0%);
}
.verification-code img {
  margin-top: 20px;
  width: 100px;
  height: 30px;
  position: absolute;
  top: 170px;
  right: 10px;
  border-radius: 5px;
}
</style>
