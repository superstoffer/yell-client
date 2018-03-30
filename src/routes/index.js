import Vue from 'vue'
import VueRouter from 'vue-router'

import Auth from '../components/auth/Auth'
import Login from '../components/auth/Login'
import Signup from '../components/auth/Signup'

import Dashboard from '../components/dashboard/Dashboard'
import Feed from '../components/dashboard/Feed'

Vue.use(VueRouter)

var router = new VueRouter({
    routes: [
        {
            path: '/',
            component: Dashboard,
            redirect: '/feed',
            children: [
                {
                    path: 'feed',
                    component: Feed,
                    meta: { requiresAuth: true }
                }
            ]
        },
        {
            path: '/auth',
            component: Auth,
            redirect: '/auth/login',
            children: [
                {
                    path: 'login',
                    component: Login,
                    meta: { requiresGuest: true }
                },
                {
                    path: 'signup',
                    component: Signup,
                    meta: { requiresGuest: true }
                }
            ]
        }
    ]
})

export default router