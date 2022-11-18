import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '@/views/MainPage.vue'
import NewsPage from '@/views/NewsPage.vue'
import SportsPage from '@/views/SportsPage.vue'
import AbroadSports from '@/views/second/AbroadSports.vue'
import HomeSports from '@/views/second/HomeSports.vue'
import InlandSports from '@/views/second/InlandSports.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/main',
    component: MainPage
  },
  {
    path: '/news',
    component: NewsPage
  },
  {
    path: '/sports',
    component: SportsPage,
    children: [
      {
        path: 'oneSport',
        component: HomeSports
      },
      {
        path: 'two',
        component: InlandSports
      },
      {
        path: 'three',
        component: AbroadSports
      }
    ]
  }
]
const router = new VueRouter({
  routes
})
export default router
