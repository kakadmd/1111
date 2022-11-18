import Vue from 'vue'
import App from './App.vue'
import router from '04tabbar案例/router/index.js'
Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
