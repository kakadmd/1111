<template>
  <MyTable :list="goodsList">
    <template #goodsListModel="{good}">
       <td>{{good.id}}</td>
        <td>{{ good.goods_name}}</td>
        <td>{{ good.goods_price}}</td>
        <td>
          <div>
            <button v-if="isShowBtn" @click="isShowBtn = false" class="btn btn-primary btn-sm">+Tags</button>
            <input type="text" v-else @blur="isShowBtn = true" style="width: 50px">
          </div>
          <span  class="badge bg-warning text-dark" v-for="(item,index) in good.tags" :key="index">{{ item }}</span></td>
        <td>
            <button class="btn btn-danger btn-sm" @click=delGoods(good.id) >删除</button>
        </td>
    </template>
  </MyTable>
</template>

<script>
import MyTable from "aaa/MyTable.vue"
import axios from "@/utils/request.js"

export default {
  components:{
    MyTable
  },
  data(){
        return {
            goodsList:[],
            isShowBtn:true
        }
    },
    created(){
      this.getGoods()
    },
  methods:{
    // 发送请求获取商品
   async getGoods(){
      // console.log(123);
     const {data} = await axios({
        url:"/api/goods"
      })
      // console.log(data.data);
      this.goodsList = data.data
    },
    delGoods(i){
      // console.log(i);
        this.goodsList = this.goodsList.filter(item => {
          return item.id !== i
        }) 
    },
  },
}
</script>


<style scoped lang="less">
.my-goods-list {
  .badge {
    margin-right: 5px;
  }
}
</style>