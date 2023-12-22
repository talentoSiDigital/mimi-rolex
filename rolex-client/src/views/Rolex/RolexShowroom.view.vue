<script setup>
import { RouterLink } from 'vue-router';

import RolexTemplate from '../Rolex/RolexTemplate.view.vue'
import PageBanner from '../../components/banners-components/PageBanner.vue'
import RolexHeader from '../../components/RolexHeader.vue'
import TwoSectionCard from '../../components/cards/TwoSectionCard.vue'



</script>

<template>
    <div id="new-models">
        <RolexTemplate>
            <template #content>

                <PageBanner type="showroom" />
                <RolexHeader>
                    <template #sub>
                        <strong>Mimi Joyería es diferente</strong>
                    </template>
                    <template #title>

                        NUESTRO SHOWROOM
                    </template>
                    <template #text>
                        En nuestro punto de venta Rolex, Mimi Joyería, vivirás lo que representa ser un cliente Rolex y lo
                        que solo él puede vivir. Ingreso a nuestra sala VIP, atención exclusiva y un equipo de asesores
                        especializados en la marca de relojes más prestigiosa del mundo.
                    </template>

                </RolexHeader>

                <div class="flex justify-center">
                    <img src="../../assets/routes-assets/showroom/showroom-1.webp" alt="rolex-reloj-guante-blanco-joyeria">
                </div>

                <RolexHeader>

                    <template #title>

                        ROLEX EN MIMI JOYERÍA
                    </template>
                    <template #text>
                        Encuentra lo mejor de Rolex en nuestro punto de venta Mimi Joyería ubicado en Caracas Las Mercedes
                        1080, C.C. Tolón Fashion Mall Piso 1. Acércate a nuestro Showroom, nuestros asesores especializados
                        lo guiarán en el proceso de compra ayudándolo a elegir el mejor reloj.
                    </template>

                </RolexHeader>

                <TwoSectionCard class="bg-neutral-900" img-src="showroom/showroom-2.webp"
                    alt-text="rolex-display-fondo-blanco" type="reverse">
                    <template #title>
                        <span class="text-white">LOS MEJORES MODELOS ROLEX</span>
                    </template>
                    <template #text>
                        <span class="text-white">

                            En Mimi Joyería encontrarás los mejores modelos de la marca Rolex, para dama y caballero, y a
                            los precios más competitivos del mercado.
                            <br>
                            <br>
                            Desde los modelos convencionales hasta los Rolex profesionales, en nuestro punto de venta podrás
                            encontrar el reloj que más te guste.
                        </span>

                        <br>
                        <br>

                    </template>


                </TwoSectionCard>


                <TwoSectionCard img-src="showroom/showroom-3.webp" alt-text="rolex-display-fondo-oyster" type="normal">
                    <template #title>

                        VISITA EL CATÁLOGO DIGITAL
                    </template>
                    <template #text>
                        Puedes encontrar tus relojes favoritos en nuestra web www.mimijoyeria.com/rolex/coleccion.
                        <br>
                        <br>
                        Accede al catálogo más completo de Rolex, elije el que más te guste y uno de nuestros especialistas
                        te contactará para darte más detalles sobre cómo es el proceso de comprar un reloj de esta categoría
                        con su certificado de originalidad, garantía de 5 años y número único, el cual identifica a cada
                        reloj Rolex.
                    </template>


                </TwoSectionCard>

                <TwoSectionCard img-src="showroom/showroom-4.webp" alt-text="rolex-logo-oro-amarillo" type="reverse">
                    <template #title>
                        RELOJES DE LUJO ATEMPORALES
                    </template>
                    <template #text>
                        Un Rolex se caracteriza por su lujo, independiente de cuánto tiempo pase, lo que se convierte en tu
                        mejor opción. Prestigio y rendimiento a disposición del público más exclusivo y exigente.
                        <br>
                        <br>
                        Somos distribuidores oficiales de la marca, lo que te asegurará el mejor servicio y la mejor
                        garantía en tu compra.
                    </template>


                </TwoSectionCard>

                <TwoSectionCard img-src="showroom/showroom-5.webp" alt-text="rolex-logo-oro-amarillo" type="normal">
                    <template #title>
                        C.C. TOLÓN FASHION MALL
                    </template>
                    <template #text>
                        Las Mercedes 1080
                        <br>
                        <br>
                        C.C. Tolón Fashion Mall Piso 1
                        <br>
                        <br>
                        Caracas, Distrito Capital
                        <br>
                        <br>
                        Venezuela
                        <br>
                        <br>
                        <div class="flex flex-col gap-2">
                            <a class="hover:underline" href="tel:+582123008741" target="_blank">
                                <font-awesome-icon :icon="['fas', 'phone']" />
                                +58 212-3008741
                            </a>

                            <a class="hover:underline" href="https://www.google.com/search?q=mimi+joyeria+tolon&safe=active&tbm=lcl&sxsrf=APq-WBtw-L08B7QjE6PVaxs8NYJe6ANHEw%3A1647306940476&ei=vOgvYvnRHMKKwbkP6ty6-Ag&oq=mimi+joyeria&gs_l=psy-ab.3.3.35i39k1j0i512i263i20k1j0i512k1l3j0i67k1j0i512k1j0i512i457k1j0i512k1.7898.9421.0.12531.12.10.0.0.0.0.366.1623.0j1j3j2.6.0....0...1c.1.64.psy-ab..6.6.1620...0i512i433k1j0i512i433i131k1j0i512i10k1.0.twsPXA4dw3U"
                                target="_blank">
                                <font-awesome-icon :icon="['fas', 'location-dot']" />
                                Como llegar
                            </a>

                            <RouterLink class="hover:underline" to="/contactenos">
                                <font-awesome-icon :icon="['fas', 'circle-info']" />
                                Más información
                            </RouterLink>
                        </div>
                    </template>


                </TwoSectionCard>

                <section class=" h-[300px] w-full overflow-hidden bg-black mb-36
                 relative">
                    <img src="../../assets/routes-assets/showroom/showroom-overlay.webp" alt="mantenimiento-rolex-mimi" class="h-full w-full">
                    <header class="absolute h-full bottom-0 left-0 right-0 flex flex-col items-center justify-center  text-white bg-black bg-opacity-40 font-bold">
                    
                        <h1 class="text-2xl  text-center  py-4">
                            COMPRA TU ROLEX Y VIVE UNA EXPERIENCIA ÚNICA EN MIMI JOYERÍA
                        </h1>
                    
                    </header>                    

                </section>

            </template>
        </RolexTemplate>

    </div>
</template>
