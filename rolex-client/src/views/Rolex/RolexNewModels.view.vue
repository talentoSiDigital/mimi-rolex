<script setup>
import { RouterLink } from 'vue-router';
import RolexTemplate from '../Rolex/RolexTemplate.view.vue'
import RolexHeader from '../../components/RolexHeader.vue'
import PageBanner from '../../components/banners-components/PageBanner.vue'
import ModelsCard from '../../components/cards/ModelsCard.vue';
</script>

<template>
    <RolexTemplate>
        <template #content>
            <PageBanner type="new-watches-2024" />


            <RolexHeader color="bg-rolex-brown-light-2">

                <template #title>
                    Nuevos Relojes Rolex 2024- <br>
                    Mimi Joyería
                </template>
                <template #text>
                    <strong>
                        Con sus últimas creaciones, Rolex arroja una nueva luz sobre algunos de sus modelos más emblemáticos. 
                    </strong>
                    
                
                    La colección 2024 ofrece armonías inéditas entre materiales, colores y texturas, lo que refleja la voluntad de renovar continuamente las emociones relojeras. Esta colección se distingue por una atención infinita al más mínimo detalle. Gracias a nuestro excelente savoir-faire, los nuevos modelos juegan con los contrastes.



                </template>

            </RolexHeader>

           

            <div class="flex flex-col justify-center items-center w-full text-rolex-brown bg-rolex-brown-light-2 pb-[10vh]">
                <div id="rolex-container"
                    class="grid grid-cols-1 place-items-center md:grid-cols-2 w-10/12 gap-x-2 gap-y-10">
                    <ModelsCard img="new-watches/hub/rolex-new-watches-2024-gmt-master-ii" :link="{name:'rolex-nuevos-modelos-gmt-master-ii'}">
                        <template #sub>
                            Nuevos Relojes 2024
                        </template>
                        <template #title>
                            GMT Master II
                        </template>


                    </ModelsCard>


                    <ModelsCard img="new-watches/hub/rolex-new-watches-2024-day-date" :link="{name:'rolex-nuevos-modelos-day-date'}">

                        <template #sub>
                            Nuevos Relojes 2024
                        </template>
                        <template #title>
                            Day-Date
                        </template>

                    </ModelsCard>                 

                    <ModelsCard img="new-watches/hub/rolex-new-watches-2024-1908" :link="{name:'rolex-nuevos-modelos-1908'}">

                        <template #sub>
                            Nuevos Relojes 2024
                        </template>
                        <template #title>
                            1908
                        </template>

                    </ModelsCard>

                    <ModelsCard img="new-watches/hub/rolex-new-watches-2024-deepsea" :link="{name:'rolex-nuevos-modelos-deepsea'}">
                        <template #sub>
                            Nuevos Relojes 2024
                        </template>
                        <template #title>
                            Deepsea
                        </template>

                    </ModelsCard>

                  
                    <ModelsCard img="new-watches/hub/rolex-new-watches-2024-cosmograph-daytona" :link="{name:'rolex-nuevos-modelos-cosmograph-daytona'}">
                        <template #sub>
                            Nuevos Relojes 2024
                        </template>
                        <template #title>
                            Cosmograph Daytona
                        </template>


                    </ModelsCard>

                    <ModelsCard img="new-watches/hub/rolex-new-watches-2024-sky-dweller" :link="{name:'rolex-nuevos-modelos-sky-dweller'}">
                        <template #sub>
                            Nuevos Relojes 2024
                        </template>
                        <template #title>
                            Sky-Dweller
                        </template>


                    </ModelsCard>
                </div>

            </div>


          



        </template>
    </RolexTemplate>
</template>
