<script>
    export default {
        name: "B",
        methods: {
            doB1() {
                this.$store.dispatch('bModule/doB1')
            },
            doB2() {
                this.$store.commit('bModule/doB2')
            }
        }
    }
</script>

<template>
    <div>
        <h1>A组件</h1>
        <button @click="doB1">doB1</button>
        <button @click="doB2">doB2</button>
        <h3>state: {{ $store.state.bModule.b }}</h3>
        <h3>getter: {{ $store.getters['bModule/computedB'] }}</h3>
    </div>
</template>
