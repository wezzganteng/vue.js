<template>
    <div class="grid grid-cols-4 gap-10">
<section class="w-screen py-20">
  <h1 class="mb-12 text-center font-sans text-5xl font-bold">PILIH KATEGORI</h1>
  <div class="mx-auto grid max-w-screen-lg grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-10"  >
  
  <article class="group h-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60 shadow-lg" v-for="categories in getCategory" :key="category">
    
    <img class="w-full transform object-cover object-center transition duration-500 ease-in-out group-hover:scale-105 md:h-36 lg:h-48" :src=" 'src/assets/img/' + categories + '.jpg'" alt="blog" />
    <h2 class="title-font inline-block cursor-pointer px-6 pt-4 pb-1 text-xs font-semibold uppercase tracking-widest text-orange-600 hover:font-bold"> </h2>
    <div class="py-1 px-6">
      <h1 class="title-font mb-3 inline-block cursor-pointer text-xl capitali font-extrabold tracking-wide text-gray-800">{{ categories}}</h1>
    </div>
    <div class="flex flex-wrap items-center justify-between px-6 pt-1 pb-4">
      <div class="flex flex-wrap text-sm text-gray-500">
        <router-link :to=" {name: 'FilterCategory' , params: {category: categories}}" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">GO</router-link>
      </div>
      <div class="mt-1">
  
      </div>
    </div>
  </article>
  

  </div>
</section>

</div>

</template>

<script>

import { mapGetters, mapActions } from 'vuex'; 

export default{
    computed: {
        ...mapGetters('category', ['getCategory']),
    },
    methods: {
        ...mapActions('category', ['fetchCategory'])
    },
    created() {
        this.fetchCategory();
    },
}
</script>