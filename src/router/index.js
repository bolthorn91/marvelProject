import Vue from 'vue'
import Router from 'vue-router'
import comics from '@/components/comics'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/comics',
      name: 'comics',
      component: comics
    },
    
  ]
})
