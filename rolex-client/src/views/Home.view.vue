<script setup>
import { ref, watch } from 'vue';
import HeaderSlider from '../services/headerSliderDataServices'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { useAsyncState } from '@vueuse/core'

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
    <div id="main-content">

        <carousel :items-to-show="1">
            <slide v-for="slide in state" :key="slide">
                <img class="hidden md:block" :src="slide.path" :alt="slide.path">
                <img class="block md:hidden" :src="slide.mobilePath" :alt="slide.mobilePath">

            </slide>

            <template #addons>
                <pagination />
            </template>
        </carousel>

        <div id="joyeria" class="h-80 flex flex-col items-center justify-center text-neutral-600 ">
            <div class="mb-4 flex flex-col md:flex-row items-center justify-center w-full">
                <!-- The left line -->
                <span class="block h-px w-1/3 md:w-1/6 bg-neutral-300"></span>                
                <!-- Your text here -->
                <h1 class="text-center text-3xl tracking-widest mx-4 font-medium">PRESENTE EN TUS MOMENTOS ESPECIALES</h1>
                
                <!-- The right line -->
                <span class="block h-px w-1/3 md:w-1/6 bg-neutral-300"></span>                
            </div>

            
            <div class="flex justify-center gap-6">

                <div class="flex-col justify-center items-center duration-500 hover:scale-110">
                    <img class="w-36" :src="'/src/assets/routes-assets/Home/' + jewelSlideshow[0] + '-home-mini.webp'"
                        :alt="jewelSlideshow[0]">
                    <h2 class="text-center uppercase">{{ jewelSlideshow[0] }}</h2>
                </div>

                <div class="flex-col justify-center items-center duration-500 hover:scale-110">
                    <img class="w-36" :src="'/src/assets/routes-assets/Home/' + jewelSlideshow[1] + '-home-mini.webp'"
                        :alt="jewelSlideshow[1]">
                    <h2 class="text-center uppercase">{{ jewelSlideshow[1] }}</h2>
                </div>

                <div class="flex-col justify-center items-center duration-500 hover:scale-110">
                    <img class="w-36" :src="'/src/assets/routes-assets/Home/' + jewelSlideshow[2] + '-home-mini.webp'"
                        :alt="jewelSlideshow[2]">
                    <h2 class="text-center uppercase">{{ jewelSlideshow[3] }}</h2>
                </div>

                <div class="flex-col justify-center items-center duration-500 hover:scale-110">
                    <img class="w-36" :src="'/src/assets/routes-assets/Home/' + jewelSlideshow[3] + '-home-mini.webp'"
                        :alt="jewelSlideshow[3]">
                    <h2 class="text-center uppercase">{{ jewelSlideshow[3] }}</h2>
                </div>

                <div class="flex-col justify-center items-center duration-500 hover:scale-110">
                    <img class="w-36" :src="'/src/assets/routes-assets/Home/' + jewelSlideshow[4] + '-home-mini.webp'"
                        :alt="jewelSlideshow[4]">
                    <h2 class="text-center uppercase">{{ jewelSlideshow[4] }}</h2>
                </div>

                <div class="flex-col justify-center items-center duration-500 hover:scale-110">
                    <img class="w-36" :src="'/src/assets/routes-assets/Home/' + jewelSlideshow[5] + '-home-mini.webp'"
                        :alt="jewelSlideshow[5]">
                    <h2 class="text-center uppercase">{{ jewelSlideshow[5] }}</h2>
                </div>


            </div>
        </div>


        <div id="home-section" class="flex items-center justify-center gap-8 h-screen text-neutral-700">
            <img class="w-1/3 duration-500 hover:scale-110" src="../assets/routes-assets/Home/home-1.webp" alt="mujer-gargantilla">
            <div class="w-1/3">
                <h2 class="my-4 text-3xl">UNA JOYA QUE TE COMPLEMENTA</h2>
                <p class="mb-8 text-xl">Descubre un mundo de opciones en joyería para ti.</p>
                <a class="bg-neutral-500 px-6 py-4 my-4 rounded-lg text-white shadow-2xl hover:bg-neutral-600 "
                    href="#">DESCUBRIR</a>
            </div>
        </div>


        <div id="home-section-2" class="flex flex-row-reverse items-center justify-center gap-8 h-screen text-neutral-700">
            <img class="w-1/3 duration-500 hover:scale-110" src="../assets/routes-assets/Home/home-2.webp" alt="brazaletes-oro">
            <div class="w-1/3">
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
                <h1 class="text-center text-3xl tracking-widest mx-4 font-medium text-neutral-700">PRESENTE EN TUS MOMENTOS ESPECIALES</h1>
                
                <!-- The right line -->
                <span class="block h-px w-1/3 md:w-1/6 bg-neutral-300"></span>                
            </div>

            <div class="flex  text-neutral-700 mb-10">
                <div class="flex flex-col items-center justify-center">
                    <a href="https://tienda.mimijoyeria.com/products/tudor-black-bay-gmt-s-g">
                        <img src="../assets/routes-assets/Home/TUDOR.webp" alt="tudor-black-bay-gmt" class="duration-500 hover:scale-110">
                    </a>
                    <h3 class="text-xl font-light">Black Bay GMT S&G</h3>
                    <h3 class="text-xl font-light">TUDOR</h3>
                </div>
                <div class="flex flex-col items-center justify-center">
                    <a href="https://tienda.mimijoyeria.com/products/hydroconquest">
                        <img src="../assets/routes-assets/Home/LONGINESS.webp" alt="tudor-black-bay-gmt" class="duration-500 hover:scale-110">
                    </a>
                    <h3 class="text-xl font-light">Longines Hydroconquest</h3>
                    <h3 class="text-xl font-light">LONGINESS</h3>
                </div>
                <div class="flex flex-col items-center justify-center">
                    <a href="https://tienda.mimijoyeria.com/products/tissot-seastar-1">
                        <img src="../assets/routes-assets/Home/TISSOT.webp" alt="tudor-black-bay-gmt" class="duration-500 hover:scale-110">
                    </a>
                    <h3 class="text-xl font-light">Tissot Seastar GTS</h3>
                    <h3 class="text-xl font-light">TISSOT</h3>
                </div>
                <div class="flex flex-col items-center justify-center">
                    <a href="https://tienda.mimijoyeria.com/products/victorinox-241676-1-reloj-analogico">
                        <img src="../assets/routes-assets/Home/VICTORINOX.webp" alt="tudor-black-bay-gmt" class="duration-500 hover:scale-110">
                    </a>
                    <h3 class="text-xl font-light">Victorinox Maverick Sport</h3>
                    <h3 class="text-xl font-light">VICTORINOX</h3>
                </div>
            </div>
            
        </div>


        <img src="../assets/routes-assets/Home/banner-graduate.webp" alt="banner-graduacion">
</div>




</template>

<style scoped></style>

