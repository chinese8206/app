import { getBanner } from '@/api'
const state = {
    banner:[],
};
const mutations = {
    GETBANNER(state,banner){
        state.banner= banner
    }
};
const actions = {
    async getBanner({commit}){
        let result = await getBanner();
        if(result.code === 200 ){
            commit('GETBANNER',result.data)
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
