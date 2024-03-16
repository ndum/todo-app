import propsParser from 'vue-router-parse-props'
import {
  createMemoryHistory,
  createRouter as _createRouter,
  createWebHistory,
} from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue'),
  },
  {
    path: '/todo/show/:todoId',
    name: 'Todo',
    component: () => import('../views/TodoDetailView.vue'),
    props: propsParser({
      todoId: Number,
    }),
  },
]

export const createRouter = () =>
  _createRouter({
    history: import.meta.env.SSR
      ? createMemoryHistory('/')
      : createWebHistory('/'),
    routes,
  })
