<template>
  <div class="shop-info-contain" v-if="shop && Object.keys(shop).length!==0">
    <div class="top">
      <img :src="shop.logo" alt="">
      <p class="shopName">{{shop.name}}</p>
    </div>
    <div class="center">
      <div class="center-left">
        <div class="total-sell">
          <p>{{shop.sells}}</p>
          <p>总销量</p>
        </div>
        <div class="total-goods">
          <p>{{shop.goodsCount}}</p>
          <p>全部宝贝</p>
        </div>
      </div>
      <div class="line"></div>
      <div class="center-right">
        <div class="score" v-for="item in shop.score" :class="[item.isBetter?'high':'low']">
          <span>{{item.name}}</span>
          <span>{{item.score}}</span>
          <span>{{item.isBetter?'高':'低'}}</span>
        </div>
      </div>
    </div>
    <div class="bottom">
      <a href="javascript:">进店逛逛</a>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['shop']
  }

</script>

<style scoped lang="less">
  .shop-info-contain {
    margin-top: 10px;
    padding: 20px 10px 20px 10px;
    border-top: 2px solid #f0f0f0;
    border-bottom: 2px solid #f0f0f0;

    .top {
      display: flex;

      img {
        display: block;
        width: 10%;
        height: 10%;
        border-radius: 50%;
        border: 1px solid #f0f0f0;
      }

      p {
        margin: auto 2%;
      }
    }

    .center {
      padding: 20px 10px;
      display: flex;

      .center-left {
        flex: 1;
        display: flex;
        text-align: center;
        padding: 0 5%;

        .total-sell {
          flex: 1;

          p:first-child {
            margin-bottom: 5px;
          }
        }

        .total-goods {
          flex: 1;

          p:first-child {
            margin-bottom: 5px;
          }
        }
      }

      .line {
        width: 2px;
        height: 40px;
        background: #f1f1f1;
      }

      .center-right {
        flex: 1;
        padding: 0 5%;

        .score {
          display: flex;
          justify-content: space-between;
          margin-bottom: 5px;
          &.low {
            span:nth-child(2) {
              color: #2ecc71;
            }

            span:last-child {
              background: #2ecc71;
              color: #fff;
            }
          }
          &.high {
            span:nth-child(2) {
              color:var(--color-tint);
            }

            span:last-child {
              background: var(--color-tint);
              color: #fff;
            }
          }
        }
      }
    }

    .bottom {
      text-align: center;

      a {
        display: block;
        margin: 0 auto;
        padding: 5px 0;
        width: 35%;
        border: 1px solid #fab1a0;
        color: #fab1a0;
      }
    }
  }
</style>
