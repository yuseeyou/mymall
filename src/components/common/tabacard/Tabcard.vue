<template>
  <div class="card-contain">
    <div class="control">
      <div class="control-item" v-for="(v,index) in sort" :class="{itemActive:itemIndex===index}" @click="itemClick(index)">
        <span>{{v}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['sort'],
    data() {
      return {
        itemIndex: 0
      }
    },
    methods:{
      itemClick(index){
        this.itemIndex=index;
        this.$emit('getCurrentSort',index);
      }
    }
  }

</script>

<style scoped lang="less">
  .control {
    display: flex;
    width: 100%;
    height: 40px;
    background: #eee;
    position: sticky;
    position: -webkit-sticky;
    top:44px;
    .control-item {
      flex: 1;
      text-align: center;
      line-height: 40px;
    }

    .itemActive {
      color: var(--color-tint);
      span{
        padding: 5px;
        border-bottom: 2px solid var(--color-tint);
      }
    }
  }
</style>
