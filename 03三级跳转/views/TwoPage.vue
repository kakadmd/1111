<template>
  <div>
    <div>
      <h2>这里是二级嵌套</h2>
    </div>
    <div>
      <router-link to="/three">点击之后三级跳转</router-link>
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
