import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue"
import User from "../views/User.vue"
import Kai from "../views/Kai.vue"
import Produk from "../views/Produk.vue"
import SingleProduk from "../views/SingleProduk.vue"
import Category from "../views/Category.vue"
import FilterCategory from "../views/FilterCategory.vue"
import Login from "../views/Login.vue"
import store from "../store";
const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/user",
        name: "User",
        component: User,
    },

    {
        path: "/kai",
        name: "Kai",
        component: Kai,
    },
    {
        path: "/produk",
        name: "Produk",
        component: Produk,
    },
    {
        path: "/produk/:id",
        name: "SingleProduk",
        component: SingleProduk,
    },
    {
        path: "/category",
        name: "Category",
        component: Category,
    },
    {
        path: "/category/:category",
        name: "FilterCategory",
        component: FilterCategory,
    },

    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: { requiresGuest: true},
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    if(to.meta.requiresGuest && store.getters["auth/isAuthenticated"]) {
        next("/"); //rediract to home
    } else {
        next();
    }
})
export default router;