import { createRouter, createWebHistory } from 'vue-router'
import MyPortafolio from '../views/MyPortafolio.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'MyPortafolio',
      component: MyPortafolio,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: {
        template: '<div> Esta es otra página </div>',
      },
    },
  ],
})

export default router
