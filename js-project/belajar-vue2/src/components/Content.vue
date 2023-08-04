
<script setup>
import { Carousel } from 'flowbite-vue'
const pictures = [
  {
    'src': 'https://www.freepik.com/free-vector/hand-drawn-reseller-illustration_29822873.htm#query=reseler&position=1&from_view=search&track=sph',
    'alt': 'Picture 1',
  },
  {
    'src': 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg',
    'alt': 'Picture 2',
  },
  {
    'src': 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg',
    'alt': 'Picture 3',
  },
  {
    'src': 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg',
    'alt': 'Picture 4',
  },
  {
    'src': 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg',
    'alt': 'Picture 5',
  },
]
</script>
<template>
  <div class="bk pt-20">
      <center><P> PRODUK</P>
      </center><br><br>
    </div><br><br>
  <Carousel :pictures="pictures"></Carousel><br><br><br>

</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

.bk {
  font-family: 'Anton', sans-serif;
  font-size: 60px;
  background-color: #941b1d;
}
</style>
