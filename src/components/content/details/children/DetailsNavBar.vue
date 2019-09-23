<template>
  <div class="details-nav-bar">
    <div class="left">
      <div class="customer item">
        <span class="iconfont color">&#xe61b;</span>
        <span>客服</span>
      </div>
      <div class="shop item">
        <span class="iconfont">&#xe650;</span>
        <span>店铺</span>
      </div>
      <div class="store item">
        <span class="iconfont">&#xe60a;</span>
        <span>收藏</span>
      </div>
    </div>
    <div class="right">
      <div class="add" @click="addCart">加入购物车</div>
      <div class="buy">立即购买</div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      addCart() {
        this.$emit('addToCart')
      }
    }
  }

</script>

<style lang="less" scoped>
  .details-nav-bar {
    width: 100%;
    height: 49px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
    z-index: 999;
    display: flex;

    .left {
      flex: 1;
      display: flex;

      .item {
        flex: 1;

        span {
          display: block;
          text-align: center;
          height: 50%;
          line-height: 24.5px;

          &:first-child {
            padding-top: 2px;
            font-size: 18px;
            font-weight: bold;
          }

          &.color {
            color: var(--color-tint);
          }
        }
      }
    }

    .right {
      flex: 1;
      display: flex;
      text-align: center;
      line-height: 49px;

      .add {
        flex: 1;
        background: #f39c12;
        color: #333;
      }

      .buy {
        flex: 1;
        color: #fff;
        background: var(--color-tint);
      }
    }
  }
</style>
