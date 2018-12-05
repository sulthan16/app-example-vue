import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './registerServiceWorker'
import './mixin'

Vue.config.productionTip = false

axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`

router.beforeEach((to, from, next) => {
    if(to.name == 'login'){
        if(store.state.isLogged)
            return next('/');
        else
            return next();
    }

    var hasRoles = to.meta.roles != undefined;
    var isPublic = hasRoles && to.meta.roles.indexOf('public') != -1;
    var user     = JSON.parse(localStorage.getItem('user'));

    // Non-logged user accessing non-public route.
    if(!store.state.isLogged && !isPublic){
        next({
            path: '/login',
            query: { redirect: to.fullPath }
        })
    }
    // Non-public route and has defined roles.
    else if(!isPublic && hasRoles){
        var hasRole = false;

        user.roles.forEach((role, index) => {
            if(!hasRole && to.meta.roles.indexOf(role.name) != -1){
                hasRole = true;
            }
        });

        if(!hasRole){
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            store.commit('logout');
            next('/login');
        }
    }

    next();
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
