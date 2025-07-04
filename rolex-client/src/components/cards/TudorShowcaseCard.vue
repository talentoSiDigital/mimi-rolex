<script setup>
const {items}= defineProps(['items'])
</script>

<template>
    <RouterLink :to="{ name: 'relojProducto', params: { id: items.serie } }" class="font-tudor font-black text-center ">
        <img :src="items.img" :alt="items.serie" class="py-8 bg-neutral-100" >

        <h2 class="font-tudor-title text-sm md:text-md">TUDOR</h2>
        <h2 class="uppercase  md:text-xl font-tudor-title">{{ items.nombre }}</h2>
        <h2 class="font-light">{{ items.precio }}</h2>
    </RouterLink>
</template>

<style scoped></style>
