<template>
    <div>

    </div>
</template>

<script>
    import pubsub from 'pubsub-js'

    export default {
        name: 'A',
        mounted() {
            // A组件挂在完毕之后订阅消息
            // messageName: 消息的名字, message: 具体的消息（数据）

            /* this.pid = pubsub.subscribe('故事会202401', function (messageName, message) {
                console.log('messageName: ', messageName)
                console.log('message: ', message)
                console.log(this) // undefined
            }) */

            this.pid = pubsub.subscribe('故事会202401', (messageName, message) => {
                console.log('messageName: ', messageName)
                console.log('message: ', message)
                console.log(this) // VueComponent
            })
        },
        beforeDestroy() {
            // 当前组件实例销毁之前，要取消订阅的所有消息
            pubsub.unsubscribe(this.pid)
        }
    }
</script>

