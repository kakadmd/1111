// 把router写在index.js里面
import VueRouter from 'vue-router'
import Vue from 'vue'
import OnePage from '@/views/OnePage.vue'
import OneOnePage from '@/views/OneOnePage.vue'
import TwoPage from '@/views/TwoPage.vue'
import ThreePage from '@/views/ThreePage.vue'
Vue.use(VueRouter)
const routes = [
  {
    path: '/one-one',
    component: OneOnePage
  },
  {
    path: '/one',
    component: OnePage,
    children: [{
      path: '/two',
      component: TwoPage,
      children: [
        {
          path: '/three',
          component: ThreePage
        }
      ]
    }]
  }
]
const router = new VueRouter({
  routes
})
export default router
