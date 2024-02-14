import VueRouter from "vue-router";
import HeBei from "@/pages/HeBei.vue";
import HeNan from "@/pages/HeNan.vue";
import City from "@/pages/City.vue";

const router = new VueRouter({
    routes: [
        {
            path: '/hebei',
            component: HeBei,
            children: [
                {
                    name: 'shi',
                    path: 'sjz/:a1/:a2/:a3',
                    component: City,
                    
                    // props的对象式写法（写死的）
                    /* props: {
                        a1: '张三',
                        a2: '李四',
                        a3: '王五'
                    } */

                    // props的函数式写法
                    /* props($route) { // $route将来会被自动传过来，它代表了当前的路由对象，变量名随意
                        return {
                            a1: $route.params.a1,
                            a2: $route.params.a2,
                            a3: $route.params.a3
                        }
                    } */

                    // 这种方式只支持params方式的传参，不支持query方式
                    // 将params对象直接转换成props对象，内部直接转换，不需要我们负责
                    props: true
                },
                {
                    name: 'han',
                    path: 'hd/:a1/:a2/:a3',
                    component: City,
                    /* props(t) {
                        return {
                            a1: t.params.a1,
                            a2: t.params.a2,
                            a3: t.params.a3
                        }
                    } */
                    props: true
                },
            ]
        },
        {
            path: '/henan',
            component: HeNan,
        }
    ]
})

export default router