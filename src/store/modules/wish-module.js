import { wishService } from '../../service/wishes.service'
export default {
  state: {
    wishes: [],
  },
  getters: {
    wishesForDisplay(state) {
      return state.wishes
    },
  },
  mutations: {
    setWishes(state, { wishes }) {
      state.wishes = wishes
    },
    removeWish(state, { id }) {
      const idx = state.wishes.findIndex((wish) => wish._id === id)
      state.wishes.splice(idx, 1)
    },
  },
  actions: {
    async loadWishes({ commit }) {
      try {
        const wishes = await wishService.query()
        console.log('storeWishes', wishes)
        commit({ type: 'setWishes', wishes })
      } catch (err) {
        console.log(err)
      }
    },
    async removeWish({ commit }, { id }) {
      try {
        await wishService.remove(id)
        commit({ type: 'removeWish', id })
      } catch (err) {
        console.log(err)
      }
    },
  },
}
