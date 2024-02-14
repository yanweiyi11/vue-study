// 等同于引入vue.js文件
import Vue from 'vue'
// 导入App组件（根组件）
import App from '@/App.vue'

// 关闭生产提示信息
Vue.config.productionTip = false

// 创建 Vue 实例
new Vue({
    el: '#app',
    // 您使用的是 Vue 的仅运行时版本，其中模板编译器不可用。
    // 目前使用的 vue.js 是一个缺失了模板编译器的 vue.js 文件。
    // 解决方案有两种：
    // 1. 使用完整版的 vue.js，import Vue from 'vue/dist/vue.js'
    // 2. 使用 render 函数，render: h => h(App)
    // 为什么采用缺失模板编译器的 vue.js？
    // 目的：减小体积。vue.js 包括两块：Vue 的核心 + 模板编译器（模板编译器可能占用 vue.js 文件体积的三分之一）
    // 将来程序员使用 webpack 进行打包处理之后，模板编译器就没有存在的必要了。
    // template: `<h1>render函数</h1>`
    // render: h => h(App),
    // render 函数被自动调用。
    // 这个函数被调用的时候会自动传过来一个参数：createElement，createElement 是一个函数。
    // createElement 函数可以用来创建元素。
    /* render(createElement) {
        // 创建了一个 div 元素
        // return createElement('div', 'render函数')
        return createElement(App)
    } */
    // 可以简写
    render: createElement => createElement(App)
    // }).$mount('#app')
});
