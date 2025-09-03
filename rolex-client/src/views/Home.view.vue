<script setup>
import { useElementVisibility, useWindowSize } from "@vueuse/core";
import { computed, onMounted, ref, useTemplateRef } from "vue";
import { useRouter } from "vue-router";
import POSBanner from '../components/banners-components/POSBanner.vue';

const counter = ref(0);
const classes = ref([
  "translate-x-0",
  "-translate-x-[100%]",
  "-translate-x-[200%]",
]);

const { width } = useWindowSize();
const target = useTemplateRef("target")
const targetIsVisible = useElementVisibility(target)
const checkWindowSize = computed(() => {
  if (width.value < 768) {
    return true;
  }
  return false;
});

const router = useRouter();
const links = [
  "/rolex/yacht-master",
  "/rolex/world-of-rolex/resistencia",
  "/tudor",
]
function checkClick(pos) {
  router.push(links[pos]);
}

onMounted(() => {
  setInterval(() => {
    if (counter.value == 2) {
      counter.value = 0;
    } else {
      counter.value++;
    }
  }, 5000);
});

function changeCounter(direction){
  if(direction == 'r'){
    if(counter.value == 2){
      counter.value = 0
    }else{
       counter.value++
    }
  }else{
    if(counter.value == 0){
      counter.value = 2
    }else{
       counter.value--
    }
    
  }
}

</script>

<template>
  <div id="main-content" class="font-montserrat">

    <div class="relative z-0 h-[300px] md:h-[650px] w-full pb-20">
      <div v-if="!checkWindowSize" class="overflow-hidden">
        <div class="duration-500 flex cursor-pointer" :class="classes[counter]">
          <img @click="checkClick(counter)" rel="preload" fetchpriority="high" as="image"
            src="/assets/routes-assets/headers/1-desktop.webp" alt="headers-1-desktop" />
          <img @click="checkClick(counter)" rel="preload" fetchpriority="low" as="image"
            src="/assets/routes-assets/headers/2-desktop.webp" alt="headers-2-desktop" />
          <img @click="checkClick(counter)" rel="preload" fetchpriority="low" as="image"
            src="/assets/routes-assets/headers/3-desktop.webp" alt="headers-3-desktop" />
        </div>
      </div>
      <div v-else class="overflow-hidden">
        <div class="duration-500 flex" :class="classes[counter]">
          <img @click="checkClick(counter)"  src="/assets/routes-assets/headers/1-mobile.webp"
            alt="headers-1-mobile" />
          <img @click="checkClick(counter)"  src="/assets/routes-assets/headers/2-mobile.webp"
            alt="headers-2-mobile"  />
          <img @click="checkClick(counter)"  src="/assets/routes-assets/headers/3-mobile.webp"
            alt="headers-3-mobile"  />
        </div>
      </div>



      <button aria-label="Previous" class="absolute top-[45%] md:left-10 md:bg-main-green w-8 h-8 rounded-full md:border border-main-green md:hover:bg-white duration-200 " @click="changeCounter('l')">
        <font-awesome-icon :icon="['fas', 'chevron-left']" class="text-rolex-green"/>
      </button>
      <button aria-label="Next" class="absolute top-[45%] right-0 md:right-10 md:bg-main-green w-8 h-8 rounded-full md:border border-main-green md:hover:bg-white duration-200 " @click="changeCounter('r')">
        <font-awesome-icon :icon="['fas', 'chevron-right']" class="text-rolex-green"/>
      </button>
    </div>
    <main ref="target" class=" pt-14">
      <section v-if="targetIsVisible">
        <div id="joyeria" class="md:h-64 mt-8 flex flex-col items-center justify-start pt-10 mb-20 text-neutral-600">
          <div class="mb-4 flex flex-col md:flex-row items-center justify-center w-full">
            <!-- The left line -->
            <span class="block h-px w-1/3 md:w-1/6 bg-neutral-300"></span>
            <!-- Your text here -->
            <h1 class="text-center text-3xl tracking-widest mx-4 my-4 font-medium">
              PRESENTE EN TUS MOMENTOS ESPECIALES
            </h1>

            <!-- The right line -->
            <span class="block h-px w-1/3 md:w-1/6 bg-neutral-300"></span>
          </div>
        </div>

        <div id="home-section"
          class="flex flex-col  md:flex-row items-center justify-evenly gap-10 text-neutral-700 w-full ">
          <div class="w-3/4 md:w-1/3 ">
            <img class="w-full duration-500 hover:scale-105" v-lazy="'/assets/routes-assets/Home/home-1.webp'"
              alt="mujer-gargantilla" />
          </div>
          <div class="w-3/4 md:w-1/3 text-center">
            <h2 class="my-4 text-3xl">UNA JOYA QUE TE COMPLEMENTA</h2>
            <p class="mb-8 text-xl">
              Descubre un mundo de opciones en joyería para ti.
            </p>
            <router-link to="/joyeria"
              class="bg-neutral-500 px-6 py-4 my-4 rounded-lg text-white shadow-2xl hover:bg-neutral-600">DESCUBRIR</router-link>
          </div>
        </div>

        <POSBanner class="mt-36 mb-10  md:mb-0" />

        <div id="home-section-2"
          class="flex flex-col md:flex-row-reverse items-center justify-evenly gap-8 h-screen text-neutral-700">
          <img class="w-3/4 md:w-1/3 duration-500 hover:scale-110" v-lazy="'/assets/routes-assets/Home/home-2.webp'"
            alt="brazaletes-oro" />
          <div class="w-3/4 md:w-1/3 text-center">
            <h2 class="text-3xl">NUEVA COLECCIÓN</h2>
            <p class="my-6 text-xl">
              Encuentra aquí nuestras nuevas esclavas en ORO 18KT.
            </p>
            <p class="text-xl">¡Hay una perfecta para ti!</p>
          </div>
        </div>

        <div id="relojes">
          <div class="flex flex-col md:flex-row items-center justify-center w-full">
            <!-- The left line -->
            <span class="block h-px w-1/3 md:w-1/6 bg-neutral-300"></span>
            <!-- Your text here -->
            <h1 class="text-center text-3xl tracking-widest mx-4 font-medium text-neutral-700">
              PRESENTE EN TUS MOMENTOS ESPECIALES
            </h1>

            <!-- The right line -->
            <span class="block h-px w-1/3 md:w-1/6 bg-neutral-300"></span>
          </div>

          <div class="flex flex-col md:flex-row w-full md:justify-center overflow-x-hidden text-neutral-700 mb-10">
            <div class="flex flex-col items-center justify-center">
              <router-link :to="{ name: 'reloj', params: { id: 'tudor' } }">
                <img v-lazy="'/assets/routes-assets/Home/tudor-1.webp'" alt="tudor-black-bay-gmt"
                  class="duration-500 hover:scale-110 w-96 pb-4" />
              </router-link>
              <h2 class="text-xl font-light">1926</h2>
              <h2 class="text-xl font-light">TUDOR</h2>
            </div>
            <div class="flex flex-col items-center justify-center">
              <router-link :to="{ name: 'reloj', params: { id: 'longines' } }">
                <img v-lazy="'/assets/routes-assets/Home/tudor-2.webp'" alt="longiness-hydrocontest"
                  class="duration-500 hover:scale-110 w-96 pb-4" />
              </router-link>
              <h2 class="text-xl font-light">Black Bay 58 18K</h2>
              <h2 class="text-xl font-light">TUDOR</h2>
            </div>

            <div class="flex flex-col items-center justify-center">
              <router-link :to="{ name: 'reloj', params: { id: 'victorinox' } }">
                <img v-lazy="'/assets/routes-assets/Home/tudor-3.webp'" alt="victorinox-maverick-sport"
                  class="duration-500 hover:scale-110 w-96 pb-4" />
              </router-link>
              <h2 class="text-xl font-light">Pelagos FXD</h2>
              <h2 class="text-xl font-light">TUDOR</h2>

            </div>
          </div>
        </div>

        <div class="py-10 w-full flex justify-center">
          <router-link :to="{ name: 'world-of-rolex-article-10' }" class="w-[90%]" aria-label="World of Rolex">

            <img src="/assets/routes-assets/activations/endurance-banner-desktop.webp" alt="" v-if="!checkWindowSize">
            <img src="/assets/routes-assets/activations/endurance-banner-mobile.webp" alt="" v-else>
          </router-link>
        </div>

        <img v-if="!checkWindowSize" src="/assets/routes-assets/Home/banner-graduate.webp" alt="banner-graduacion" />
      </section>
    </main>
  </div>
</template>