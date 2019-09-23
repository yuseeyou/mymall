<template>
  <div class="goods-info-contain" v-if="goods && Object.keys(goods).length!==0">
    <h4 class="title">{{goods.title}}</h4>
    <div class="price">
      <span class="new-price">￥{{goods.realPrice}}</span>
      <span class="old-price">￥{{goods.oldPrice}}</span>
      <span class="badge">{{goods.discount}}</span>
    </div>
    <div class="sell">
      <p>{{goods.columns[0]}}</p>
      <p>{{goods.columns[1]}}</p>
      <p>{{goods.columns[2]}}</p>
    </div>
    <div class="serve">
      <div class="item" v-for="index in goods.services.length-1">
        <img :src="goods.services[index].icon" alt="">
        <p>{{goods.services[index].name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['goods']
  }

</script>

<style scoped lang="less">
  .goods-info-contain {
    margin-top: 5px;
    padding: 5px;

    .title {
      color: #000;
    }

    .price {
      margin-top: 10px;

      .new-price {
        font-size: 20px;
        color: var(--color-tint);
        margin-right: 2px;
      }

      .old-price {
        font-size: 13px;
        text-decoration: line-through;
        margin-right: 2px;
      }

      .badge {
        display: inline-block;
        padding: 3px;
        font-size: 15px;
        background: var(--color-tint);
        color: #fff;
        border-radius: 8px;
        text-align: center;
      }
    }

    .sell {
      display: flex;
      justify-content: space-between;
      margin-top: 10px;

      p {
        font-size: 13px;
      }
    }

    .serve {
      display: flex;
      justify-content: space-between;
      margin-top: 10px;

      .item {
        display: flex;

        img {
          display: block;
          width: 15px;
          height: 15px;
          margin-right: 2px;
        }

        p {
          font-size: 12px;
          color: #222222;
        }
      }
    }
  }
</style>
