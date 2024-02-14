<script>
    export default {
        name: "City",
        props: ['a1', 'a2', 'a3']
        /* computed: {
            a1() {
                return this.$route.params.a1
            },
            a2() {
                return this.$route.params.a2
            },
            a3() {
                return this.$route.params.a3
            }
        } */
    }
</script>

<template>
    <div>
        <h2>区</h2>
        <ul>
            <li>{{ a1 }}</li>
            <li>{{ a2 }}</li>
            <li>{{ a3 }}</li>

            <!--<li>{{ $route.params.a1 }}</li>
            <li>{{ $route.params.a2 }}</li>
            <li>{{ $route.params.a3 }}</li>-->
        </ul>
    </div>
</template>

<style scoped>

</style>