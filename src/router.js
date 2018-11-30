import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: () => import('./components/Navbar'),
            children: [{
                path: '',
                component: () => import('./views/dashboard/index')
            },
            {
                path: 'managementInstansi',
                component: () => import('./views/managementInstansi/index')
            },
            {
                path: 'managementInstansi/add',
                component: () => import('./views/managementInstansi/form')
            },
            {
                path: 'managementInstansi/edit/:id',
                component: () => import('./views/managementInstansi/form')
            },
            {
                path: 'managementPengguna',
                component: () => import('./views/managementPengguna/index')
            },
            {
                path: 'managementPengguna/add',
                component: () => import('./views/managementPengguna/form')
            },
            {
                path: 'managementPengguna/edit/:id',
                component: () => import('./views/managementPengguna/form')
            },
            {
                path: 'selfAssesment',
                component: () => import('./views/selfAssesment/index')
            },
            {
                path: 'selfAssesment/add',
                component: () => import('./views/selfAssesment/form')
            },
            {
                path: 'selfAssesment/edit/:id',
                component: () => import('./views/selfAssesment/form')
            },]
        },
        {
            path: '/login',
            component: () => import('./views/login/index'),
            meta: {
                roles: ['public']
            }
        }
    ]
})
