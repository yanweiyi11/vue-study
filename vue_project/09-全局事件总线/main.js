// 等同于引入vue.js文件
import Vue from 'vue'
// 导入App组件（根组件）
import App from './App.vue'

// 关闭生产提示信息
Vue.config.productionTip = false

// 获取VueComponent构造函数
// const VueComponentConstructor = Vue.extend({});
// 创建一个共享的VueComponent对象
// const globalVueComponent = new VueComponentConstructor();
// 将共享的VueComponent对象作为属性x扩展到Vue的原型对象上
// 所有Vue实例的原型链都可以访问到这个共享的VueComponent对象
// Vue.prototype.x = globalVueComponent;

// 创建 Vue 实例
new Vue({
    el: '#app',
    render: createElement => createElement(App),
    beforeCreate() {
        // 全局事件总线
        Vue.prototype.$bus = this;
    }
});
