import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

const actions = {
    saveUser(context, value) {
        context.commit('SAVE_USER', {id: Date.now(), name: value})
    },
    /* saveVip(context, value) {
        context.commit('SAVE_VIP', value)
    } */
}

const mutations = {
    SAVE_USER(state, value) {
        state.users.unshift(value)
    },
    SAVE_VIP(state, value) {
        state.vips.unshift({id: Date.now(), name: value})
    }
}
const state = {
    users: [
        {id: '001', name: '孙悟空'},
        {id: '002', name: '猪八戒'},
        {id: '003', name: '沙悟净'},
    ],
    vips: [
        {id: '001', name: '张三'},
        {id: '002', name: '李四'},
        {id: '003', name: '王五'},
    ],
    uname: '' // 可以看作 Vue 中的 date
}

// 全新的配置项 getters
const getters = {
    // 有很多 getter ，每一个 getter 可以看作一个计算属性
    // 每一个 getter 方法都会自动接收一个 state 对象
    reversedName(state) {
        return state.uname.split('').reverse().join('');
    }
}

export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters // 将 getters 给了 store
})