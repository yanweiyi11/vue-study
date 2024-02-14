<script>
    export default {
        name: "City",
        props: ['a1', 'a2', 'a3'],
        // 1.代码写在哪里？局部路由守卫之component守卫，代码是写在component当中的（写到组件当中的 Xxx.vue）
        // 2.以下两个方法的执行时机：
        //     beforeRouteEnter：进入路由组件之前执行
        //     beforeRouteLeave：离开路由组件之前执行
        // 3.普通组件不会触发，必须是路由组件才会触发
        beforeRouteEnter(to, from, next) {
            console.log(`beforeRouteEnter ${to.meta.title}`)
            next()
        },
        beforeRouteLeave(to, from, next) {
            console.log(`beforeRouteLeave ${from.meta.title}`)
            next()
        },
    }
</script>

<template>
    <div>
        <h2>区</h2>
        <ul>
            <li>{{ a1 }}</li>
            <li>{{ a2 }}</li>
            <li>{{ a3 }}</li>
        </ul>
    </div>
</template>

<style scoped>

</style>