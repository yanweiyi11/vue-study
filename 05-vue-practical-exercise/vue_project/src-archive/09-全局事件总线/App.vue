<template>
    <div>
        <!--
            1. 关于内置事件的实现步骤：
                第一步：提供事件源，如按钮。
                第二步：给事件源绑定事件，可使用v-on指令或@符号。
                第三步：编写回调函数，将回调函数与事件进行绑定。
                第四步：等待事件的触发，一旦事件触发，则执行相应的回调函数。

            2. 关于组件的自定义事件实现步骤：
                第一步：提供事件源，通常是一个组件。
                第二步：给事件源绑定自定义事件，使用v-on指令或@符号。
                第三步：编写回调函数，将回调函数与事件进行绑定。
                第四步：等待事件的触发，一旦事件触发，则执行相应的回调函数。对于组件自定义事件来说，要想让事件发生，需要在事件源组件中执行一段代码来触发事件。

            3. 总结：到目前为止，父子组件之间通信有两种方式：
                父传子：通过props进行数据传递。
                子传父：
                    第一种方式：在父组件中定义一个方法，将方法传递给子组件，然后在子组件中调用父组件传递的方法，从而向父组件传递数据。这种方式较少使用。
                    第二种方式：使用组件的自定义事件，在父组件中绑定事件，在子组件中触发事件，从而向父组件传递数据。
        -->
        <button @click="hello">内置事件的实现步骤</button>

        <!--给User组件绑定一个自定义的事件-->
        <User @event1="doSome" @event2="doOther"></User>

        <!--准备一个组件-->
        <User ref="user"></User>
    </div>
</template>

<script>
    import User from '@/components/User.vue'

    export default {
        name: 'App',
        mounted() {
            // 绑定事件
            this.$bus.$on('eventx', this.test)

            // 给具有ref="user"的组件绑定event1事件，并且给event1事件绑定一个回调函数：doSome
            this.$refs.user.$on('event1', this.doSome);

            // 如果回调函数是普通函数：函数体当中的this是User组件实例，不是App组件实例。
            /* this.$refs.user.$on('event1', function () {
                console.log(this);
            }) */

            // 如果回调函数是箭头函数：箭头函数没有this，它会找离它最近的this，也就是当前组件的this（App）
            /* this.$refs.user.$on('event1', () => {
                console.log(this);
            }) */

            // 给具有ref="user"的组件绑定event2事件，并且给event2事件绑定一个回调函数：doOther
            this.$refs.user.$on('event2', this.doOther);

            // 使用$once确保事件只触发一次
            // this.$refs.user.$once('event1', this.doSome);
        },
        methods: {
            hello() {
                console.log('hello')
            },
            /* doSome(name, age, gender) {
                console.log('doSome:', name, age, gender)
            } */
            // ES6的语法，这个params可以看作是一个数组，以数组的形式接受多个参数。
            doSome(name, ...params) {
                console.log('doSome:', name, params)
            },
            doOther() {
                console.log('doOther')
            },
            test(name) {
                console.log('test:', name)
            }
        },
        components: {User},
    };
</script>