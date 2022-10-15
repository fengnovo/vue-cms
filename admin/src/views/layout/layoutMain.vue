<template>
  <div class="layout-main">
    <el-container>
      <el-header style="height: 80px"><LayoutHeader /></el-header>
      <el-container>
        <el-aside width="200px" style="height: 100%"><LayoutAside /></el-aside>
        <el-main><router-view /></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import LayoutHeader from "./components/Header";
import LayoutAside from "./components/Aside";
export default {
  name: "layout",
  components: {
    LayoutHeader,
    LayoutAside,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.layout-main {
  ::v-deep {
    .el-header {
      background-color: #001529;
      color: #fff;
      height: 100px;
    }
    .el-container {
      height: 100vh;
    }
    .el-aside {
      background-color: #001529;
      color: #fff;
      height: calc(100vh - 100px);
    }
    .el-main {
      background-color: #fff;
      color: #001529;
      height: calc(100vh - 100px);
      overflow: auto;
      padding: 0;
    }
  }
}
</style>