<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  export default {}

</script>

<style scoped lang="less">
  .nav-bar{
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 44px;
    display: flex;
    text-align: center;
    line-height: 44px;
    z-index: 99;
    .left{
      flex:1
    }
    .center{
      flex:2
    }
    .right{
      flex:1
    }
  }
</style>
