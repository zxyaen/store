import Vue from 'vue'
import VueRouter from 'vue-router'

// 懒加载
const Home = () => import('views/home/home.vue')
const Login = () => import('views/login/login')
const Register = () => import('views/login/register.vue')
const ShopCar = () => import('views/shopCar/shopCar.vue')
const Detail = () => import('views/detail/detail.vue')
const Check = () => import('views/check/check.vue')
const MyHome = () => import('views/login/myHome')

Vue.use(VueRouter)
const routes = [
    {
        // 指定一进入页面跳转到home页
        path: '',
        // 将根/目录重定向到home
        redirect: '/home'
    },
    // 对页面跳转的控制
    {
        path: '/home',
        // 指定的组件
        name: 'home',
        component: Home
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Register
    },
    {
        path: '/shopcar',
        component: ShopCar,
        // 配置路由守卫
        beforeEnter: (to, from, next) => {
            if (router.app.$store.state.isLogin) {
                next()
            } else {
                console.log(router.app.$store.dispatch('warningNotification'))
                next("login")
            }
        }
    },
    {
        path: '/check',
        component: Check
    },
    // 跳转到详情页
    {
        path: '/detail/:id',
        name: 'Detail',
        component: Detail
    }, {
        path: '/myhome',
        component: MyHome,
    }
]
// 添加路由守卫
// router.beforeEach((to, from, next) => {
//     if (to.path === '/shopcar') return next();
//获取token
// const tokenStr = window.sessionStorage.getItem('token')
// if (!tokenStr) return next('/login')
// next()
// })

const router = new VueRouter({
    routes,
    // url模式
    mode: 'history'
})

export default router
