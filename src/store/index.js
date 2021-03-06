import Vue from 'vue';

import Vuex from 'vuex';

// 借助插件实现vuex数据持久化
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
    storage: window.localStorage,
    reducer(state){
        return {
          // 只储存state中的count
          cartList: state.cartList
        }
      }
})

export default new Vuex.Store({
    state: { // 存放数据 和data类似

        // 存放购物车数据
        cartList: [],
        // 总价
        allPrice: null,
        // 控制搜索框只在主页显示
        isHome: false,
        // 是否登录
        isLogin: false,

        // 暂时存放数据库的用户购物车信息
        // dbCartList: [],

        // 购物车是否为第一次加载
        first: true,

        // 购物车结算弹窗是否显示
        isConfirm: false

    },
    mutations: { // 用来修改state和getters里面的数据
        // 改变isConfirm
        ChangeIsConfirm(state) {
            state.isConfirm = true
        },
        HiddenConfirm(state){
            state.isConfirm=false
        },

        // 点击复选框，更改done
        ChangeDone(state, id) {
            state.cartList.forEach((item) => {
                if (item.id === id) {
                    item.done = !item.done
                }
            });
        },
        ChangeAllDone(state, allDone) {
            state.cartList.forEach((item) => {
                if (allDone) {
                    item.done = false
                    return
                }
                item.done = true
            })
        },

        // 用户退出登录，清空购物车
        clearCart(state) {
            state.cartList = []
            state.allPrice = ''
        },

        // 存储数据库用户购物车信息到cartList
        saveDbCart(state, value) {
            state.cartList = state.cartList.concat(value)
        },

        changeFirst(state) {
            state.first = false
        },
        // 改变isLogin登录标识符
        changeIsLogin(state, flag) {

            if (flag) {
                state.isLogin = true
            } else
                state.isLogin = false
        },
        // 改变isHome的值来达到动态显示
        changeIsHome(state) {
            if (!state.isHome) {
                state.isHome = !state.isHome
            }
        },

        IsHomeFalse(state) {
            if (state.isHome) {
                state.isHome = !state.isHome
            }
        },



        // 添加商品到购物车中
        pushProductToCart(state, value) {
            state.cartList.push(value);
            console.log(value);
        },


        // 删除购物车中的产品
        deleteCartItem(state, id) {
            for (let i = 0; i < state.cartList.length; i++) {
                if (state.cartList[i].id === id) {
                    state.cartList.splice(i, 1)
                }
            }
        },

        // 计算购物车中所有商品的总价
        cartTotalPrice: (state) => {
            let p = 0
            for (let i = 0; i < state.cartList.length; i++) {
                p = p + state.cartList[i].buyNum * state.cartList[i].price
            }
            state.allPrice = p
        },

    },

    actions: { // vuex中用于发起异步请求
        warningNotification(context) {
            this._vm.$message({
                message: "请在登录后查看购物车",
                type: "warning",
            });
        },
    },
    getters: { // 相当于计算属性
        // 合并cartList和dbCartList
        // merge(state,value){
        //     state.cartList
        // }
    },
    modules: {// 拆分模块
    },
    plugins: [vuexLocal.plugin]
})
