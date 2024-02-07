<template>
    <div>
        <button @click="publishStory">发布故事会</button>
    </div>
</template>

<script>
    import pubsub from 'pubsub-js'

    export default {
        name: 'B',
        methods: {
            publishStory() {
                // 发布消息
                pubsub.publish('故事会202401', '测试内容1')
            }
        }
    }
</script>

