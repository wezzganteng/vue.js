import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue"; 
import About from "@/views/About.vue";
import Contact from "@/views/Contact.vue";
import Produk from "@/views/Produk.vue";
import Detail from "@/views/Detail.vue";
import Kategori from "@/views/Kategori.vue";
import Detailkategori from "@/views/Detailkategori.vue"
import FileNotfound from '@/views/FileNotfound.vue'
import Login from '@/views/Login.vue'
import Counter from "../views/Counter.vue"
import Todo from "../views/Todo.vue"



const routes = [ 

  {
    path: "/todo", 
    name: "Todo",
    component: Todo,
  },
  
{
  path: "/counter", 
  name: "Counter",
  component: Counter,
},


  {
    path: "/", 
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/produk",
    name: "Produk",
    component: Produk,
    beforeEnter: (to, from, next) => {
      const loggedInUser = true;
      if (loggedInUser) {
        next(); // Lanjutkan navigasi ke halaman produk jika sudah login
      } else {
        next("/login"); // Alihkan ke halaman login jika belum login
      }
    },
  },
  {
    path: "/detail/:id_produk",
    name: "Detail",
    component: Detail,
    props: true
  },
  {
    path: "/kategori",
    name: "Kategori",
    component: Kategori,
  },
  {
    path: "/detailkategori/:id_kategori",
    name: "Detailkategori",
    component: Detailkategori,
    props: true
  },
  {
    path: '/:pathMatch(.*)*' , component: FileNotfound
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    props: true,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

