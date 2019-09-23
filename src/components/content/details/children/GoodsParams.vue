<template>
  <div class="goods-params-contain" v-if="goodsParamsInfo && Object.keys(goodsParamsInfo).length!==0">
    <table class="infos" cellpadding="0" cellspacing="0">
      <tr v-for="item in goodsParamsInfo.sizes[0]">
        <td v-for="item2 in item">{{item2}}</td>
      </tr>
    </table>
    <table class="rules" cellpadding="0" cellspacing="0">
      <tr v-for="item3 in goodsParamsInfo.infos">
        <td>{{item3.key}}</td>
        <td>{{item3.value}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    props:['goodsParamsInfo']
  }

</script>

<style scoped lang="less">
  .goods-params-contain {
    padding: 20px 10px;
    border-top: 2px solid #f0f0f0;
    .infos {
      width: 100%;
      td {
        padding: 10px 0;
        border-bottom: 1px solid #eee;
      }
    }

    .rules{
      width: 100%;
      td{
        padding: 10px 0;
        border-bottom: 1px solid #eee;
        &:first-child{
          width: 30%;
        }
        &:last-child{
          width: 70%;
          color: var(--color-tint);
          font-size: 15px;
        }
      }
    }
  }
</style>
