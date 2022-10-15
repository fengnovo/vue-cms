<template>
  <div class="login">
    <div class="login-form">
      <h3>用户注册</h3>
      <el-form ref="loginForm" :model="loginForm">
        <el-form-item label="用户名">
          <el-input
            v-model="loginForm.userName"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input
            v-model="loginForm.passWord"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { postList } from "@/api/userAdminApi";
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
    onSubmit() {
      postList(this.loginForm).then(() => {
        this.$message({
          message: "添加成功",
          type: "success",
        });
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.login {
  .login-form {
    width: 460px;
    margin: 300px auto;
    padding: 20px;
    border-radius: 8px;
    border: 1px solid #f2f2f2;
    box-shadow: 0 0 10px rgba($color: #000000, $alpha: 0.2);
    h3 {
      border-bottom: 1px solid #f2f2f2;
      padding-bottom: 15px;
    }
    .el-form {
      padding: 40px;
    }
  }
}
</style>
