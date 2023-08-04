<template>
    <div>
        <h3>{{ text }}</h3>
    </div>
</template>

<script>
export default {
    name: 'Header',
    props: ['text']
}
</script>

<style>
h3 {
    color: black;
    background-color: cadetblue;
    text-align: center;
}
</style>