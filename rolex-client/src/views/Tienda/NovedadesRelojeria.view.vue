<script setup>
import { RouterLink, useRoute, useRouter } from 'vue-router';


import StoreDataService from '../../services/storeDataService';
import TudorShowcaseCard from '../../components/cards/TudorShowcaseCard.vue';
import PageBanner from '../../components/banners-components/PageBanner.vue';
import { onMounted, ref } from 'vue';


const options = ref(false)
const isReady = ref(false)
const state = ref([])

const searchReference = {
    recent: {
        field: "id",
        name: "Recientes"
    },
    collection: {
        field: "tudorCollectionId",
        name: "Colección"
    },
    name: {
        field: "nombre",
        name: "Nombre"
    },
    code: {
        field: "serie",
        name: "Número de serie"
    },
    price: {
        field: "precio",
        name: "Precio"
    },
}
const orderIcons = {
    ASC: "fa-arrow-up-a-z",
    DESC: "fa-arrow-down-z-a",
}
const searchField = ref("name")
const searchOrder = ref("DESC")
function changeSort() {
    if (searchOrder.value == "ASC") {
        searchOrder.value = "DESC"
    } else {
        searchOrder.value = "ASC"
    }
    getResultsByPage()
}
function getChangeResult(pos) {
    searchField.value = pos
    getResultsByPage()
    if (options.value) {
        openOptions()
    }

}
function openOptions() {
    options.value = !options.value
}



function getResultsByPage() {
    StoreDataService.getRelojeria("novedades", {
        field: searchReference[searchField.value].field,
        order: searchOrder.value
    })
        .then(d => {

            state.value = d.data
            isReady.value = true
        })
}



onMounted(() => {
    getResultsByPage()

})

</script>

<template>
    <main class=" font-montserrat ">
        <header
            class="font-tudor tracking-tighter  h-full flex flex-col  md:flex-row items-center justify-center  text-white bg-neutral-100 ">


            <RouterLink to="/tudor" class="hover:text-red-700 text-black duration-200 p-4 md:p-6">
                <h1 class="font-tudor tracking-tighter ">TUDOR EN MIMI JOYERÍA</h1>
            </RouterLink>
            <RouterLink to="/novedades/tudor" class="text-red-700  duration-200 p-4 md:p-6">
                <h1 class="font-tudor tracking-tighter">NOVEDADES 2025</h1>
            </RouterLink>
            <RouterLink to="/relojeria/tudor" class="hover:text-red-700 text-black duration-200 p-4 md:p-6">
                <h1 class="font-tudor tracking-tighter ">QUIERO UN TUDOR</h1>
            </RouterLink>
            <RouterLink to="/contactenos" class="hover:text-red-700 text-black duration-200 p-4 md:p-6">
                <h1 class="font-tudor tracking-tighter ">CONTACTA CON NOSOTROS</h1>
            </RouterLink>


        </header>
        <PageBanner type="tudor" />
        <div class="w-full text-center py-10 text-3xl font-bold">

       <h2 >NOVEDADES TUDOR 2025</h2>    
   </div>
   


        <section>
            <div v-if="isReady">
                <div v-if="state.length == 0" class="flex justify-center items-center h-52">
                    <h1 class="font-semibold">Lo sentimos, no hay productos que coincidan con su búsqueda.</h1>
                </div>
                <div v-else id="tudor" class="w-full flex items-center justify-center pb-16">
                    <div class="grid grid-cols-2 place-items-center gap-2 md:gap-6 md:grid-cols-4 w-11/12">

                            <TudorShowcaseCard v-for="(items, key) in state" :key="key" :items="items" />


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

<style scoped>
.list-move,
/* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
    position: absolute;
}
</style>
