import { createRouter, createWebHistory } from "vue-router"
import Home from '@/views/Home'

const routeInfos = [
    {
        path : "/",
        component: Home
    },
    {
        path : "/todos",
        component: () => import('./views/Todos.vue')
    }
]

const router = createRouter({
    history : createWebHistory(),
    routes : routeInfos
})

export default router;