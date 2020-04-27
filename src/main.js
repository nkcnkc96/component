import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ZjHeader from './components/zj-header.vue'
import './mock/index.js'
import './style/base.css'
import nkcStep from './components/nkcstep.vue'
import ceStep from './components/cece.vue'
import { Popup, Cell, CellGroup, Icon, Tab, Tabs, Tag, Tabbar, TabbarItem, NavBar, Collapse, CollapseItem } from 'vant'
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(Popup)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Icon)
Vue.use(Tag)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(NavBar)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.component('ZjHeader', ZjHeader)
Vue.component('nkcStep', nkcStep)
Vue.component('ceStep', ceStep)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
