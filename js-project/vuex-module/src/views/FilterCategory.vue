<template>

</template>
<script>

import { mapGetters, mapActions } from 'vuex'; 
import category from '../store/modules/category';

export default{
    computed: {
        ...mapGetters('produk', ['getProdukByCategory']),
        filteredProduk() {
            return this.getProdukByCategory(this.$route.params,category);
        },
    },
    methods: {
        ...mapActions('produk', ['fetchFilterCategory'])
    },
    created() {
        this.fetchCategory();
    },
}
</script>