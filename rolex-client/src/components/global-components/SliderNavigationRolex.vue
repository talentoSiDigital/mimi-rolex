<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

const currentSlide = ref(0)

const breakpoints = {
    500: {
        // 500px and up
        itemsToShow: 1,
        snapAlign: 'center',
    }
    ,
    800: {
        // 700px and up
        itemsToShow: 2,
        snapAlign: 'center',
    },
    1024: {
        // 1024 and up
        itemsToShow: 3,
        snapAlign: 'start',
    }
}

const sliderItems = [
    {
        "src": "rolex-mimi.webp",
        "link": "/rolex",
        "alt": "Rolex-en-mimi",
        "title": "Rolex en Mimi"

    },
    {
        "src": "coleccion-rolex.webp",
        "link": "/coleccion-rolex",
        "alt": "Coleccion-Rolex",
        "title": "Coleccion Rolex"

    },
    {
        "src": "nuevos-modelos.webp",
        "link": "/nuevos-modelos-2023",
        "alt": "Rolex-nuevos-modelos",
        "title": "Nuevos modelos 2023"

    },
    {
        "src": "mantenimiento.webp",
        "link": "/mantenimiento-rolex",
        "alt": "Rolex-mantenimiento",
        "title": "Mantenimiento Rolex"

    },
    {
        "src": "historia.webp",
        "link": "/historia",
        "alt": "historia-mimi-joyeria",
        "title": "Historia Mimi joyería"

    },
    {
        "src": "showroom.webp",
        "link": "/showroom",
        "alt": "showroom-mimi-joyeria",
        "title": "Showroom"

    },
    {
        "src": "contacto.webp",
        "link": "/contactenos",
        "alt": "contacto-mimi-joyeria",
        "title": "Contacto"

    }

]



</script>

<template>
    <section id="rolex-footer-slider" class=" my-8 py-4 w-full flex flex-col items-center justify-center ">
        <h2 class="font-bold mb-4">Explorar Mas</h2>
        <div id="carousel" class="w-3/4">
            <carousel :breakpoints="breakpoints" :wrap-around="true" v-model="currentSlide" :autoplay="2000">
                <slide v-for="slide in sliderItems" :key="slide">
                    <router-link :to="slide.link">
                        <img :src="'/src/assets/routes-assets/rolex-slider/' + slide.src" :alt="slide.alt">
                        <h2>{{ slide.title }}</h2>
                    </router-link>
                </slide>

                <template #addons>
                    <navigation />
                  
                </template>
            </carousel>
            
        </div>
        <div class="flex gap-2 my-4">
            <div class="h-2 block w-10 rounded bg-neutral-600 hover:bg-rolex-green active:bg-rolex-green" @click="currentSlide = 0"> </div>
            <div class="h-2 block w-10 rounded bg-neutral-600 hover:bg-rolex-green active:bg-rolex-green" @click="currentSlide = 1"> </div>
            <div class="h-2 block w-10 rounded bg-neutral-600 hover:bg-rolex-green active:bg-rolex-green" @click="currentSlide = 2"> </div>
            <div class="h-2 block w-10 rounded bg-neutral-600 hover:bg-rolex-green active:bg-rolex-green" @click="currentSlide = 3"> </div>
            <div class="h-2 block w-10 rounded bg-neutral-600 hover:bg-rolex-green active:bg-rolex-green" @click="currentSlide = 4"> </div>
            <div class="h-2 block w-10 rounded bg-neutral-600 hover:bg-rolex-green active:bg-rolex-green" @click="currentSlide = 5"> </div>
            
        </div>
    </section>
</template>

<style scoped></style>

