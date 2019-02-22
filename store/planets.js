export const state = () => ({
  planets: {
    results: [],
    count: 0
  }
})

export const getters = {
  qtyPages(state) {
    return Math.ceil(state.planets.count / 10)
  }
}

export const mutations = {
  setPlanets(state, planets) {
    state.planets = planets;
  }
}

export const actions = {
  async fetchPlanets ({ commit, error }, { page }) {
    
    commit('setPlanets', await this.$planets.getPlanets(page || 1))
  }
}