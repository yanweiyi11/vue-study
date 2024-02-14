<template>
    <div>
        <button @click="triggerEvent1">触发event1事件</button>
        <button @click="triggerEvent2">触发event2事件</button>
        <button @click="unbinding">解绑事件</button>
        <button @click="goodbye">再见</button>

        <Vip></Vip>
    </div>
</template>

<script>
    import Vip from '@/Vip.vue'

    export default {
        name: 'User',
        data() {
            return {
                name: '张三',
                age: 20,
                gender: '男',
            }
        },
        components: {Vip},
        methods: {
            triggerEvent1() {
                // 使用$emit方法触发event1事件，并传递数据给事件绑定的回调函数
                // 在这里，this表示当前的组件实例（vc）
                this.$emit('event1', this.name, this.age, this.gender)
            },
            triggerEvent2() {
                // 使用$emit方法触发event1事件，并传递数据给事件绑定的回调函数
                // 在这里，this表示当前的组件实例（vc）
                this.$emit('event2')
            },
            goodbye() {
                this.$destroy()
            },
            // 解绑事件
            unbinding() {
                // 仅解绑this指向的这个组件实例上的event1事件
                // this.$off('event1')
                // this.$off(['event1', 'event2'])
                this.$off()
            }
        }
    };
</script>