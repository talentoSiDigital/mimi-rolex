<script setup>
import { ref } from 'vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { filename } from 'pathe/utils'


const currentSlide = ref(0)

const breakpoints = {
    500: {
        // 500px and up
        itemsToShow: 2,
        snapAlign: 'start',
    }
    ,
    800: {
        // 700px and up
        itemsToShow: 3,
        snapAlign: 'start',
    },
    1024: {
        // 1024 and up
        itemsToShow: 4,
        snapAlign: 'start',
    }
}

const sliderItems = [
    {
        "src": "descubre-rolex",
        "link": "/rolex",
        "alt": "descubre-rolex",
        "title": "Descubre Rolex"

    },
    
    {
        "src": "coleccion-rolex",
        "link": "/coleccion-rolex",
        "alt": "Coleccion-Rolex",
        "title": "Colección Rolex"

    },
    {
        "src": "nuevos-modelos",
        "link": "/nuevos-modelos-2024",
        "alt": "Rolex-nuevos-modelos",
        "title": "Nuevos modelos 2024"

    },
    {
        "src": "watchmaking",
        "link": "/watchmaking",
        "alt": "Rolex-watchmaking",
        "title": "Rolex Watchmaking"

    },
    {
        "src": "mantenimiento",
        "link": "/mantenimiento-rolex",
        "alt": "Rolex-mantenimiento",
        "title": "Mantenimiento Rolex"

    },
    {
        "src": "world-of-rolex",
        "link": "/world-of-rolex",
        "alt": "world-of-rolex",
        "title": "World of Rolex"

    },
 

    {
        "src": "contacto",
        "link": "/contactenos",
        "alt": "contacto-mimi-joyeria",
        "title": "Contacto"

    }

]



</script>

<template>
    <section id="rolex-footer-slider" class=" my-8 py-4 w-full flex flex-col items-center justify-center ">
        <h2 class="font-bold mb-4 w-9/12 text-4xl font-helvetica-bold text-rolex-brown">Explorar Más</h2>
        <div id="carousel" class=" w-10/12 flex items-center gap-4">
            <font-awesome-icon :icon="['fas', 'chevron-left']"  class="bg-rolex-grey-light h-4 w-4 px-4 py-3 cursor-pointer rounded-full duration-200 hover:bg-rolex-green hover:text-white md:block hidden" @click="currentSlide--"/>
            
            <carousel :breakpoints="breakpoints" v-model="currentSlide" :wrapAround="true" :itemsToScroll="1" :autoplay="2000"  :transition="600" class="w-full">
                <slide v-for="slide in sliderItems" :key="slide">
                    <router-link :to="slide.link" class="mx-1 group ">
                        <img :src="`/assets/routes-assets/rolex-slider/${slide.src}.jpg`" :alt="slide.alt" class="w-full lg:w-full">
                        <h2 class="duration-200 group-hover:text-rolex-green-2 text-rolex-brown text-lg font-helvetica font-bold text-left">{{ slide.title }}</h2>
                    </router-link>
                </slide>
                            
            </carousel>
            
            <font-awesome-icon :icon="['fas', 'chevron-right']" class="bg-rolex-grey-light h-4 w-4 px-4 py-3 cursor-pointer rounded-full duration-200 hover:bg-rolex-green hover:text-white md:block hidden" @click="currentSlide++"/>

        </div>
        <div class="flex gap-2 my-4">
            <div v-for="(item,index) in sliderItems" :key="item">
        <div
        class="duration-200  h-1 block rounded hover:bg-rolex-green active:bg-rolex-green"
        @click="currentSlide = index" :class="currentSlide == index?'w-14 bg-rolex-green':'w-6 bg-rolex-grey-light'"
      ></div>
      </div>

        </div>
    </section>
</template>

<style scoped></style>
