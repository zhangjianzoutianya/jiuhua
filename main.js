import Vue from 'vue'
import App from './App'

import index from './pages/index/main.vue'
Vue.component('index',index)

import business from './pages/business/index.vue'
Vue.component('business',business)

import user from './pages/user/index.vue'
Vue.component('user',user)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
