// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app', // Name of the main component we're inserting into index.html div 'app', similar to ReactDOM.render etc.
  template: '<App/>',
  components: { App }
})
