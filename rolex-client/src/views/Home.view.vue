<script setup>
import { computed, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useWindowSize } from "@vueuse/core";
import headerSliderDataServices from "../services/headerSliderDataServices";
import { useHead } from "@unhead/vue";

useHead({
  
})

const counter = ref(0);
const classes = ref([
  "translate-x-0",
  "-translate-x-[100%]",
  "-translate-x-[200%]",
]);
const { width } = useWindowSize();

const checkWindowSize = computed(() => {
  if (width.value < 768) {
    return true;
  }
  return false;
});

const router = useRouter();

function checkClick(pos) {
  console.log(pos);

  if (pos === 1) {
    headerSliderDataServices
      .clickBanner("banner")
      .then(() => {
        router.push("/tudor");
      })
      .catch((e) => {
        console.log(e);
      });
  } else {
    router.push("/rolex/datejust");
  }
}

const jewelSlideshow = [
  "compromiso",
  "regalos",
  "graduacion",
  "bautizo",
  "matrimonio",
  "nacimiento",
];
onMounted(() => {
  setInterval(() => {
    if (counter.value == 2) {
      counter.value = 0;
    } else {
      counter.value++;
    }
  }, 5000);
});
</script>

<template>
  <div id="main-content" class="font-montserrat">
    <div class="relative z-0 min-h-[650px] w-full">
      <div v-if="!checkWindowSize" class="overflow-hidden">
        <div class="duration-500 flex cursor-pointer" :class="classes[counter]">
          <img
            @click="checkClick(counter)"
            rel="preload" fetchpriority="high" as="image"
            src="/assets/routes-assets/headers/1-desktop.webp"
            alt="headers-1-desktop"
          />
          <img
            @click="checkClick(counter)"
            rel="preload" fetchpriority="low" as="image"
            src="/assets/routes-assets/headers/2-desktop.webp"
            alt="headers-2-desktop"
          />
         
        </div>
      </div>
      <div v-else class="overflow-hidden">
        <div class="duration-500 flex" :class="classes[counter]">
          <img
            @click="checkClick(counter)"
            rel="preload"
            src="/assets/routes-assets/headers/1-mobile.webp"
            alt="headers-1-mobile"
            fetchpriority="high"
          />
          <img
            @click="checkClick(counter)"
            rel="preload"
            src="/assets/routes-assets/headers/2-mobile.webp"
            alt="headers-2-mobile"
            fetchpriority="high"
          />
         
        </div>
      </div>
    </div>

    <div
      v-once
      id="joyeria"
      class="h-[400px] md:h-64 mt-8 flex flex-col items-center justify-start pt-10 mb-20 text-neutral-600"
    >
      <div
        class="mb-4 flex flex-col md:flex-row items-center justify-center w-full"
      >
        <!-- The left line -->
        <span class="block h-px w-1/3 md:w-1/6 bg-neutral-300"></span>
        <!-- Your text here -->
        <h1 class="text-center text-3xl tracking-widest mx-4 my-4 font-medium">
          PRESENTE EN TUS MOMENTOS ESPECIALES
        </h1>

        <!-- The right line -->
        <span class="block h-px w-1/3 md:w-1/6 bg-neutral-300"></span>
      </div>

      <div v-if="!checkWindowSize" class="hidden md:block">
        <div class="flex justify-center gap-6">
          <div
            v-for="slide in jewelSlideshow"
            class="flex-col justify-center items-center duration-500 hover:scale-110"
            :key="slide"
          >
            <img
              class="w-36"
              :src="`/assets/routes-assets/Home/${slide}-home-mini.webp`"
              :alt="slide"
            />
            <h2 class="text-center uppercase">{{ slide }}</h2>
          </div>
        </div>
      </div>
    </div>

    <div
      v-once
      id="home-section"
      class="flex flex-col md:flex-row items-center justify-evenly gap-10 text-neutral-700 w-full pb-10"
    >
      <div class="w-3/4 md:w-1/3 h-72">
        <img
          class="w-full duration-500 hover:scale-110"
          v-lazy="'/assets/routes-assets/Home/home-1.webp'"
          
          alt="mujer-gargantilla"
        />
      </div>
      <div class="w-3/4 md:w-1/3 text-center">
        <h2 class="my-4 text-3xl">UNA JOYA QUE TE COMPLEMENTA</h2>
        <p class="mb-8 text-xl">
          Descubre un mundo de opciones en joyería para ti.
        </p>
        <router-link
          to="/joyeria"
          class="bg-neutral-500 px-6 py-4 my-4 rounded-lg text-white shadow-2xl hover:bg-neutral-600"
          >DESCUBRIR</router-link
        >
      </div>
    </div>

    <div
      v-once
      id="home-section-2"
      class="flex flex-col md:flex-row-reverse items-center justify-evenly gap-8 h-screen text-neutral-700"
    >
      <img
        class="w-3/4 md:w-1/3 duration-500 hover:scale-110"
        v-lazy="'/assets/routes-assets/Home/home-2.webp'"
        alt="brazaletes-oro"
      />
      <div class="w-3/4 md:w-1/3 text-center">
        <h2 class="text-3xl">NUEVA COLECCIÓN</h2>
        <p class="my-6 text-xl">
          Encuentra aquí nuestras nuevas esclavas en ORO 18KT.
        </p>
        <p class="text-xl">¡Hay una perfecta para ti!</p>
      </div>
    </div>

    <div id="relojes"
      v-once>
      <div class="flex flex-col md:flex-row items-center justify-center w-full">
        <!-- The left line -->
        <span class="block h-px w-1/3 md:w-1/6 bg-neutral-300"></span>
        <!-- Your text here -->
        <h1
          class="text-center text-3xl tracking-widest mx-4 font-medium text-neutral-700"
        >
          PRESENTE EN TUS MOMENTOS ESPECIALES
        </h1>

        <!-- The right line -->
        <span class="block h-px w-1/3 md:w-1/6 bg-neutral-300"></span>
      </div>

      <div
        class="flex flex-col md:flex-row w-full md:justify-center overflow-x-hidden text-neutral-700 mb-10"
      >
        <div class="flex flex-col items-center justify-center">
          <router-link :to="{ name: 'reloj', params: { id: 'tudor' } }">
            <img
              v-lazy="'/assets/routes-assets/Home/TUDOR.webp'"
              alt="tudor-black-bay-gmt"
              class="duration-500 hover:scale-110"
            />
          </router-link>
          <h3 class="text-xl font-light">Black Bay GMT S&G</h3>
          <h3 class="text-xl font-light">TUDOR</h3>
        </div>
        <div class="flex flex-col items-center justify-center">
          <router-link :to="{ name: 'reloj', params: { id: 'longines' } }">
            <img
              v-lazy="'/assets/routes-assets/Home/LONGINESS.webp'"
              alt="longiness-hydrocontest"
              class="duration-500 hover:scale-110"
            />
          </router-link>
          <h3 class="text-xl font-light">Longines Hydroconquest</h3>
          <h3 class="text-xl font-light">LONGINESS</h3>
        </div>

        <div class="flex flex-col items-center justify-center">
          <router-link :to="{ name: 'reloj', params: { id: 'victorinox' } }">
            <img
              v-lazy="'/assets/routes-assets/Home/VICTORINOX.webp'"
              alt="victorinox-maverick-sport"
              class="duration-500 hover:scale-110"
            />
          </router-link>
          <h3 class="text-xl font-light">Victorinox Maverick Sport</h3>
          <h3 class="text-xl font-light">VICTORINOX</h3>
        </div>
      </div>
    </div>

    <img
      v-if="!checkWindowSize"
      src="/assets/routes-assets/Home/banner-graduate.webp"
      alt="banner-graduacion"
    />
  </div>
</template>