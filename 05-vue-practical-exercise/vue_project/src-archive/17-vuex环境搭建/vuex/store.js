// 引入vue，因为下方使用vuex插件的时候需要vue
import Vue from 'vue'
// 引入vuex插件
import Vuex from 'vuex'

// 使用插件
Vue.use(Vuex)

// 创建Vuex的三个核心对象
const actions = {}
const mutations = {}
// 等同于vue当中的data（只不过这里不叫数据，叫状态）
const state = {}

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
