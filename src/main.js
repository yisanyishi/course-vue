import Vue from 'vue'
import App from './App.vue';
import VueRouter from 'vue-router'
import router from './router/index.js'

//全局样式
import './assets/font/iconfont.css'
import './assets/base.css'

Vue.use(VueRouter)

new Vue({
  el: '#app',
  router,
  render (h) {
    return h(App)
  }
})

// createApp(App).mount('#app')
