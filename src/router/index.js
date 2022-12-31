import VueRouter from "vue-router";
const router = new VueRouter({
 mode: 'history',
 routes: [{
  path: '/',
  redirect:'/Geek-vue/main-page',
 },{
  path:'/Geek-vue/main-page',
  name:'mainPage',
  component: () => import('../views/main-page.vue')
 }]
})

export default router