<template>
  <div class="tabBar">
    <TabBarItem v-for="item in itemList" :key="item.icon" :item="item"></TabBarItem>
  </div>
</template>

<script>
  import TabBarItem from './TabBarItem'

  export default {
    props: ['itemList'],
    components: {
      TabBarItem
    }
  }
</script>

<style lang="less">
  .tabBar {
    display: flex;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    box-shadow: 0 -3px 1px rgba(100, 100, 100, 0.1);
    z-index: 99;
    background-color: #f6f6f6;
  }
</style>
