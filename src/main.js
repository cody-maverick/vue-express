import Vue
    from 'vue'
import App
    from './components/App/App.vue'
import VueRouter
    from 'vue-router'
import Router
    from './components/router.js'

Vue.use(VueRouter)

import 'normalize.css/normalize.css'

new Vue({
    render: h => h(App),
    router: Router
}).$mount('#app')
