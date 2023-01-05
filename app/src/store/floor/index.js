import { getFloor } from '@/api'
const state = {
    floor:[],
};
const mutations = {
    GETFLOOR(state,floor){
        state.floor= floor
    }
};
const actions = {
    async getFloor({commit}){
        let result = await getFloor();
        if(result.code === 200 ){
            commit('GETFLOOR',result.data)
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
