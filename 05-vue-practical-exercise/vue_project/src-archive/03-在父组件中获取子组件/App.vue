<template>
    <div>
        <h1 ref="h1">{{ msg }}</h1>

        <!-- 在 App 这个父组件中，找到子组件 Car，然后给 Car 这个子组件传数据，通过属性的形式传数据 -->
        <Car brand="宝马X5" color="黑色" :price="10" ref="car1"></Car>
        <hr>
        <Car brand="比亚迪汉" color="白色" :price="20" ref="car2"></Car>
        <hr>
        <button @click="printCarInfo">打印汽车信息</button>
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
        methods: {
            printCarInfo() {
                // 获取子组件
                console.log(this.$refs.car1);
                console.log(this.$refs.car2);

                console.log(this.$refs.car1.brand);
                console.log(this.$refs.car1.color);
                console.log(this.$refs.car1.price);

                // 这个就不是组件了
                console.log(this.$refs.h1.innerText);
            }
        },
        // 注册组件
        components: {Car},
    };
</script>
