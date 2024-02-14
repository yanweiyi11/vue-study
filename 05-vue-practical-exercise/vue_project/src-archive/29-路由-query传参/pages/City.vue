<script>
    export default {
        name: "City",
        mounted() {
            // 所有的路由组件都有一个属性叫做 $route，通过这个属性可以获取到该路由组件关联的“路由对象”
            // 路由对象中有一个query属性，这个query属性可以接收query方式传递过来的数据
            console.log(this.$route);
        }
    }
</script>

<template>
    <div>
        <h2>区</h2>
        <ul>
            <!--<li>{{ $route.query.a1 }}</li>
            <li>{{ $route.query.a2 }}</li>
            <li>{{ $route.query.a3 }}</li>-->

            <!--(属性值，属性名) in 遍历对象-->
            <li v-for="(value, name) in $route.query" :key="name">{{ value }}</li>
        </ul>
    </div>
</template>

<style scoped>

</style>