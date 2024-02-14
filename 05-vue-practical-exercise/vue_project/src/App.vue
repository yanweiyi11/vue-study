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
                <li>
                    <router-link active-class="selected" to="/hebei">河北省</router-link>
                </li>
                <li>
                    <router-link active-class="selected" to="/henan">河南省</router-link>
                </li>
            </ul>
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
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