<template>
  <div>
<!-- <Header nama="asep"></Header> -->
<!-- <h2>halo ini adalah komponen utama</h2> -->
<NewComponent></NewComponent>
<Watcher></Watcher>
<!-- <Umur nama="pwezzz" umur="25"/> -->
<!-- <Latihan2></Latihan2> -->
<!-- <Watcher nama="fawwaz" umur="20"></Watcher> -->

  </div>
</template>

<script>

import NewComponent from './components/NewComponent.vue';
import Watcher from './components/Watcher.vue';
// import Header from './components/Header.vue'
// import Latihan2 from './components/Latihan2.vue';
// import Umur from './components/Umur.vue';
// import Watcher from './components/Watcher.vue';

export default {
  components: {
  NewComponent,
    Watcher
  }
 
}


</script>

<style>
h1 {
  color: blueviolet;
}

</style>