// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueStripeCheckout from 'vue-stripe-checkout'
import App from './App'
import router from './router'
import store from './store'
import './global.scss'
import {
  Button, Layout, Input, Icon, Checkbox, Modal, Carousel, Avatar,
  Form, Menu, Radio, Select, Pagination, Row, Col, Table, Tag, Badge, Alert
} from 'ant-design-vue'

Vue.use(VueStripeCheckout, 'pk_test_J3pjN4atklongAk7bZf8ceqJ00kTG38jww')

Vue.use(Avatar)
Vue.use(Badge)
Vue.use(Button)
Vue.use(Carousel)
Vue.use(Checkbox)
Vue.use(Col)
Vue.use(Form)
Vue.use(Icon)
Vue.use(Input)
Vue.use(Menu)
Vue.use(Modal)
Vue.use(Layout)
Vue.use(Radio)
Vue.use(Row)
Vue.use(Pagination)
Vue.use(Select)
Vue.use(Table)
Vue.use(Tag)
Vue.use(Alert)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
