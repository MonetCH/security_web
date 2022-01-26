import Vue from 'vue'
import Router from 'vue-router'
import Home from "../components/Home.vue"
import CncControlPanel from "../components/CncControlPanel.vue"
import CncControlPanel_2 from "../components/CncControlPanel_2.vue"
import CncControlPanel_3 from "../components/CncControlPanel_3.vue"
import laserComponent from "../components/laserProcess.vue"
import agv from "../components/agv.vue"
import log from "../components/Log.vue"

Vue.use(Router)

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */

export const constantRoutes = [
 ]

export const asyncRoutes = [
  {
    path: "/",
    name: "Root",
    component: Home
  },
  {
    path: '/cnccontrolpanel',
    component: CncControlPanel,
    alwaysShow: false,
    name: 'cnccontrolpanel',
    meta: {
      title: 'CNC control panel',
      roles: ['admin', 'cnc']
    }
  },
  {
    path: '/cnccontrolpanel_2',
    component: CncControlPanel_2,
    alwaysShow: false,
    name: 'cnccontrolpanel_2',
    meta: {
      title: 'CNC control panel',
      roles: ['admin', 'cnc']
    }
  },
  {
    path: '/cnccontrolpanel_3',
    component: CncControlPanel_3,
    alwaysShow: false,
    name: 'cnccontrolpanel_3',
    meta: {
      title: 'CNC control panel',
      roles: ['admin', 'cnc']
    }
  },
  {
    path: '/laser',
    component: laserComponent,
    alwaysShow: false,
    name: 'laser',
    meta: {
      title: 'laser',
    }
  },
  {
    path: '/agv',
    component: agv,
    alwaysShow: false,
    name: 'agv',
    meta: {
      title: 'agv',
    }
  },
  {
    path: '/log',
    component: log,
    alwaysShow: false,
    name: 'log',
    meta: {
      title: 'log'
    }
  },
  {
    path: '*',
    component: Home
  }
]

const createRouter = () => new Router({
  mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router