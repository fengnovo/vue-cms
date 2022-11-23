<template>
  <div class="aside-all">
    <el-menu
      :default-active="onRoutes"
      background-color="#001529"
      text-color="#e8e8e8"
      active-text-color="#fff"
      unique-opened
      collapse-transition
      router
    >
      <el-menu-item index="userManagement">管理员列表</el-menu-item>
      <!-- <el-menu-item index="userManagement">用户管理</el-menu-item> -->
      <el-menu-item index="userList">用户列表</el-menu-item>
      <el-menu-item index="userAdmin">流程列表</el-menu-item>
      <el-menu-item index="pannel">流程图面板</el-menu-item>
      <!-- <el-menu-item index="show1">流程初设数据面板</el-menu-item> -->
      <el-menu-item index="show">流程图展示板</el-menu-item>
      <el-menu-item index="svg">svg测试</el-menu-item>
      <el-menu-item index="LowCode">LowCode</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "layoutAside",
  data() {
    return {};
  },
  computed: {
    onRoutes() {
      //当前激活菜单的 index
      const newArr = this.$route.path.split("/");
      return newArr[2];
    },
  },
  created() {
    // console.log(this.$route)
  },
};
</script>

<style lang="scss" scoped>
.aside-all {
  .el-menu {
    border: 0;
  }
  ::v-deep {
    .is-active {
      font-weight: bold;
      background: #1890ff !important;
    }
  }
}
</style>