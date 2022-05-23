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
            <!-- 验证码 -->
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
import register from "../login/register.vue";
import ShortCar from "components/shortCar.vue";
import HeaderTop from "components/headerTop.vue";

import { checkLogin, getCode } from "@/network/cookie";

import {  mapMutations } from "vuex";


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
      src: null,
      activeName: "first",

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
    };
  },
  computed: {},

  methods: {
    ...mapMutations(["IsHomeFalse"]),
    // 动态获取验证码

    getCode() {
      getCode().then((res) => {
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
              function (response) {
                console.log(response);
                if (response.result === "ok") {
                  console.log("ok");
                  this.ruleForm.message = "登录成功!";
                  this.$router.push("/home");
                  this.open();
                } else {
                  this.ruleForm.message = "成功";
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
    // 弹窗
    open() {
      this.$alert("登录成功", {});
    },
  },
  components: {
    register,
    ShortCar,
    HeaderTop,
  },
  created() {
    // 改变isHome值，使搜索框不被渲染
    this.IsHomeFalse();
  },
  mounted() {
    getCode().then((res) => {
      this.src = window.URL.createObjectURL(res);
    });
  },
};
</script>

<style>
.login {
  width: 400px;
  margin: 0 auto;
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
