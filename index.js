import Vue from 'vue'
import App from './App.vue'
import components from "./components"

Vue.use(components)

new Vue({
  el: '#app',
  render: h => h(App)
})