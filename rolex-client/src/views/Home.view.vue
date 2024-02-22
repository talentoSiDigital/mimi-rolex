<script setup>
import { ref, watch } from 'vue';
import HeaderSlider from '../services/headerSliderDataServices'
import {filename} from 'pathe/utils'


import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import Cookies from '../components/cards/Cookies.vue'

import { useAsyncState } from '@vueuse/core'
import { RouterLink } from 'vue-router';

const { isLoading, state, isReady, execute } = useAsyncState(
    HeaderSlider.getAll()
        .then(d => d.data)
)



const jewelSlideshow = [
    'compromiso',
    'regalos',
    'graduacion',
    'bautizo',
    'matrimonio',
    'nacimiento'
]



</script>

<template>
    <div id="main-content" class="font-montserrat">

        <div class="relative z-0">
            <carousel :items-to-show="1">
                <slide v-for="slide in state" :key="slide">
                    <RouterLink to="/coleccion-rolex">
                        <img class="hidden md:block" :src="slide.path" :alt="slide.path">
                    </RouterLink>
                    <RouterLink to="/coleccion-rolex">
                        <img class="block md:hidden" :src="slide.mobilePath" :alt="slide.mobilePath">
                    </RouterLink>
                </slide>

                <template #addons>
                    <pagination />
                </template>
            </carousel>
        </div>
        
        <div id="joyeria" class="h-80 mt-8 flex flex-col items-center justify-center text-neutral-600 ">
            <div class="mb-4 flex flex-col md:flex-row items-center justify-center w-full">
                <!-- The left line -->
                <span class="block h-px w-1/3 md:w-1/6 bg-neutral-300"></span>
                <!-- Your text here -->
                <h1 class="text-center text-3xl tracking-widest mx-4 my-4 font-medium">PRESENTE EN TUS
                    MOMENTOS ESPECIALES</h1>
                    
                    <!-- The right line -->
                    <span class="block h-px w-1/3 md:w-1/6 bg-neutral-300"></span>
                </div>
                
                <div class="hidden md:block">
                    <div class="flex justify-center gap-6 ">
                        
                        <div v-for="slide in jewelSlideshow"
                        class="flex-col justify-center items-center duration-500 hover:scale-110" :key="slide">
                        
                        <img class="w-36" :src="`/assets/routes-assets/Home/${slide}-home-mini.webp`" :alt="slide">
                        <h2 class="text-center uppercase">{{ slide }}</h2>
                    </div>
                </div>

            </div>

            <div class="block md:hidden w-44">
                <carousel :items-to-show="1" :autoplay="1000" :wrap-around="true">
                    <slide v-for="slide in jewelSlideshow" :key="slide">
                        <img class="w-full" :src="`/assets/routes-assets/home/${slide}-Home-mini.webp`"
                            :alt="slide">
                    </slide>


                </carousel>
            </div>
        </div>


        <div id="home-section"
            class="flex flex-col md:flex-row items-center justify-evenly gap-10 h-screen text-neutral-700 w-full">
            <img class="w-3/4 md:w-1/3 duration-500 hover:scale-110" src="/assets/routes-assets/Home/home-1.webp"
                alt="mujer-gargantilla">
            <div class="w-3/4 md:w-1/3 text-center">
                <h2 class="my-4 text-3xl">UNA JOYA QUE TE COMPLEMENTA</h2>
                <p class="mb-8 text-xl">Descubre un mundo de opciones en joyería para ti.</p>
                <router-link to="/joyeria" class="bg-neutral-500 px-6 py-4 my-4 rounded-lg text-white shadow-2xl hover:bg-neutral-600 "
                    >DESCUBRIR</router-link>
            </div>
        </div>


        <div id="home-section-2"
            class="flex flex-col md:flex-row-reverse  items-center justify-evenly gap-8 h-screen text-neutral-700">
            <img class="w-3/4 md:w-1/3 duration-500 hover:scale-110" src="/assets/routes-assets/Home/home-2.webp"
                alt="brazaletes-oro">
            <div class="w-3/4 md:w-1/3 text-center">
                <h2 class=" text-3xl">NUEVA COLECCIÓN</h2>
                <p class="my-6 text-xl">Encuentra aquí nuestras nuevas esclavas en ORO 18KT.</p>
                <p class=" text-xl">¡Hay una perfecta para ti!</p>
            </div>
        </div>

        <div id="relojes">
            <div class="flex flex-col md:flex-row items-center justify-center w-full">
                <!-- The left line -->
                <span class="block h-px w-1/3 md:w-1/6 bg-neutral-300"></span>
                <!-- Your text here -->
                <h1 class="text-center text-3xl tracking-widest mx-4 font-medium text-neutral-700">PRESENTE
                    EN TUS MOMENTOS
                    ESPECIALES</h1>

                <!-- The right line -->
                <span class="block h-px w-1/3 md:w-1/6 bg-neutral-300"></span>
            </div>

            <div class="flex flex-col md:flex-row w-full overflow-x-hidden  text-neutral-700 mb-10">
                <div class="flex flex-col items-center justify-center">
                    <router-link :to="{ name: 'reloj', params: { id: 'tudor' }}">
                        <img src="/assets/routes-assets/Home/TUDOR.webp" alt="tudor-black-bay-gmt"
                            class="duration-500 hover:scale-110">
                    </router-link>
                    <h3 class="text-xl font-light">Black Bay GMT S&G</h3>
                    <h3 class="text-xl font-light">TUDOR</h3>
                </div>
                <div class="flex flex-col items-center justify-center">
                    <router-link :to="{ name: 'reloj', params: { id: 'longines' }}">
                        <img src="/assets/routes-assets/Home/LONGINESS.webp" alt="longiness-hydrocontest"
                            class="duration-500 hover:scale-110">
                    </router-link>
                    <h3 class="text-xl font-light">Longines Hydroconquest</h3>
                    <h3 class="text-xl font-light">LONGINESS</h3>
                </div>
                <div class="flex flex-col items-center justify-center">
                    <router-link :to="{ name: 'reloj', params: { id: 'tissot' }}">
                        <img src="/assets/routes-assets/Home/TISSOT.webp" alt="tissot-seastar-gts"
                            class="duration-500 hover:scale-110">
                    </router-link>
                    <h3 class="text-xl font-light">Tissot Seastar GTS</h3>
                    <h3 class="text-xl font-light">TISSOT</h3>
                </div>
                <div class="flex flex-col items-center justify-center">
                    <router-link :to="{ name: 'reloj', params: { id: 'victorinox' }}">
                        <img src="/assets/routes-assets/Home/VICTORINOX.webp" alt="victorinox-maverick-sport"
                            class="duration-500 hover:scale-110">
                    </router-link>
                    <h3 class="text-xl font-light">Victorinox Maverick Sport</h3>
                    <h3 class="text-xl font-light">VICTORINOX</h3>
                </div>
            </div>

        </div>


        <img src="/assets/routes-assets/Home/banner-graduate.webp" alt="banner-graduacion">


    </div>
</template>

<style scoped></style>

