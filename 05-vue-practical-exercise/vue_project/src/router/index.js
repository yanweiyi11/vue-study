import VueRouter from "vue-router";
import HeBei from "@/pages/HeBei.vue";
import HeNan from "@/pages/HeNan.vue";
import City from "@/pages/City.vue";

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            name: 'bei',
            path: '/hebei',
            component: HeBei,
            meta: {title: '河北省'},
            children: [
                {
                    name: 'shi',
                    path: 'sjz/:a1/:a2/:a3',
                    component: City,
                    props: true,
                    // meta字段用于定义路由的元信息，isAuth为true表示此路由需要鉴权
                    meta: {isAuth: true, title: '石家庄'},
                    // 1.这个局部路由守卫之path守卫，代码写到哪里？写道route对象中
                    // 2.beforeEnter本身就是一个函数，参数上没有回调函数了
                    // 3.参数对于beforeEnter来说，参数仍然有3个：to、from、next
                    // 4.beforeEnter什么时候被调用？进入'shi'这个路由前被调用
                    beforeEnter(to, from, next) {
                        // let loginName = 'zs' // 拦截
                        let loginName = 'admin' // 通过
                        if (loginName === 'admin') {
                            next()
                        } else {
                            alert('没有权限')
                        }
                    }
                    // 注意：没有afterEnter这一说
                },
                {
                    name: 'han',
                    path: 'hd/:a1/:a2/:a3',
                    component: City,
                    props: true,
                    // 同上，此路由也需要鉴权
                    meta: {isAuth: true, title: '邯郸'}
                },
            ]
        },
        {
            name: 'nan',
            path: '/henan',
            component: HeNan,
            meta: {title: '河南省'}
        }
    ],
})

// 全局前置路由守卫
// 1.代码写到哪里？在创建好router之后，以及暴露router之前
// 2.beforeEach中的callback什么时候被调用呢？在初始化之前执行一次，以后每一次在切换任意路由组件之前都会被调用
// 3.callback可以是普通函数也可以是箭头函数
// 4.callback函数有3个参数：to、from、next
// 5.from：是一个路由对象，表示从哪来（从哪个路由来），起点
// 6.to：也是一个路由对象，表示到哪去，终点
// 7.next：这是一个函数，调用这个函数之后，表示放行，可以继续向下走
// 8.给路由对象添加自定义属性的话，需要在路由对象的meta（路由元）中定义。
/* router.beforeEach((to, from, next) => {
    // 假设当前登录的用户是：
    let loginName = 'zs' // 拦截
    // let loginName = 'admin' // 通过
    // 目前来说只有shi和han这两个路由需要鉴权
    // 如果当前项目中需要鉴权的路由比较多，这里的判断代码会比较冗余
    // if (to.name === 'shi' || to.name === 'han') {
    // 使用自定义属性并将自定义属性设置为true来解决，不需要鉴权的属性就不需要添加这个自定义属性
    // 因为不添加就是undefined，undefined转为boolean类型就是false了
    if (to.meta.isAuth) {
        if (loginName === 'admin') {
            // 有权限的时候，再去修改title
            // document.title = to.meta.title
            // 放行
            next()
        } else {
            alert('没有权限')
        }
    } else {
        // document.title = to.meta.title
        // 放行
        next()
    }
}); */

// 全局后置路由守卫
// 1.代码写到哪里？在创建router对象之后，暴露router对象之前
// 2.afterEach中的回调函数什么时候执行？初始化的时候执行一次，以后每一次切换完成任意一个路由组件之后被调用
// 3.这个回调函数有2个参数：to、from
// 4.这个回调函数没有next参数，因为没有必要了
router.afterEach((to, from) => {
    document.title = to.meta.title || '首页'
})

export default router