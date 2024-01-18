<script setup>
import { ref, watch } from 'vue';
import { RouterLink } from 'vue-router';

import { useAsyncState } from '@vueuse/core'


import RolexTemplate from '../Rolex/RolexTemplate.view.vue'
import RolexHeader from '../../components/RolexHeader.vue'
import PageBanner from '../../components/banners-components/PageBanner.vue'
    
import RolexDataServices from '../../services/RolexDataService.js'

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
                    <div v-for="(item,index) in state" id="card" class="w-full" :key="index">
                        <router-link :to="{name:'coleccion', params: {id: index+1}}" v-if="item.nombre != 'MUJERES' && item.nombre != 'ORO' && item.nombre != 'HOMBRES'">
                            <img :src="item.file" :alt="item.watch">
                            <h2 class="uppercase text-center font-bold">Rolex</h2>
                            <h2 class="uppercase text-center font-bold">{{ item.nombre }}</h2>
                        </router-link>
                    </div>
                </div>
            </div>


            <section v-if="isReady" class="flex  mt-14 justify-center items-center">
                <div class="flex flex-col w-9/12">
                    <h2>SELECCIÓN DE MODELOS</h2>
                    <div class="flex justify-center items-center gap-4">
                        <div>
                            <img :src="state[14].file" :alt="state[14].watch">
                            <h2 class="uppercase font-bold mt-4">Relojes rolex para {{ state[15].nombre }}</h2>
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

            <section class="flex flex-col justfy-center items-center mt-32">
                <img src="../../assets/routes-assets/chairs.webp" alt="rolex table" class="w-1/2">


                <header class="flex flex-col justify-center items-center text-neutral-700 h-fit mt-8 mb-6">

                    <h1 class="text-4xl text-center py-8 ">
                        VISÍTENOS EN NUESTRO PUNTO DE VENTA
                    </h1>
                    <p class="w-1/2 text-center font-normal">

                        Mimi Joyería se enorgullece de formar parte de la red mundial de Distribuidores Oficiales Rolex,
                        autorizados para vender y realizar el mantenimiento de los relojes Rolex. En Mimi Joyería, estamos a
                        su
                        servicio para ayudarle a elegir el reloj Rolex perfecto para usted entre una gama de relojes Rolex.
                        Nuestro punto de venta en C.C. Tolón Fashion Mall, Caracas, está reconocido como Distribuidor
                        Oficial
                        Rolex ya que solo vende relojes Rolex oficiales.
                    </p>
                    <RouterLink to="/contactenos" class="duration-300 mt-4 border px-10 py-2 bg-rolex-green rounded-3xl border-white text-white hover:bg-white hover:text-rolex-green hover:border-rolex-green ">
                        Póngase en contacto con nosotros
                    </RouterLink>
                </header>
            </section>
        </template>
    </RolexTemplate>
</template>


../../services/rolexDataService