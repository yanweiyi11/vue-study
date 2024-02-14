<template>
    <div class="header">
        <textarea v-model="desc" cols="105" placeholder="请输入BUG的描述信息" rows="4"></textarea>
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
        methods: {
            saveBug() {
                if (!this.desc.trim()) return
                let bugObj = {id: Date.now(), desc: this.desc, resolved: false}
                this.$emit('saveBugCallback', bugObj)
                this.desc = ''
            }
        }
    }
</script>

<style scoped>
    /* header */
    .header {
        margin-bottom: 20px;
        margin-top: 20px;
    }
</style>