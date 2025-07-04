<script setup>
import tudorInfo from '../../data/tudorInfoSlider.json';
import { Carousel, Slide, Navigation, Pagination } from "vue3-carousel";
import "vue3-carousel/carousel.css";
import { ref, useTemplateRef } from "vue";
import { useWindowSize } from '@vueuse/core';
import SliderVue from '../global-components/SliderVue.vue';
const {width,height}=useWindowSize()
const counter = ref(0)
const breakpoints = {
    1280: 4,
    1050: 3,
  
    720: 2,
    450: 1,
   
};


function move(dir) {
    if (dir == 1) {
        if (counter.value != 12) {
            counter.value++
        }else{
            counter.value = 0        }
    } else {
        if (counter.value >0) {
            counter.value--
         
        } else{
            counter.value = 12
        }
    }

}


</script>

<template>
    <div class="flex items-center justify-around w-full overflow-hidden">


        <button
            class="duration-200 rounded-full bg-tudor-red w-8 h-8 border border-tudor-red text-white hover:bg-white hover:text-tudor-red relative z-10 "
            @click="move(-1)">
            <font-awesome-icon :icon="['fas', 'chevron-left']" />
        </button>


        <section class="w-11/12">
            <SliderVue :breakpoints="breakpoints" main-color="#be0100" gap="25" n v-model="counter"
                 >
               <div v-for="(item, key) in tudorInfo" :key="key">
                    <div class="w-[300px]">

                        <img :src="`/assets/routes-assets/tudor/tudor-slider-${key}.webp`" alt="" class="">
                        <header class="flex flex-col items-center">
                            <h2 class="py-2 font-tudor-title ">{{ item.title }}</h2>
                            <p class="text-xs text-center w-11/12">{{ item.description }}</p>
                        </header>
                    </div>
                </div>





            </SliderVue>
        </section>
        
        <button
            class="duration-200 rounded-full bg-tudor-red w-8 h-8 border border-tudor-red text-white hover:bg-white hover:text-tudor-red relative z-10 "
            @click="move(1)">
            <font-awesome-icon :icon="['fas', 'chevron-right']" />
        </button>
    </div>
 
</template>

<style scoped>
.carousel__slide {
    align-items: start;
}
</style>
