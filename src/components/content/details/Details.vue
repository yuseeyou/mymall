<template>
  <div class="details-contain">
    <nav-bar class="details-nav">
      <div slot="left" class="back" @click="back">
        <img src="../../../assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="title">
        <p v-for="(item,index) in titles" @click="getCurrent(index)" :class="{active:index===titleCurrentIndex}">
          {{item}}</p>
      </div>
    </nav-bar>
    <scroll class="content" ref="scroll" @scroll="getScrollTop" :probe-type="3">
      <swipe :auto="4000">
        <swipe-item v-for="item in topImages">
          <img :src="item" alt="">
        </swipe-item>
      </swipe>
      <goods-info :goods="goods"></goods-info>
      <shop-info :shop="shop"></shop-info>
      <details-info :detailsInfo="detailsInfo" @imgLoad="detailImgLoad"></details-info>
      <goods-params-info :goodsParamsInfo="goodsParamsInfo" ref="param"></goods-params-info>
      <goods-comment :goodsComment="goodsComment" ref="comment"></goods-comment>
      <p class="recommend-title">相关推荐</p>
      <good-list :goods="goodsRecommend" ref="recommend"></good-list>
    </scroll>
    <details-nav-bar @addToCart="addToCart"></details-nav-bar>
    <back-top class="back-top-contain" @click.native="backToTop" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
  import NavBar from '../../common/navbar/NavBar'
  import {getDetails, Goods, Shop, GoodsParams, getCommend} from '../../../network/details'
  import {Swipe, SwipeItem} from 'mint-ui';
  import GoodsInfo from './children/GoodsInfo'
  import ShopInfo from './children/ShopInfo'
  import Scroll from '../../common/scroll/Scroll'
  import DetailsInfo from './children/DetailsInfo'
  import GoodsParamsInfo from './children/GoodsParams'
  import GoodsComment from './children/GoodsComment'
  import GoodList from '../../common/goods/GoodList'
  import {debounce} from '../../../common/untils'
  import DetailsNavBar from './children/DetailsNavBar'
  import BackTop from '../../common/backtop/backTop'
  import { Toast } from 'mint-ui';
  export default {
    name: 'Details',
    data() {
      return {
        goodsId: null,
        titles: ['商品', '参数', '评论', '推荐'],
        titleCurrentIndex: 0,
        topImages: [],
        goods: {},
        shop: {},
        detailsInfo: {},
        goodsParamsInfo: {},
        goodsComment: {},
        goodsRecommend: [],
        themTopY: [],
        getThemY: null,
        isShowBackTop: false
      }
    },
    created() {
      this.goodsId = this.$route.params.id;
      getDetails(this.goodsId).then(res => {
        const data = res.data.result;
        //1.商品轮播图数据
        this.topImages = data.itemInfo.topImages;
        //2.商品价格数量数据
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);
        ///3.商家数据
        this.shop = new Shop(data.shopInfo);
        //4.商品详情数据
        this.detailsInfo = data.detailInfo;
        //5.商品参数
        this.goodsParamsInfo = new GoodsParams(data.itemParams.info, data.itemParams.rule);
        //6.商品评论
        if (data.rate.cRate !== 0) {
          this.goodsComment = data.rate.list[0];
        }
      });
      getCommend().then(res => {
        //7.商品推荐信息
        this.goodsRecommend = res.data.data.list
      });
      this.getThemY = debounce(() => {  //获取各板块offsetTop，防抖
        this.themTopY = [];
        this.themTopY.push(0);
        this.themTopY.push(this.$refs.param.$el.offsetTop - 49);
        this.themTopY.push(this.$refs.comment.$el.offsetTop - 49);
        this.themTopY.push(this.$refs.recommend.$el.offsetTop - 49);
      })
    },
    components: {
      NavBar,
      Swipe,
      SwipeItem,
      GoodsInfo,
      ShopInfo,
      Scroll,
      DetailsInfo,
      GoodsParamsInfo,
      GoodsComment,
      GoodList,
      DetailsNavBar,
      BackTop
    },
    methods: {
      getCurrent(index) {
        this.titleCurrentIndex = index;
        this.$refs.scroll.myScrollTo(0, -this.themTopY[index], 500);
      },
      back() {
        this.$router.back();
      },
      detailImgLoad() {
        this.$refs.scroll.refresh();
        this.getThemY(); //调用防抖
      },
      getScrollTop(position) { //监听页面滚动
        let length = this.themTopY.length;
        for (let i = 0; i < length; i++) {
          if (this.titleCurrentIndex !== i && (i < length - 1 && -position.y >= this.themTopY[i] && -position.y <= this.themTopY[i + 1]) ||
            (i === length - 1 && -position.y >= this.themTopY[i])) {
            this.titleCurrentIndex = i;
          }
        }
        this.isShowBackTop = position.y < -500;
      },
      backToTop() {  //回到顶部
        this.$refs.scroll.myScrollTo(0, 0, 500)
      },
      addToCart() { //加入购物车
        const product = {};
        product.img = this.topImages[0];
        product.title = this.goods.title;
        product.desc = this.goods.desc;
        product.price = this.goods.realPrice;
        product.iid = this.goodsId;
        this.$store.commit('addCart',product);
        Toast({
          message: '加入购物车成功！',
          iconClass: 'icon icon-success',
          duration:2000
        });
      }
    }
  }
</script>

<style scoped lang="less">
  .title {
    display: flex;
    justify-content: space-between;

    p.active {
      color: var(--color-tint);
    }
  }

  .back {
    img {
      vertical-align: middle;
    }
  }

  .mint-swipe {
    width: 100%;
    height: 300px;
    overflow: hidden;

    img {
      width: 100%;
      background-repeat: no-repeat;
    }
  }

  .details-nav {
    background: #fff;
    border-bottom: 1px solid var(--color-tint);
    box-sizing: border-box;
  }

  .details-contain {
    width: 100%;
    height: 100%;
    padding-top: 44px;
  }

  .content {
    width: 100%;
    height: 100%;
  }

  .recommend-title {
    padding: 20px 10px;
    text-align: center;
    position: relative;

    &::before {
      content: '';
      display: block;
      width: 20%;
      height: 2px;
      background: #222222;
      position: absolute;
      top: 50%;
      left: 20%;
    }

    &::after {
      content: '';
      display: block;
      width: 20%;
      height: 2px;
      background: #222222;
      position: absolute;
      top: 50%;
      right: 20%;
    }
  }

  .back-top-contain {
    bottom: 60px;
    right: 16px;
  }
</style>
