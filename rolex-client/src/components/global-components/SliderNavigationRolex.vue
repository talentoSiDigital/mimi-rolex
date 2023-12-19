<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const sliderItems = [
    {
        "src": "rolex-mimi.webp",
        "link":"/rolex",
        "title":"Rolex-en-mimi"

    },
    {
        "src": "coleccion-.webp",
        "link":"/rolex",
        "title":"Rolex-en-mimi"

    },
]



</script>

<template>
    <carousel :items-to-show="1">
        <slide v-for="slide in 10" :key="slide">
            {{ slide }}
        </slide>

        <template #addons>
            <navigation />
            <pagination />
        </template>
    </carousel>
</template>

<style scoped>



</style>

