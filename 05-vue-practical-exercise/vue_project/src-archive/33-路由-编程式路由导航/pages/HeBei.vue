<script>
    export default {
        name: "HeBei",
        data() {
            return {
                sjz: ['长安区', '裕华区', '新华区'],
                hd: ['邯山区', '复兴区', '丛台区']
            }
        },
        methods: {
            // 导航到石家庄路由组件
            goSjz() {
                // 使用编程式路由导航进行组件切换
                // 获取路由器对象（非路由对象）
                // this.$route 用于获取路由对象
                // this.$router 用于获取整个项目的路由器对象
                // push模式下，路由导航会返回一个Promise对象
                // 应当提供两个回调函数以处理Promise的成功和失败情况
                // 未提供回调函数将导致错误，解决办法是在参数中提供这两个函数
                this.$router.push({
                    name: 'shi',
                    params: {
                        a1: this.sjz[0],
                        a2: this.sjz[1],
                        a3: this.sjz[2],
                    }
                }, () => {
                }, () => {
                })
            },
            // 导航到邯郸路由组件
            goHd() {
                // replace模式下的路由导航
                this.$router.replace({
                    name: 'han',
                    params: {
                        a1: this.hd[0],
                        a2: this.hd[1],
                        a3: this.hd[2],
                    }
                }, () => {
                }, () => {
                })
            }
        }
    }
</script>

<template>
    <div>
        <div>
            <h2>市</h2>
            <ul>
                <li>
                    <!--声明式的路由导航，只适合超链接-->
                    <router-link :replace="true" :to="{
                        name: 'shi',
                        params: {
                            a1: sjz[0],
                            a2: sjz[1],
                            a3: sjz[2],
                        }
                    }" active-class="selected">石家庄
                    </router-link>
                    <button @click="goSjz">石家庄</button>
                </li>
                <li>
                    <router-link replace :to="{
                        name: 'han',
                        params: {
                            a1: hd[0],
                            a2: hd[1],
                            a3: hd[2],
                        }
                    }" active-class="selected">邯郸
                    </router-link>
                    <button @click="goHd">邯郸</button>
                </li>

                <li>唐山</li>
                <li>保定</li>
            </ul>
        </div>
        <!--区组件-->
        <router-view></router-view>
    </div>
</template>