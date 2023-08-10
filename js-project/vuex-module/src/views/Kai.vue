<template>
    <div class="container mx-auto sm:px-4">
        <h1 class="mb-12 text-center font-sans text-5xl font-bold pt-20">PILIH JADWAL BOOKING</h1>
        <table class="table-auto" >
            <thead>
                <tr>
                    <th class="px-4 py-2">Code</th>
                    <th class="px-4 py-2"> Name </th>
                    <th class="px-4 py-2"> City </th>
                    <th class="px-4 py-2"> Cityname </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="kai in getKai" :key="kai.code" >
                    <td class="border px-4 py-2"> {{ kai.code }} </td>
                    <td class="border px-4 py-2"> {{ kai.name }}</td>
                    <td class="border px-4 py-2"> {{ kai.city }}</td>
                    <td class="border px-4 py-2"> {{ kai.cityname }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'; 

export default{
    computed: {
        ...mapGetters('kai', ['getKai']),
    },
    methods: {
        ...mapActions('kai', ['fetchKai'])
    },
    created() {
        this.fetchKai();
    },
}
</script>