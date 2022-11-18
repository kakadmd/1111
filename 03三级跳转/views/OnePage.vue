<template>
  <div>
    <h3 style="background-color:skyblue">点击一次跳转出来的页面</h3>
    <router-link to="/two">点击二级</router-link>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
