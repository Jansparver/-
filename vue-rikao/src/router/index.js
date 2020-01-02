import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:"/main/home"
  },
  {
    path: '/main',
    component:Home,
    children:[
      {
        path:'/main/home',
        component:()=>import('../views/child/home.vue')
      },
      {
        path:'/main/message',
        component:()=>import('../views/child/message.vue')
      },
      {
        path:'/main/hippay',
        component:()=>import('../views/child/hippay.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
