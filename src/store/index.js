import Vue from 'vue';

import Vuex from 'vuex';

Vue.use(Vuex)
export default new Vuex.Store({
    state: { // 存放数据 和data类似

        // 存放购物车数据
        cartList: [
            // id:1,
            // name = 'xxxxx',
            // price = 12,
            // buyNum = 3,
        ],

    },
    mutations: { // 用来修改state和getters里面的数据

        // addToCart(state, value) {
        //     state.cartList.push(value)
        // },


        // 添加商品到购物车中
        pushProductToCart(state, value) {
            // if (!quantity)
            //     quantity = 1;
            state.cartList.push(value);
        },

        // 增加商品数量
        // incrementItemQuantity(state, { id, quantity }) {
        //     let cartItem = state.items.find(item => item.id == id);
        //     cartItem.quantity += quantity;
        // },
        // 用于清空购物车
        // setCartItems(state, { items }) {
        //     state.items = items
        // },

        // 删除购物车中的产品
        deleteCartItem(state, id) {
            console.log("删除");
            // let index = state.cartList.findIndex(item => item.id === id);
            // if (index > -1)
            //     state.items.splice(index, 1);
        }
    },

    actions: { // vuex中用于发起异步请求
    },
    getters: { // 相当于计算属性
        // 计算购物车中所有商品的总价
        // cartTotalPrice: (state) => {
        //     return state.items.reduce((total, product) => {
        //         return total + product.price * product.quantity
        //     }, 0)
        // },
        // 计算购物车中单项商品的价格
        cartItemPrice: (state) => (id) => {
            if (state.items.length > 0) {
                const cartItem = state.items.find(item => item.id === id);
                if (cartItem) {
                    return cartItem.price * cartItem.quantity;
                }
            }
        },
        // 获取购物车中商品的数量
        // itemsCount: (state) => {
        //     return state.items.length;
        // }
    },
    modules: {// 拆分模块
    }
})
