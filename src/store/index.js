import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rawData: [],
    numofDate: [],
    categorieData: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
    data:[30, 40, 45, 50, 49, 60, 70, 91],
  },
  mutations: {
    rawData(state, data){
      state.rawData = data
    },
    numofDate(state, data){
      state.numofDate = data
    },
    categorieData(state, data){
      state.categorieData = data
    },
    data(state, data){
      state.data = data
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
    categorieData(state){
      return state.categorieData
    },
    data(state){
      return state.data
    },
  },
  modules: {
  }
})
