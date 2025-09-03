<script setup>
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import { ref } from "vue";
import { computed } from "vue";

const sliderItems = [
  
  {
    src: "yacht-master",
    link: {name:'rolex-coleccion-yacht-master'},
    alt: "yacht-master-banner",
    title: "Yacht Master Banner",
  },  
  {
    src: "endurance",
    link: {name:'world-of-rolex-article-10'},
    alt: "endurance",
    title: "Endurance Banner",
  },  
  {
    src: "watchmaking",
    link: {name:'rolex-watchmaking'},
    alt: "watchmaking-banner",
    title: "Watchmaking",
  }
];

const currentSlide = ref(0);
const sizes = []
</script>

<template>
  <section class="w-full flex flex-col items-center justify-center">
      <div class="relative z-10 flex justify-between items-center w-full">
        <font-awesome-icon
          :icon="['fas', 'chevron-left']"
          class="bg-rolex-grey-light h-4 w-2 px-3 py-2 cursor-pointer rounded-full duration-200 hover:bg-rolex-green hover:text-white md:block hidden absolute z-20 left-0 md:left-10"
          @click="currentSlide--"
        />
        <carousel
          :items-to-show="1"
          v-model="currentSlide"
          :wrapAround="true"
          :autoplay="3000"
          :transition="600"
          class="w-full "
        >
          <slide v-for="slide in sliderItems" :key="slide">
            <router-link :to="slide.link" class="group">
              <img
                :src="`/assets/routes-assets/activations/${slide.src}-banner-desktop.webp`"
                :alt="slide.alt"
                class="w-full hidden md:block"
              />
              <img
                :src="`/assets/routes-assets/activations/${slide.src}-banner-mobile.webp`"
                :alt="slide.alt"
                class="w-full block md:hidden"
              />
            </router-link>
          </slide>
        </carousel>

        
    <div class="flex gap-2 justify-center w-full absolute -bottom-6 md:bottom-10">
      <div v-for="(item,index) in sliderItems" :key="item">
        <div
        class="duration-200  h-2 block rounded hover:bg-rolex-green active:bg-rolex-green"
        @click="currentSlide = index" :class="currentSlide == index?'w-14 bg-rolex-green':'w-4 bg-white'"
      ></div>
      </div>
      
    </div>

        <font-awesome-icon
          :icon="['fas', 'chevron-right']"
          class="bg-rolex-grey-light h-4 w-2 px-3 py-2 cursor-pointer rounded-full duration-200 hover:bg-rolex-green hover:text-white md:block hidden absolute z-10 right-6 md:right-10"
          @click="currentSlide++"
        />
      </div>

  </section>
</template>
