<script setup>
import { useAsyncState } from '@vueuse/core';
import { ref } from 'vue';

import { useRoute } from 'vue-router';

import 'vue3-carousel/dist/carousel.css';

import SectionNavigationCard from '../../components/cards/SectionNavigationCard.vue';
import RolexDataServices from '../../services/rolexDataService';
import RolexTemplate from './RolexTemplate.view.vue';

const windowWidth = ref(window.innerWidth)
const currentSlide = ref(0)
const route = useRoute()
const currentRoute = route.params.id

console.log(route.params);
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
            console.log(d.data);
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

function capitalizeFirstLetter(inputString) {
  // Convert the entire string to lowercase
  const lowerCaseString = inputString.toLowerCase();
  
  // Capitalize the first letter
  const capitalizedString = lowerCaseString.charAt(0).toUpperCase() + lowerCaseString.slice(1);
  
  return capitalizedString;
}


</script>

<template>
    <div id="new-models">
        <RolexTemplate>
            <template #content>
                <div v-if="isReady" class="">
                    <section class="bg-rolex-brown-light-2 relative md:h-[85vh]">
                        <div class="flex items-center justify-center w-full">

                            <img :src="`https://www.mimijoyeria.com/storage/rolex-relojes-new/${state.getAll.modelo}-showcase.webp`" :alt="`${state.getAll.nombre}-main-image`"
                                class="w-1/2 md:w-1/4">
                        </div>
                        <div class="md:absolute w-full h-full  top-0 flex items-center pl-10 md:pl-24  pb-10 md:pb-0">
                            <div class="font-helvetica md:w-1/3 ">
                                <h2 class="font-bold text-rolex-brown text-2xl">Rolex</h2>
                                <h2 class="font-bold text-rolex-brown  text-6xl">{{ state.getAll.nombre }}</h2>
                                <h2 class="font-light">{{ state.getAll.cajaDelModelo }}</h2>
                                <h2 class="font-light">$ {{ addComma(state.details[0].precio) }} </h2>

                            </div>
                        </div>
                    </section>


                    <section
                        class="flex flex-col-reverse md:flex-row items-center justify-between w-full bg-rolex-brown-light-1 py-[2vh]">
                        <section class="w-2/3 flex flex-col items-center    ">
                            <div class="flex gap-20 justify-center w-full pb-10">
                                <div class="w-1/3  space-y-4">
                                    <header>
                                        <h2 class="text-rolex-brown font-helvetica font-bold text-xl">Referencia</h2>
                                        <p class="font-light">{{ parseModelNumber(state.getAll.modelo) }}</p>
                                    </header>
                                    <header>
                                        <h2 class="text-rolex-brown font-helvetica font-bold text-xl">Caja del modelo
                                        </h2>
                                        <p class="font-light">{{ state.getAll.cajaDelModelo }}</p>
                                    </header>
                                    <header>
                                        <h2 class="text-rolex-brown font-helvetica font-bold text-xl">Hermeticidad</h2>
                                        <p class="font-light">{{ state.details[0].hermeticidad }}</p>
                                    </header>
                                    <header>
                                        <h2 class="text-rolex-brown font-helvetica font-bold text-xl">Bisel</h2>
                                        <p class="font-light">{{ state.details[0].bisel }}</p>
                                    </header>
                                    <header>
                                        <h2 class="text-rolex-brown font-helvetica font-bold text-xl">Esfera</h2>
                                        <p class="font-light">{{ state.details[0].esfera }}</p>
                                    </header>
                                </div>

                                <div class="w-1/3 space-y-4">

                                    <header>
                                        <h2 class="text-rolex-brown font-helvetica font-bold text-xl">Brazalete</h2>
                                        <p class="font-light">{{ state.details[0].brazalete }}</p>
                                    </header>
                                    <header>
                                        <h2 class="text-rolex-brown font-helvetica font-bold text-xl">Movimiento</h2>
                                        <p class="font-light">{{ state.details[0].movimiento }}</p>
                                    </header>
                                    <header>
                                        <h2 class="text-rolex-brown font-helvetica font-bold text-xl">Calibre</h2>
                                        <p class="font-light">{{ state.details[0].calibre }}</p>
                                    </header>
                                    <header>
                                        <h2 class="text-rolex-brown font-helvetica font-bold text-xl">Reserva de marcha
                                        </h2>
                                        <p class="font-light">{{ state.details[0].reservaDeMarcha }}</p>
                                    </header>
                                    <header>
                                        <h2 class="text-rolex-brown font-helvetica font-bold text-xl">Certificación</h2>
                                        <p class="font-light">{{ state.details[0].certificacion }}</p>
                                    </header>
                                </div>

                            </div>
                            <hr class="w-9/12 pb-6">
                            <div class="w-3/4">
                                <a :href="state.details[0].brochure" target="_blank"
                                    class="flex gap-2 font-helvetica text-rolex-green font-bold hover:underline duration-200">

                                    <svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 15 15"
                                        xml:space="preserve" class="w-4">

                                        <path id="icons_x2F_download" class="fill-rolex-green"
                                            d="M15,10v5h-1h-1H2H0v-2v-3h2v3h11v-3H15z M5.5,9.5l2,2l2-2l2-2h-3V0H8H7H6.5v7.5h-3L5.5,9.5z" />
                                    </svg>
                                    <h2>Descargar Folleto</h2>

                                </a>
                            </div>
                        </section>
                        <section class="w-10/12 md:w-1/3">
                            <img :src="state.details[1].img" alt="specs-section-img" class="hidden md:block ">
                            <img :src="state.details[1].imgMobile" alt="specs-section-img-mobile"
                                class="block md:hidden w-full">
                        </section>

                    </section>

                    <section class="flex flex-col items-center w-full bg-rolex-brown-light-2">
                        <div class=" flex flex-col items-center py-[10vh]">
                            <header
                                class="flex flex-col gap-8   justify-around items-center  text-rolex-brown h-fit pb-[10vh]">
                                <h1 class="font-helvetica font-bold text-2xl md:text-5xl w-10/12 md:w-1/2">
                                    {{ state.headers.header1 }}
                                </h1>

                                <p
                                    class="text-rolex-brown w-10/12 md:w-1/2 text-xl font-helvetica font-light text-justify md:text-left ">
                                    {{ state.headers.texto1 }}
                                </p>
                            </header>
                            <section class="w-10/12 md:w-1/2">
                                <img :src="`https://www.mimijoyeria.com/storage/rolex-relojes-new/${state.headers.imagen1}.webp`" alt="heading-img-1"
                                    class="hidden md:block ">
                                <img :src="`https://www.mimijoyeria.com/storage/rolex-relojes-new/${state.headers.imagen1}-mobile.webp`" alt="heading-img-1-mobile"
                                    class="block md:hidden w-full">
                            </section>
                        </div>

                        <div class=" flex flex-col items-center py-[10vh]">
                            <header
                                class="flex flex-col gap-8   justify-around items-center  text-rolex-brown h-fit pb-[10vh]">
                                <h1 class="font-helvetica font-bold text-2xl md:text-5xl w-10/12 md:w-1/2">
                                    {{ state.headers.header2 }}
                                </h1>

                                <p
                                    class="text-rolex-brown w-10/12 md:w-1/2 text-xl font-helvetica font-light text-justify md:text-left ">
                                    {{ state.headers.texto2 }}
                                </p>
                            </header>
                            <section class="w-10/12 md:w-1/2">
                                <img :src="`https://www.mimijoyeria.com/storage/rolex-relojes-new/${state.headers.imagen2}.webp`" alt="heading-img-2"
                                    class="hidden md:block">
                                <img :src="`https://www.mimijoyeria.com/storage/rolex-relojes-new/${state.headers.imagen2}-mobile.webp`" alt="heading-img-2-mobile"
                                    class="block md:hidden w-full">
                            </section>
                        </div>

                        <div class=" flex flex-col items-center py-[10vh]">
                            <header
                                class="flex flex-col gap-8   justify-around items-center  text-rolex-brown h-fit pb-[10vh]">
                                <h1 class="font-helvetica font-bold text-2xl md:text-5xl w-10/12 md:w-1/2">
                                    {{ state.headers.header3 }}
                                </h1>
                              

                                <p
                                    class="text-rolex-brown w-10/12 md:w-1/2 text-xl font-helvetica font-light text-justify md:text-left ">
                                    {{ state.headers.texto3 }}
                                </p>
                            </header>
                            <section class="w-10/12 ">
                                <img :src="`https://www.mimijoyeria.com/storage/rolex-relojes-new/${state.headers.imagen3}.webp`" alt="heading-img-3"
                                    class="hidden md:block ">
                                <img :src="`https://www.mimijoyeria.com/storage/rolex-relojes-new/${state.headers.imagen3}-mobile.webp`" alt="heading-img-3-mobile"
                                    class="block md:hidden w-full">
                            </section>
                        </div>
                        <div class=" flex flex-col justify-center items-center pt-[10vh] bg-rolex-brown-light-2">
                            <header
                                class="flex flex-col gap-8 w-10/12  justify-around items-center  text-rolex-brown h-fit  bg-white">
                                <img src="/assets/crown-logo-rolex.svg" alt="logo-rolex" class="w-12 py-4">

                                <h1 class="font-helvetica font-bold text-2xl md:text-5xl w-10/12 md:w-1/2 text-center">
                                    Disponibilidad de los modelos
                                </h1>

                                <p
                                    class="text-rolex-brown w-10/12 md:w-1/2 text-xl font-helvetica font-light  text-center ">
                                    Todos los relojes Rolex se ensamblan a mano con sumo cuidado para garantizar una
                                    calidad excep-cional. Unos estándares tan altos limitan naturalmente la capacidad de
                                    producción de Rolex y, a veces, la demanda de relojes Rolex supera esta capacidad.
                                    <br>
                                    <br>
                                    Por lo tanto, la disponibilidad de ciertos modelos puede ser limitada. Los relojes
                                    Rolex nuevos se venden exclusivamente a través de los Distribuidores Oficiales
                                    Rolex, que reciben entregas habitua-les y gestionan de manera independiente la
                                    distribución y las ventas a sus clientes.
                                    <br>
                                    <br>

                                    Mimi Joyería C.A. se enorgullece de formar parte de la red
                                    mundial de Distribui-dores Oficiales Rolex, y puede proporcionar información sobre
                                    la disponibilidad de los relojes Rolex.

                                </p>
                                <img :src="`https://www.mimijoyeria.com/storage/rolex-relojes-new/${state.getAll.modelo}_presentation-box.webp`" alt="box-presentation-img" class=" w-1/2">
                            </header>

                        </div>
                    </section>

                    <section class="bg-rolex-brown-light-2 flex flex-col justify-center items-center py-[10vh]">
                        <div class="w-10/12">
                            <SectionNavigationCard :img="`banners/new-banner-collections-${route.params.colectionName}`"
                                :link="`../${state.collection.nombre.toLowerCase().replace(' ', '-')}`" class="w-full ">
                                <template #sub>Rolex {{capitalizeFirstLetter(state.collection.nombre)}}</template>
                                <template #title>{{state.collection.subHeader}}</template>
                                
                                <template #button>Más información</template>

                            </SectionNavigationCard>
                        </div>
                    </section>
                </div>



            </template>
        </RolexTemplate>

    </div>
</template>
