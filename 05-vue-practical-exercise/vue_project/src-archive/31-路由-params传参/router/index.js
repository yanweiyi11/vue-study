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
                },
                {
                    name: 'han',
                    path: 'hd/:a1/:a2/:a3',
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