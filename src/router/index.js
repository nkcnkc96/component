import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Task from '../views/task.vue'
import taskProfile from '../views/taskprofile.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/task',
    name: 'Task',
    component: Task
  },
  {
    path: '/taskprofile',
    name: 'taskProfile',
    component: taskProfile
  }
]

const router = new VueRouter({
  routes
})

export default router
