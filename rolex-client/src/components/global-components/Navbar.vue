<script setup>
import { RouterLink } from 'vue-router';

import {ref} from 'vue'

const activate = ref('h-20')

function collapseNav() {
    activate.value == 'h-20'? activate.value = 'h-fit': activate.value = 'h-20'
}

</script>

<template>


<nav>
    <div id="top-bar" class="flex justify-around items-center p-2">
        <img src="../../assets/tudor-retailer.jpg" alt="tudor-retailer-badge" class="w-24 md:w-32    ">
        <router-link to="/">
            <img src="../../assets/mimi-logo.png" alt="mimi-joyeria-logo">
        </router-link>        
        <img src="../../assets/rolex-retailer.webp" alt="rolex-retailer-badge" class="w-24 md:w-32 ">
    </div>


    <div id="navigation-bar" :class="activate" class="flex overflow-hidden flex-col md:flex-row md:justify-center items-center  shadow-lg gap-2  bg-main-green">
        <div class="py-6 md:hidden" @click="collapseNav">
            <svg class="w-8 h-8 cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path class="stroke-white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
        </div>
        <router-link to="/rolex" class="border-b-2 border-transparent hover:bg-neutral-600 md:hover:bg-transparent md:hover:border-gray-button px-6 py-2 text-2xl text-slate-50  md:hover:text-gray-button w-full md:w-fit text-center">
            <h2>Rolex</h2>
        </router-link>  
        <router-link to="/" class="border-b-2 border-transparent hover:bg-neutral-600 md:hover:bg-transparent md:hover:border-gray-button px-6 py-2 text-2xl text-slate-50 md:hover:text-gray-button w-full md:w-fit text-center">
            <h2>Tudor</h2>
        </router-link>  
        <router-link to="/" class="border-b-2 border-transparent hover:bg-neutral-600 md:hover:bg-transparent md:hover:border-gray-button px-6 py-2 text-2xl text-slate-50 md:hover:text-gray-button w-full md:w-fit text-center">
            <h2>Relojería</h2>
        </router-link>  
        <router-link to="/" class="border-b-2 border-transparent hover:bg-neutral-600 md:hover:bg-transparent md:hover:border-gray-button px-6 py-2 text-2xl text-slate-50 md:hover:text-gray-button w-full md:w-fit text-center">
            <h2>Joyería</h2>
        </router-link>  
        <router-link to="/" class="border-b-2 border-transparent hover:bg-neutral-600 md:hover:bg-transparent md:hover:border-gray-button px-6 py-2 text-2xl text-slate-50 md:hover:text-gray-button w-full md:w-fit text-center">
            <h2>Sobre Mimi</h2>
        </router-link>  
        <router-link to="/" class="border-b-2 border-transparent hover:bg-neutral-600 md:hover:bg-transparent md:hover:border-gray-button px-6 py-2 text-2xl text-slate-50 md:hover:text-gray-button w-full md:w-fit text-center">
            <h2>Contacto</h2>
        </router-link>  
        
    </div>
</nav>

</template>


