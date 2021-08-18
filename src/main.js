import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false


//Vue-Router
import VueRouter from "vue-router"
Vue.use(VueRouter)
//Components
import AddEmployee from "./sites/AddEmployee.vue"
import EmployeeOverview from "./sites/EmployeeOverview.vue"

const routes = [
  { path: "/add", component: AddEmployee },
  { path: "/overview", component: EmployeeOverview }
]

const router = new VueRouter({
  routes,
  mode: 'history',
})
new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
