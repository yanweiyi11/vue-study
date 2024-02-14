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
                    <router-link :to="{
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