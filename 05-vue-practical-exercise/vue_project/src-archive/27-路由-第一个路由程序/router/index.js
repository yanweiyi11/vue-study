import VueRouter from "vue-router";
import HeBei from "@/pages/HeBei.vue";
import HeNan from "@/pages/HeNan.vue";

// 创建路由器对象（在路由器对象中配置路由）
const router = new VueRouter({
    // 在这里配置所有的路由规则
    routes: [
        {
            // 只要路径检测到的是/hebei，就切换到HeBei组件
            path: '/hebei', // key
            component: HeBei, // value
        },
        {
            path: '/henan',
            component: HeNan,
        }
    ]
})

export default router