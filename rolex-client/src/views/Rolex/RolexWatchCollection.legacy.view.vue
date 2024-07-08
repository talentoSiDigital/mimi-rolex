<script setup>
import { computed, ref, watch } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { useAsyncState } from '@vueuse/core'

import RolexDataServices from '../../services/rolexDataService'

import router from '../../router'


import RolexTemplate from './RolexTemplate.view.vue'
import SearchBar from '../../components/SearchBar.vue'
import ServerError from '../../components/cards/ServerError.vue'


const route = useRoute()
const currentRoute = route.params.id
console.log(currentRoute)

const currentPage = ref(1)
const totalPages = ref(1)

const searchParams = ref({
    "estilo": "",
    "size": "",
    "material": "",
    "esfera": ""
})
const items = ref([])


const itemsRange = {
    0: 0,
    1: 18,
    2: 36,
    3: 54,
    4: 72
}

let { isLoading, state, isReady, execute } = useAsyncState(
    RolexDataServices.getByCollection(currentRoute)
        .then((d) => {
            totalPages.value = Math.ceil(d.data.watches.length / 18)
            const checkIfMobile = computed(() => {
                if (state.collection.nombre == "ORO" || state.collection.nombre == "HOMBRES" || state.collection.nombre == "MUJERES") {
                    return true
                }
                return false


            })
            return d.data
        })

)


function changePage(page) {
    currentPage.value = currentPage.value + page
    router.push({ path: `/coleccion/${route.params.id}`, hash: '#rolex-container' })

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
                <div v-if="isReady" class="mb-44">
                    <div v-if="state">
                        <img class="w-full hidden md:block " :src="state.collection[0].fileLandscape"
                            :alt="state.collection[0].idName">
                        <img class="w-full block md:hidden" :src="state.collection[0].fileMobile"
                            :alt="state.collection[0].idName">




                        <header class="flex flex-col justify-center items-center text-neutral-700 h-fit mt-8 mb-6">
                            <p>
                                {{ state.collection[0].subHeader }}

                            </p>
                            <h1 class="text-4xl text-center py-8 ">
                                ROLEX {{ state.collection[0].nombre }}

                            </h1>
                            <p class="w-10/12 md:w-1/2 text-justify md:text-center font-normal">
                                {{ state.collection[0].text }}

                            </p>
                        </header>


                        <div class="w-full h-[50vh] md:h-screen flex justify-center " v-if="state.collection[0].hasVideo">

                            <div class="aspect-w-16 w-3/4  h-full md:h-full">
                                <iframe :src="state.collection[0].video" title="YouTube video player" frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowfullscreen></iframe>
                            </div>
                        </div>


                        <main class="flex flex-col md:flex-row mt-8">
                            <SearchBar v-model="searchParams" :args="state.collection[0].idName" />


                            <section id="watch" class="flex flex-col  items-center w-full">
                                <div id="rolex-container"
                                    class="grid grid-cols-1 place-items-center gap-1 md:grid-cols-3 w-10/12">
                                    <div v-for="(item, index) in items.length > 0 ? items : state.watches" id="card"
                                        class="w-full border border-white hover:border-rolex-green" :key="index">

                                        <RouterLink :to="{ name: 'relojes-rolex', params: { id: item.modelo } }"
                                            v-if="itemsRange[currentPage] > index && index >= itemsRange[currentPage - 1]">

                                            <img :src="item.img" :alt="item.modelo">
                                            <h2 class="uppercase text-center ">Rolex</h2>
                                            <h2 class="uppercase text-center font-bold">{{ item.nombre }}</h2>
                                            <h2 class="text-center text-xs font-extralight">{{ item.cajaDelModelo }}</h2>

                                        </RouterLink>

                                    </div>
                                </div>
                                <div v-if="totalPages > 1" id="pagination" class="flex md:w-1/6 justify-between mt-4">
                                    <button v-if="currentPage != 1" @click="changePage(-1)">
                                        <font-awesome-icon :icon="['fas', 'chevron-left']"
                                            class="text-rolex-green hover:text-black" />
                                    </button>

                                    <span v-else class="block w-4"></span>

                                    <h2>Página {{ currentPage }}</h2>

                                    <button v-if="currentPage != totalPages" @click="changePage(1)">
                                        <font-awesome-icon :icon="['fas', 'chevron-right']"
                                            class="text-rolex-green hover:text-black" />
                                    </button>
                                    <span v-else class="block w-4"></span>
                                </div>



                            </section>

                        </main>
                    </div>

                    <ServerError v-else/>

                </div>




            </template>
        </RolexTemplate>

    </div>
</template>

