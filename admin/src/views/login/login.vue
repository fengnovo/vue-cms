<template>
  <div class="login">
    <div class="login-form">
      <h3>用户登录</h3>
      <el-form ref="loginForm" :model="loginForm">
        <el-form-item>
          <el-input
            v-model="loginForm.userName"
            mini="large"
            placeholder="请输入用户名"
            prefix-icon="el-icon-user"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            v-model="loginForm.passWord"
            type="password"
            placeholder="请输入密码"
            prefix-icon="el-icon-lock"
          ></el-input>
        </el-form-item>
        <el-form-item class="login-all">
          <el-button type="primary" @click="onSubmit">立即登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { postLogin } from "@/api/userApi";
export default {
  name: "login",
  data() {
    return {
      loginForm: {
        userName: "admin",
        passWord: "123456",
      },
    };
  },
  created() {},
  mounted() {},
  methods: {
    async onSubmit() {
      const { data: res } = await postLogin(this.loginForm);
      if (res.code === 200) {
        sessionStorage.setItem("token", res.data.token);
        sessionStorage.setItem("userName", res.data.userName);
        this.$message({
          message: "登录成功",
          type: "success",
        });
        this.$router.push("/layoutMain");
      }
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.login {
  min-height: 100vh;
  width: 100%;
  background-color: #a2bff4;
  background-size: cover;
  position: relative;
  .login-form {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba($color: #81acfc, $alpha: 0.3);
    width: 460px;
    padding: 20px;
    border-radius: 8px;
    border: 1px solid #81acfc;
    box-shadow: 0 0 30px rgba($color: #9ccfe3, $alpha: 0.5);
    h3 {
      border-bottom: 1px solid #f2f2f2;
      padding-bottom: 15px;
      text-align: center;
      color: #fff;
      font-size: 26px;
    }
    .el-form {
      padding: 40px;
    }
    .login-all {
      text-align: center;
    }
  }
}
</style>
