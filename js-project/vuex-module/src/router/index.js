import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue"
import User from "../views/User.vue"
import Kai from "../views/Kai.vue"
import Produk from "../views/Produk.vue"
import SingleProduk from "../views/SingleProduk.vue"
import Category from "../views/Category.vue"

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
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;