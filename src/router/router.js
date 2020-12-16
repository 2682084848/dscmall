import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Home from "../views/Home/Home.vue";
import Category from "../views/Category/Category.vue";
import Find from "../views/Find/Find.vue";
import Carte from "../views/Cart/Cart.vue";
import Mine from "../views/Mine/Mine.vue";


// 路由配置
let routes = [{
    path: "/home",
    component: Home,
    children: [{
        path: "index",
        component: () => import('../views/Home/Children/Index')
    }, {
        path: "household",
        component: () => import('../views/Home/Children/Household')
    }, {
        path: "clothing",
        component: () => import('../views/Home/Children/Clothing')
    }, {
        path: "shoebag",
        component: () => import('../views/Home/Children/ShoeBag')
    }, {
        path: "mobilephones",
        component: () => import('../views/Home/Children/MobilePhones')
    }, {
        path: "computer",
        component: () => import('../views/Home/Children/Computer')
    }, {
        path: "homeTextiles",
        component: () => import('../views/Home/Children/HomeTextiles')
    }, {
        path: "personalmakeup",
        component: () => import('../views/Home/Children/PersonalMakeup')
    }]
}, {
    path: "/category",
    component: Category
}, {
    path: "/find",
    component: Find
}, {
    path: "/carte",
    component: Carte
}, {
    path: "/mine",
    component: Mine
}, {
    path: "/search",
    component: () => import("../views/Search/Search")
}, {
    path: "/categorylist/:cid",
    component: () => import('../views/Category/componwnts/CategoryList')
}, {
    path: "/goods/show/:gid",
    component: () => import('../views/Detail/Detail')
}, {
    path: "/searchlist",
    component: () => import('../views/Search/SearchList')
}, {
    path: "/register",
    component: () => import('../views/Login/Register')
}, {
    path: "/",
    redirect: "/home"
}, {
    path: "/home/mine",
    redirect: "/mine"
}];

let router = new VueRouter({
    routes
})
// router.beforeEach((to, from, next) => {
//     if (to.path == "/mine" || to.path == "/login") {
//         next();
//         return;
//     }
//     const token = JSON.parse(window.localStorage.getItem("userInfo")).token
//     // console.log(token);
//     if (!token) {
//         return next("/login");
//     }
//     next();
// })
export default router

