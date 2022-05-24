import Vue from 'vue';

import Vuex from 'vuex';

Vue.use(Vuex)
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

        // 存放数据库的用户购物车信息
        dbCartList: [],

    },
    mutations: { // 用来修改state和getters里面的数据
        // 用户退出登录，清空购物车
        clearCart(state) {
            state.cartList = []
            state.allPrice = ''
        },

        // 存储数据库用户购物车信息到dbCartList
        saveDbCart(state, value) {
            state.cartList = state.cartList.concat(value)
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
    }
})
