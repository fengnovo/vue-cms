import Vue from 'vue'
import axios from 'axios'
import router from '../router'
const http = axios.create({
  baseURL: process.env.VUE_APP_API_URL || '/',
  // baseURL: 'http://localhost:3000',
  timeout: 60 * 1000
})

// 请求拦截
http.interceptors.request.use(
  config => {
    if (sessionStorage.getItem("token")) {
      config.headers.Authorization = sessionStorage.getItem("token")
    }
    return config
  },
  err => {
    Vue.prototype.$message({
      type: 'error',
      message: err
    })
  }
)
// 响应拦截
http.interceptors.response.use(
  res => {
    return res
  },
  err => {
    Vue.prototype.$message({
      type: 'error',
      message: err.response.data.msg
    })
    // token 不存在
    if (err.response.status === 400) {
      router.push('/')
    }
  }
)

export default http