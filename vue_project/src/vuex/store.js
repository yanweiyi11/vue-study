import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

const actions = {
    doA1() {
        console.log('doA1 action')
    },
    doB1() {
        console.log('doB1 action')
    },
}
const mutations = {
    doA2() {
        console.log('doA2 mutation')
    },
    doB2() {
        console.log('doB2 mutation')
    }
}
const state = {
    a: 1,
    b: 1
}
const getters = {
    computedA() {
        return 2
    },
    computedB() {
        return 2
    }
}

export default new Vuex.Store({
    actions, mutations, state, getters
})