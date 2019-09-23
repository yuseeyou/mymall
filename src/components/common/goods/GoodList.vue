<template>
  <div class="goodList-contain">
    <GoodListItem v-for="(item,index) in goods" :key="index" :item="item"></GoodListItem>
  </div>
</template>

<script>
  import GoodListItem from './GoodListItem'
  export default {
    props:['goods'],
    components:{
      GoodListItem
    }
  }

</script>

<style scoped lang="less">
  .goodList-contain{
    width: 100%;
    height: 100%;
    padding: 5px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
</style>
