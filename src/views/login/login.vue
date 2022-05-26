<template>
  <div>
    <ShortCar />
    <headerTop />
    <p class="login" id="login">
      <el-tabs v-model="activeName" @tab-click="handleClick" class="box">
        <el-tab-pane label="登录" name="first">
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="名称" prop="name">
              <el-input v-model="ruleForm.name"> </el-input>
            </el-form-item>

            <el-form-item label="密码" prop="pass">
              <el-input
                type="password"
                v-model="ruleForm.pass"
                auto-complete="off"
              >
              </el-input>
            </el-form-item>

            <el-form-item label="验证码" prop="checkPass">
              <el-input type="text" v-model="ruleForm.checkPass"> </el-input>
            </el-form-item>
            <!-- 验证码 -->
            <img :src="src" alt="" class="loginImg" @click="GetCode()" />
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')"
                >登录</el-button
              >

              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>

        <el-tab-pane label="注册" name="second" >
          <register ref="register" ></register>
        </el-tab-pane>
      </el-tabs>
    </p>
  </div>
</template>

<script>
import register from "../login/register.vue";
import ShortCar from "components/shortCar.vue";
import HeaderTop from "components/headerTop.vue";

import { checkLogin, getCode } from "@/network/cookie";
import { getDbCart, bookInfo } from "@/network/goods";

import { mapMutations, mapState } from "vuex";

export default {
  name: "login",
  components: {
    register,
    ShortCar,
    HeaderTop,
  },
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }

        callback();
      }
    };

    return {
      // 验证码图片
      src: "",

      activeName: "first",

      bookInfo: [],
      message: "",
      // 登录表单
      ruleForm: {
        name: "",
        pass: "",
        checkPass: "",
        message: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入您的名称", trigger: "blur" },
          {
            min: 2,
            max: 20,
            message: "长度在 2 到 20 个字符",
            trigger: "blur",
          },
        ],
        pass: [{ required: true, validator: validatePass, trigger: "blur" }],
      },

      //
    };
  },
  computed: {
    // ...mapState(["cartList"]),
  },
  methods: {
    ...mapMutations(["IsHomeFalse", "changeIsLogin", "saveDbCart"]),

    // // 存储购物车数据到本地
    // handler(value) {
    //   localStorage.setItem("cartList", JSON.stringify(value));
    // },


    // 获取数据库用户购物车内容
    getDbCart() {
      getDbCart()
        .then((res) => {
          console.log(res);
          for (let i = 0; i < res.data.length; i++) {
            this.bookInfo = this.bookInfo.concat(new bookInfo(res.data[i]));
          }
          // 把数据库用户购物车数据同步到store中的cartList
          this.saveDbCart(this.bookInfo);
          // this.handler(this.cartList);
          return;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    // 动态获取验证码
    GetCode() {
      getCode().then((res) => {
        console.log("请求验证码1");
        this.src = window.URL.createObjectURL(res);
      });
    },
    //选项卡切换
    handleClick(tab, event) {},
    //重置表单
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    //提交表单
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          checkLogin(
            this.ruleForm.name,
            this.ruleForm.pass,
            this.ruleForm.checkPass
          )
            .then(
              function (res) {
                console.log(res);
                if (res.result === "ok") {
                  this.message = "登录成功";
                  this.successNotification();

                  this.$router.push("/home");

                  this.getDbCart();
                  return;
                }
                if (res.result === "null") {
                  this.message = "请输入验证码";
                  this.warningNotification();
                }
                if (res.result === "verError") {
                  this.message = "验证码错误";
                  this.warningNotification();
                }
                if (res.result === "InputError") {
                  this.message = "账号或密码错误";
                  this.warningNotification();
                }
              }.bind(this)
            )
            .catch(
              function (response) {
                console.log("登录异常，请重新登录!");
              }.bind(this)
            );
        }
      });
    },

    // 消息提示
    warningNotification() {
      this.$message({
        message: this.message,
        type: "warning",
      });
      console.log(this.$message);
    },
    successNotification() {
      this.$message({
        message: this.message,
        type: "success",
      });
    },
  },

  created() {
    // 改变isHome值，使搜索框不被渲染
    this.IsHomeFalse();
    this.getDbCart();
  },
  mounted() {
    // 获取验证码;
    // getCode().then((res) => {
    //   console.log("获取到session验证码");
    //   this.src = window.URL.createObjectURL(res);
    // });
    this.GetCode();
  },
};
</script>

<style scoped>
@media screen and (max-width: 600px) {
  #login {
    width: 80%;
  }
}
.login {
  width: 25rem;
  margin: 0 auto;
}
.box {
  position: relative;
}
.content {
  /* position: absolute; */
}

.loginImg {
  position: absolute;
  top: 145px;
  right: 5px;
  border-radius: 4px;
}

.el-tabsitem {
  text-align: center;
  width: 60px;
}
</style>
