<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
*{
  padding: 0;
  border: 0;
  margin: 0;
}
body{
}
.el-breadcrumb{
  background: #f8f8f8;
  padding: 20px;
  border-bottom: 1px solid #e5e5e5;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.el-breadcrumb{
  padding: 10px 20px;
  box-shadow: 5px 0 10px rgba(0, 0, 0, 0.1);
}
.el-dropdown-link {
  cursor: pointer;
  color: #fff;
}
</style>
