import Vue from 'vue'
import App from '@/App.vue'

// 引入vuex插件中的核心对象store
import store from '@/vuex/store.js'

Vue.config.productionTip = false

new Vue({
    el: '#app',
    // 一个全新的配置项，以前没有学过：store
    // 加上这个配置项之后，vm以及所有的vc对象上都会多一个属性叫：$store
    // 以后通过vm.$store或vc.$store来获取store对象
    store: store,
    render: h => h(App),
})
