// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './global.scss'
import 'ant-design-vue/dist/antd.css'

import {
  Button, Layout, Input, Icon, Checkbox,
  Form, Menu, Radio, Select, Pagination
} from 'ant-design-vue'

Vue.use(Button)
Vue.use(Checkbox)
Vue.use(Form)
Vue.use(Icon)
Vue.use(Input)
Vue.use(Menu)
Vue.use(Layout)
Vue.use(Radio)
Vue.use(Pagination)
Vue.use(Select)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
