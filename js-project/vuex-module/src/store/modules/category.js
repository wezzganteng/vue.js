import axios from "axios";

const category = {
    namespaced: true,
    state: {
        categoryData: [],
    },
    getters: {
        getCategory: (state) => state.categoryData,
    },
    actions: {
        async fetchCategory({ commit }) {
            try{
                const data = await axios.get(
                    "https://fakestoreapi.com/products/categories"
                );
                commit("SET_CATEGORY", data.data);
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },
    },
    mutations: {
        SET_CATEGORY(state, category) {
            state.categoryData = category;
        }
    }
}

export default category;