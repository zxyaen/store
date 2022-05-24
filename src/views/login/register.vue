//register组件

<template>
  <el-form
    :model="ruleForm"
    :rules="rules"
    ref="ruleForm"
    label-width="100px"
    class="demo-ruleForm"
  >
    <el-form-item label="用户名" prop="name"
      ><el-input v-model="ruleForm.name"></el-input
    ></el-form-item>
    <el-form-item label="密码" prop="pass"
      ><el-input
        type="password"
        v-model="ruleForm.pass"
        auto-complete="off"
      ></el-input
    ></el-form-item>
    <el-form-item label="确认密码" prop="checkPass"
      ><el-input
        type="password"
        v-model="ruleForm.checkPass"
        auto-complete="off"
      ></el-input
    ></el-form-item>

    <el-form-item label="验证码" prop="code">
      <el-input type="text" v-model="ruleForm.code"> </el-input>
    </el-form-item>

    <img :src="src" alt="" class="loginImg" @click="getCode()" />

    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { getCode, login } from "@/network/cookie";
export default {
  name: "register",
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

    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };

    return {
      src: null,
      activeName: "second",
      ruleForm: {
        name: "",
        pass: "",
        checkPass: "",
        code: "",
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
        checkPass: [
          { required: true, validator: validatePass2, trigger: "blur" },
        ],
      },
    };
  },
  mounted() {
    getCode().then((res) => {
      this.src = window.URL.createObjectURL(res);
    });
  },

  methods: {
    // 动态获取验证码
    getCode() {
      getCode().then((res) => {
        this.src = window.URL.createObjectURL(res);
      });
    },
    // 弹窗
    openLogin() {
      this.$alert("注册成功，请登录", {
        confirmButtonText: "确定",
      });
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          login(this.ruleForm.name, this.ruleForm.pass, this.ruleForm.code)
            .then(
              function (response) {
                console.log(response);
                if (response.result === "successSignIn") {
                  this.openLogin();
                  // this.$router.push("/login");
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

    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style scoped>
.loginImg {
  position: absolute;
  top: 215px;
  right: 5px;
  border-radius: 4px;
}
</style>
