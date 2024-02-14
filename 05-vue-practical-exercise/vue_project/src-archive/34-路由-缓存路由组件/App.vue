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
            <!-- keep-alive标签用于保持路由组件状态，避免重复渲染 -->
            <!-- 将router-view包裹在keep-alive中，可以使所有子组件在路由切换时保持状态 -->
            <!-- <keep-alive>
                <router-view></router-view>
            </keep-alive> -->

            <!-- 使用include属性指定特定的组件在路由切换时保持状态 -->
            <!-- 例如，设置include="HeBei"时，只有HeBei组件的状态会被保持 -->
            <!-- <keep-alive include="HeBei">
                <router-view></router-view>
            </keep-alive> -->

            <!-- include属性可以使用数组形式，支持多个组件状态保持 -->
            <!-- 下面的代码示例中，HeBei和HeNan组件在路由切换时都将保持各自的状态 -->
            <keep-alive :include="['HeBei', 'HeNan']">
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