import { SET_PLANETS } from '../util/mutations-types'
import { FETCH_PLANETS } from '../util/actions-types'

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
  [SET_PLANETS](state, planets) {
    state.planets = planets;
  }
}

export const actions = {
  async [FETCH_PLANETS] ({ commit, error }, { page }) {
    
    commit('setPlanets', await this.$planets.getPlanets(page || 1))
  }
}