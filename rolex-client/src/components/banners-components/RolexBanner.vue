<script setup>
const {src, alt,text} = defineProps(["src","alt","text"])


</script>

<template>
    <div>
        <img class="w-full" :src="src" :alt="alt">
        <p>{{ text }}</p>
    </div>

</template>

<style scoped>

</style>

