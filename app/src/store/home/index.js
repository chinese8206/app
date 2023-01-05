import { getBaseCategoryList } from '@/api'
const state = {
    categorylist:[],
};
const mutations = {
    CATEGORYLIST(state,categorylist){
        state.categorylist= categorylist
    }
};
const actions = {
    async getCategoryList({commit}){
        let result = await getBaseCategoryList();
        if(result.code === 200 ){
            commit('CATEGORYLIST',result.data)
        }
    }
};
const getters = {};

export default {
    state,
    mutations,
    actions,
    getters
}
