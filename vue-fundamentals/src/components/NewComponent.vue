<template>
    <div>
        <Header text="Ini Adalah Header"></Header>
        <MyComponent  nama="Ujang" umur="90"></MyComponent>
        <Umur nama="Mahmud" umur="19"></Umur>
        <Latihan2></Latihan2>
        <h2>WatchersComponent</h2>
        <Watcher nama="Ujang" umur="80"></Watcher>
        <h2>Event Component</h2>
        <latihan-event-component :nama="nama" :umur="umur" @greeted="onGreeted"></latihan-event-component>

    </div>
</template>
<script setup>
import Watcher from './Watcher.vue';
import Umur from './Umur.vue';
import MyComponent from './MyComponent.vue';
import Header from './Header.vue';
import Latihan2 from './Latihan2.vue';



// event
import { ref } from 'vue';
const nama = ref('John');
const umur = ref(25);

const onGreeted = () => {
    console.log('Kamu udah disapa, bro!');
};

</script>