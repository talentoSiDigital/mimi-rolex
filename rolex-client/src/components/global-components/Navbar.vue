<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>


<nav>
    <div id="top-bar" class="flex md:justify-around justify-center items-center p-2">
        <img src="../../assets/tudor-retailer.jpg" alt="tudor-retailer-badge" class=" md:block hidden">
        <router-link to="/">
            <img src="../../assets/mimi-logo.png" alt="mimi-joyeria-logo">
        </router-link>        
        <img src="../../assets/rolex-retailer.webp" alt="rolex-retailer-badge" class="md:block hidden">
    </div>
    <div id="navigation-bar" class="flex justify-center items-center h-20 shadow-lg gap-2  bg-main-green">
        <router-link to="/" class="border-b-2 border-transparent hover:border-gray-button px-6 py-2 text-2xl text-slate-50 hover:text-gray-button">
            <h2 class="">Rolex</h2>
        </router-link>  
        <router-link to="/" class="border-b-2 border-transparent hover:border-gray-button px-6 py-2 text-2xl text-slate-50 hover:text-gray-button">
            <h2 class="">Tudor</h2>
        </router-link>  
        <router-link to="/" class="border-b-2 border-transparent hover:border-gray-button px-6 py-2 text-2xl text-slate-50 hover:text-gray-button">
            <h2 class="">Relojería</h2>
        </router-link>  
        <router-link to="/" class="border-b-2 border-transparent hover:border-gray-button px-6 py-2 text-2xl text-slate-50 hover:text-gray-button">
            <h2 class="">Joyería</h2>
        </router-link>  
        <router-link to="/" class="border-b-2 border-transparent hover:border-gray-button px-6 py-2 text-2xl text-slate-50 hover:text-gray-button">
            <h2 class="">Sobre Mimi</h2>
        </router-link>  
        <router-link to="/" class="border-b-2 border-transparent hover:border-gray-button px-6 py-2 text-2xl text-slate-50 hover:text-gray-button">
            <h2 class="">Contacto</h2>
        </router-link>  
        
    </div>
</nav>

</template>

<style scoped>

</style>

