<template>
 <div>
   <div class="footer_wrap">
    <a href="#/home">首页</a>
    <a href="#/classify">分类</a>
    <a href="#/order">订单</a>
    <a href="#/mine">我的</a>
  </div>
  <div>
    <router-view></router-view>
  </div>
 </div>
</template>

<script>
// 1.先下载路由 在index.js里面引入
// 2.准备小组件 4个页面
// 3.需要告诉vueRouter 组件需要渲染到哪里
export default { }
</script>

<style></style>
