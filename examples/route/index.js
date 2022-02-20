import { createRouter,createWebHistory } from "vue-router";

let index = {
    path:'/',
    component:()=>import('../App.vue'),
    redirect:"/Home"
}
let home = {
    path:'/Home',
    name:'Home',
    component:()=>import('../demo/Home.vue')
}
let guide = {
    path:'/Guide',
    name:'Guide',
    component:()=>import('../demo/Guide.vue')
}
const router = createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes:[
        index,home,guide
    ]
})
export default router;