<template>
  <div class="app">
    <MyHeader color="yellow" title="tabber案例"></MyHeader>
    <!-- 渲染主体 -->
    <component :is="componentName"></component>
    <MyFooter :list="tabList" @changeState="componentName = $event"></MyFooter>
  </div>
</template>

<script>
import MyHeader from "aaa/MyHeader.vue";
import MyFooter from "aaa/MyFooter.vue";
import MyGoodsList from "@/vues/MyGoodsList.vue"
import MyGoodsSearch from "@/vues/MyGoodsSearch.vue"
import MyUserInfo from "@/vues/MyUserInfo.vue"
export default {
   components: {
    MyHeader,
    MyFooter,
    MyUserInfo,
    MyGoodsSearch,
    MyGoodsList 
  },
  data() {
    return {
      componentName:"MyGoodsList",
      tabList: [
        {
          iconText: "icon-shangpinliebiao",
          text: "商品列表",
          componentName: "MyGoodsList",
        },
        {
          iconText: "icon-sousuo",
          text: "商品搜索",
          componentName: "MyGoodsSearch",
        },
        {
          iconText: "icon-user",
          text: "我的信息",
          componentName: "MyUserInfo",
        },
      ],
    };
  },
 
};
</script>

<style>
.app {
  padding:50px 0 50px;
}
</style>