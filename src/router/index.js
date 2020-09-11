import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '@/container/Dashboard/Dashboard';
import Posts from '../container/Posts/Posts.vue';
import Albums from '../container/Albums/Albums';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },

  {
    path: '/albums',
    name: 'Albums',
    component: Albums
  },

  {
    path: '/posts',
    name: 'Posts',
    component: Posts
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
