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
                // 子路由（路由对象）
                {
                    path: 'sjz',
                    component: City,
                },
                {
                    path: 'hd',
                    component: City,
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