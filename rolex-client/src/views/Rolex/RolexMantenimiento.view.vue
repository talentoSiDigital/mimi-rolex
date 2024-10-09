<script setup>

import RolexTemplate from '../Rolex/RolexTemplate.view.vue'
import RolexHeader from '../../components/RolexHeader.vue'
import PageBanner from '../../components/banners-components/PageBanner.vue'
import TwoSectionCard from '../../components/cards/TwoSectionCard.vue'
import Button from '../../components/global-components/Button.vue';


</script>

<template>
    <div id="new-models">
        <RolexTemplate>
            <template #content>

                <PageBanner type="mantenimiento" />
                <RolexHeader color="bg-rolex-brown-light-2">

                    <template #title>
                        Mantenimiento de relojes Rolex y Reparación en Mimi Joyería

                    </template>
                    <template #text>
                        <strong>Los relojes Rolex están diseñados y fabricados para durar.</strong>
                        <br>Los relojes Rolex están diseñados y creados para perdurar. Desde el diseño de un reloj Rolex
                        hasta el momento en el que sale del taller, cada paso de su desarrollo y de su fabricación sigue
                        un solo requisito crítico: la calidad. Es por ello que cada uno de los relojes estampados con la
                        corona está preparado para cumplir plenamente con sus funciones sin límite de tiempo,
                        transmitirse de una generación a la siguiente y vivir, así, varias vidas.
                    </template>

                </RolexHeader>


                <section class="flex flex-col bg-rolex-brown-light-2">
                    <section>
                        <div class="flex justify-center ">
                            <img :src="`/assets/routes-assets/mantenimiento/mantenimiento-1.webp`"
                                alt="banner-mantenimiento" class="hidden md:block w-10/12">
                            <img :src="`/assets/routes-assets/mantenimiento/mantenimiento-1-mobile.webp`"
                                alt="banner-mantenimiento-mobile" class="md:hidden block w-10/12">
                        </div>
                        <header
                            class="flex flex-col gap-8 font-helvetica font-bold justify-around items-center  text-rolex-brown h-fit py-[10vh]">
                            <h1 class="text-2xl md:text-5xl w-10/12 md:w-1/2">
                                Déjese aconsejar por un experto

                            </h1>

                            <p class="w-10/12 md:w-1/2 text-justify md:text-left font-normal">
                                Al pasar muchos años entre un mantenimiento y otro, su reloj merece la mayor de las
                                atenciones.
                                Como
                                Distribuidor Oficial Rolex, Mimi Joyería puede hacerse cargo de su reloj Rolex para su
                                mantenimiento. Gracias a nuestros conocimientos, destreza y savoir-faire, estamos a su
                                disposición
                                para informarle acerca de las características técnicas de los relojes Rolex.
                            </p>
                        </header>



                    </section>

                </section>


                <TwoSectionCard img-src="mantenimiento/mantenimiento-2" alt-text="mantenimiento-rolex-2" type="normal"
                    img-size="w-10/12">
                    <template #title>
                        El mantenimiento de su Rolex en Mimi Joyería
                    </template>
                    <template #text>
                        Mimi Joyería forma parte de nuestra red mundial de relojeros formados por Rolex. El
                        procedimiento de mantenimiento de Rolex está diseñado para garantizar que todas y cada una
                        de
                        las piezas que abandonan un taller Rolex cumplan con sus especificaciones estéticas y
                        funcionales originales.
                    </template>
                </TwoSectionCard>





                <TwoSectionCard img-src="mantenimiento/mantenimiento-3" alt-text="mantenimiento-rolex-1" type="reverse"
                    img-size="w-10/12">
                    <template #optional>
                        <div class="w-full flex justify-start">
                            <img src="/assets/routes-assets/mantenimiento/Rolex-service-plaque.webp"
                                alt="rolex-service-plaque" class="w-36 mb-8">
                        </div>
                    </template>
                    <template #title>
                        Su centro de servicio autorizado
                    </template>
                    <template #text>
                        Nuestros centros, a la vanguardia de la tecnología, cuentan con relojeros que han recibido
                        formación basada en unos estrictos criterios de excelencia que Rolex evalúa con regularidad.
                        Desde el ajuste de la longitud del brazalete a la restauración de un reloj antiguo, todas
                        las operaciones relacionadas con el mantenimiento de un reloj Rolex pueden confiarse a
                        Chrono.
                    </template>


                </TwoSectionCard>
                <header
                    class="bg-rolex-brown-light-2 flex flex-col gap-8 font-helvetica font-bold justify-around items-center  text-rolex-brown h-fit pb-[10vh]">
                    <h1 class="text-2xl md:text-5xl w-10/12 md:w-1/2">
                        Procedimiento del servicio Rolex
                    </h1>

                    <div class="w-10/12 md:w-1/2 text-justify md:text-left font-normal space-y-4">
                        <p class="pb-10">
                            El procedimiento del servicio Rolex está diseñado para asegurar que todas y cada una de las
                            piezas que
                            abandonan un taller Rolex cumplen con sus especificaciones estéticas y funcionales
                            originales. Cada
                            movimiento queda completamente ajustado, y cada caja y brazalete son meticulosamente
                            restaurados para
                            recuperar su lustre. La precisión y la hermeticidad son sometidas a pruebas estrictas para
                            garantizar el
                            nivel de calidad y fiabilidad que se espera de un reloj Rolex.
                        </p>
                        <Button class=" text-left" link="/mantenimiento-rolex/procedimiento">Descubrir</Button>
                    </div>


                </header>

                <div class="flex justify-center ">
                    <img :src="`/assets/routes-assets/mantenimiento/mantenimiento-4.webp`" alt="banner-mantenimiento"
                        class="hidden md:block ">
                    <img :src="`/assets/routes-assets/mantenimiento/mantenimiento-4-mobile.webp`"
                        alt="banner-mantenimiento-mobile" class="md:hidden block ">
                </div>

                <TwoSectionCard img-src="mantenimiento/mantenimiento-5"
                    alt-text="rolex-international-service-guaranty-card" type="reverse" img-size="w-10/12">

                    <template #title>

                        La garantía de servicio de dos años



                    </template>
                    <template #text>
                        Después de un servicio completo, su reloj Rolex queda cubierto por una garantía de servicio de
                        dos años. Esta garantía excluye cualquier daño o deterioro que resulte de un accidente o de una
                        utilización inapropiada del reloj. Toda intervención realizada por terceras personas no
                        autorizadas por Rolex o toda adición de piezas o accesorios no fabricados por Rolex anula esta
                        garantía.
                    </template>


                </TwoSectionCard>


                <div id="footer-banner">
                    <img src="/assets/routes-assets/mantenimiento/mantenimiento-6.webp" alt="rolex-watchmaking-woman"
                        class="hidden md:block">
                    <img src="/assets/routes-assets/mantenimiento/mantenimiento-6-mobile.webp" alt="rolex-watchmaking-woman"
                        class="md:hidden block">
                </div>







            </template>
        </RolexTemplate>

    </div>
</template>
