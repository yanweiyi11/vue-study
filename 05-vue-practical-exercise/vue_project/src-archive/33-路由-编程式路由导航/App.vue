<template>
    <div>
        <MyHeader></MyHeader>
        <div>
            <h1>省</h1>
            <button @click="forward">前进</button>
            <button @click="back">后退</button>
            <button @click="forwardTwo">前进2步</button>
            <button @click="backTwo">后退2步</button>
            <ul>
                <!--如果使用的是vue的router方式，就不能使用超链接a标签了，需要使用vue-router提供的标签-->
                <!--router-link将来会被编译为a标签-->
                <li>
                    <router-link active-class="selected" to="/hebei">河北省</router-link>
                </li>
                <li>
                    <router-link active-class="selected" to="/henan">河南省</router-link>
                </li>
            </ul>
            <!--router-view：路由视图，起到一个占位的作用-->
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import MyHeader from "@/components/MyHeader.vue";

    export default {
        name: 'App',
        components: {MyHeader},
        methods: {
            forward() {
                this.$router.forward()
            },
            back() {
                this.$router.back()
            },
            forwardTwo() {
                this.$router.go(2)
            },
            backTwo() {
                this.$router.go(-2)
            }
        }
    }
</script>

<style lang="css">
    .selected {
        background-color: #00feba;
    }
</style>