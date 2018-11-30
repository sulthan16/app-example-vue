import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isLogged: !!localStorage.getItem('token'),
    },
    mutations: {
        login(state) {
            state.isLogged = true
        },
        logout(state) {
            state.isLogged = false
        }
    },
    actions: {

    }
})
