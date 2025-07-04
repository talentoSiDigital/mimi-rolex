<script setup>
import { useAsyncState } from '@vueuse/core';
import { RouterLink, useRoute } from 'vue-router';

import OverlayBanner from '../../components/banners-components/OverlayBanner.vue';
import StoreDataService from '../../services/storeDataService';


const route = useRoute()

console.log(route.name);


const { isLoading, state, isReady, execute } = useAsyncState(
    StoreDataService.getRelojeria("novedades")
        .then(d => {
            let items = []
            for (const item of d.data) {
                if(item.disponible == 1){
                    items.push(item)
                    
                }
            }
            return items
        })
 

)


</script>

<template>
    <main class="bg-neutral-100 font-montserrat ">
   <img src="/assets/routes-assets/banners/banner-tudor.webp" alt="">
   <header
                class="font-tudor tracking-tighter  h-full flex flex-col  md:flex-row items-center justify-center  text-white bg-neutral-100 ">

                
                <RouterLink to="/tudor" class=" hover:text-red-700 text-black  duration-200 p-4 md:p-6">
                    <h1 class="font-tudor tracking-tighter ">TUDOR EN MIMI JOYERÍA</h1>
                </RouterLink>
                <RouterLink to="/novedades/tudor" class=" text-red-700  duration-200 p-4 md:p-6">
                    <h1 class="font-tudor tracking-tighter ">NOVEDADES 2025</h1>
                </RouterLink>
                <RouterLink to="/relojeria/tudor" class="hover:text-red-700 text-black duration-200 p-4 md:p-6">
                    <h1 class="font-tudor tracking-tighter ">QUIERO UN TUDOR</h1>
                </RouterLink>
                <RouterLink to="/contactenos" class="hover:text-red-700 text-black duration-200 p-4 md:p-6">
                    <h1 class="font-tudor tracking-tighter ">CONTACTA CON NOSOTROS</h1>
                </RouterLink>


            </header>
   <div class="w-full text-center py-10 text-3xl font-bold">

       <h2 >NOVEDADES TUDOR 2025</h2>    
   </div>
   

        <section>
            <div v-if="isReady">
                <div v-if="state.length == 0" class="flex justify-center items-center h-52">
                    <h1 class="font-semibold">Lo sentimos, no hay productos que coincidan con su búsqueda.</h1>
                </div>
                <div v-else id="store-container" class="w-full flex items-center justify-center pb-16">
                    <div class="grid grid-cols-1 place-items-center gap-2 md:grid-cols-4 w-10/12">
                      
                        <div v-for="(items, key) in state" :key="key" >
                            <RouterLink 
                                :to="{name: 'relojProducto', params:{ id:items.serie}}" 
                                
                                class="w-10/12 my-2 hover:underline"
                                >
                                <img :src="items.img" :alt="items.serie">
                             
                               
                                <h2  class="mt-4 font-bold">{{ items.nombre }}</h2>
                                <h2  class="mb-4 font-bold">{{ items.precio }}</h2>
                            </RouterLink>
                        </div>

                    </div>
                </div>

            </div>
        </section>


    </main>
</template>



