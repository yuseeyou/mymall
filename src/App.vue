<template>
  <div id="app" class="contain">
    <keep-alive exclude="Details">
      <router-view></router-view>
    </keep-alive>
    <tab-bar :itemList="itemList"></tab-bar>
    <icon></icon>
    <svg-icon></svg-icon>
  </div>
</template>

<script>
  import TabBar from './components/common/tabbar/TabBar'
  import icon from './components/common/Icon/Icon';
  import svgIcon from './components/common/Icon/svg';
  export default {
    data() {
      return {
        itemList: [
          {icon: '&#xe615;', text: '首页', href: '/home'},
          {icon: '&#xe616;', text: '分类', href: '/sort'},
          {icon: '&#xe735;', text: '购物车', href: '/cart'},
          {icon: '&#xe653;', text: '我的', href: '/about'},
        ]
      }
    },
    name: 'app',
    components: {
      TabBar,
      icon,
      svgIcon
    },
  }
</script>

<style lang="less" scoped>
  @import "./assets/css/base.css";

  .contain {
    height: 100%;
    overflow: auto;
    padding-bottom: 49px;
    background: #fff;
  }
</style>
