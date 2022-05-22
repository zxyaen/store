import Vue from 'vue'
import VueRouter from 'vue-router'

// 懒加载
const Home = () => import('../components/home.vue')
const Login = () => import('../components/login.vue')
const Register = () =>import('../components/register.vue')
const ShopCar = () =>import('../components/shopCar.vue')

const Detail=()=>import('../components/detail.vue')

Vue.use(VueRouter)
const routes = [
    {
        // 指定一进入页面跳转到home页
        path: '',

        redirect: '/home'
    },
    // 对页面跳转的控制
    {
        path: '/home',
        // 指定的组件
        component: Home
    },
    {
        path: '/login',
        component: Login
    },
    {
        path:'/register',
        component:Register
    },
    {
        path:'/shopcar',
        component:ShopCar
    },
    //   {
    //     path: '/category',
    //     component: Category
    //   },
    //   {
    //     path: '/cart',
    //     component: Cart
    //   },
    //   {
    //     path: '/me',
    //     component: Me
    //   },
      // 跳转到详情页
      {
        // path:'/detail/:id',
        path:'/detail',
        component:Detail
      }
]
const router = new VueRouter({
    routes,
    // url模式
    mode: 'history'
})

export default router
