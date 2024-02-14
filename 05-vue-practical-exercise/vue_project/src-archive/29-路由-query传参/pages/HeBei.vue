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
                <!--采用query方式传参，这里使用的是字符串拼接方式-->
                <!--<li>-->
                <!--    <router-link :to="`/hebei/city?a1=${sjz[0]}&a2=${sjz[1]}&a3=${sjz[2]}`" active-class="selected">石家庄-->
                <!--    </router-link>-->
                <!--</li>-->
                <!--<li>-->
                <!--    <router-link :to="`/hebei/city?a1=${hd[0]}&a2=${hd[1]}&a3=${hd[2]}`" active-class="selected">邯郸-->
                <!--    </router-link>-->
                <!--</li>-->

                <!--采用query方式传参，这可以还可以使用对象形式-->
                <li>
                    <router-link :to="{path: 'shi', query: {a1: sjz[0], a2: sjz[1], a3: sjz[2]}}"
                                 active-class="selected">石家庄
                    </router-link>
                </li>
                <li>
                    <router-link :to="{path: '/hebei/hd', query: {a1: hd[0], a2: hd[1], a3: hd[2]}}"
                                 active-class="selected">邯郸
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