import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Todos from '../views/Todos.vue'
import TodosId from '../views/TodosId.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/todos',
    name: 'todos',
    component: Todos

  },
  {
    path: '/todos/:id',
    name: 'todos-id',
    component: TodosId
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
