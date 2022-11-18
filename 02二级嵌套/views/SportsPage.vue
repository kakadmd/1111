<template>
  <div>
    <h3>体育-改变人生</h3>
    <router-link to="/sports/oneSport">体育的主页</router-link>
    <router-link to="/sports/two">国内的体育</router-link>
    <router-link to="/sports/three">国外的体育</router-link>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
