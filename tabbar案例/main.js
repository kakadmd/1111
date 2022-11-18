import Vue from 'vue'
import App from './App.vue'
// 引入css和bootstrap
import "./assets/fonts/iconfont.css"
import "bootstrap/dist/css/bootstrap.min.css"
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
