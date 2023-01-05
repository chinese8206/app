import Vue from 'vue'
import Vuex from 'vuex'
import home from './home'
import search from './search'
import banner from './banner'
import floor from './floor'
import detail from './detail'
import shopcart from './shopcart'
import user from './user'
import trade from './trade'

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        home,
        search,
        banner,
        floor,
        detail,
        shopcart,
        user,
        trade
    }
});

