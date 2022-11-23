import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'

Vue.use(ElementUI);
Vue.config.productionTip = false

// 子组件全局自动导入
const requireComponents = require.context("@/components", true, /\.vue/);
requireComponents.keys().forEach(filename => {
  //组件实例
  const reqCom = requireComponents(filename);
  //截取路径作为组件名
  const reqComName = reqCom.name || filename.replace(/\.\/(.*)\.vue/, "$1")
  console.log("加载组件名:", reqComName);
  Vue.component(reqComName, reqCom.default || reqCom)
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
