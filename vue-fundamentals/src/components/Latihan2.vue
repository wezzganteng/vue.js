<template>
    <div>
        <input type="text" v-model="cari"  placeholder="Cari Data">
        <ul>
            <div v-if="cariData.length === 0"> data tidak ada</div>
            <li v-for="item in cariData" :key="item.id">
                {{ item.title }} - {{ item.price }}
                
            </li>
        </ul>
    </div>

</template>

<script>
export default {
    data() {
        return{
            cari:'',
            products: []
        }
    },
    created(){
            this.products = [
                {id:1, title: "baju anak", price: 2500},
                {id:2, title: "susu anak", price: 2500},
                {id:3, title: "topi", price: 2500},
                {id:4, title: "balon", price: 2500},
            ];

        },
        computed: {
            cariData() {
                return this.products.filter((item) => {
                    return item.title.match(this.cari)
                })
            }
            
        }   
    };
</script>