import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import Fastclick from 'fastclick'
import LazyLoad from 'vue-lazyload'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue(); //添加一个事件总线

Fastclick.attach(document.body); //使用fastclick

Vue.use(LazyLoad, {
  loading: require('./assets/img/loading.gif')
});  //使用图片懒加载

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
