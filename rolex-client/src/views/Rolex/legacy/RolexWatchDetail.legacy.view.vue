<script setup>
import { ref } from 'vue';
import { useAsyncState } from '@vueuse/core'

import router from '../../router'
import { RouterLink, useRoute } from 'vue-router';

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

import RolexTemplate from './RolexTemplate.view.vue'
import RolexDataServices from '../../services/rolexDataService'
import ContactWatchRolex from '../../components/global-components/ContactWatchRolex.vue'
import ServerError from '../../components/cards/ServerError.vue'

const windowWidth = ref(window.innerWidth)
const currentSlide = ref(0)
const route = useRoute()
const currentRoute = route.params.id


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
const breakpoints2 = {
    500: {
        // 500px and up
        itemsToShow: 1,
        snapAlign: 'center',
    }
    ,
    700: {
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

let { isLoading, state, isReady, execute } = useAsyncState(
    RolexDataServices.getDetailedWatch(currentRoute)
        .then((d) => {
            return d.data
        })
)

function addComma(price) { return `${price.slice(0, price.length - 3)},${price.slice(price.length - 3, price.length)}` }

function parseModelNumber(number) {

    return number.slice(1, number.indexOf('-'))
}

function getHeaderImg(img) {
    return img[Object.keys(img)[Object.keys(img).length - 1]]
}

function getColors(colors) {
    if (colors == 'Amarillo') {
        return 'md:to-[#c7b69c] md:from-[#392e1b]'
    }
    if (colors == 'Rosado') {
        return 'md:to-[#c7ae9e] md:from-[#32241b]'
    }

    return 'md:to-[#b6b6b4] md:from-[#1b1917]'

}
function getResponsiveColors(colors) {
    if (windowWidth.value < 768) {
        if (colors == 'Amarillo') {
            return 'to-[#c7b69c] from-[#392e1b]'
        }
        if (colors == 'Rosado') {
            return 'to-[#c7ae9e] from-[#32241b]'
        }

        return 'to-[#b6b6b4] from-[#1b1917]'
    }

}


</script>

<template>
    <div id="new-models">
        <RolexTemplate>
            <template #content>
                <div v-if="isReady" class="mb-44">
                    <div v-if="state">
                       
                        <div id="banner" :class="getColors(state.details[0].color)"
                            class="m-4 bg-linear-to-t flex flex-col-reverse md:flex-row ">

                            <div id="carousel" class="md:w-3/4 bg-linear-to-t"
                                :class="getResponsiveColors(state.details[0].color)">
                                <carousel :items-to-show="1" :wrap-around="false" v-model="currentSlide">
                                    <slide v-for="slide in state.details[0].sliderImg" :key="slide">
                                        <img :src="state.details[1].img[slide - 1]" :alt="slide.alt">
                                    </slide>

                                    <template #addons>
                                        <navigation />

                                    </template>
                                </carousel>
                            </div>


                            <div class="md:text-white  w-full md:w-1/2 flex flex-col items-center justify-center md:ml-32 ">
                                <header class=" text-center md:text-left w-full">
                                    <h2 class="">Rolex</h2>
                                    <h2 class=" text-4xl my-4 font-vilsuve font-bold">{{ state.getAll.nombre }}</h2>
                                    <h2 class="font-arial-light">{{ state.getAll.cajaDelModelo }}</h2>
                                    <h2 class="font-arial-light">Precio ${{ addComma(state.details[0].precio) }}</h2>
                                    <a href="#" class="underline font-arial-light hidden md:block ">Disponibilidad del
                                        modelo</a>
                                </header>

                                <div id="info" class=" hidden md:block w-full">
                                    <div class="flex items-center gap-4 my-6  ">
                                        <a href="#"
                                            class="group border border-white w-10 h-10 p-3 rounded-full flex hover:bg-white duration-200">
                                            <font-awesome-icon :icon="['fas', 'phone']"
                                                class=" group-hover:text-rolex-green " />
                                        </a>
                                        <p class="font-arial-light">+58 212-3008741</p>
                                    </div>
                                    <div class="flex items-center gap-4 my-6  ">
                                        <a href="#"
                                            class="group border border-white w-10 h-10 p-3 rounded-full flex hover:bg-white duration-200">
                                            <font-awesome-icon :icon="['fas', 'envelope']"
                                                class="group-hover:text-rolex-green" />
                                        </a>
                                        <p class="font-arial-light">Contáctenos</p>
                                    </div>
                                </div>



                                <div id="slider-nav" class="hidden md:flex w-full ">

                                    <div class="flex w-10/12 gap-2">
                                        <div class="hover:bg-gray-400"
                                            :class="[item == currentSlide + 1 ? 'bg-gray-400' : 'bg-white']"
                                            v-for="item in state.details[0].sliderImg" :key="item">
                                            <div @click="currentSlide = item - 1">
                                                <img :src="state.details[1].img[item - 1]"
                                                    :alt="state.details[1].img[item - 1]" class="w-32">
                                            </div>
                                        </div>


                                    </div>


                                </div>
                            </div>
                        </div>


                        <section id="info" class="flex my-2 p-8 md:p-14 flex-col-reverse md:flex-row">
                            <div id="info-text" class="w-full md:w-1/2 flex flex-col justify-center items-center">
                                <div>
                                    <div>
                                        <p class="uppercase font-arial-bold font-bold">NÚMERO de modelo</p>
                                        <p class="uppercase font-arial-light p-0">{{ parseModelNumber(state.getAll.modelo)
                                        }}
                                        </p>
                                    </div>
                                    <div>
                                        <p class="uppercase font-arial-bold font-bold">CAJA DEL MODELO</p>
                                        <p class="font-arial-light p-0">{{ state.getAll.cajaDelModelo }}</p>
                                    </div>
                                    <div>
                                        <p class="uppercase font-arial-bold font-bold">Bisel</p>
                                        <p class=" font-arial-light p-0">{{ state.details[0].bisel }}</p>
                                    </div>
                                    <div>
                                        <p class="uppercase font-arial-bold font-bold">hermeticidad</p>
                                        <p class=" font-arial-light p-0">{{ state.details[0].hermeticidad }}</p>
                                    </div>
                                    <div>
                                        <p class="uppercase font-arial-bold font-bold">movimiento</p>
                                        <p class=" font-arial-light p-0">{{ state.details[0].movimiento }}</p>
                                    </div>
                                    <div>
                                        <p class="uppercase font-arial-bold font-bold">calibre</p>
                                        <p class=" font-arial-light p-0">{{ state.details[0].calibre }}</p>
                                    </div>
                                    <div>
                                        <p class="uppercase font-arial-bold font-bold">reserva de marcha</p>
                                        <p class=" font-arial-light p-0">{{ state.details[0].reservaDeMarcha }}</p>
                                    </div>
                                    <div>
                                        <p class="uppercase font-arial-bold font-bold">brazalete</p>
                                        <p class=" font-arial-light p-0">{{ state.details[0].brazalete }}</p>
                                    </div>
                                    <div>
                                        <p class="uppercase font-arial-bold font-bold">esfera</p>
                                        <p class=" font-arial-light p-0">{{ state.details[0].esfera }}</p>
                                    </div>
                                    <div>
                                        <p class="uppercase font-arial-bold font-bold">certificacion</p>
                                        <p class=" font-arial-light p-0">{{ state.details[0].certificacion }}</p>
                                    </div>
                                </div>
                            </div>
                            <div id="info-img" class="w-full md:w-1/2">
                                <img :src="getHeaderImg(state.details[1].img)" alt="side-img">
                            </div>
                        </section>


                        <section id="info" class="flex my-2 px-10 md:px-16 pb-10 flex-col-reverse md:flex-row-reverse">
                            <div id="info-text" class="w-full md:w-1/2 flex flex-col justify-center items-center">
                                <div class="md:w-8/12">
                                    <h1 class="block text-left text-4xl scale-x-[1] scale-y-[0.8]">{{
                                        state.headers[0].header1
                                    }}</h1>
                                    <h1 class="leading-relaxed ">{{ state.headers[0].texto1 }}</h1>
                                </div>
                            </div>
                            <div id="info-img" class="w-full md:w-1/2">
                                <img :src="state.headers[0].img[0]" :alt="state.headers[0].imagen1">
                            </div>
                        </section>

                        <section id="info" class="flex my-2 px-10 md:px-16 pb-10 flex-col-reverse md:flex-row">
                            <div id="info-text" class="w-full md:w-1/2 flex flex-col justify-center items-center">
                                <div class="md:w-8/12">
                                    <h1 class="block text-left text-4xl scale-x-[1] scale-y-[0.8]">{{
                                        state.headers[0].header2
                                    }}</h1>
                                    <h1 class="leading-relaxed ">{{ state.headers[0].texto2 }}</h1>
                                </div>
                            </div>
                            <div id="info-img" class="w-full md:w-1/2">
                                <img :src="state.headers[0].img[1]" :alt="state.headers[0].imagen2">
                            </div>
                        </section>

                        <section id="info" class="flex my-2 px-10 md:px-16 pb-10 flex-col-reverse md:flex-row-reverse">
                            <div id="info-text" class="w-full md:w-1/2 flex flex-col justify-center items-center">
                                <div class="md:w-8/12">
                                    <h1 class="block text-left text-4xl scale-x-[1] scale-y-[0.8]">{{
                                        state.headers[0].header3
                                    }}</h1>
                                    <h1 class="leading-relaxed ">{{ state.headers[0].texto3 }}</h1>
                                </div>
                            </div>
                            <div id="info-img" class="w-full md:w-1/2">
                                <img :src="state.headers[0].img[2]" :alt="state.headers[0].imagen3">
                            </div>
                        </section>

                        <section class="bg-[#f8f8f8] flex flex-col justify-center items-center">
                            <img src="/assets/routes-assets/scarcity-corners.png" alt="rolex-corner"
                                class="w-1/2 md:w-1/3 py-20">
                            <h1 class="block  text-3xl scale-x-[1] scale-y-[0.8] pb-6 w-1/2 md:w-full text-center">
                                DISPONIBILIDAD DEL MODELO</h1>
                            <h1 class="leading-relaxed text-md w-10/12 md:w-7/12 text-justify md:text-center pb-16">
                                Todos los relojes Rolex se ensamblan a mano con sumo cuidado para responder a los elevados
                                estándares de calidad de la marca. Naturalmente, tal nivel de exigencia condiciona la
                                capacidad
                                de producción de Rolex y una gran demanda puede limitar la disponibilidad de determinados
                                modelos Rolex.
                                <br>
                                Los nuevos relojes Rolex están disponibles exclusivamente en los distribuidores oficiales,
                                que
                                se surten con regularidad y gestionan de manera independiente la distribución y las ventas
                                de
                                los relojes a sus clientes.

                                <br>
                                Mimi Joyería se enorgullece de formar parte de la red mundial de Distribuidores Oficiales
                                Rolex
                                y puede proporcionar información sobre la disponibilidad de los relojes Rolex.
                            </h1>


                        </section>

                        <section class="my-10" v-if="state.getAll.videoAdjust != false">
                            <div class="w-full flex flex-col items-center justify-center">

                                <div class="h-screen w-full flex justify-center">
                                    <div class="aspect-w-16 w-full md:w-3/4 h-full">
                                        <iframe :src="state.getAll.videoAdjust" title="YouTube video player" frameborder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowfullscreen></iframe>
                                    </div>

                                </div>

                                <div class="flex flex-col items-center text-center my-10 w-10/12 md:w-2/6">
                                    <h2 class="block w-10/12 uppercase  text-4xl scale-x-[1] scale-y-[0.8]">CÓMO AJUSTAR SU
                                        {{ state.getAll.nombre }}</h2>
                                    <h2 class="leading-relaxed ">Sinónimos de excelencia y fiabilidad, los relojes Rolex
                                        están
                                        diseñados para el día a día, y en función del modelo, se adaptan perfectamente a una
                                        gran variedad de actividades y deportes. Creados para perdurar, estos relojes se
                                        caracterizan por su distintiva estética atemporal. {{ state.getAll.videoAdjustText
                                        }}
                                        Descubra más sobre sus características y cómo ajustar la hora al ver el vídeo.</h2>
                                </div>
                            </div>
                        </section>


                        <div v-if="state.collection[0] != undefined">
                            <section v-if="state.collection[0].hasVideo">
                                <div class="h-[50vh] md:h-screen flex justify-center">
                                    <div class="aspect-w-16 w-full md:w-3/4 h-full">
                                        <iframe :src="state.collection[0].video" title="YouTube video player"
                                            frameborder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowfullscreen></iframe>
                                    </div>

                                </div>
                                <div class="flex flex-col items-center justify-center my-10 ">
                                    <h2 class="font-arial-bold font-bold text-justify md:text-center w-10/12 md:w-2/3 ">{{
                                        state.collection[0].text }}</h2>
                                </div>

                            </section>
                        </div>


                        <section class="group relative h-fit overflow-hidden">
                            <header
                                class=" absolute z-10  bg-opaco w-full h-full flex flex-col justify-center items-center text-white">
                                <h2>{{ state.collection[0].nombre }}</h2>
                                <h1 class="block text-left text-2xl md:text-4xl py-8">{{ state.collection[0].subHeader }}</h1>

                                <router-link :to="{ name: 'coleccion-rolex' }"
                                    class="border border-white px-8 py-2 rounded-3xl group-hover:bg-white group-hover:text-rolex-green duration-700">
                                    Ver todos los modelos
                                </router-link>
                            </header>


                            <div>

                                <img class="w-full group-hover:scale-110 hidden md:block  duration-700"
                                    :src="state.collection[0].fileLandscape" alt="banner-img">
                                <img class="w-full block md:hidden " :src="state.collection[0].fileMobile" alt="banner-img">
                            </div>
                        </section>

                        <ContactWatchRolex
                            :message="`Me interesa el Rolex ${state.getAll.nombre} (Modelo de referencia ${state.getAll.modelo})`" 
                            :watch="state.getAll.nombre"
                            :modelo="state.getAll.modelo"
                            :cajaDelModelo="state.getAll.cajaDelModelo"
                            />

                        <section class="flex flex-col justify-center items-center">

                            <h1 class="block text-center md:text-left text-4xl py-8">Tambien puede interesarle...</h1>
                            <div id="carousel" class="w-9/12">
                                <carousel :breakpoints="breakpoints2" :wrap-around="false">
                                    <slide v-for="(slide, index) in state.sliderCollection" :key="index">


                                        <a :href="`/relojes/${state.sliderCollection[index].modelo}`">

                                            <img :src="slide.img" :alt="slide.modelo">
                                            <h2 class="uppercase text-center ">Rolex</h2>
                                            <h2 class="uppercase text-center font-bold">{{ slide.nombre }}</h2>
                                            <h2 class="text-center text-xs font-extralight">{{ slide.cajaDelModelo }}</h2>

                                        </a>
                                    </slide>

                                    <template #addons>
                                        <navigation />


                                    </template>
                                </carousel>
                            </div>
                        </section>


                    </div>

                    <ServerError v-else />
                </div>



            </template>
        </RolexTemplate>

    </div>
</template>

