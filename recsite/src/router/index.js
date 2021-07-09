import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = new Router ({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue'),
    },
    {
      path: '/equipe',
      name: 'equipe',
      component: () => import('@/views/NossaEquipe.vue')
    }
  ]
})

export default routes
