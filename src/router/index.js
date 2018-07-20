import Vue from 'vue'
import Router from 'vue-router'
import clientes from '@/components/clientes'
import campanas from '@/components/campanas'
import configurar from '@/components/configurar'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/clientes',
      name: 'clientes',
      component: clientes
    },
    {
      path: '/campanas',
      name: 'campanas',
      component: campanas
    },
    {
      path: '/configurar',
      name: 'configurar',
      component: configurar
    },
  ]
})
