<template>
    <div class="header">
        <textarea cols="105" placeholder="请输入BUG的描述信息" rows="4" v-model:is="desc"></textarea>
        <br>
        <button class="small green button" @click="saveBug">保存</button>
    </div>
</template>

<script>
    export default {
        name: 'BugHeader',
        data() {
            return {
                desc: ''
            }
        },
        props: ['saveBugCallback'],
        methods: {
            saveBug() {
                if (!this.desc.trim()) return
                // 创建对象
                let bugObj = {id: Date.now(), desc: this.desc, resolved: false}
                // 添加到数据列表当中
                this.saveBugCallback(bugObj)
                // 清空文本域
                this.desc = ''
            }
        }
    }
</script>

<style scoped>
    .header {
        margin-bottom: 20px;
        margin-top: 20px;
    }
</style>