<script setup>
import { get, useAsyncState } from '@vueuse/core';
import { routerKey, RouterLink, useRoute, useRouter } from 'vue-router';

import OverlayBanner from '../../components/banners-components/OverlayBanner.vue';

import StoreDataService from '../../services/storeDataService';
import TudorShowcaseCard from '../../components/cards/TudorShowcaseCard.vue';
import PageBanner from '../../components/banners-components/PageBanner.vue';
import { onMounted, ref } from 'vue';

const route = useRoute()


const actualPage = ref(0)
const isReady = ref(false)
const state = ref([])
const searchParams = ref({
    field: "id",
    order: "DESC"
})
const searchReference = {
    recent: {
        field: "id",
        name:"Recientes"
    },
    collection: {
        field: "tudorCollectionId",
        name:"Colección"
    },
    name: {
        field: "nombre",
        name:"Nombre"
    },
    code: {
        field: "serie",
        name:"Número de serie"
    },
    price: {
        field: "precio",
        name:"Precio"
    },
}
const orderIcons = {
    ASC: "fa-arrow-up-a-z",
    DESC: "fa-arrow-up-z-a",
}
const searchField = ref("name")
const searchOrder = ref("DESC")

function getChangeResult(pos){
    searchField.value = pos

}

function getResultsByPage() {
    StoreDataService.getRelojeria("Tudor", actualPage.value)
        .then(d => {

            state.value = d.data
            isReady.value = true
        })
}


function reverseArray() {
    return state.value.reverse()
}
onMounted(() => {
    getResultsByPage()

})

// const { isLoading, state, isReady, execute } = useAsyncState(
//     StoreDataService.getRelojeria("Tudor")
//         .then(d => {
//             elementCount.value = d.data.count
//             // let items = []
//             // for (const item of d.data) {
//             //     if (item.disponible == 1) {
//             //         items.push(item)

//             //     }
//             // }
//             // return items
//             return d.data.rows
//         })


// )


</script>

<template>
    <main class=" font-montserrat ">
        <!-- <OverlayBanner type="tudor" /> -->
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
        <PageBanner type="tudor" @click="reverseArray()" />
        <h2 v-for="(items, key) in state" :key="key">{{ items.precio }}</h2>

        <section class="w-full flex justify-center text-center text-xl  ">
            <div class="w-11/12 flex justify-between items-center py-10">
                <h2 class="">Selección oficial de Tudor.</h2>
                <div class="flex items-center gap-2 relative">
                    <p>Ordenar por:</p>
                    <div class="border ">

                        <button class="border-r p-2 hover:bg-gray-200 duration-200">
                            <font-awesome-icon :icon="['fas', orderIcons[searchOrder]]" />
    
                        </button>
                        <button class=" p-2 hover:bg-gray-200 duration-200">
                            <p>Recientes</p>
    
                        </button>
                      
                    </div>
                      <div class="absolute top-14 -right-3 border">
                            <ul>
                                <li v-for="item in searchReference" :key="item.name" class="">
                                    <button class="text-sm text-left w-full hover:bg-gray-200 p-1">
                                        <h2 class="">{{ item.name }}</h2>

                                    </button>
                                </li>
                            </ul>
                        </div>
                </div>
            </div>

        </section>

        <section>
            <div v-if="isReady">
                <div v-if="state.length == 0" class="flex justify-center items-center h-52">
                    <h1 class="font-semibold">Lo sentimos, no hay productos que coincidan con su búsqueda.</h1>
                </div>
                <div v-else id="tudor" class="w-full flex items-center justify-center pb-16">
                    <div class="grid grid-cols-2 place-items-center gap-2 md:gap-6 md:grid-cols-4 w-11/12">
                        <TransitionGroup name="list">

                            <TudorShowcaseCard v-for="(items, key) in state" :key="key" :items="items" />
                        </TransitionGroup>


                    </div>
                </div>


            </div>
        </section>
        <section class="pb-4 mt-8 w-full overflow-hidden  bg-black relative flex flex-col justify-center items-center">
            <img src="/assets/tudor-logo.webp" alt="tudor-logo" class="w-32">
            <a href="https://www.tudorwatch.com/es" target="_blank"
                class="text-white uppercase text-sm ">tudorwatch.com</a>


        </section>

    </main>
</template>

<style scoped></style>
