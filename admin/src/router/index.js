import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/login/register.vue')
  },
  {
    path: '/layoutMain',
    name: 'layoutMain',
    component: () => import('@/views/layout/layoutMain.vue'),
    redirect: 'layoutMain/userAdmin',
    children: [
      {
        path: 'userAdmin',
        name: 'userAdmin',
        component: () => import('@/views/user-admin/userAdmin.vue')
      },
      {
        path: 'userManagement',
        name: 'userManagement',
        component: () => import('@/views/user-management/userManagement.vue')
      },
      {
        path: 'userList',
        name: 'userList',
        component: () => import('@/views/user-list/userList.vue')
      },
      {
        path: 'show',
        name: 'show',
        component: () => import('@/views/pannel/show.vue')
      },
      {
        path: 'pannel',
        name: 'pannel',
        component: () => import('@/views/pannel/index.vue')
      },
      {
        path: 'show1',
        name: 'show1',
        component: () => import('@/views/pannel/show1.vue')
      },
      {
        path: 'svg',
        name: 'svg',
        component: () => import('@/views/pannel/svg.vue')
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
