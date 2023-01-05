import { reqGetCode, reqUserRegister, reqUserLogin, reqGetUserInfo, reqCheckOut } from "@/api";

const state = {
    verification: '',
    token: localStorage.getItem("TOKEN"),
    userInfo: {}
};
const mutations = {
    GETCODE(state, verification) {
        state.verification = verification
    },
    USERLOGIN(state, token) {
        state.token = token
    },
    USERINFO(state, userInfo) {
        state.userInfo = userInfo
    },
    CLEARUSERINFO(state) {
        state.token = ''
        state.userInfo = {}
        localStorage.removeItem("TOKEN")
    }
}
const actions = {
    async getCode({ commit }, phone) {
        let result = await reqGetCode(phone)
        if (result.code == 200) {
            commit("GETCODE", result.data)
        }
    },
    async userRegister({ commit }, userData) {
        let result = await reqUserRegister(userData)
        if (result.code == 200) {
            return 'OK'
        } else {
            return Promise.reject(new Error("注册失败"))
        }
    },
    async userLogin({ commit }, userData) {
        let result = await reqUserLogin(userData)
        if (result.code == 200) {
            commit('USERLOGIN', result.data.token)
            localStorage.setItem('TOKEN', result.data.token)
            return "ok"
        } else {
            return Promise.reject(new Error("登录失败"))
        }
    },
    async userInfo({ commit }) {
        let result = await reqGetUserInfo()
        if (result.code == 200) {
            commit("USERINFO", result.data)
        }
    },
    async userCheckOut({ commit }) {
        let result = await reqCheckOut()
        if (result.code == 200) {
            commit("CLEARUSERINFO")
            return "ok"
        } else {
            return Promise.reject(new Error("退出失败"))
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