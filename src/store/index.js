import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rawData: [],
    numofDate: [],
  },
  mutations: {
    rawData(state, data){
      state.rawData = data
    },
    numofDate(state, data){
      state.numofDate = data
    },
  },
  actions: {
  },
  getters:{
    rawData(state){
      // console.log(state.rawData)
      return state.rawData
    },
    numofDate(state){
      return state.numofDate
    },
  },
  modules: {
  }
})
