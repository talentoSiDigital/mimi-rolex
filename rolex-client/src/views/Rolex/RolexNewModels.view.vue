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
                    Nuevos Relojes Rolex 2025- <br>
                    Mimi Joyería
                </template>
                <template #text>
                    <strong>
                        Rolex presenta sus novedades, fruto de una imaginación en perpetuo movimiento que impregna toda
                        la manufactura.
                    </strong>


                    Esta singular visión de la relojería lleva la innovación a todos los ámbitos del savoir‑faire.
                    Del movimiento a la caja y el brazalete, del diseño a la elección de los materiales, las últimas
                    creaciones de Rolex hacen gala de una inventiva y un rigor constantemente renovados, de una voluntad
                    de rebasar siempre los límites de la excelencia. <br><br>
                    Estos relojes son producto de una serie de logros relojeros que amplían el espectro de posibilidades
                    y esbozan nuevas perspectivas.




                </template>

            </RolexHeader>



            <div
                class="flex flex-col justify-center items-center w-full text-rolex-brown bg-rolex-brown-light-2 pb-[10vh]">
                <div id="rolex-container"
                    class="grid grid-cols-1 place-items-center md:grid-cols-2 w-10/12 gap-x-2 gap-y-10">
                    <ModelsCard img="new-watches/hub/rolex-new-watches-2024-gmt-master-ii"
                        :link="{ name: 'rolex-nuevos-modelos-gmt-master-ii' }">
                        <template #sub>
                           Nuevos modelos 2025
                        </template>
                        <template #title>
                            GMT Master II
                        </template>


                    </ModelsCard>


                    <ModelsCard img="new-watches/hub/rolex-new-watches-2024-day-date"
                        :link="{ name: 'rolex-nuevos-modelos-day-date' }">

                        <template #sub>
                           Nuevos modelos 2025
                        </template>
                        <template #title>
                            Day-Date
                        </template>

                    </ModelsCard>

                    <ModelsCard img="new-watches/hub/rolex-new-watches-2024-1908"
                        :link="{ name: 'rolex-nuevos-modelos-1908' }">

                        <template #sub>
                           Nuevos modelos 2025
                        </template>
                        <template #title>
                            1908
                        </template>

                    </ModelsCard>

                    <ModelsCard img="new-watches/hub/rolex-new-watches-2024-deepsea"
                        :link="{ name: 'rolex-nuevos-modelos-deepsea' }">
                        <template #sub>
                           Nuevos modelos 2025
                        </template>
                        <template #title>
                            Deepsea
                        </template>

                    </ModelsCard>


                    <ModelsCard img="new-watches/hub/rolex-new-watches-2024-cosmograph-daytona"
                        :link="{ name: 'rolex-nuevos-modelos-cosmograph-daytona' }">
                        <template #sub>
                           Nuevos modelos 2025
                        </template>
                        <template #title>
                            Cosmograph Daytona
                        </template>


                    </ModelsCard>

                    <ModelsCard img="new-watches/hub/rolex-new-watches-2024-sky-dweller"
                        :link="{ name: 'rolex-nuevos-modelos-sky-dweller' }">
                        <template #sub>
                           Nuevos modelos 2025
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
