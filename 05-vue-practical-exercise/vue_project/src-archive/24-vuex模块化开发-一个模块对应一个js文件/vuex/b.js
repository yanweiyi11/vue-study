// b模块
export default {
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
