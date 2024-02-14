<script>
    export default {
        name: "City",
        mounted() {
            console.log(this.$route)
        }
    }
</script>

<template>
    <div>
        <h2>区</h2>
        <ul>
            <!--<li>{{ $route.params.a1 }}</li>
            <li>{{ $route.params.a2 }}</li>
            <li>{{ $route.params.a3 }}</li>-->
            
            <li v-for="(value, name) in $route.params" :key="name">{{ value }}</li>
        </ul>
    </div>
</template>

<style scoped>

</style>