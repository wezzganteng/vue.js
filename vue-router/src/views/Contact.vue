<template>
    <h1>contact</h1>
</template>

<script>
import { onMounted } from 'vue'
export default {
    setup(props, context)
    {
        onMounted(() => {
            context.emit("id-menu",2);
        })
    }
}

</script>