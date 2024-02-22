<script setup>
import RolexTemplate from '../Rolex/RolexTemplate.view.vue'

import PageBanner from '../../components/banners-components/PageBanner.vue'
import RolexHeader from '../../components/RolexHeader.vue'
import TwoSectionCard from '../../components/cards/TwoSectionCard.vue'

</script>

<template>
    <div id="new-models">
        <RolexTemplate>
            <template #content>

                <PageBanner type="historia" />
                <RolexHeader>
                    <template #sub>
                        Rolex en Mimi Joyería
                    </template>
                    <template #title>
                        Historia
                    </template>

                </RolexHeader>


                <TwoSectionCard   img-src="historia/historia-1" alt-text="tienda-mimi-joyeria" type="normal">
                    <template #title>
                        DESDE 1982
                    </template>
                    <template #text>
                        Mimi Joyería nace en la ciudad de Caracas el 23 de marzo de 1982, con la firme intención de estar
                        siempre presente en los momentos especiales de las personas, desde el nacimiento hasta la
                        graduación, el compromiso y matrimonio, ofreciendo productos de joyería de la más alta calidad y
                        siempre a la vanguardia del mercado.
                        <br>
                        <br>
                        Ya son cuarenta años desde que, además de joyería, hemos ofrecido productos de relojería de las más
                        prestigiosas marcas como lo son Rolex y Tudor.
                    </template>


                </TwoSectionCard>

                <TwoSectionCard  img-src="historia/historia-2" alt-text="tienda-mimi-joyeria-antes" type="reverse">

                    <template #title>
                        ROLEX EN MIMI JOYERÍA
                    </template>
                    <template #text>
                        En el año 1998 comienza nuestra relación con la prestigiosa marca Rolex y Tudor, en el centro
                        Comercial Sambil en la ciudad de Caracas.
                        <br>
                        <br>
                        En 2002 se fortalece la relación comercial con Rolex al estar presente en un nuevo Centro Comercial,
                        considerado el mejor de la ciudad de Caracas, el Tolón Fashion Mall.
                    </template>


                </TwoSectionCard>

                <TwoSectionCard  img-src="historia/historia-3" alt-text="tienda-mimi-joyeria-actual" type="normal">

                    <template #title>
                        MIMI JOYERÍA SIEMPRE PRESENTE
                    </template>
                    <template #text>
                        En el año 2013 se realiza una remodelación completa a nuestra sucursal ubicada en el Centro
                        Comercial Tolón Fashion Mall, resaltando la elegancia y calidad que Mimi Joyería y Rolex comparten,
                        embelleciendo aún más el piso de venta y de esta forma, manteniendo la marca a la vanguardia de los
                        nuevos tiempos.
                        <br>
                        <br>
                        En una continua evolución, Mimi Joyería siempre está a la vanguardia, remodelando sus espacios para
                        ofrecerle a nuestros clientes cada día una mejor experiencia de compra.
                        <br>
                        <br>
                        En 2022 nos encontramos celebrando nuestro cuarenta aniversario. Hoy, más que nunca, estamos
                        comprometidos con nuestros clientes en brindarles una experiencia de compra inolvidable,
                        ofreciéndoles prendas en Oro 18 quilates de la más alta calidad y relojería de las marcas más
                        prestigiosas marcas del mundo, como lo son Rolex y Tudor.
                    </template>


                </TwoSectionCard>



                
                <section class=" h-[300px] w-full overflow-hidden bg-black mb-36
                 relative">
                    <img src="/assets/routes-assets/historia/historia-overlay.webp" alt="mantenimiento-rolex-mimi" class="h-full w-full">
                    <header class="absolute h-full bottom-0 left-0 right-0 flex flex-col items-center justify-center  text-white bg-black bg-opacity-40 font-bold">
                    
                        <h1 class="text-xl md:text-2xl  text-center  py-4">
                            YA SON CUARENTA AÑOS DE EXPERIENCIA, CONSTANCIA Y DEDICACIÓN, QUE RESPALDAN NUESTRO COMPROMISO COMO DISTRIBUIDORES ROLEX , BRINDANDO UNA EXCELENTE EXPERIENCIA DE COMPRA.
                        </h1>
                    
                    </header>                    

                </section>

            

            </template>
        </RolexTemplate>

    </div>
</template>
