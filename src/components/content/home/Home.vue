<template>
  <div class="home-contain">
    <nav-bar class="nav-bar"><p slot="center">购物街</p></nav-bar>
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="getScroll" :load-more="true"
            @loadMoreGoods="getLoadMoreGoods">
      <swipe :auto="4000">
        <swipe-item v-for="(item,index) in banners" :key="index">
          <a :href="item.link">
            <img :src="item.image" alt="">
          </a>
        </swipe-item>
      </swipe>
      <recommend :recommends="recommends"></recommend>
      <feature-view></feature-view>
      <tab-card :sort="['流行','新款','热卖']" @getCurrentSort="getGoodsSort"></tab-card>
      <good-list :goods="goods[currentSortType].list"></good-list>
    </scroll>
    <back-top class="back-top-contain" @click.native="backToTop" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
  import NavBar from '../../common/navbar/NavBar'
  import {getHomeData, getHomeGoods} from '../../../network/home'
  import {Swipe, SwipeItem} from 'mint-ui';
  import "mint-ui/lib/style.css"
  import Recommend from './children/Recommend'
  import FeatureView from './children/FeatureView'
  import TabCard from '../../common/tabacard/Tabcard'
  import GoodList from '../../common/goods/GoodList'
  import Scroll from '../../common/scroll/Scroll'
  import BackTop from '../../common/backtop/backTop'
  import {debounce} from '../../../common/untils'

  export default {
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': {page: 0, list: [], type: 0},
          'new': {page: 0, list: [], type: 1},
          'sell': {page: 0, list: [], type: 2}
        },
        currentSortType: 'pop',
        isShowBackTop: false,
        currentScrollY: 0
      }
    },
    created() {
      //请求主页相关数据
      this.getHomeLunBo();
      this.getHomeGoodsTotal('pop', 0);
      this.getHomeGoodsTotal('new', 0);
      this.getHomeGoodsTotal('sell', 0);
    },
    mounted() {
      //监听goods图片加载完成
      const refresh = debounce(this.$refs.scroll.refresh, 50);
      this.$bus.$on('imgLoadCompleted', () => {
        refresh();
      })
    },
    components: {
      NavBar,
      Swipe,
      SwipeItem,
      Recommend,
      FeatureView,
      TabCard,
      GoodList,
      Scroll,
      BackTop
    },
    methods: {
      //1.获取首页轮播
      getHomeLunBo() {
        getHomeData().then(res => {
          this.banners = res.data.data.banner.list;
          this.recommends = res.data.data.recommend.list;
        })
      },
      //2.获取首页商品列表
      getHomeGoodsTotal(type) {
        const page = this.goods[type].page + 1;
        getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.data.list);
          this.goods[type].page++;
        })
      },
      //3.获取首页当前展示的商品种类
      getGoodsSort(typeIndex) {
        switch (typeIndex) {
          case 0:
            this.currentSortType = 'pop';
            break;
          case 1:
            this.currentSortType = 'new';
            break;
          case 2:
            this.currentSortType = 'sell';
            break;
        }
      },
      //4.回到顶部
      backToTop() {
        this.$refs.scroll.myScrollTo(0, 0, 500)
      },
      //5.获取到当前滚动的距离
      getScroll(position) {
        this.isShowBackTop = position.y < -1000;
      },
      //6.上拉加载更多
      getLoadMoreGoods() {
        this.getHomeGoodsTotal(this.currentSortType);
        this.$refs.scroll.finishLoadMore();
      },
    },
    activated() {
      this.$refs.scroll.refresh();
      this.$refs.scroll.myScrollTo(0, this.currentScrollY, 0);
    },
    deactivated() {
      this.currentScrollY = this.$refs.scroll.scroll.y;
    }
  }

</script>

<style scoped lang="less">
  .home-contain {
    padding: 44px 0 0 0;
    height: 100%;
  }

  .mint-swipe {
    width: 100%;
    height: 200px;

    img {
      width: 100%;
      height: 100%;
      background-size: 100% 100%;
      background-repeat: no-repeat;
    }
  }

  .nav-bar {
    background-color: var(--color-tint);

    p {
      color: #fff;
    }
  }

  .content {
    height: 100%;
    overflow: hidden;
  }

  .back-top-contain {
    bottom: 60px;
    right: 16px;
  }
</style>
