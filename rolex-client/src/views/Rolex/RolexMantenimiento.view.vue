<script setup>

import RolexTemplate from '../Rolex/RolexTemplate.view.vue'

import RolexNavbar from '../../components/global-components/RolexNavbar.vue'
import PageBanner from '../../components/banners-components/PageBanner.vue'
import RolexHeader from '../../components/RolexHeader.vue'
import NewModelsCard from '../../components/cards/NewModelsCard.vue'
</script>

<template>
    <div id="new-models">
        <RolexTemplate>
            <template #content>

                <PageBanner type="mantenimiento" />
                <RolexHeader>
                    <template #sub>
                        <h2 class="text-center text-neutral-700 mb-4">CREADOS PARA PERDURAR</h2>
                        <strong>MANTENIMIENTO DE RELOJES ROLEX Y REPARACIÓN EN MIMI JOYERÍA</strong>
                    </template>
                    <template #title>
                        GARANTIA DE DURABILIDAD

                    </template>
                    <template #text>
                        Los relojes Rolex están diseñados y fabricados para durar. Desde el diseño de un reloj Rolex hasta
                        el momento en el que sale del taller, cada paso de su desarrollo y de su fabricación sigue un solo
                        requisito crítico: la calidad. Es por ello que cada uno de los relojes estampados con la corona está
                        preparado para cumplir plenamente con sus funciones sin límite de tiempo, transmitirse de una
                        generación a la siguiente y vivir, así, varias vidas. la de una calidad superlativa, que se hace
                        posible gracias al dominio interno y a la integración de todo el savoir-faire relojero por parte de
                        la marca.
                    </template>

                </RolexHeader>

                <div class="flex justify-center">
                    <img src="../../assets/routes-assets/mantenimiento/mantenimiento-1.webp"
                        alt="rolex-reloj-guante-blanco-joyeria">
                </div>

                <header class="text-center flex flex-col justify-center items-center my-20 text-neutral-600">
                    <h1 class="text-4xl py-8 ">
                        DÉJESE ACONSEJAR POR UN EXPERTO

                    </h1>
                    <p class="font-normal w-4/6">
                        Al pasar muchos años entre un mantenimiento y otro, su reloj merece la mayor de las atenciones. Como Distribuidor Oficial Rolex, Mimi Joyería puede hacerse cargo de su reloj Rolex para su mantenimiento. Gracias a nuestros conocimientos, destreza y savoir-faire, estamos a su disposición para informarle acerca de las características técnicas de los relojes Rolex.
                    </p>
                </header>

                <section>
                    <img src="../../assets/routes-assets/mantenimiento/mantenimiento-2.webp" alt="">
                    <header>
                        <h1 class="text-4xl text-center py-8 ">
                            
                        </h1>
                        <p class="w-1/2 text-center font-normal">
                        
                        </p>
                    </header>

                    
                </section>
                <!-- <header>
                    <h1 class="text-4xl text-center py-8 ">
                        
                    </h1>
                    <p class="w-1/2 text-center font-normal">
                    
                    </p>
                </header> -->


        </template>
    </RolexTemplate>

</div></template>
