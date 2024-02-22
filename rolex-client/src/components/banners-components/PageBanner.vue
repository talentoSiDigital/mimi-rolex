<script setup>
const { type} = defineProps(["type"])




</script>

<template>
    <div>
        <img class="w-full" :src="`/assets/routes-assets/banners/banner-${type}.webp`" :alt="type">
    </div>

</template>

<style scoped>

</style>

