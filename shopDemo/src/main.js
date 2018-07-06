// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './stores';
import 'weui'
import 'mint-ui/lib/style.css'
import MintUI from 'mint-ui'
import Icon from 'vue-svg-icon/Icon.vue';
Vue.component('icon', Icon);
Vue.use(MintUI)

Vue.config.productionTip = false
Vue.config.devtools = true

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
