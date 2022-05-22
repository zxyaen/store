<template>
  <div>
    <ShortCar />
    <headerTop />
    <p class="login">
      <el-tabs v-model="activeName" @tab-click="handleClick">
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
            <img :src="src" alt="" class="loginImg" @click="getCode()" />
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')"
                >登录</el-button
              >

              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>

        <el-tab-pane label="注册" name="second">
          <register></register>
        </el-tab-pane>
      </el-tabs>
    </p>
  </div>
</template>

<script>
import register from "./register.vue";
import ShortCar from "./children/shortCar.vue";
import HeaderTop from "./children/headerTop.vue";

import { getCookie } from "@/network/cookie";

export default {
  name: "login",
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
      src: "http://172.16.3.161:8080/examWeb_war_exploded/VerCode?",
      activeName: "first",
      cookieId: "",

      ruleForm: {
        name: "",
        pass: "",
        checkPass: "",
        message: "",
        session: "",
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
    };
  },

  methods: {
    // 动态获取验证码
    getCode() {
      this.src =
        "http://172.16.3.161:8080/examWeb_war_exploded/VerCode?" +
        Math.random();
      console.log(this.cookie);
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
        console.log(this.ruleForm.name);
        console.log(this.ruleForm.pass);
        console.log(this.ruleForm.checkPass);
        if (valid) {
          this.$axios({
            method: "post",
            url: "http://172.16.3.161:8080/examWeb_war_exploded/checkLogin",
            params: {
              loginName: this.ruleForm.name,
              loginPwd: this.ruleForm.pass,
              Check: this.ruleForm.checkPass,
            },
          })
            .then(
              function (response) {
                if (response) {
                  console.log(response);
                  this.ruleForm.message = "登录成功!";
                } else {
                  this.ruleForm.message = response.data["msg"];
                }
              }.bind(this)
            )
            .catch(
              function (response) {
                this.ruleForm.message = "登录异常，请重新登录!";
              }.bind(this)
            );
        }
      });
    },
  },
  components: {
    register,
    ShortCar,
    HeaderTop,
  },
  created() {
    // 获取cookie
      sessionStorage.setItem("token",1123);

    getCookie().then((res) => {
      this.cookieId = res.JSESSIONID;
      console.log(res);

      sessionStorage.setItem("JSESSIONID",1234); // 设置cookie,默认过期时间单位是1d(1天)
      // this.$cookie.set('token',token,10) 过期时间是10天
    });
    // this.$Cookies.set("JSESSIONID", this.cookieId, "1d");
    // },
  },
  mounted() {},
};
</script>

<style>
.login {
  width: 400px;
  margin: 0 auto;
}

.el-tabsitem {
  text-align: center;
  width: 60px;
}
</style>
