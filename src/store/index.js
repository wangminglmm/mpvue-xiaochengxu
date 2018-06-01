import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
  count: 1,
  userinfo: {},
}
const getters = {
  count(state){
    return state.count
  },
  userinfo(state){
    return state.userinfo
  }
}
const mutations = {
  increase(state,payload){
    console.log('increase')
    state.count += payload
  },
  decrease(state,payload){
    state.count -= payload
  },
  setUserinfo(state,payload){
    state.userinfo = payload
  }
}
const store = new Vuex.Store({
  state,
  getters,
  mutations,
})

export default store