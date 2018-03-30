// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from './routes'
import VueResource from 'vue-resource'
import Auth from './plugins/Auth'

Vue.use(VueResource)
Vue.use(Auth)

Vue.config.productionTip = false

alertify.defaults.notifier.position = 'top-right'

Vue.http.interceptors.push((request, next) => {
    if (request.url[0] === '/' ) {
        request.url = process.env.API + request.url

        var token = Vue.auth.getToken()
        if (token) {
            request.headers.set('Authorization', 'Bearer ' + token)
        }
    }
    next((response) => {
        if (response.status == 422) {
            response.body.errors.forEach((e) => {
                alertify.error(e)
            })
        }
    })
})

// Route guards
Router.beforeEach((to, from, next) => {
    // prevent access to 'requiresGuest routes
    if (to.matched.some((record) => { return record.meta.requiresGuest }) && Vue.auth.loggedIn()) {
        next({
            path: '/feed'
        })
    }
    else if (to.matched.some((record) => { return record.meta.requiresAuth }) && !Vue.auth.loggedIn()) {
        next({
            path: '/auth/login',
            query: { redirect: to.fullPath }
        })
    }
    else {
        next()
    }
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router: Router,
    components: { App },
    template: '<App/>'
})
