<script>
    export default {
        name: "A",
        methods: {
            doA1() {
                this.$store.dispatch('doA1')
            },
            doA2() {
                this.$store.commit('doA2')
            }
        }
    }
</script>

<template>
    <div>
        <h1>A组件</h1>
        <button @click="doA1">doA1</button>
        <button @click="doA2">doA2</button>
        <h3>state: {{ $store.state.a }}</h3>
        <h3>getter: {{ $store.getters.computedA }}</h3>
    </div>
</template>
