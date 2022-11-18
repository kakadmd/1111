// 封装的路由都放在src/router/index.js里面
// 下载vue-router
//  - yarn add vue-router@3.6.4
import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ClassifyPage from '../views/ClassifyPage.vue'
import OrderPage from '../views/OrderPage.vue'
import UserInfoPage from '../views/UserInfoPage.vue'
Vue.use(VueRouter)
// 配置VueRouter
const routes = [
  {
    path: '/home',
    component: HomePage
  },
  {
    path: '/classify',
    component: ClassifyPage
  },
  {
    path: '/order',
    component: OrderPage
  },
  {
    path: '/mine',
    component: UserInfoPage
  }
]
const router = new VueRouter({
  routes
})
// 把router暴露出去 在main.js里面接收
export default router
