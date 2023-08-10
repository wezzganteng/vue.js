import axios from "axios";

const produk = {
    namespaced: true,
    state: {
        produkData: [],
    },
    getters: {
        getProduk: (state) => state.produkData,
        getProdukById: (state) => (produkId) => {
            console.log("ProdukId:", produkId);
            console.log("ProdukData:", state.produkData);
            const produk = state.produkData.find((p) => p.id == produkId);
            console.log('Produk:', produk);
            return produk
        },

        ///by id

        getProdukByCategory: (state) => (produkCategory) => {
            const produk = state.produkData.filter(
                (p) => p.category == produkCategory
            );
            return produk
            
        }
    },
    actions: {
        async fetchProduk({ commit }) {
            try{
                const data = await axios.get(
                    "https://fakestoreapi.com/products"
                );
                commit("SET_PRODUK", data.data);
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },
        async fetchSingleProduk({ commit }, produkId) {
            try{
                const response = await axios.get(
                    `https://fakestoreapi.com/products/${produkId}`
                );
                commit("SET_SINGLE_PRODUK", response.data);
            } catch (error) {
                alert(error);
                console.log(error);
            }   
        },
        async fetchFilterProduk({ commit }, produkCategory) {
            try{
                const response = await axios.get(
                    `https://fakestoreapi.com/products/${produkCategory}`
                );
                commit("SET_FILTER_PRODUK", response.data);
            } catch (error) {
                alert(error);
                console.log(error);
            }   
        },
    },

    //single
    mutations: {
        SET_PRODUK(state, produk) {
            state.produkData = produk;
        },
        SET_SINGLE_PRODUK(state, produk) {
            state.singleData = produk;
        },
        SET_FILTER_PRODUK(state, produk) {
            state.filterData = produk;
        }
    }
}

export default produk;