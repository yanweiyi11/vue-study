<script>
    import {mapGetters, mapState} from "vuex";

    export default {
        name: "Name",
        computed: {
            ...mapState(['uname']),
            // 以上代码生成的以下代码是简写形式的计算属性。（只有getter方法，没有setter方法）
            // 实际上生成的代码是:
            /* uname() {
                return this.$store.state.uname
            }, */

            // 写出如下代码这样是可以正常运行，但代码过于冗余，
            // 所以建议双向绑定时仍然使用$store.state.uname，
            // 如果只是单纯的读取数据，还是可以用 ...mapState(['uname']) -> {{ uname }} 的
            /* uname: {
                get() {
                    return this.$store.state.uname
                },
                set(val) {
                    this.$store.state.uname = val
                }
            }, */
            ...mapGetters(['reversedName'])
        },
    }
</script>

<template>
    <div>
        <input type="text" v-model="$store.state.uname">
        <br>
        <h3>用户名：{{ uname }}</h3>
        <h3>反转后：{{ reversedName }}</h3>
    </div>
</template>
