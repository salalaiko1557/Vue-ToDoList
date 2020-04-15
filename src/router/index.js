import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Github from "../views/Github";
import Value from "../views/Value";
import PopupNewTask from "../views/PopupNewTask";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,

    children: [
      {
        path: 'add',
        name: 'PopupNewTask',
        component: PopupNewTask
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/github',
    name: 'Github',
    component: Github
  },
  {
    path: '/value/:value',
    name: 'Value',
    component: Value
  },
  {
    path: '/value',
    name: 'Value',
    component: Value
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
