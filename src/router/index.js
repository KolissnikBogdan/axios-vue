import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from "@/container/Dashboard/Dashboard";
import Posts from '../container/Posts/Posts.vue'
import Albums from '../container/Albums/Albums'

Vue.use(VueRouter)

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
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        //component: () => import(/* webpackChunkName: "about" */ '../container/Albums.vue')
    },
    {
        path: '/posts',
        name: 'Posts',
        component: Posts

    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
