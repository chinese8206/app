import { getProductDetail, reqAddOrUpdateShopCart } from "@/api";
import { getUuid } from '@/utils/uuid_token'

const state = {
    productDetail: {},
    uuid_token: getUuid()
};
const mutations = {
    GETPRODUCTDETAIL(state, productDetail) {
        state.productDetail = productDetail
    },
};
const actions = {
    async getProductDetail({ commit }, skuid) {
        let result = await getProductDetail(skuid)
        if (result.code == 200) {
            commit("GETPRODUCTDETAIL", result.data)
        }
    },
    async AddOrUpdateShopCart({ commit }, { skuId, skuNum }) {
        let result = await reqAddOrUpdateShopCart(skuId, skuNum)
        if (result.code == 200) {
            return "OK"
        } else {
            return Promise.reject(new Error("加入购物车失败"))
        }
    }
};
const getters = {
    categoryView(state) {
        return state.productDetail.categoryView || {}
    },
    skuInfo(state) {
        return state.productDetail.skuInfo || {}
    },
    spuSaleAttrList(state) {
        return state.productDetail.spuSaleAttrList || []
    },
};

export default {
    state,
    mutations,
    actions,
    getters
}