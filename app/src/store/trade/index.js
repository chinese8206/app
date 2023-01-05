import { reqUserAddress,reqUserTrade } from "@/api";

const state = {
    address:[],
    tradeInfo:{}
};
const mutations = {
    USERADDRESS(state,address){
        state.address = address
    },
    USERTRADEINFO(state,tradeInfo){
        state.tradeInfo = tradeInfo
    }
}
const actions = {
    async userAddress({ commit }) {
        let result = await reqUserAddress()
        if (result.code == 200) {
            commit('USERADDRESS',result.data)
        }
    },
    async userTradeInfo({ commit }) {
        let result = await reqUserTrade()
        if (result.code == 200) {
            commit('USERTRADEINFO',result.data)
        }
    },
}
const getters = {}

export default {
    state,
    mutations,
    actions,
    getters
}