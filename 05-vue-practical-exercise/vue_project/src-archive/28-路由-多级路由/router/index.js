import VueRouter from "vue-router";
import HeBei from "@/pages/HeBei.vue";
import HeNan from "@/pages/HeNan.vue";
import ShiJiaZhuang from "@/pages/ShiJiaZhuang.vue";
import HanDan from "@/pages/HanDan.vue";

const router = new VueRouter({
    routes: [
        {
            path: '/hebei',
            component: HeBei,
            // 子路由列表
            children: [
                {
                    path: 'shijiazhuang', // 对于子路由来说，path中的'/'系统会自动添加
                    component: ShiJiaZhuang
                },
                {
                    path: 'handan',
                    component: HanDan
                }
            ]
        },
        {
            path: '/henan',
            component: HeNan,
        }
    ]
})

export default router