<script setup>
import { ref } from 'vue';
import { useAsyncState } from '@vueuse/core'

import ShareSocialsButton from '../../components/global-components/ShareSocialsButton.vue'

import router from '../../router'
import { RouterLink, useRoute, useRouter } from 'vue-router';

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

import StoreDataService from '../../services/storeDataService'

const route = useRoute()
const useVueRouter = useRouter()

const currentSlide = ref(1)
const { isLoading, state, isReady, execute } = useAsyncState(
    StoreDataService.getJoyeriaDetails(route.params.id)
        .then(d => {

            return d.data
        })
)



function goBack() {
    router.go(-1)
}

function sendMessage(state) {
    const message = `Quisiera saber mas informacion acerca del modelo ${state[0].nombre}, por favor.`
    return `https://wa.me/584122909996/?text=${message}`
}

</script>

<template>
    <main class="bg-neutral-100 font-montserrat text-neutral-700">
        <div v-if="isReady">

            <div class="mb-4 flex flex-col md:flex-row items-center justify-center w-full h-32">
                <!-- The left line -->
                <span class="block h-px w-1/3 md:w-1/6 bg-neutral-300"></span>
                <!-- Your text here -->
                <h1 class="text-center text-xl tracking-widest mx-4 my-4 font-medium">PRESENTE EN TUS
                    MOMENTOS ESPECIALES</h1>

                <!-- The right line -->
                <span class="block h-px w-1/3 md:w-1/6 bg-neutral-300"></span>
            </div>

            <section class="flex flex-col items-center md:flex-row px-10 ">
                <div id="carousel" class="md:w-1/2 flex flex-col items-center gap-3">
                    <carousel :items-to-show="1" :wrap-around="false" v-model="currentSlide">
                        <slide v-for="slide in 2" :key="slide">
                            <img :src="state[0].img[slide - 1]" :alt="state[0].serie" class="w-3/4 bg-white">
                        </slide>

                    </carousel>
                    <div id="slider-nav" class="flex">

                        <div class="flex gap-2">
                            <img :src="state[0].img[0]" :alt="state[0].serie" class="w-20 cursor-pointer"
                                @click="currentSlide = 1">
                            <img :src="state[0].img[1]" :alt="state[0].serie" class="w-20 cursor-pointer"
                                @click="currentSlide = 2">

                        </div>


                    </div>
                </div>
                <div id="info" class="mt-4 md:mt-0 md:w-1/3 flex flex-col">
                    <h2 class="text-3xl font-semibold uppercase pb-6">{{ state[0].nombre }}</h2>
                    <h2 class="text-xl font-medium pb-6">MIMI JOYERÍA</h2>
                    <a :href="sendMessage(state)" target="_blank"
                        class="border border-black w-full mb-6 py-2 text-center text-white bg-neutral-600 font-medium hover:bg-white hover:text-neutral-600 duration-100">CONTACTAR</a>
                    <h2 class="text-xl font-medium pb-6">{{ state[0].titulo }}</h2>

                    <div id="socials">
                        <h2>Compartir en:</h2>
                        <div class="flex items-center gap-4 mt-2">
                            <ShareSocialsButton social="facebook" />
                            <ShareSocialsButton social="x" />
                            <ShareSocialsButton social="pinterest" />
                        </div>
                    </div>

                </div>

            </section>

            <section class="flex items-center justify-center h-44">
                <button
                    class="uppercase border border-black py-4 px-10 text-neutral-600 bg-white hover:text-white hover:bg-neutral-600 duration-100 "
                    @click="goBack()">
                    <font-awesome-icon :icon="['fas', 'arrow-left']" />
                    <span class="pl-2">Volver </span>
                </button>
            </section>


        </div>



    </main>
</template>



