// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueAxios from 'vue-axios'
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

import Keycloak from 'keycloak-js'

import App from './App'
import axios from 'axios'
import store from './store'
import router from './router';
import Cookies from 'js-cookie'
import Element from 'element-ui'
import enLang from 'element-ui/lib/locale/lang/en'// 如果使用中文语言包请默认支持，无需额外引入，请删除该依赖

import './styles/element-variables.scss'
import '@/styles/index.scss' // global css

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import './permission' // permission control
import './utils/error-log'


Vue.use(VueSidebarMenu)
Vue.use(BootstrapVue)
Vue.use(VueAxios, axios)
require('bootstrap')
Vue.config.productionTip = false

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */

Vue.use(Element, {
  size: Cookies.get('size') || 'medium', // set element-ui default size
  locale: enLang // 如果使用中文，无需设置，请删除
})

Vue.config.productionTip = false

// keycloak init options
const initOptions = { 
  url: 'https://keycloak.ntut-smodist.tw/auth', realm: 'demo', clientId: 'security-webvue-keycloak', onLoad: 'login-required'
}

const keycloak = Keycloak(initOptions)

keycloak.init({ onLoad: initOptions.onLoad }).then(async authenticated => {
  if (!authenticated) {
    window.location.reload()
    return
  } else {
    Vue.prototype.$keycloak = keycloak
    await store.dispatch('user/keycloakLogin', keycloak.token)
    console.log('Authenticated', keycloak)
  }

  // 更新token
  setInterval(() => {
    keycloak.updateToken(70).then((refreshed) => {
      if (refreshed) {
        console.log('Token refreshed')
      } else {
        console.log('Token not refreshed, valid for ' +
          Math.round(keycloak.tokenParsed.exp + keycloak.timeSkew - new Date().getTime() / 1000) + ' seconds')
      }
    }).catch(error => {
      console.log('Failed to refresh token', error)
    })
  }, 60000)
  
  new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>',
    store,
    render: h => h(App)
  })
}).catch(error => {
  console.log('Authenticated Failed', error)
})

// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>',
//   store,
//   render: h => h(App)
// })