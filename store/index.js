export const state = () => ({
  title: ''
})

export const getters = {

}

export const mutations = {
  setTitle(state, title) {
    state.title = title;
  }
}

export const actions = {
  chargeCurrentPageData({ commit }, { title }){
    commit('setTitle', title);
  }
}