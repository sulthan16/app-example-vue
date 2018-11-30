import Vue from 'vue';

// Properties shared by all components.
Vue.mixin({
    data(){
        return {
            jwt: '0Ql2dqtyKvCOMJDoz9Tes39NJhGkKr5b'
        }
    },
    methods: {
        handleApiError(error){
            // Unauthorized. Expired token, accessing forbidden API, etc.
            if (error.status === 401) {
                this.$router.push('/logout')
            }
        }
    }
});