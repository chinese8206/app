import { reqDeleteCart, reqGetShopCart, reqCheckCart } from "@/api";

const state = {
    shopCart: []
};
const mutations = {
    GETSHOPCART(state, shopCart) {
        state.shopCart = shopCart
    }
};
const actions = {
    async getShopCart({ commit }) {
        let result = await reqGetShopCart()
        if (result.code == 200) {
            commit("GETSHOPCART", result.data)
        }
    },
    async deleteCart({ commit }, skuId) {
        let result = await reqDeleteCart(skuId)
        if (result.code == 200) {
            return "OK"
        } else {
            return Promise.reject(new Error("删除购物车失败"))
        }
    },
    async checkCart({ commit }, { skuId, isChecked }) {
        let result = await reqCheckCart(skuId, isChecked)
        if (result.code == 200) {
            return "OK"
        } else {
            return Promise.reject(new Error("更新购物车状态失败"))
        }
    },
    deleteAll({dispatch,getters}){
        let promiseAll = [];
        getters.shopCart.cartInfoList.forEach(item => {
            if(item.isChecked){
                let promise = dispatch('deleteCart',item.skuId)
                promiseAll.push(promise)
            }
        });
        return Promise.all(promiseAll)
    },
    checkAll({dispatch,state},checkall){
        let checkAll = [];
        state.shopCart[0].cartInfoList.forEach(item => {
            let promise = dispatch('checkCart',{skuId:item.skuId,isChecked:checkall})
            checkAll.push(promise)
        });
        return Promise.all(checkAll)
    }
};
const getters = {
    shopCart(state) {
        return state.shopCart[0] || {}
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}