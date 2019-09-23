<template>
  <div class="wrapper" ref="wrapper">
    <div class="wrap-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import Bscoll from 'better-scroll'

  export default {
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      loadMore: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        scroll: null
      }
    },
    mounted() {
      this.scroll = new Bscoll(this.$refs.wrapper, {
        probeType: this.probeType,
        pullUpLoad: this.loadMore,
        click: true
      });
      this.scroll.on('scroll', position => {     //监听滚动
        this.$emit('scroll', position);
      });
      this.scroll.on('pullingUp', () => {  //上拉加载更多
        this.$emit('loadMoreGoods');
      })
    },
    methods: {
      //页面滚动到...
      myScrollTo(x, y, time = 500) {
        this.scroll.scrollTo(x, y, time);
      },
      //完成加载更多
      finishLoadMore() {
        this.scroll && this.scroll.finishPullUp();
      },
      //刷新
      refresh() {
        this.scroll && this.scroll.refresh()
      }
    }
  }

</script>

<style>

</style>
