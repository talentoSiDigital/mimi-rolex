<script setup>
const { type} = defineProps(["type"])


</script>

<template>
    <div class="">
        <img class="w-full" :src="'/src/assets/routes-assets/banners/banner-'+ type + '.webp'" :alt="type">
    </div>

</template>

<style scoped>

</style>

