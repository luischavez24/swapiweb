import { SET_TITLE } from '../util/mutations-types'
import { CHARGE_CURRENT_PAGE_DATA } from '../util/actions-types'

export const state = () => ({
  title: ''
})

export const getters = {

}

export const mutations = {
  [SET_TITLE](state, title) {
    state.title = title;
  }
}

export const actions = {
  [CHARGE_CURRENT_PAGE_DATA]({ commit }, { title }){
    commit('setTitle', title);
  }
}