import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

// Vuex建议一个功能最好对应一个模块
// 这里业务非常简单，只把系统拆分为a模块和b模块（a业务和b业务）
// a模块
const a = {
    // 开启命名空间
    namespaced: true,
    actions: {
        doA1() {
            console.log('doA1 action')
        },
    },
    mutations: {
        doA2() {
            console.log('doA2 mutation')
        },
    },
    state: {a: 1},
    getters: {
        computedA() {
            return 2
        },
    }
}

// b模块
const b = {
    // 开启命名空间
    namespaced: true,
    actions: {
        doB1() {
            console.log('doB1 action')
        },
    },
    mutations: {
        doB2() {
            console.log('doB2 mutation')
        }
    },
    state: {b: 1},
    getters: {
        computedB() {
            return 2
        }
    }
}

// 测试当action中的方法名相同时，调用的效果，以及开启命名空间后的效果
const c = {
    //开启命名空间
    namespaced: true,
    actions: {
        doA1() {
            console.log("c模块的doA1执行了")
        }
    }
}

export default new Vuex.Store({
    modules: {
        // 模块名：模块对象
        aModule: a,
        bModule: b,
        cModule: c,
    }
})