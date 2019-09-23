<template>
  <div class="check-btn-contain" @click="changeChecked(item)">
    <span v-if="item.checked">✔</span>
  </div>
</template>

<script>
  export default {
    props: ['item'],
    methods: {
      changeChecked(item) {
        this.$store.commit('changeCartChecked', item);
      }
    }
  }
</script>

<style scoped lang="less">
  .check-btn-contain {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 1px solid #969696;
    text-align: center;
    overflow: hidden;
    transform: translate3d(5px,25px,0);
    span {
      display: block;
      width: 25px;
      height: 25px;
      background: #26a2ff;
      color: #fff;
    }
  }
</style>
