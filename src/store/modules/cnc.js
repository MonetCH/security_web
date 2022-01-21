const state = {
    controlPanelTokenInterval: 0,
    controlPanelInterval: 0,
    cncTokenInterval: 0,
    cncInterval: 0,
}

const mutations = {
    SET_CONTROL_PANEL_INTERVAL: (s) => {
        state.controlPanelInterval = s.controlPanelInterval
    },
    SET_CONTROL_PANEL_TOKEN_INTERVAL: (s) => {
        state.controlPanelTokenInterval = s.controlPanelTokenInterval
    }
  }

const actions = {
    setControlPanelInterval({ commit }) {
        commit('SET_CONTROL_PANEL_INTERVAL')
    },
    setControlPanelTokenInterval({ commit }) {
        commit('SET_CONTROL_PANEL_TOKEN_INTERVAL')
    }
}


export default {
    state,
    mutations,
    actions
}