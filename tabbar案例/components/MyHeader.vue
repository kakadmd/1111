<template>
  <!-- 动态style -->
  <!-- :style="{ 属性名:属性值 }" -->
  <div class="my-header" :style="{ background, color }">{{ title }}</div>
</template>

<script>
export default {
  // props支持对象
  // key:属性名
  // value
  //  - 数据类型
  //  - 对象的形式
  //    - type: 属性的类型(必写的)
  //    - default: 默认值
  //    - required:boolean

  // 注意点
  //  default和required 一般只使用一个
  props: {
    title: String,
    background: {
      type: String,
      default: "green",
    },
    color: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="less" scoped>
.my-header {
  height: 45px;
  line-height: 45px;
  text-align: center;
  background-color: #1d7bff;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
}
</style>
