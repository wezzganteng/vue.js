<template>
  <Navbar :idMenu="idMenu" :key="idMenu" />
  <router-view @id-menu="setMenu($event)"/>
  <div id="app">
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import { ref } from 'vue'

export default {
  name: 'App',
  components : {
    Navbar
  },
  setup(){
    const idMenu = ref(1);

    function setMenu(id)
    {
      idMenu.value = id;
    }
    return {
      setMenu,
      idMenu,
    }
  }
}
</script>