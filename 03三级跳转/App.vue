<template>
  <div>
    <div>
      <div>
        <router-link to="/one-one">点击跳转</router-link>
      </div>
      <div>
        <router-link to="/one">点击一级跳转</router-link>
      </div>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
