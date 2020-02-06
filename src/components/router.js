import VueRouter
    from 'vue-router'
import Home
    from './Home/Home'
import About
    from './About/About'

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/about',
            component: About
        }
    ],
    mode: 'history'
})