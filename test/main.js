import Vue from 'vue'
import App from './App.vue'
// 导入组件库
import MUI from '../packages'

Vue.config.productionTip = false

Vue.use(MUI)

new Vue({
    render: h => h(App)
}).$mount('#app')