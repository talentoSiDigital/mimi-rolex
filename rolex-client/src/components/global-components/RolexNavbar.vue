<script setup>
import { RouterLink } from 'vue-router';

import { ref } from 'vue'

const activate = ref('h-20')

function collapseNav() {
    activate.value == 'h-20' ? activate.value = 'h-fit' : activate.value = 'h-20'
}

</script>

<template>
    <nav>
        <div id="navigation-bar" :class="activate"
            class="relative z-20 flex overflow-hidden flex-col md:flex-row lg:justify-center items-center  shadow-lg gap-2 pb-4 md:pb-0 font-arial">
            <div class="py-6 md:hidden" @click="collapseNav">
                <svg class="w-8 h-8 cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 17 14">
                    <path class="stroke-rolex-green" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M1 1h15M1 7h15M1 13h15" />
                </svg>
            </div>
            <img src="/assets/rolex-retailer.webp" alt="tudor-retailer-badge" class="w-18 md:w-24    ">


            <router-link to="/rolex"
                class="border-b-2 border-transparent hover:bg-rolex-green hover:text-white md:hover:bg-transparent md:hover:border-gray-button px-6 py-2 text-md text-neutral-600  md:hover:text-rolex-green w-full md:w-fit text-center ">
                <h2>Rolex en Mimi Joyería</h2>
            </router-link>

            <router-link to="/nuevos-modelos-2023"
                class="border-b-2 border-transparent hover:bg-rolex-green hover:text-white md:hover:bg-transparent md:hover:border-gray-button px-6 py-2 text-md text-neutral-600 md:hover:text-rolex-green w-full md:w-fit text-center">

                <h2>Nuevos Modelos 2023</h2>
 
            </router-link>

            <router-link to="/coleccion-rolex"
                class="border-b-2 border-transparent hover:bg-rolex-green hover:text-white md:hover:bg-transparent md:hover:border-gray-button px-6 py-2 text-md text-neutral-600 md:hover:text-rolex-green w-full md:w-fit text-center">

                <h2>Colección Rolex</h2>

            </router-link>

            <router-link to="/mantenimiento-rolex"
                class="border-b-2 border-transparent hover:bg-rolex-green hover:text-white md:hover:bg-transparent md:hover:border-gray-button px-6 py-2 text-md text-neutral-600 md:hover:text-rolex-green w-full md:w-fit text-center">

                <h2>Mantenimiento Rolex</h2>

            </router-link>

            <router-link to="/historia"
                class="border-b-2 border-transparent hover:bg-rolex-green hover:text-white md:hover:bg-transparent md:hover:border-gray-button px-6 py-2 text-md text-neutral-600 md:hover:text-rolex-green w-full md:w-fit text-center">

                <h2>Historia</h2>

            </router-link>

            <router-link to="/showroom"
                class="border-b-2 border-transparent hover:bg-rolex-green hover:text-white md:hover:bg-transparent md:hover:border-gray-button px-6 py-2 text-md text-neutral-600 md:hover:text-rolex-green w-full md:w-fit text-center">

                <h2>Showroom</h2>

            </router-link>

            <router-link to="/watchmaking"
                class="border-b-2 border-transparent hover:bg-rolex-green hover:text-white md:hover:bg-transparent md:hover:border-gray-button px-6 py-2 text-md text-neutral-600 md:hover:text-rolex-green w-full md:w-fit text-center">

                <h2>Rolex Watchmaking</h2>

            </router-link>

            <RouterLink to="/contacto">
                <h5
                    class=" border px-6 py-2 rounded-3xl border-rolex-green hover:bg-rolex-green hover:text-white text-rolex-green duration-200">
                    Contactar
                </h5>
            </RouterLink>


    </div>
</nav></template>


