<template>
  <div class="goodListItem-contain" @click="toDetails">
    <img v-lazy="getImages" alt="" @load="imgLoad">
    <div class="title">{{item.title}}</div>
    <div class="info">
      <div class="price">￥{{item.price}}</div>
      <div class="like">💛{{item.sale}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['item'],
    methods: {
      imgLoad() {
        this.$bus.$emit('imgLoadCompleted');
      },
      toDetails() {
        this.$router.push('/details/' + this.item.iid);
      }
    },
    computed: {
      getImages() {
        return this.item.image || this.item.show.img;
      }
    }
  }

</script>

<style scoped lang="less">
  .goodListItem-contain {
    width: 49%;
    margin-bottom: 5px;

    img {
      width: 100%;
      border-radius: 5px;
    }

    .title {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 14px;
    }

    .info {
      display: flex;
      justify-content: center;

      .price {
        color: var(--color-tint);
        margin-right: 3px;
      }
    }
  }
</style>
