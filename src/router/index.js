import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Home from '../components/content/home/Home'
import Sort from '../components/content/sort/Sort'
import Cart from '../components/content/cart/Cart'
import About from '../components/content/about/About'
import Details from '../components/content/details/Details'
const router=new VueRouter({
  routes:[
    {path:'/',redirect:'/home'},
    {path: '/home', component: Home},
    {path: '/sort', component: Sort},
    {path: '/cart', component: Cart},
    {path: '/about', component: About},
    {path:'/details/:id',component:Details}
  ],
  mode: 'history'
})

export default router
