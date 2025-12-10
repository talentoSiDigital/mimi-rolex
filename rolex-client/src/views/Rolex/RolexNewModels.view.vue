<script setup>
import RolexTemplate from '../Rolex/RolexTemplate.view.vue'
import RolexHeader from '../../components/RolexHeader.vue'
import PageBanner from '../../components/banners-components/PageBanner.vue'
import ModelsCard from '../../components/cards/ModelsCard.vue';
</script>

<template>
    <RolexTemplate>
        <template #content>
            <PageBanner type="new-watches-2025" />


            <RolexHeader color="bg-rolex-brown-light-2">

                <template #title>
                    Nuevos Relojes Rolex 2025 <br>
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
                    de rebasar siempre los límites de la excelencia.
                    Estos relojes son producto de una serie de logros relojeros que amplían el espectro de posibilidades
                    y esbozan nuevas perspectivas.

                </template>

            </RolexHeader>



            <div
                class="flex flex-col justify-center items-center w-full text-rolex-brown bg-rolex-brown-light-2 pb-[10vh]">
                <div id="rolex-container"
                    class="grid grid-cols-1 place-items-center md:grid-cols-2 w-10/12 gap-x-2 gap-y-10">
                    <ModelsCard img="new-watches/hub/land-dweller-cover"
                        :link="{ name: 'rolex-nuevos-modelos-2025',params:{id:'land-dweller'} }">
                        <template #sub>
                            Nuevos modelos 2025
                        </template>
                        <template #title>
                           Land-Dweller
                            
                            
                        </template>


                    </ModelsCard>


                    <ModelsCard img="new-watches/hub/gmt-master-ii-cover"
                        :link="{ name: 'rolex-nuevos-modelos-2025',params:{id:'gmt-master-ii'} }">

                        <template #sub>
                            Nuevos modelos 2025
                        </template>
                        <template #title>
                            GMT‑Master II
                            
                        </template>

                    </ModelsCard>

                    <ModelsCard img="new-watches/hub/oyster-perpetual-cover"
                        :link="{ name: 'rolex-nuevos-modelos-2025',params:{id:'oyster-perpetual'} }">

                        <template #sub>
                            Nuevos modelos 2025
                        </template>
                        <template #title>
                            Oyster Perpetual
                            
                        </template>

                    </ModelsCard>

                    <ModelsCard img="new-watches/hub/1908-cover"
                        :link="{ name: 'rolex-nuevos-modelos-2025',params:{id:'1908'} }">
                        <template #sub>
                            Nuevos modelos 2025
                        </template>
                        <template #title>
                           1908
                            
                        </template>

                    </ModelsCard>


                    <ModelsCard img="new-watches/hub/datejust-cover"
                        :link="{ name: 'rolex-nuevos-modelos-2025',params:{id:'datejust'} }">
                        <template #sub>
                            Nuevos modelos 2025
                        </template>
                        <template #title>
                            Datejust
                            
                        </template>


                    </ModelsCard>

                    <ModelsCard img="new-watches/hub/esferas-ineditas-cover"
                        :link="{ name: 'rolex-nuevos-modelos-2025',params:{id:'esferas-ineditas'} }">
                        <template #sub>
                            Nuevos modelos 2025
                        </template>
                        <template #title>
                            Esferas inéditas 
                            
                        </template>


                    </ModelsCard>
                </div>

            </div>






        </template>
    </RolexTemplate>
</template>
