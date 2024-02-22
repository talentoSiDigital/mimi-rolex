<script setup>
import { RouterLink } from 'vue-router';

import RolexTemplate from '../Rolex/RolexTemplate.view.vue'
import RolexHeader from '../../components/RolexHeader.vue'
import PageBanner from '../../components/banners-components/PageBanner.vue'
import TwoSectionCard from '../../components/cards/TwoSectionCard.vue'



</script>

<template>
    <div id="new-models">
        <RolexTemplate>
            <template #content>

                <PageBanner type="mantenimiento" />
                <RolexHeader>
                    <template #sub>
                        <h2 class="text-center text-neutral-700 mb-4">CREADOS PARA PERDURAR</h2>
                        <h2 class="text-center text-neutral-700 mb-4 ">MANTENIMIENTO DE RELOJES ROLEX Y REPARACIÓN EN MIMI JOYERÍA</h2>
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
                    <img src="/assets/routes-assets/mantenimiento/mantenimiento-1.webp"
                        alt="rolex-reloj-guante-blanco-joyeria">
                </div>

                <header class=" text-center flex flex-col justify-center items-center my-20 text-neutral-600 ">
                    <h1 class="text-2xl md:text-4xl py-8 w-2/3 md:w-full ">
                        DÉJESE ACONSEJAR POR UN EXPERTO

                    </h1>
                    <p class="font-normal w-4/6 text-justify md:text-center">
                        Al pasar muchos años entre un mantenimiento y otro, su reloj merece la mayor de las atenciones. Como
                        Distribuidor Oficial Rolex, Mimi Joyería puede hacerse cargo de su reloj Rolex para su
                        mantenimiento. Gracias a nuestros conocimientos, destreza y savoir-faire, estamos a su disposición
                        para informarle acerca de las características técnicas de los relojes Rolex.
                    </p>
                </header>

                <section class="flex bg-black text-white mb-10 flex-col  md:flex-row">
                    <img src="/assets/routes-assets/mantenimiento/mantenimiento-2.webp" alt="tecnico-arreglando-rolex"
                        class="w-full md:w-1/2">
                    <header class="flex flex-col justify-center items-center p-20">
                        <h1 class="text-2xl md:text-4xl pb-4 ">
                            EL MANTENIMIENTO DE SU ROLEX EN MIMI JOYERÍA
                        </h1>
                        <p class=" font-normal text-justify  md:text-center">
                            Mimi Joyería forma parte de nuestra red mundial de relojeros formados por Rolex. El
                            procedimiento de mantenimiento de Rolex está diseñado para garantizar que todas y cada una de
                            las piezas que abandonan un taller Rolex cumplan con sus especificaciones estéticas y
                            funcionales originales.
                        </p>
                    </header>


                </section>


                <TwoSectionCard img-src="mantenimiento/mantenimiento-3" alt-text="mantenimiento-rolex-1" type="reverse">
                    <template #optional>
                        <div class="w-full flex justify-center md:justify-start">
                            <img src="/assets/routes-assets/mantenimiento/Rolex-service-plaque.webp" alt="rolex-service-plaque" class="w-24 mb-8">
                        </div>
                    </template>
                    <template #title>
                        SU CENTRO DE SERVICIO AUTORIZADO
                    </template>
                    <template #text>
                        Nuestros centros, a la vanguardia de la tecnología, cuentan con relojeros que han recibido
                        formación basada en unos estrictos criterios de excelencia que Rolex evalúa con regularidad.
                        Desde el ajuste de la longitud del brazalete a la restauración de un reloj antiguo, todas
                        las operaciones relacionadas con el mantenimiento de un reloj Rolex pueden confiarse a
                        Chrono.
                    </template>


                </TwoSectionCard>
              

                
                <TwoSectionCard img-src="mantenimiento/mantenimiento-4" alt-text="tecnico-arreglando-rolex" type="normal">
                    
                    <template #title>
                        PROCEDIMIENTO DE MANTENIMIENTO DE ROLEX
                      
                    </template>
                    <template #text>
                        El procedimiento de mantenimiento de Rolex está diseñado para asegurar que todo reloj que salga de un taller de Rolex cumpla las especificaciones estéticas y funcionales originales. Cada mecanismo se revisa por completo y cada caja y brazalete se pule o satina de forma meticulosa para devolverle su acabado. La precisión y la impermeabilidad se someten a pruebas rigurosas para garantizar el nivel de calidad y fiabilidad que se espera de un reloj Rolex.
                        
                    </template>


                </TwoSectionCard>

                <TwoSectionCard img-src="mantenimiento/mantenimiento-5" alt-text="rolex-international-service-guaranty-card" type="reverse">
                    
                    <template #title>
                        LA GARANTÍA DE MANTENIMIENTO DE DOS AÑOS
                      
                    </template>
                    <template #text>
                        Después de un mantenimiento completo, su reloj Rolex queda cubierto por una garantía de mantenimiento de dos años. Esta garantía excluye cualquier daño o deterioro que resulte de un accidente o de una utilización inapropiada del reloj. Toda intervención realizada por terceras personas no autorizadas por Rolex o toda adición de piezas o accesorios no fabricados por Rolex anula esta garantía.
                        
                    </template>


                </TwoSectionCard>


                <section class=" h-[300px] w-full overflow-hidden bg-black mb-36
                 relative">
                    <img src="/assets/routes-assets/mantenimiento/mantenimiento-overlay.webp" alt="mantenimiento-rolex-mimi" class="h-full w-full">
                    <header class="absolute h-full bottom-0 left-0 right-0 flex flex-col items-center justify-center  text-white bg-black bg-opacity-40 font-bold">
                        <p class="w-1/2 text-center font-normal">
                            Mantenimiento Rolex
                        </p>
                        <h1 class="text-2xl  text-center  py-4">
                            PÓNGASE EN CONTACTO CON MIMI JOYERÍA
                        </h1>
                        <RouterLink to="/contactenos">
                            <h5 class="border-white border px-6 py-2 rounded-3xl hover:border-rolex-green hover:bg-white hover:text-rolex-green duration-200">
                                Contactar
                            </h5>
                        </RouterLink>
                        

                    </header>                    

                </section>

            

               


        </template>
    </RolexTemplate>

</div></template>
