<script>
    // vuex插件提供的内置的mapState对象，它是负责state对象映射工作的一个对象（方法）
    import {mapActions, mapGetters, mapState} from "vuex";

    export default {
        name: "User",
        data() {
            return {
                username: '',
            }
        },
        /* mounted() {
            const x = mapState({users: 'users', vips: 'vips', uname: 'uname'});
            console.log(x) // {users: ƒ, vips: ƒ, uname: ƒ}
        }, */
        computed: {
            // 这是手动编写的，思考：格式比较固定，只要格式是固定的，就意味着这个代码是可以自动生成的
            /* users() {
                return this.$store.state.users
            },
            vips() {
                return this.$store.state.vips
            },
            uname() {
                return this.$store.state.uname
            } */

            // vuex可以借助mapState帮我们自动生成以上的代码
            // ...mapState({users: 'users', vips: 'vips', uname: 'uname'}) // 对象形式
            ...mapState(['users', 'vips', 'uname']),  // 数组形式（这种方式表示计算属性的名字和state中的属性名一致）

            ...mapGetters(['reversedName']) // 数组形式
        },
        methods: {
            /* saveUser() {
                // 下一个环节走action
                this.$store.dispatch('saveUser', this.username)
            }, */

            // ...mapActions({saveUser: 'saveUser'}), // 对象形式
            ...mapActions(['saveUser']) // 数组形式
        }
    }
</script>

<template>
    <div>
        <h1>用户列表</h1>
        <input v-model="username" type="text">
        <button @click="saveUser(username)">保存用户</button>
        <ul>
            <li v-for="user in users" :key="user.id">用户名：{{ user.name }}</li>
        </ul>
        <h3>当前用户数量：{{ users.length }}</h3>
        <h3>当前会员数量：{{ vips.length }}</h3>
        <h3>用户名：{{ uname }}</h3>
        <h3>反转后：{{ reversedName }}</h3>
    </div>
</template>
