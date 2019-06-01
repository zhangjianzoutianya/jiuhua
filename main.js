import Vue from 'vue'
import App from './App'

//首页组件
import index from './pages/index/main.vue'
Vue.component('index',index)

//商业组件
import business from './pages/business/index.vue'
Vue.component('business',business)

//我的首页组件
import user from './pages/user/index.vue'
Vue.component('user',user)

//接口全局
import axios from './Api'
import baseUrl from './Api/baseUrl'

//vuex
import store from './store'
Vue.prototype.$store = store

Vue.prototype.$axios =axios;
Vue.prototype.$baseUrl =baseUrl;

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	store,
    ...App
})
app.$mount()
