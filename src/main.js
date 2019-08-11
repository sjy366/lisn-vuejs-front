// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import './plugins/vuetify'
import Vuetify from 'vuetify'
import vuescroll from 'vuescroll'
import globalComponents from '../src/plugins/globalComponents'
import router from './router.js'
import DashboardPlugin from './plugins/dashboard-plugin';
import App from './App'
import { store } from './store/store.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(Vuetify)
Vue.use(globalComponents)
Vue.use(DashboardPlugin);
Vue.use(vuescroll, {
  ops: {
    bar: {
      showDelay: 500,
      onlyShowBarOnScroll: true,
      keepShow: true,
      background: '#c1c1c1',
      opacity: 1,
      hoverStyle: false,
      specifyBorderRadius: false,
      minSize: 0,
      size: '6px',
      disable: false
    }
  },
  name: 'vuescroll' // customize component name, default -> vueScroll
})

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
