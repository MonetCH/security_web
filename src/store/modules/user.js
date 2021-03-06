import { getToken, setToken, removeToken } from '@/utils/auth'
import router, { resetRouter } from '@/router'
import Vue from 'vue'

const state = {
  token: getToken(),
  name: '',
  avatar: '',
  introduction: '',
  roles: []
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  }
}

const actions = {
  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      commit('SET_ROLES', [])
      removeToken()
      resolve()
    })
  },

  // dynamically modify permissions
  changeRoles({ commit, dispatch }, role) {
    return new Promise(async resolve => {
      const token = role + '-token'

      commit('SET_TOKEN', token)
      setToken(token)

      const { roles } = await dispatch('getInfo')

      resetRouter()

      // generate accessible routes map based on roles
      const accessRoutes = await dispatch('permission/generateRoutes', roles, { root: true })

      // dynamically add accessible routes
      router.addRoutes(accessRoutes)

      // reset visited views and cached views
      dispatch('tagsView/delAllViews', null, { root: true })

      resolve()
    })
  },

  // keycloakLogin
  keycloakLogin({ commit }, accessToken) {
    return new Promise((resolve, reject) => {
      commit('SET_TOKEN', accessToken)
      setToken(accessToken)
      resolve()
    })
  },

  // get user info from keycloak
  getKeycloakInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      if (!Vue.prototype.$keycloak) {
        reject('keycloak not init')
      }

      if (!Vue.prototype.$keycloak.authenticated) {
        reject('Verification failed, please Login again.')
      }

      const roles = Vue.prototype.$keycloak.realmAccess.roles
      const name = Vue.prototype.$keycloak.idTokenParsed.preferred_username
      const avatar = Vue.prototype.$keycloak.idTokenParsed.avatar
      const introduction = Vue.prototype.$keycloak.idTokenParsed.introduction

      // roles must be a non-empty array
      if (!roles || roles.length <= 0) {
        reject('getKeycloakInfo: roles must be a non-null array!')
      }

      // you can also use the method loadUserProfile() to get user attributes
      // Vue.prototype.$keycloak.loadUserProfile().then(profile => {
      //   let avatar = profile.attributes.avatar[0]
      //   let introduction = profile.attributes.introduction[0]
      // })

      const data = {
        roles,
        name,
        avatar,
        introduction
      }

      commit('SET_ROLES', roles)
      commit('SET_NAME', name)
      commit('SET_AVATAR', avatar)
      commit('SET_INTRODUCTION', introduction)
      resolve(data)
    })
  },

  // keycloakLogout
  keycloakLogout({ commit, state }) {
    return new Promise((resolve, reject) => {
      Vue.prototype.$keycloak.logout().then(() => {
        commit('SET_TOKEN', '')
        commit('SET_ROLES', [])
        removeToken()
        resetRouter()

        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
