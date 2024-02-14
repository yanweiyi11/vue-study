<template>
    <div>
        <div>
            <h1>省份</h1>
            <ul>
                <!--如果使用的是vue的router方式，就不能使用超链接a标签了，需要使用vue-router提供的标签-->
                <!--router-link将来会被编译为a标签-->
                <li>
                    <router-link to="/hebei" active-class="selected">河北省</router-link>
                </li>
                <li>
                    <router-link to="/henan" active-class="selected">河南省</router-link>
                </li>
            </ul>
            <!--router-view：路由视图，起到一个占位的作用-->
            <router-view></router-view>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'App',
    }
</script>

<style lang="css">
    .selected {
        background-color: #00feba;
    }
</style>