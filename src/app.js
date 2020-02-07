import Vue
    from 'vue'
import App
    from './components/App/App.vue'
import VueRouter
    from 'vue-router'
import {createRouter}
    from './components/router.js'

Vue.use(VueRouter)

export function createApp() {
    // Создаём экземпляр маршрутизатора
    const router = createRouter();
    const app = new Vue({
        // внедряем маршрутизатор в корневой экземпляр Vue
        router,
        render: h => h(App)
    })
    // возвращаем и приложение и маршрутизатор
    return {
        app,
        router
    }
}
