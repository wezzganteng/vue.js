<template>
    <div v-if="umur >= 18">
    <p>selmat datang {{ nama }}</p>
</div>
    <div v-else>
        <p>maaf kamu masih bayi</p>
    </div>
    <button @click="greet">sapa</button>
</template>

 <script>
export default {
    props: ['nama' , 'umur'],
    methods: {
    greet () {
        alert('haloo' + this.nama)
            }
        }
    }
</script>