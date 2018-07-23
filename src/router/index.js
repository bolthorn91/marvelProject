import Vue from 'vue'
import Router from 'vue-router'
import controller from '@/components/controller'
import comic from '@/components/comic'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'controller',
      path: '/',
      component: controller
    },
    {
      name: 'comic',
      path: '/comic/:id',
      component: comic
    },
    
  ]
})
