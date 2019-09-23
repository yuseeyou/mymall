## vue在线购物

##### 一.主要技术

vue+vue-router+vuex+axios+webpack4.0

##### 二.第三方库/插件

* mint-ui  实现无缝滑屏
* fastclick 解决移动端点击300ms延迟问题
* vue-lazyload 图片懒加载
* postcss-px-to-viewport  实现移动端viewport适配
* moment 时间格式化

##### 三.项目组织结构

* dist  项目打包文件夹
* src   项目源码
  * assets：存放项目静态资源，包括css reset，图片，字体图标等
  * common：通用的工具类js，如节流，防抖函数
  * components：存放项目组件，又细分为common存放通用组件，content存放与项目业务逻辑相关组件
  * network：网络划分模块，将需要进行网络请求的不同模块分别进行集中处理
  * router：路由配置相关
  * store：vuex进行统一状态管理的模块

##### 四.项目运行截图

![1](<https://raw.githubusercontent.com/yu2487848387/mymall/master/ReadMeImgs/01.png>)

![02](<https://raw.githubusercontent.com/yu2487848387/mymall/master/ReadMeImgs/02.png>)

![03](<https://raw.githubusercontent.com/yu2487848387/mymall/master/ReadMeImgs/03.png>)

![04](<https://raw.githubusercontent.com/yu2487848387/mymall/master/ReadMeImgs/04.png>)

![05](<https://raw.githubusercontent.com/yu2487848387/mymall/master/ReadMeImgs/05.png>)

![06](<https://raw.githubusercontent.com/yu2487848387/mymall/master/ReadMeImgs/06.png>)

![07](<https://raw.githubusercontent.com/yu2487848387/mymall/master/ReadMeImgs/07.png>)

![08](<https://raw.githubusercontent.com/yu2487848387/mymall/master/ReadMeImgs/08.png>)