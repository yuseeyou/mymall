<template>
  <div class="cart-contain">
    <nav-bar class="cart-nav">
      <div slot="center" class="center">
        <p class="title">购物车</p>
        <p class="total-count">({{cartTotalCount}})</p>
      </div>
    </nav-bar>
    <scroll class="content" ref="scroll">
      <cart-list></cart-list>
    </scroll>
    <cart-tab-bar></cart-tab-bar>
  </div>
</template>

<script>
  import NavBar from '../../common/navbar/NavBar'
  import {mapGetters} from 'vuex'
  import CartList from './children/CartList'
  import Scroll from '../../common/scroll/Scroll'
  import CartTabBar from './children/CartTabBar'
  export default {
    components: {
      NavBar,
      CartList,
      Scroll,
      CartTabBar
    },
    computed: {
      ...mapGetters(['cartTotalCount'])
    },
    methods: {},
    activated() {
      this.$refs.scroll.refresh();
    }
  }

</script>

<style scoped lang="less">
  .cart-nav {
    background: var(--color-tint);
    border-bottom: 1px solid var(--color-tint);
    box-sizing: border-box;
    color: #fff;

    .center {
      display: flex;
      justify-content: center;
    }
  }

  .cart-contain {
    width: 100%;
    height: 100%;
    padding-top: 44px;
    padding-bottom: 40px;
    position: relative;
  }

  .content {
    width: 100%;
    height: 100%;
  }
</style>
