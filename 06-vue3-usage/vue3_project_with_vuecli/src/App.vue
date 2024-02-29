<template>
    <!--在vue3当中<template>标签中可以有多个根标签了-->
    <h1>Vue3</h1>
    <HelloWorld/>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'

    export default {
        name: 'App',
        components: {
            HelloWorld
        }
    }
</script>
