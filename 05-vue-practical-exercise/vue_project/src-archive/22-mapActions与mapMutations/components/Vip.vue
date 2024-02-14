<script>
    import {mapGetters, mapMutations, mapState} from "vuex";

    export default {
        name: "Vip",
        data() {
            return {
                vipname: '',
            }
        },
        computed: {
            ...mapState(['users', 'vips', 'uname']),
            ...mapGetters(['reversedName'])
        },
        methods: {
            /* saveVip() {
                // 下一个环节走mutation
                this.$store.commit('SAVE_VIP', this.vipname)
            } */

            // ...mapMutations({saveVip: 'SAVE_VIP'}) // 对象形式
            ...mapMutations(['SAVE_VIP']) // 数组形式
            // 上面的数组形式等同与下面的代码
            // ...mapMutations({SAVE_VIP: 'SAVE_VIP'})
        }
    }
</script>

<template>
    <div>
        <h1>会员列表</h1>
        <input v-model="vipname" type="text">
        <!--<button @click="saveVip(vipname)">保存会员</button>-->
        <button @click="SAVE_VIP(vipname)">保存会员</button>
        <ul>
            <li v-for="vip in vips" :key="vip.id">会员名：{{ vip.name }}</li>
        </ul>
        <h3>当前用户数量：{{ users.length }}</h3>
        <h3>当前会员数量：{{ vips.length }}</h3>
        <h3>用户名：{{ uname }}</h3>
        <h3>反转后：{{ reversedName }}</h3>
    </div>
</template>
