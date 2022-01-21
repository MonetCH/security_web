// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import store from './store'
import router from './router';
import Cookies from 'js-cookie'

import Element from 'element-ui'
import './styles/element-variables.scss'
import enLang from 'element-ui/lib/locale/lang/en'// 如果使用中文语言包请默认支持，无需额外引入，请删除该依赖

import '@/styles/index.scss' // global css


import VueAxios from 'vue-axios'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueSidebarMenu from 'vue-sidebar-menu'

import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

import Keycloak from 'keycloak-js'
import './permission' // permission control
import './utils/error-log'

import * as filters from './filters' // global filters


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
 if (process.env.NODE_ENV === 'production') {
  // const { mockXHR } = require('../mock')
  // mockXHR()
}

Vue.use(Element, {
  size: Cookies.get('size') || 'medium', // set element-ui default size
  locale: enLang // 如果使用中文，无需设置，请删除
})

// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

// keycloak init options
const initOptions = {
  // url: process.env.VUE_APP_KEYCLOAK_OPTIONS_URL,
  // realm: process.env.VUE_APP_KEYCLOAK_OPTIONS_REALM,
  // clientId: process.env.VUE_APP_KEYCLOAK_OPTIONS_CLIENTID,
  // onLoad: process.env.VUE_APP_KEYCLOAK_OPTIONS_ONLOAD
  
  url: 'https://keycloak.ntut-smodist.tw/auth', realm: 'demo', clientId: 'security-webvue-keycloak', onLoad: 'login-required'
  // url: 'http://127.0.0.1:8080/auth', realm: 'demo', clientId: 'security-webvue-keycloak', onLoad: 'login-required'
}
// console.log('env'+process.env.VUE_APP_KEYCLOAK_OPTIONS_URL)

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
  // if(keycloak.logout() ){
  //   console.log("log out sucess");
  // }

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


/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })


