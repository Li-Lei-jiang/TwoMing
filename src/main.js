import Vue from 'vue'
import App from './App.vue'
import emUi from './packages/index'
Vue.use(emUi) //会默认调用 install 方法
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')