import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex) 

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {
    incrementAsync ({ commit, state }) {
      const random = Math.random() * 2000
      setTimeout(() => {
        commit({
          type: 'increment',
          state
        })
      }, random)
    }
  },
})

