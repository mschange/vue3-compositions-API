import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
    path: '/reactive',
    name: 'Reactive',
    component: () => import(/* webpackChunkName: "about" */ '../views/reactive.vue')
  },
  {
    path: '/toRef',
    name: 'ToRef',
    component: () => import(/* webpackChunkName: "about" */ '../views/toRef.vue')
  },
  {
    path: '/toRefs',
    name: 'ToRefs',
    component: () => import(/* webpackChunkName: "about" */ '../views/toRefs.vue')
  },
  {
    path: '/shallowReactive',
    name: 'ShallowReactive',
    component: () => import(/* webpackChunkName: "about" */ '../views/shallowReactive.vue')
  },
  {
    path: '/shallowRef',
    name: 'ShallowRef',
    component: () => import(/* webpackChunkName: "about" */ '../views/shallowRef.vue')
  },
  {
    path: '/watch',
    name: 'watch',
    component: () => import(/* webpackChunkName: "about" */ '../views/watch.vue')
  },
  {
    path: '/watchEffect',
    name: 'watchEffect',
    component: () => import(/* webpackChunkName: "about" */ '../views/watchEffect.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
