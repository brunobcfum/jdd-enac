import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Timeline from '../views/Timeline.vue'
import Program from '../views/Program.vue'
import Telecom from '../views/Telecom/Telecom.vue'
import Devi from '../views/Devi/Overview.vue'
import Optim from '../views/Optim/Overview.vue'
import II from '../views/II/Overview.vue'
import Scape from '../views/Scape/Enter.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'JDD ENAC 2022' }
  },
  {
    path: '/timeline',
    name: 'Timeline',
    component: Timeline,
    meta: { title: 'JDD ENAC 2022' }
  },
  {
    path: '/program',
    name: 'Program',
    component: Program,
    meta: { title: 'JDD ENAC 2022' }
  },
  {
    path: '/telecom',
    name: 'Telecom',
    component: Telecom,
    meta: { title: 'JDD ENAC 2022' }
  },
  {
    path: '/devi',
    name: 'Devi',
    component: Devi,
    meta: { title: 'JDD ENAC 2022' }
  },
  {
    path: '/optim',
    name: 'Optim',
    component: Optim,
    meta: { title: 'JDD ENAC 2022' }
  },
  {
    path: '/ii',
    name: 'II',
    component: II,
    meta: { title: 'JDD ENAC 2022' }
  },
  {
    path: '/scape',
    name: 'Scape',
    component: Scape,
    meta: { title: 'JDD SCAPE ROOM' }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router