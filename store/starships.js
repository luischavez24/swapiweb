export const state = () => ({
  starships: {
    results: [],
    count: 0
  }
})

export const getters = {
  qtyPages(state) {
    return Math.ceil(state.starships.count / 10)
  }
}

export const mutations = {
  setStarships(state, starships) {
    state.starships = starships;
  }
}

export const actions = {
  async fetchStarships ({ commit }, { page }) {
    commit('setStarships', await this.$starships.getStarships(page || 1))
  }
}