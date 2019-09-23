<template>
  <div class="cart-list-contain">
    <div class="cart-item" v-for="(item,index) in cartList" :key="index">
      <div class="left">
        <check-btn :item="item"></check-btn>
      </div>
      <div class="center">
        <img :src="item.img" alt="">
      </div>
      <div class="right">
        <p class="title">{{item.title}}</p>
        <p class="desc">{{item.desc}}</p>
        <div class="bottom">
          <p class="price">￥{{item.price}}</p>
          <p class="count">X{{item.count}}</p>
        </div>
      </div>
    </div>
    <div class="message" v-if="cartList.length===0">
      <span class="iconfont">&#xe735;</span>
      <p>购物车为空，快去选购商品吧</p>
    </div>
  </div>
</template>

<script>
  import CheckBtn from './CheckBtn'

  export default {
    computed: {
      cartList() {
        return this.$store.state.cartList
      }
    },
    components: {
      CheckBtn
    },
    methods: {}
  }
</script>

<style scoped lang="less">
  .cart-list-contain {
    .cart-item {
      padding: 10px 0;
      display: flex;
      border-bottom: 1px solid #969696;

      .left {
        flex: 1;
      }

      .center {
        flex: 2;

        img {
          display: block;
          width: 100%;
          border-radius: 8px;
        }
      }

      .right {
        flex: 7;
        padding-left: 10px;
        position: relative;

        .title {
          width: 250px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          color: #333;
        }

        .desc {
          width: 250px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size: 13px;
          margin: 10px 0;
        }

        .bottom {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          display: flex;
          justify-content: space-between;
          padding: 0 10px;

          .price {
            color: #e67e22;
          }
        }
      }
    }
    .message{
      span{
        display: block;
        text-align: center;
        font-size: 200px;
      }
      p{
        text-align: center;
        color: var(--color-tint);
      }
    }
  }
</style>
