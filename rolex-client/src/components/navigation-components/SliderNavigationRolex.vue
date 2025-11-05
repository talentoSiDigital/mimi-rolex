<script setup>
import { computed, ref } from 'vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { filename } from 'pathe/utils'
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()
const isDesktop = computed(()=>{
    return width.value >= 1024 ? true : false
})

const currentSlide = ref(0)

const breakpoints = {
    300: {
        itemsToShow: 2,
        snapAlign: 'center',
    }
    ,
    1024: {
        // 1024 and up
        itemsToShow: 4,
        snapAlign: 'start',
    }
}

const sliderItems = [
    {
        "src": "descubre-rolex",
        "link": "rolex",
        "alt": "descubre-rolex",
        "title": "Descubre Rolex"

    },

    {
        "src": "coleccion-rolex",
        "link": "coleccion-rolex",
        "alt": "Coleccion-Rolex",
        "title": "Colección Rolex"

    },
    {
        "src": "nuevos-modelos",
        "link": "rolex-nuevos-modelos",
        "alt": "Rolex-nuevos-modelos",
        "title": "Nuevos modelos 2025"

    },
    {
        "src": "accesorios",
        "link": "rolex-accesorios",
        "alt": "Rolex-accesorios",
        "title": "Rolex Accesorios"

    },
    {
        "src": "watchmaking",
        "link": "rolex-watchmaking",
        "alt": "Rolex-watchmaking",
        "title": "Rolex Watchmaking"

    },
    {
        "src": "mantenimiento",
        "link": "mantenimiento-rolex",
        "alt": "Rolex-mantenimiento",
        "title": "Mantenimiento Rolex"

    },
    {
        "src": "world-of-rolex",
        "link": "world-of-rolex-hub",
        "alt": "world-of-rolex",
        "title": "World of Rolex"

    },


    {
        "src": "contacto",
        "link": "rolex-contacto",
        "alt": "contacto-mimi-joyeria",
        "title": "Contacto"

    }

]


const carouselNavigation = computed(()=>{
    return isDesktop.value ? sliderItems.length - 4 : sliderItems.length - 2
})



function updateSlide(dir){
    if(dir === 'next'){
        if(currentSlide.value < sliderItems.length - (isDesktop.value ? 4 : 2)){
            currentSlide.value++
        }else{
            currentSlide.value = 0
        }
    } else {
        if(currentSlide.value > 0){
            currentSlide.value--
        }else{
            currentSlide.value = sliderItems.length - (isDesktop.value ? 4 : 2)
        }
    }
}

setInterval(() => {
    updateSlide('next')
}, 5000);



</script>

<template>
    <section id="rolex-footer-slider" class=" my-8 py-4 w-full flex flex-col items-center justify-center ">
        <h2 class="font-bold mb-4 w-9/12 text-4xl font-helvetica-bold text-rolex-brown">Explorar Más </h2>
        <div id="carousel" class="w-full md:w-10/12 flex items-center justify-center gap-4">
            <font-awesome-icon v-if="isDesktop" :icon="['fas', 'chevron-left']"
                class="bg-rolex-grey-light h-4 w-4 px-4 py-3 cursor-pointer rounded-full duration-200 hover:bg-rolex-green hover:text-white  "
                @click="updateSlide('prev')" />

            <carousel :items-to-show="isDesktop ? 4 : 2" :snap-align="'start'" v-model="currentSlide" :itemsToScroll="1" 
                :transition="600" class="w-11/12 md:w-full  ">
                <slide v-for="slide in sliderItems" :key="slide">
                    <router-link :to="{ name: slide.link }" class="mx-1 group ">
                        <img v-if="isDesktop" :src="`/assets/routes-assets/rolex-slider/${slide.src}.webp`" :alt="slide.alt"
                            class="w-full lg:w-full">
                        <img v-else :src="`/assets/routes-assets/rolex-slider/${slide.src}-mobile.webp`" :alt="slide.alt"
                            class="w-full lg:w-full">
                        <h2
                            class="duration-200 group-hover:text-rolex-green-2 text-rolex-brown text-lg font-helvetica font-bold text-left">
                            {{ slide.title }}</h2>
                    </router-link>
                </slide>

            </carousel>

            <font-awesome-icon v-if="isDesktop" :icon="['fas', 'chevron-right']"
                class="bg-rolex-grey-light h-4 w-4 px-4 py-3 cursor-pointer rounded-full duration-200 hover:bg-rolex-green hover:text-white "
                @click="updateSlide('next')" />

        </div>
      

        <div  class="flex gap-2 my-4">
            <div v-for="(item, index) in carouselNavigation" :key="item" class="h-6 flex items-center"  @click="currentSlide = index">
                <div class="duration-200  h-1 block rounded-sm hover:bg-rolex-green active:bg-rolex-green"
                  
                    :class="currentSlide == index ? 'w-14 bg-rolex-green' : 'w-6 bg-rolex-grey-light'"></div>
            </div>

        </div>
    </section>
</template>

<style scoped></style>
