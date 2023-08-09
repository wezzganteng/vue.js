<template>

  <div id="nav">
    <Navbar></Navbar>
    <router-link to= "/"></router-link>
    <router-link to= "/User"></router-link>
    <router-link to= "/Kai"></router-link>
    <router-link to= "/Produk"></router-link>
  </div>
  <router-view />
</template>

<script>
import Navbar from "./components/Navbar.vue"

export default {
  components: {
    Navbar
  },
}
</script>

