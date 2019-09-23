<template>
  <div class="goods-comment-contain" v-if="goodsComment && Object.keys(goodsComment).length!==0">
    <div class="comment-top">
      <p>用户评价</p>
      <p>更多</p>
    </div>
    <div class="comment-center">
      <div class="comment-user">
        <img :src="goodsComment.user.avatar" alt="">
        <p>{{goodsComment.user.uname}}</p>
      </div>
      <div class="comment-detail">
        <p>{{goodsComment.content}}</p>
      </div>
      <div class="comment-info">
        <p class="time">{{goodsComment.created | timeFormat}}</p>
        <p class="style">{{goodsComment.style}}</p>
      </div>
    </div>
    <div class="comment-bottom" v-if="goodsComment.images">
      <img :src="item" alt="" v-for="item in goodsComment.images">
    </div>
  </div>
</template>

<script>
  import moment from 'moment'

  export default {
    props: ['goodsComment'],
    filters: {
      timeFormat(data) {
        return moment(new Date(data * 1000)).format('YYYY-MM-DD HH:mm:ss');
      }
    }
  }

</script>

<style lang="less" scoped>
  .goods-comment-contain {
    padding: 20px 10px;

    .comment-top {
      padding-bottom: 15px;
      border-bottom: 1px solid #e0e0e0;
      display: flex;
      justify-content: space-between;
      color: #000;
    }

    .comment-center {
      .comment-user {
        padding: 10px 0;
        display: flex;

        img {
          width: 10%;
          height: 10%;
          border-radius: 50%;
        }

        p {
          margin: auto 15px;
          color: #000;
        }
      }

      .comment-detail {
        p {
          font-size: 14px;
          line-height: 20px;
        }
      }

      .comment-info {
        display: flex;
        padding: 10px 0;
        font-size: 12px;

        .time {
          margin-right: 20px;
        }
      }
    }

    .comment-bottom {
      img {
        width: 15%;
        height: 70px;
        margin-right: 10px;
      }
    }
  }
</style>
