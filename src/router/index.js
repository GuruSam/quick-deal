import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home'
import TasksList from '@/views/TasksList'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    meta: {
      title: 'Quick deal - Главная'
    }
  },

  {
    path: '/tasks',
    component: TasksList,
    meta: {
      title: 'Quick deal - Список задач'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeResolve((to, from, next) => {
  document.title = to.meta.title || document.title

  next()
})

export default router
