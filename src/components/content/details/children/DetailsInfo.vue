<template>
  <div class="details-info-contain" v-if="detailsInfo && Object.keys(detailsInfo).length!==0">
    <h4>商品详情</h4>
    <div class="show-details">
      <img :src="item" alt="" v-for="item in detailsInfo.detailImage[0].list" @load="imageLoad">
    </div>
  </div>
</template>

<script>
  export default {
    props: ['detailsInfo'],
    data() {
      return {
        counter: 0,
        imageLength: 0
      }
    },
    methods: {
      imageLoad() {
        this.counter += 1;
        if (this.counter === this.imageLength) {
          this.$emit('imgLoad');
        }
      }
    },
    watch: {
      detailsInfo() {
        this.imageLength = this.detailsInfo.detailImage[0].list.length;
      }
    }
  }

</script>

<style lang="less" scoped>
  .details-info-contain {
    h4 {
      padding: 10px 0;
      text-align: center;
    }

    .show-details {
      img {
        width: 100%;
      }
    }
  }
</style>
