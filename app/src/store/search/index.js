import { getProductList } from "@/api";

const state = {
    productList: {}
};
const mutations = {
    GETPRODUCT(state, productList) {
        state.productList = productList
    }
};
const actions = {
    async getProduct({ commit }, params = {}) {
        let result = await getProductList(params)
        if (result.code == 200) {
            commit("GETPRODUCT", result.data)
        }
    }
};
const getters = {
    goodsList(state) {
        return state.productList.goodsList || []
    },
    trademarkList(state) {
        return state.productList.trademarkList || []
    },
    attrsList(state) {
        return state.productList.attrsList || []
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}