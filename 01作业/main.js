import Vue from 'vue'
import App from './App.vue'
import router from '04tabbar案例/router'
Vue.config.productionTip = false

new Vue({
  // 注册路由
  router,
  render: h => h(App)
}).$mount('#app')
