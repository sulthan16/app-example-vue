import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: () => import('./components/layout/index'),
            children: [{
                path: '',
                component: () => import('./views/dashboard/index'),
                meta: {
                    roles: ['admin']
                },
            },
            {
                path: 'managementInstansi',
                component: () => import('./views/managementInstansi/index'),
                meta: {
                    roles: ['admin']
                },
            },
            {
                path: 'managementInstansi/add',
                component: () => import('./views/managementInstansi/form'),
                meta: {
                    roles: ['admin']
                },
            },
            {
                path: 'managementInstansi/edit/:id',
                component: () => import('./views/managementInstansi/form'),
                meta: {
                    roles: ['admin']
                },
            },
            {
                path: 'managementPengguna',
                component: () => import('./views/managementPengguna/index'),
            },
            {
                path: 'managementPengguna/add',
                component: () => import('./views/managementPengguna/form'),
                meta: {
                    roles: ['admin']
                },
            },
            {
                path: 'managementPengguna/edit/:id',
                component: () => import('./views/managementPengguna/form'),
                meta: {
                    roles: ['admin']
                },
            },
            {
                path: 'selfAssesment',
                component: () => import('./views/selfAssesment/index'),
                meta: {
                    roles: ['public']
                },
            },
            {
                path: 'selfAssesment/add',
                component: () => import('./views/selfAssesment/form'),
                meta: {
                    roles: ['public']
                },
            },
            {
                path: 'selfAssesment/edit/:id',
                component: () => import('./views/selfAssesment/form'),
                meta: {
                    roles: ['public']
                },
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
