<script>
    export default {
        name: "HeBei",
        data() {
            return {
                sjz: ['长安区', '裕华区', '新华区'],
                hd: ['邯山区', '复兴区', '丛台区']
            }
        },
        mounted() {
            // 挂载完毕之后，创建一个定时器，每隔1秒执行一次
            this.timer = setInterval(() => {
                console.log('@-定时器执行了-@')
            }, 1000)
        },
        beforeDestroy() {
            console.log('HeBei beforeDestroy')
            // 删除定时器
            // clearInterval(this.timer)
        },
        /*
           总结：
            普通组件生命周期钩子：
             共有8个基本生命周期钩子加上Vue.nextTick(callback)。
             Vue.nextTick(callback)确保在下一次DOM更新循环结束后执行回调。

           路由组件特有生命周期钩子：
            在普通组件基础上，路由组件额外具有两个钩子：activated和deactivated。
            因此，路由组件总共有11个生命周期钩子。
         */
        activated() {
            console.log('activated')
        },
        deactivated() {
            console.log('deactivated')
            // 删除定时器
            clearInterval(this.timer)
        },
        methods: {
            goSjz() {
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
            goHd() {
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
                    <input type="checkbox">
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
                    <input type="checkbox">
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

                <li><input type="checkbox">唐山</li>
                <li><input type="checkbox">保定</li>
            </ul>
        </div>
        <router-view></router-view>
    </div>
</template>