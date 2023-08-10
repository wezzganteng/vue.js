import { createStore } from "vuex";
import donatur from "./modules/donatur";
import clients from "./modules/clients";
import transaksi from "./modules/transaksi";
import users from "./modules/users";
import kai from "./modules/kai"
import produk from "./modules/produk"
import category from "./modules/category"
import auth from "./modules/auth"


const store = createStore ({
    state: {
        isLoading: false,
    },
    modules: {
        donatur,
        clients,
        transaksi,
        users,
        kai,
        produk,
        category,
        auth,
    }
});
export default store;