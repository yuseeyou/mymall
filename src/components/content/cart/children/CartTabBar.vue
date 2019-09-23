<template>
  <div class="cart-tabBar-contain">
    <div class="total">
      <div class="allChecked" @click="allCheckedChange(isTotalCheck)">
        <div class="checked-warp" :class="{'showBgc':isTotalCheck}">
          <span v-if="isTotalCheck">✔</span>
        </div>
        <p>全选</p>
      </div>
      <p class="totalPrice">合计:￥{{totalPrice.price}}</p>
    </div>
    <div class="pay">去结算({{totalPrice.num}})</div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    data() {
      return {}
    },
    methods: {
      allCheckedChange(flag) {
        this.$store.commit('changeAllChecked', flag);
      }
    },
    computed: {
      ...mapGetters(['isTotalCheck', 'totalPrice'])
    }
  }

</script>

<style scoped lang="less">
  .cart-tabBar-contain {
    width: 100%;
    height: 40px;
    background: #ecf0f1;
    position: absolute;
    bottom: 0;
    display: flex;
    line-height: 40px;
    text-align: center;
    padding-left: 10px;

    .total {
      flex: 7;
      display: flex;

      .allChecked {
        display: flex;
        margin-right: 10px;

        .checked-warp {
          margin: auto 2px;
          width: 20px;
          height: 20px;
          border: 1px solid #969696;
          border-radius: 50%;
          line-height: 20px;
          color: #fff;
        }

        .showBgc {
          background: #26a2ff;
        }
      }
    }

    .pay {
      flex: 3;
      background: #e67e22;
      color: #fff;
    }
  }
</style>
