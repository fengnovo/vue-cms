<template>
  <div class="header-all">
    <div class="logo">
      <img src="../../../assets/logo.png" alt="" />
      <h1>后台管理系统</h1>
    </div>
    <div class="header-right">
      <el-dropdown trigger="click" @command="handleCommand">
        <span class="el-dropdown-link">
          {{ userName }}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-switch-button" command="logout"
            >退出</el-dropdown-item
          >
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: "layoutHeader",
  data() {
    return {
      onRoutes: "register",
      userName: sessionStorage.getItem("userName"),
    };
  },
  methods: {
    handleCommand(command) {
      if (command === "logout") {
        sessionStorage.clear();
        this.$router.push("/");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.header-all {
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: space-between;
  .logo {
    display: flex;
    align-items: center;
    img {
      height: 40px;
    }
    h1 {
      padding: 10px;
      font-size: 24px;
      font-weight: bold;
      // color: #fff;
      background-image: -webkit-linear-gradient(top, #fff, #fff, #d4e9ff);
      background-clip: text;
      -webkit-text-fill-color: transparent;
      text-shadow: 0 0 20px rgba($color: #fff, $alpha: 0.8);
      font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
  }

  .header-right {
    i {
      margin-right: 20px;
    }
  }
}
</style>