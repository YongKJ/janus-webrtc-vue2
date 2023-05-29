import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: {
      name: "test"
    }
  },
  {
    path: '/test',
    name: 'test',
    meta: {
      title: "DemoTest"
    },
    component: () => import(/* webpackChunkName: "about" */ '@/views/DemoTest.vue')
  },

  {
    path: '/webrtc',
    name: 'webrtc',
    meta: {
      title: 'Webrtc Peer Test'
    },
    component: () => import(/* webpackChunkName: "about" */ '@/views/WebrtcPeerTest.vue')
  },
  {
    path: '/audio',
    name: 'audio',
    meta: {
      title: 'Janus Audio Test'
    },
    component: () => import(/* webpackChunkName: "about" */ '@/views/JanusAudioTest.vue')
  },
  {
    path: '/janus',
    name: 'janus',
    meta: {
      title: 'Janus Webrtc Test'
    },
    component: () => import(/* webpackChunkName: "about" */ '@/views/JanusWebrtcTest.vue')
  },
  {
    path: '/stream',
    name: 'stream',
    meta: {
      title: 'Janus Stream Test'
    },
    component: () => import(/* webpackChunkName: "about" */ '@/views/JanusStreamTest.vue')
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
