<template>
    <div>
        <h1 ref="h1">{{ msg }}</h1>

        <!-- 在 App 这个父组件中，找到子组件 Car，然后给 Car 这个子组件传数据，通过属性的形式传数据 -->
        <Car brand="宝马X5" color="黑色" :price="10"></Car>
        <hr>
        <Car brand="比亚迪汉" color="白色" :price="20"></Car>
    </div>
</template>

<script>
    import Car from '@/components/Car.vue'

    export default {
        name: 'App',
        data() {
            return {
                msg: '汽车信息'
            };
        },
        // 注册组件
        components: {Car},
    };
</script>
