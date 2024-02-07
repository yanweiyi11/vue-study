// 引入vue，因为下方使用vuex插件的时候需要vue
import Vue from 'vue'
// 引入vuex插件
import Vuex from 'vuex'

// 使用插件
Vue.use(Vuex)

// 创建Vuex的三个核心对象
const actions = {
    // N多个action
    // 每一个action都是一个callback（回调函数）
    // 在action这种回调函数中编写复杂的业务逻辑
    // 有个原则：action是专门用来处理业务逻辑或者说发送AJAX请求的
    // context: vuex的上下文（可以看作是store对象的压缩版）
    // value: 传过来的数据
    plusOne(context, value) {
        // 处理业务
        value += 1
        // 调用其他的action这个回调函数
        // context.dispatch('otherAction', value)
        // 业务逻辑处理完成之后，继续向下一个环节走，就轮到了数据的更新
        // 提交上下文环境（所有的事都做完了，最后一步了，更新数据了）
        context.commit('PLUS_ONE', value)
    },

    // 其他的action
    // ...
    /* otherAction(context, value) {
        console.log(123)
    } */
}
const mutations = {
    // N多个mutations
    // 每一个mutation都是一个callback（回调函数）
    // 每一个mutation这个回调函数的作用就是：更新state
    // 只要state一更新，因为是响应式的，页面就重新渲染了
    // state: 状态对象
    // value: 上一环节传过来的数据
    PLUS_ONE(state, value) {
        state.num += value
    }
}

// 等同于vue当中的data（只不过这里不叫数据，叫状态）
const state = { // 状态对象（数据对象），已经做了响应式处理的
    num: 0
}

// 简写形式
export default new Vuex.Store({actions, mutations, state});

/*
// 创建Vuex中的老大：store，它管理三个核心对象
const store = new Vuex.Store({ // 这里的配置项是固定的
    // 它是一个负责执行某个行为的对象
    actions: actions,
    // 它是一个负责更新的对象
    mutations: mutations,
    // 它是一个状态对象
    state: state,
});

// 导出store对象（暴露之后，别人想用就可以使用import导入）
export default store
*/
