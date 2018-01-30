// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUi from 'mint-ui'
Vue.use(MintUi)
//引入header
import Header from './components/Header/Header' 
// 引入Footer
import Footer from './components/Footer/Footer' 
import Bottom from './components/Bottom' 
// import { Button } from 'mint-ui';
// Vue.component();
// 引入轮播图
import SwiperPage from './components/Swiper'
Vue.config.productionTip = false
Vue.component("Header", Header)
Vue.component("Footer", Footer)
Vue.component("Bottom", Bottom)
Vue.component("SwiperPage", SwiperPage)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App, },
  template: '<App/>'
})
