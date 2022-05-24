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


    },
    mutations: { // 用来修改state和getters里面的数据
        // 改变isLogin登录标识符
        changeIsLogin(state, flag) {

            if (flag) {
                state.isLogin = true
                console.log("flag" + flag);
            } else
                state.isLogin = false
            // console.log("flag" + flag);

        },
        // 改变isHome的值来达到动态显示
        changeIsHome(state) {
            if (!state.isHome) {
                state.isHome = !state.isHome
            }
            // console.log(object);
        },
        IsHomeFalse(state) {
            if (state.isHome) {
                state.isHome = !state.isHome
            }
        },



        // 添加商品到购物车中
        pushProductToCart(state, value) {

            state.cartList.push(value);
        },


        // 用于清空购物车
        // setCartItems(state, { items }) {
        //     state.items = items
        // },

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

    },
    getters: { // 相当于计算属性


        // 获取购物车中商品的数量
        // itemsCount: (state) => {
        //     return state.items.length;
        // }
    },
    modules: {// 拆分模块
    }
})
