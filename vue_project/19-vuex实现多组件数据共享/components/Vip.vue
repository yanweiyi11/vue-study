<script>
    export default {
        name: "Vip",
        data() {
            return {
                vipname: '',
            }
        },
        methods: {
            saveVip() {
                this.$store.dispatch('saveVip', {id: Date.now(), name: this.vipname})
            }
        }
    }
</script>

<template>
    <div>
        <h1>会员列表</h1>
        <input v-model="vipname" type="text">
        <button @click="saveVip">保存会员</button>
        <ul>
            <li v-for="vip in $store.state.vips" :key="vip.id">会员名：{{ vip.name }}</li>
        </ul>
        <h3>当前用户数量：{{ $store.state.users.length }}</h3>
        <h3>当前会员数量：{{ $store.state.vips.length }}</h3>
    </div>
</template>
