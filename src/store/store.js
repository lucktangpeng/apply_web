import Vue from 'vue'
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        stat:"ni s zhu"
    },
    mutations: {
      increment (state) {
        state.count++
      }
    }
  })