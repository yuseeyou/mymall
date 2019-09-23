<template>
  <div class="recommend-contain">
    <a href="#" v-for="item in recommends">
      <img :src="item.image" alt="">
      <p>{{item.title}}</p>
    </a>
  </div>
</template>

<script>
  export default {
    props:['recommends']
  }

</script>

<style scoped lang="less">
  .recommend-contain{
    width: 100%;
    display: flex;
    border-bottom: 5px solid #eee;
    a{
      flex: 1;
      display: block;
      margin: 10px;
      img{
        width: 100%;
      }
      p{
        text-align: center;
        margin-top: 5px;
      }
    }
  }
</style>
