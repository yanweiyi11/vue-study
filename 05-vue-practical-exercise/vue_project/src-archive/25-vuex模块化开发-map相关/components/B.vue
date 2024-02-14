<script>
    import {mapActions, mapGetters, mapMutations, mapState} from "vuex";

    export default {
        name: "B",
        computed: {
            ...mapState('bModule', ['b', 'bugList']),
            ...mapGetters('bModule', ['computedB'])
        },
        methods: {
            ...mapActions('bModule', ['doB1', 'displayBugs']),
            ...mapMutations('bModule', ['doB2'])
        }
    }
</script>

<template>
    <div>
        <h1>A组件</h1>
        <button @click="doB1">doB1</button>
        <button @click="doB2">doB2</button>
        <h3>state: {{ b }}</h3>
        <h3>getter: {{ computedB }}</h3>
        <button @click="displayBugs">现实bug列表信息</button>
        <ul>
            <li v-for="bug in bugList" :key="bug.id">{{ bug.desc }}</li>
        </ul>
    </div>
</template>
