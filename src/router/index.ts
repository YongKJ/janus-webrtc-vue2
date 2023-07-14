import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: {
      name: "visual"
    }
  },
  {
    path: '/test',
    name: 'test',
    meta: {
      title: "DemoTest"
    },
    component: () => import('@/views/DemoTest.vue')
  },
  {
    path: '/webrtc',
    name: 'webrtc',
    meta: {
      title: 'Webrtc Peer Test'
    },
    component: () => import('@/views/WebrtcPeerTest.vue')
  },
  {
    path: '/audio',
    name: 'audio',
    meta: {
      title: 'Janus Audio Test'
    },
    component: () => import('@/views/JanusAudioTest.vue')
  },
  {
    path: '/janus',
    name: 'janus',
    meta: {
      title: 'Janus Webrtc Test'
    },
    component: () => import('@/views/JanusWebrtcTest.vue')
  },
  {
    path: '/stream',
    name: 'stream',
    meta: {
      title: 'Janus Stream Test'
    },
    component: () => import('@/views/JanusStreamTest.vue')
  },
  {
    path: '/visual',
    name: 'visual',
    meta: {
      title: 'Visualized Analysis Test'
    },
    component: () => import('@/views/VisualizedAnalysis.vue')
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
