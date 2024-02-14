<script>
    export default {
        name: "HeBei",
        data() {
            return {
                sjz: ['长安区', '裕华区', '新华区'],
                hd: ['邯山区', '复兴区', '丛台区']
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
                    <!--params方式传参，字符串形式，写死的字符串-->
                    <!--<router-link active-class="selected" to="/hebei/sjz/裕华区/新华区/长安区">石家庄</router-link>-->

                    <!--params方式传参，字符串形式，拼写字符串-->
                    <!--<router-link active-class="selected" :to="`/hebei/sjz/${sjz[0]}/${sjz[1]}/${sjz[2]}`">石家庄</router-link>-->

                    <!--params方式传参，对象形式-->
                    <router-link :to="{
                        // 如果使用的是params方式传参，这里只能使用name，不能使用path
                        // path: '/hebei/sjz',
                        name: 'shi',
                        params: {
                            a1: sjz[0],
                            a2: sjz[1],
                            a3: sjz[2],
                        }
                    }" active-class="selected">石家庄
                    </router-link>
                </li>
                <li>
                    <!--<router-link active-class="selected" to="/hebei/hd/邯山区/丛台区/复兴区">邯郸</router-link>-->
                    <!--<router-link :to="`/hebei/hd/${hd[0]}/${hd[1]}/${hd[2]}`" active-class="selected">邯郸</router-link>-->
                    <router-link :to="{
                        name: 'han',
                        params: {
                            a1: hd[0],
                            a2: hd[1],
                            a3: hd[2],
                        }
                    }" active-class="selected">邯郸
                    </router-link>
                </li>

                <li>唐山</li>
                <li>保定</li>
            </ul>
        </div>
        <!--区组件-->
        <router-view></router-view>
    </div>
</template>