<template>
  <div>
      <h1>Hallo Dunia</h1>
      <p>Ini Komponen Gue</p>
      <!-- Props -->
      <h2>Nama {{ nama }}</h2>
      <p>Umur : {{ umur }}</p>
  </div>
</template>

<script>
export default {
  name: "MyComponent",
  props: ['nama', 'umur'],
  data() {
      return {
          message: "Ini pesan dari komponen"
      }
  },
  methods: {
      greet() {
          console.log("Haloo");
      }
  },
}
</script>

<style>
h1 {
  color: blue;
}

p {
  size: 16px;
}
</style>