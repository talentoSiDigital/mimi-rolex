<script setup>
import RolexHeader from '../../components/RolexHeader.vue';
import PageBanner from '../../components/banners-components/PageBanner.vue';
import RolexTemplate from '../Rolex/RolexTemplate.view.vue';

import ModelsCard from '../../components/cards/ModelsCard.vue';
import SectionNavigationCard from '../../components/cards/SectionNavigationCard.vue';

</script>

<template>
    <RolexTemplate>
        <template #content>
            <PageBanner type="watches" />


            <RolexHeader color="bg-rolex-brown-light-1">

                <template #title>
                    Relojes Rolex en Mimi Joyería en Venezuela
                </template>
                <template #text>
                    <strong>Esta selección de modelos Rolex proviene del catálogo oficial y no representa las
                        existencias
                        disponibles en la joyería.</strong>
                    Si quiere realizar una consulta sobre algún reloj en particular,
                    no dude en ponerse en contacto con nosotros.

                </template>

            </RolexHeader>


            <section class="bg-rolex-brown-light-1 flex flex-col justify-center items-center pb-[10vh]">
                <div class="w-10/12">
                    <SectionNavigationCard img="watches/banner-button" :link="{name:'rolex-nuevos-modelos'}"
                        class="w-full ">
                        <template #sub>Nuevos relojes 2024</template>
                        <template #title>La armonía de los contrastes</template>
                        
                        <template #button>Más información</template>

                    </SectionNavigationCard>
                </div>
            </section>


            <div class="flex flex-col justify-center items-center w-full text-rolex-brown bg-rolex-brown-light-1">
                <h2 class="w-10/12 pt-[10vh] pb-4 font-helvetica font-bold text-4xl">Relojes Clásicos</h2>
                <div id="rolex-container" class="grid grid-cols-2 place-items-center md:grid-cols-3 w-10/12 gap-x-2 gap-y-10">
                    <ModelsCard img="watches/rolex-watches-day-date" :link="{name:'rolex-coleccion', params:{id:'day-date'}}"  >
                        <template #title>
                            Day-Date
                        </template>


                    </ModelsCard>
                    <ModelsCard img="watches/rolex-watches-datejust" :link="{name:'rolex-coleccion', params:{id:'datejust'}}"  >
                        <template #title>
                            Datejust
                        </template>


                    </ModelsCard>
                    <ModelsCard img="watches/rolex-watches-lady-datejust" :link="{name:'rolex-coleccion', params:{id:'lady-datejust'}}"  >
                        <template #title>
                            Lady-Datejust
                        </template>


                    </ModelsCard>
                    <ModelsCard img="watches/rolex-watches-sky-dweller" :link="{name:'rolex-coleccion', params:{id:'sky-dweller'}}"  >
                        <template #title>
                            Sky-Dweller
                        </template>


                    </ModelsCard>
                    <ModelsCard img="watches/rolex-watches-oyster-perpetual" :link="{name:'rolex-coleccion', params:{id:'oyster-perpetual'}} " >
                        <template #title>
                            Oyster Perpetual
                        </template>


                    </ModelsCard>
                  
                </div>

            </div>


            <div class="flex flex-col justify-start items-center w-full text-rolex-brown bg-rolex-brown-light-1">
                <h2 class="w-10/12 pt-[10vh] pb-4 font-helvetica font-bold text-4xl">Relojes Profesionales</h2>
                <div id="rolex-container" class="grid grid-cols-2 place-items-center md:grid-cols-3 w-10/12 gap-x-2 gap-y-10">
                    <ModelsCard img="watches/rolex-watches-air-king" :link="{name:'rolex-coleccion', params:{id:'air-king'}}"  >
                        <template #title>
                            Air-King
                        </template>


                    </ModelsCard>
                    <ModelsCard img="watches/rolex-watches-gmt-master-ii" :link="{name:'rolex-coleccion', params:{id:'gmt-master-ii'}}"  >
                        <template #title>
                            GMT-Master II
                        </template>


                    </ModelsCard>
                    <ModelsCard img="watches/rolex-watches-sea-dweller" :link="{name:'rolex-coleccion', params:{id:'sea-dweller'}}"  >
                        <template #title>
                            Sea-Dweller
                        </template>


                    </ModelsCard>
                    <ModelsCard img="watches/rolex-watches-submariner" :link="{name:'rolex-coleccion', params:{id:'submariner'}}"  >
                        <template #title>
                            Submariner
                        </template>


                    </ModelsCard>
                    <ModelsCard img="watches/rolex-watches-cosmograph-daytona" :link="{name:'rolex-coleccion', params:{id:'cosmograph-daytona'}}"  >
                        <template #title>
                            Cosmograph Daytona
                        </template>


                    </ModelsCard>
               
                    <ModelsCard img="watches/rolex-watches-yatch-master" :link="{name:'rolex-coleccion', params:{id:'yacht-master'}}"  >
                        <template #title>
                            Yacht-Master
                        </template>


                    </ModelsCard>
                  
                    <ModelsCard img="watches/rolex-watches-explorer" :link="{name:'rolex-coleccion', params:{id:'explorer'}}"  >
                        <template #title>
                            Explorer
                        </template>


                    </ModelsCard>
                  
                    <ModelsCard img="watches/rolex-watches-deepsea" :link="{name:'rolex-coleccion', params:{id:'deepsea'}}"  >
                        <template #title>
                            Deepsea
                        </template>


                    </ModelsCard>
                  
                </div>

            </div>


            <div class="flex flex-col justify-center items-center w-full text-rolex-brown bg-rolex-brown-light-1">
                <h2 class="w-10/12 pt-[10vh] pb-4 font-helvetica font-bold text-4xl">Relojes Perpetual</h2>
                <div id="rolex-container" class="grid grid-cols-2 place-items-center md:grid-cols-3 w-10/12 gap-x-2 gap-y-10">
                    <ModelsCard img="watches/rolex-watches-1908" :link="{name:'rolex-coleccion', params:{id:'1908'}}"  >
                        <template #title>
                            1908
                        </template>


                    </ModelsCard>
                    
                  
                </div>

            </div>



           
        </template>
    </RolexTemplate>
</template>
