import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import plugins from './plugins'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, { ak: 'mdy66fjvgFn1UGeEwK3QloFc0vBjYEBv' })
Vue.config.productionTip = false
Vue.use(ElementUI);
// Vue.prototype.$hello=function(){console.log(hello);}
Vue.use(plugins)
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
