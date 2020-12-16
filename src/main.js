import Vue from 'vue'
import App from './App.vue'


Vue.config.productionTip = false

// 先下载mint-ui模块
// 引入
import MintUI from 'mint-ui'
// 把css当作模块引入
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

// 先下载模块组件
import LyTab from 'ly-tab'
Vue.use(LyTab)
//导入路由模块
import router from "./router/router.js"
import store from "./store/index"
// 导入swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
Vue.use(VueAwesomeSwiper)
 
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')