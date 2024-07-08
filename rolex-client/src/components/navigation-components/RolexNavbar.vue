<script setup>
import { RouterLink } from 'vue-router';

import { ref, computed } from 'vue'

const activate = ref('h-20')
const button = computed(()=>{
    return activate.value == "h-20" ? "rotate-0":"rotate-180"
})
function collapseNav() {
    activate.value == 'h-20' ? activate.value = 'h-[80vh]' : activate.value = 'h-20'
}


</script>

<template>
    <nav>
        <div id="navigation-bar" :class="activate"
            class="relative lg:h-24 z-20 flex overflow-hidden flex-col lg:flex-row  lg:justify-center items-start lg:items-center  shadow-lg gap-4 lg:gap-2 pb-4 lg:pb-0  font-arial bg-rolex-gradient font-helvetica-light text-sm duration-200 text-white ">
            <div class="py-4 lg:hidden flex items-center w-full px-6  md:px-20 justify-between" @click="collapseNav">
                <img src="/assets/rolex-retailer.webp" alt="rolex-retailer-badge" class="w-20 md:w-24 lg:w-0    ">


                <div class="flex items-center gap-2 justify-center  h-2 hover:text-rolex-green-3   duration-200 cursor-pointer">
                    <h2>Menú </h2>
                    <font-awesome-icon :icon="['fas', 'sort-down']" :class="button" class=" pb-2  duration-200"/>  
                </div>
            </div>
            <img src="/assets/rolex-retailer.webp" alt="rolex-retailer-badge" class="hidden lg:block w-28 duration-200">


            <router-link to="/descubre-rolex"
                class="pr-6 font-bold md:font-normal py-4 text-xl md:text-sm pl-6 md:pl-16 lg:pl-6  hover:text-rolex-green-3 duration-200 w-full lg:w-fit lg:text-center ">
                <h2>Descubre Rolex</h2>
            </router-link>

            <router-link to="/coleccion-rolex"
                class="    pr-6 font-bold md:font-normal py-4 text-xl md:text-sm pl-6 md:pl-16 lg:pl-6    hover:text-rolex-green-3 duration-200 w-full lg:w-fit lg:text-center">

                <h2>Colección Rolex</h2>

            </router-link>
            
            <router-link to="/nuevos-modelos-2024"
                class="    pr-6 font-bold md:font-normal py-4 text-xl md:text-sm pl-6 md:pl-16 lg:pl-6  hover:text-rolex-green-3 duration-200 w-full lg:w-fit lg:text-center">

                <h2>Nuevos Modelos 2024</h2>
 
            </router-link>

            <router-link to="/watchmaking"
                class="    pr-6 font-bold md:font-normal py-4 text-xl md:text-sm pl-6 md:pl-16 lg:pl-6    hover:text-rolex-green-3 duration-200 w-full lg:w-fit lg:text-center">

                <h2>Rolex Watchmaking</h2>

            </router-link>

            <router-link to="/mantenimiento-rolex"
                class="    pr-6 font-bold md:font-normal py-4 text-xl md:text-sm pl-6 md:pl-16 lg:pl-6    hover:text-rolex-green-3 duration-200 w-full lg:w-fit lg:text-center">

                <h2>Mantenimiento Rolex</h2>

            </router-link>

            <router-link to="/world-of-rolex"
                class="    pr-6 font-bold md:font-normal py-4 text-xl md:text-sm pl-6 md:pl-16 lg:pl-6    hover:text-rolex-green-3 duration-200 w-full lg:w-fit lg:text-center">

                <h2>World of Rolex</h2>

            </router-link>

          

            <router-link to="/contacto"
                class="    pr-6 font-bold md:font-normal py-4 text-xl  md:text-sm pl-6 md:pl-16 lg:pl-6    hover:text-rolex-green-3 duration-200 w-full lg:w-fit lg:text-center">

                <h2>Contacto</h2>

            </router-link>

           


    </div>
</nav></template>


