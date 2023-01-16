import VueRouter from 'vue-router'
import Vue from 'vue'

// import home from '../components/Home.vue'
// import about from '../components/About.vue'
// import use from '../components/Use.vue'

const home = () => import('../components/Home.vue')
const homenews = () => import('../components/HomeNews.vue')
const homemessage = () => import('../components/HomeMessage.vue')
const about = () => import('../components/About.vue')
const use = () => import('../components/Use.vue')

//1安装插件
Vue.use(VueRouter)
//2创建router对象·
const routes = [
    {
        path:'',
        redirect: '/home'
    },
    {
        path:'/home',
        component: home,
        meta:{
            title: '首页'
        },
        children: [
            {
                path:'',
                redirect: 'news'
            },
            {
                path:'news',
                component: homenews
            },
            {
                path:'message',
                component: homemessage
            }
        ]
    },
    {
        path:'/about',
        component: about,
        meta:{
            title: '关于'
        },
    },
    {
        path:'/use/:userid',
        component: use,
        meta:{
            title: '用户'
        },
    },
]
//
const router = new VueRouter({
    //配置路由和组件之间关系
    routes,
    mode:'history',
    linkActiveClass:'active'
})

router.beforeEach((to, from, next) =>{
    document.title = to.matched[0].meta.title
    next()
})
//将路由对象传入到vue实例
export default router
