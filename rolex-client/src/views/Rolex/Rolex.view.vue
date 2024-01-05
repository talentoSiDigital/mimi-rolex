<script setup>
import RolexTemplate from '../Rolex/RolexTemplate.view.vue'
import PageBanner from '../../components/banners-components/PageBanner.vue'
import RolexHeader from '../../components/RolexHeader.vue'

import { ref, watch } from 'vue';
import RolexDataServices from '../../services/RolexDataServices'

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'


import { useAsyncState } from '@vueuse/core'

const { isLoading, state, isReady, execute } = useAsyncState(
    RolexDataServices.getDisplay()
        .then(d => d.data)
)





</script>

<template>
    <RolexTemplate>
        <template #content>
            <PageBanner type="rolex" />



            <RolexHeader>
                <template #sub>
                    Bienvenido a Mimi Joyería
                </template>
                <template #title>
                    DISTRIBUIDOR OFICIAL DE <br /> EN CARACAS
                </template>
                <template #text>
                    Los relojes Rolex son creados a partir de las mejores materias primas y montados con escrupulosa
                    minuciosidad. Cada componente es diseñado, desarrollado y fabricado, cumpliendo los estándares más
                    estrictos.
                </template>

            </RolexHeader>





            <div class="flex flex-col justify-center items-center w-full">
                <div id="rolex-container" class="grid grid-cols-1 place-items-center md:grid-cols-3 w-8/12">
                    <div v-for="item in state" id="card" class="w-full">
                        <div v-if="item.nombre != 'MUJERES' && item.nombre != 'ORO' && item.nombre != 'HOMBRES'">
                            <img :src="item.file" :alt="item.watch">
                            <h2 class="uppercase text-center font-bold">Rolex</h2>
                            <h2 class="uppercase text-center font-bold">{{ item.nombre }}</h2>
                        </div>
                    </div>
                </div>
            </div>


            <section class="flex  mt-14 justify-center items-center">
                <div class="flex flex-col w-9/12">
                    <h2>SELECCIÓN DE MODELOS</h2>
                    <div class="flex justify-center items-center gap-4">
                        <div>
                            <img :src="state[14].file" :alt="state[14].watch">
                            <h2 class="uppercase font-bold mt-4">Relojes rolex para {{ state[14].nombre }}</h2>
                        </div>
                        <div>
                            <img :src="state[15].file" :alt="state[15].watch">
                            <h2 class="uppercase font-bold mt-4">Relojes rolex para {{ state[15].nombre }}</h2>
                        </div>
                    </div>
                    <div class="w-full mt-8"> 
                        <img :src="state[16].file" :alt="state[16].watch">
                        <h2 class="uppercase font-bold mt-4">Relojes de {{ state[16].nombre }} Rolex</h2>
                    </div>
                </div>
            </section>


        </template>
    </RolexTemplate>
</template>

<style scoped></style>

