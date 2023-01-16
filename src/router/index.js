import { createRouter, createWebHistory } from 'vue-router'
import appListTasks from "../views/AppListTasks";

const routes = [
  {
    path: '/',
    name: 'home',
    component: appListTasks
  },
  {
    path: '/create',
    name: 'create',
    component: () => import(/* webpackChunkName: "create" */ '../views/AppTaskNew.vue')
  },
  {
    path: '/view-task',
    name: 'view-task',
    component: () => import(/* webpackChunkName: "view-task" */ '../views/AppNewTask.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

export default router
