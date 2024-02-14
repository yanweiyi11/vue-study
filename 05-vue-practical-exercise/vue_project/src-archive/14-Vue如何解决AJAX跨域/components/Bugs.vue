<template>
    <div>
        <button @click="getBugs">获取bug列表信息</button>
        <button @click="getUsers">获取User列表信息</button>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: 'Bugs',
        methods: {
            getBugs() {
                // 发送 AJAX 请求，访问：http://localhost:8000/vue/bugs
                // 当发送 AJAX 请求时，首先查找本地服务器中的 /vue/bugs 资源，
                // 如果未找到，则代理到指定的地址 proxy: 'http://localhost:8000' 查找相应资源。

                // axios.get('http://localhost:8000/vue/bugs').then(
                /* axios.get('http://localhost:8080/vue/bugs').then(
                        response => {
                            console.log(response.data);
                        },
                        error => {
                            console.log(error.message);
                        }
                ); */

                axios.get('/api/vue/bugs').then(
                        response => {
                            console.log(response.data);
                        },
                        error => {
                            console.log(error.message);
                        }
                );
            },
            getUsers() {
                axios.get('/abc/vue/users').then(
                        response => {
                            console.log(response.data);
                        },
                        error => {
                            console.log(error.message);
                        }
                );
            }
        }
    }
</script>