<script setup>
import { useAsyncState } from '@vueuse/core';
import { RouterLink, useRoute } from 'vue-router';

import OverlayBanner from '../../components/banners-components/OverlayBanner.vue';
import StoreDataService from '../../services/storeDataService';
import TudorShowcaseCard from '../../components/cards/TudorShowcaseCard.vue';

const route = useRoute()

console.log(route.name);


const { isLoading, state, isReady, execute } = useAsyncState(
    StoreDataService.getRelojeria("Tudor")
        .then(d => {
            let items = []
            for (const item of d.data) {
                if (item.disponible == 1) {
                    items.push(item)

                }
            }
            return items
        })


)


</script>

<template>
    <main class="bg-neutral-100 font-montserrat ">
        <OverlayBanner type="tudor" />
        <header
            class="font-tudor tracking-tighter  h-full flex flex-col  md:flex-row items-center justify-center  text-white bg-neutral-100 ">

      
            <RouterLink to="/relojeria/tudor" class="hover:text-red-700 text-black duration-200 p-4 md:p-6">
                <h1 class="font-tudor tracking-tighter ">TUDOR EN MIMI JOYERÍA</h1>
            </RouterLink>
            <RouterLink to="/novedades/tudor" class="hover:text-red-700 text-black duration-200 p-4 md:p-6">
                <h1 class="font-tudor tracking-tighter ">NOVEDADES 2025</h1>
            </RouterLink>
            <RouterLink to="/relojeria/tudor" class="text-red-700 duration-200 p-4 md:p-6">
                <h1 class="font-tudor tracking-tighter ">QUIERO UN TUDOR</h1>
            </RouterLink>
            <RouterLink to="/contactenos" class="hover:text-red-700 text-black duration-200 p-4 md:p-6">
                <h1 class="font-tudor tracking-tighter ">CONTACTA CON NOSOTROS</h1>
            </RouterLink>


        </header>
        <div class="w-full flex justify-center text-center text-xl py-10 ">

            <h2 class="w-10/12">Tudor es una marca de relojería suiza que ofrece relojes mecánicos con un estilo sofisticado, y una fiabilidad probada. Los orígenes de Tudor se remontan a 1926, cuando «The Tudor» fue registrada por primera vez en nombre del fundador de Rolex, Hans Wilsdorf. A lo largo de su historia, los relojes Tudor han sido elegidos por los aventureros más audaces y por los profesionales más veteranos.</h2>
        </div>

        <section>
            <div v-if="isReady">
                <div v-if="state.length == 0" class="flex justify-center items-center h-52">
                    <h1 class="font-semibold">Lo sentimos, no hay productos que coincidan con su búsqueda.</h1>
                </div>
                <div v-else id="store-container" class="w-full flex items-center justify-center pb-16">
                    <div class="grid grid-cols-1 place-items-center gap-2 md:grid-cols-4 w-10/12">

                        <div v-for="(items, key) in state" :key="key">
                            <TudorShowcaseCard :items="items" />
                         
                        </div>

                    </div>
                </div>

            </div>
        </section>


    </main>
</template>
