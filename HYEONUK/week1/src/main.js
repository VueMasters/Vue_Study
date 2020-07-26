import Vue from 'vue'
import App from '@/App.vue'
import router from "@/router";
import axios from 'axios';

Vue.config.productionTip = false

Vue.prototype.$axios = axios.create({
    baseURL: 'http://test-url.com:19299',
});

const vm = new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app');

Vue.prototype.$axios.interceptors.response.use(
    (response) => response,
    (error) => {
        if (!error.response) {
            // Server do not response
            vm.$router.push({
                name: 'Error',
            });
        } else {
            console.log(error.response);
        }

        return Promise.reject(error);
    },
);