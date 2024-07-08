<script setup>

const { type} = defineProps(["type"])




</script>

<template>
    <div class="relative">
        <img class="w-full hidden lg:block " :src="`/assets/routes-assets/banners/new-banner-${type}.webp`" :alt="type">
        <img class="w-full block lg:hidden " :src="`/assets/routes-assets/banners/new-banner-${type}-mobile.webp`" :alt="type">
        <div class="absolute top-0 w-full  h-full flex flex-col items-center md:items-end justify-end md:justify-center   pb-20 md:pb-0 md:pr-20 2xl:pr-10 text-white">
            <slot></slot>
        </div>
    </div>

</template>

<style scoped>

</style>

