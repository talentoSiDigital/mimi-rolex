<script setup>
import { computed, ref, watch } from 'vue';

import { RouterLink } from 'vue-router';
import { useAsyncState } from '@vueuse/core'

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

import RolexTemplate from '../Rolex/RolexTemplate.view.vue'
import RolexHeader from '../../components/RolexHeader.vue'
import SearchBar from '../../components/SearchBar.vue'
import PageBanner from '../../components/banners-components/PageBanner.vue'

import router from '../../router'


import RolexDataServices from '../../services/rolexDataService.js'

const currentPage = ref(1)
const totalPages = ref(1)


const itemsRange = {
    0: 0,
    1: 18,
    2: 36,
    3: 54,
    4: 72,
    5: 90,
    6: 108,
    7: 126,
    8: 144,
    9: 162,
    10: 180,
    11: 198
}


const { isLoading, state, isReady, execute } = useAsyncState(
    RolexDataServices.getAllRolex()
        .then(d => {
            totalPages.value = Math.ceil(d.data.length / 18)
            return d.data
        })

)
const items = ref([])

// watch(state, () => {
//     items.value = state.value
// })

function changePage(page) {
    currentPage.value = currentPage.value + page
    router.push({ path: `/coleccion-rolex`, hash: '#rolex-container' })
}


const searchParams = ref({
    "estilo": "",
    "size": "",
    "material": "",
    "esfera": ""
})




function searchIn() {

}


watch(searchParams.value, () => {


    for (const item of state.value) {
        for (const key in searchParams.value) {
            if (searchParams.value[key] !== "") {
                if (searchParams.value[key] === item[key]) {
                    if (!items.value.includes(item)) {
                        items.value.push(item)
                    }

                } else {
                    if (items.value.includes(item)) {
                        items.value.splice(items.value.indexOf(item), 1)

                    }
                }
            }
        }

    }



})





</script>

<template>
    <div id="new-models">
        <RolexTemplate>
            <template #content>
                <div v-if="isReady">
                    <PageBanner type="coleccion-rolex" />

                    <RolexHeader>
                        <template #sub>
                            <strong>Rendimiento y prestigio</strong>
                        </template>
                        <template #title>

                            LA COLECCIÓN ROLEX
                        </template>
                        <template #text>
                            Esta selección de modelos Rolex proviene del catálogo oficial y no representa las existencias
                            disponibles en la joyería. Si quiere realizar una consulta sobre algún reloj en particular, no
                            dude en ponerse en contacto con nosotros.


                        </template>

                    </RolexHeader>


                    <main class="flex flex-col md:flex-row">
                        <SearchBar v-model="searchParams" args="all" />

                        <section id="watch" class="flex flex-col justify-start items-center w-full">
                            <div id="rolex-container" class="grid grid-cols-1 place-items-start md:grid-cols-3 w-11/12">
                                <div v-for="(item, index) in items.length > 0 ? items : state" id="card"
                                    class="w-full border border-white hover:border-gray-500 duration-200" :key="index">


                                    <RouterLink :to="{ name: 'relojes-rolex', params: { id: item.modelo } }"
                                        v-if="itemsRange[currentPage] > index && index >= itemsRange[currentPage - 1]">

                                        <img :src="item.img" :alt="item.modelo">
                                        <h2 class="uppercase text-center ">Rolex</h2>
                                        <h2 class="uppercase text-center font-bold text-xl font-vilsuve">{{ item.nombre }}
                                        </h2>
                                        <h2 class="text-center text-xs font-extralight">{{ item.cajaDelModelo }}</h2>

                                    </RouterLink>



                                </div>
                            </div>

                            <div v-if="totalPages > 1" id="pagination" class="flex w-1/6 justify-between mt-4">
                                <button v-if="currentPage != 1" @click="changePage(-1)">
                                    <font-awesome-icon :icon="['fas', 'chevron-left']"
                                        class="text-rolex-green hover:text-black" />
                                </button>

                                <span v-else class="block w-4"></span>

                                <h2>Página {{ currentPage }} de {{ totalPages }}</h2>

                                <button v-if="currentPage != totalPages" @click="changePage(1)">
                                    <font-awesome-icon :icon="['fas', 'chevron-right']"
                                        class="text-rolex-green hover:text-black" />
                                </button>
                                <span v-else class="block w-4"></span>
                            </div>
                        </section>

                    </main>



                </div>




            </template>
        </RolexTemplate>

    </div>
</template>

