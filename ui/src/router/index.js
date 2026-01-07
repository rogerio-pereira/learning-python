import { createRouter, createWebHistory } from 'vue-router'

//Pages
import Home from '../views/Home.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: {
                title: 'Dashboard'
            }
        }
    ],
})

router.beforeEach((to, from, next) => {
    let title = import.meta.env.VITE_APP_NAME

    if(to.meta.title) {
        title += ' - ' + to.meta.title
    }
    document.title = title
    
    next()
})

export default router