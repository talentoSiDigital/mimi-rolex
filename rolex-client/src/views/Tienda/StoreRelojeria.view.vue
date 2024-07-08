<script setup>
import { useAsyncState } from '@vueuse/core';
import { RouterLink, useRoute } from 'vue-router';

import OverlayBanner from '../../components/banners-components/OverlayBanner.vue';
import StoreDataService from '../../services/storeDataService';


const route = useRoute()
const name = route.params.id



const { isLoading, state, isReady, execute } = useAsyncState(
    StoreDataService.getRelojeria(name)
        .then(d => {
            return d.data
        })
 

)


</script>

<template>
    <main class="bg-neutral-100 font-montserrat ">
        <OverlayBanner :type="name" />
        <!-- <OverlayBanner :type="`${name}-landscape`"/> -->
        

        <section>
            <div v-if="isReady">
                <div v-if="state.length == 0" class="flex justify-center items-center h-52">
                    <h1 class="font-semibold">Lo sentimos, no hay productos que coincidan con su búsqueda.</h1>
                </div>
                <div v-else id="store-container" class="w-full flex items-center justify-center">
                    <div class="grid grid-cols-1 place-items-center gap-2 md:grid-cols-4 w-10/12">
                        <div v-for="(items, key) in state" :key="key" >

                            <RouterLink 
                                :to="{name: 'relojProducto', params:{serie:name, id:items.serie}}" 
                                
                                class="w-10/12 my-2 hover:underline"
                                >
                                <img :src="items.img" :alt="items.serie">
                                <h2 v-if="name == 'tissot'" class="mt-4 font-bold">
                                    <span class="capitalize">{{name}}</span> 
                                    {{ items.nombre }}
                                </h2>
                                <h2 v-else class="mt-4 font-bold">{{ items.nombre }}</h2>
                                <h2  class="mb-4 font-bold">{{ items.precio }}</h2>
                            </RouterLink>
                        </div>

                    </div>
                </div>

            </div>
        </section>


    </main>
</template>



