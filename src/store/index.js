import Vue from "vue";
import Vuex from "vuex";
// 使用vuex
Vue.use(Vuex);
// 导入模块
import state from "./state";
import mutations from "./mutations";
import actions from "./actions";

const store = new Vuex.Store({
    state,
    mutations,
    actions,
})
export default store;