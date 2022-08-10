import { createStore } from 'vuex'
import wishModule from './modules/wish-module'

export const store = createStore({
  strict: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    wishModule,
  },
})
