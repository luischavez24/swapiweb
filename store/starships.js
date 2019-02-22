import { SET_STARSHIPS } from '../util/mutations-types'
import { FETCH_STARSHIPS } from '../util/actions-types'

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
  [SET_STARSHIPS](state, starships) {
    state.starships = starships;
  }
}

export const actions = {
  async [FETCH_STARSHIPS] ({ commit }, { page }) {
    commit('setStarships', await this.$starships.getStarships(page || 1))
  }
}