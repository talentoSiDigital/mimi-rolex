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

                <PageBanner type="nuevos-modelos" />
                <RolexHeader>
                    <template #sub>
                        Relojes Rolex
                    </template>
                    <template #title>
                        NUEVOS MODELOS ROLEX 2023 <br> - MIMI JOYERÍA

                    </template>
                    <template #text>
                        Con sus últimas creaciones, Rolex persiste en su perpetua búsqueda de excelencia. Un reto permanente
                        que se
                        expresa perfeccionando cada elemento, cuestionando cada logro y dominando cada
                        <strong><i>savoir-faire</i></strong> . Los modelos presentados hacen patente una voluntad de
                        reinventarse de
                        forma continua, de innovar manteniendo el espíritu de la tradición y de poner la técnica al servicio
                        de la
                        audacia creativa. A costa de tales esfuerzos —nutridos de una exigencia «superlativa» que se
                        manifiesta en
                        cada etapa de fabricación, hasta el más mínimo detalle— se construyen y perpetúan las referencias
                        relojeras.
                        Esas que, con el tiempo, se convierten en iconos.
                    </template>

                </RolexHeader>


                <div class="flex flex-col justify-center items-center w-full">
                    <div id="rolex-container" class="grid grid-cols-1 place-items-center md:grid-cols-2 gap-2  ">
                        <NewModelsCard name="cosmograph-daytona" />
                        <NewModelsCard name="1908" />
                        <NewModelsCard name="yacht-master-42" />
                        <NewModelsCard name="sky-dweller" />
                        <NewModelsCard name="gmt-master-ii" />
                        <NewModelsCard name="explorer-40" />
                        <NewModelsCard name="oyster-perpetual" />
                        <NewModelsCard name="day-date-36" />
                    </div>
                </div>

                <div id="footer-banner">
                    <img src="../../assets/routes-assets/banners/banner-2-nuevos-modelos.webp" alt="banner-rolex-oro" class="w-full">
                </div>


            </template>
        </RolexTemplate>

    </div>
</template>

<style scoped></style>

