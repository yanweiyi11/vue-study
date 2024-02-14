import Vue from 'vue'
import App from '@/App.vue'
import VueRouter from "vue-router";
import router from '@/router/index'

Vue.config.productionTip = false

Vue.use(VueRouter)

new Vue({
    el: '#app',
    // 使用VueRouter插件，new VUe时可以传递一个配置项：router
    // router配置项用来接收一个路由器对象
    router: router,
    render: h => h(App),
})
