<script setup>
import {ref} from 'vue'


const nama = prompt("masukan nama")
const umur = prompt("masukan umur")
const kelas = prompt("masukan kelas")
const link = "https://www.youtube.com/"
</script>
<template>
  <p>BIODATA DIRI</p> <br>
<p>NAMA : <span v-html="nama" style="color:red"></span></p> <br>
<p>UMUR : <span v-html="umur" style="color:red"></span></p> <br>
<p>KELAS : <span v-html="kelas" style="color:red"></span></p> <br>
<button> 
<a v-bind:href="link">youtube </a>
</button>

<p>{{  }}</p>
  <div id = "app">
    <h1>{{ msg }}</h1>
  </div>
</template>