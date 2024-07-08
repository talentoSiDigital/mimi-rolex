<script setup>
import { RouterLink } from 'vue-router';
import RolexTemplate from '../../Rolex/RolexTemplate.view.vue'
import SectionNavigationCard from '../../../components/cards/SectionNavigationCard.vue'
import RolexHeader from '../../../components/RolexHeader.vue'

import PageBanner from '../../../components/banners-components/PageBanner.vue'




</script>

<template>
    <RolexTemplate>
        <template #content>

            <PageBanner type="new-watches-sky-dweller" />

            <RolexHeader color="bg-rolex-brown-light-2">

                <template #sub>
                    Nuevos modelos 2024
                </template>
                <template #title>
                    Rolex Sky-Dweller <br>
                    La sinfonía de los reflejos
                </template>
                <template #text>
                    <strong>
                        El Oyster Perpetual Sky Dweller ha sido concebido para que los grandes viajeros puedan
                        orientarse en el tiempo.
                    </strong>
                    Para el deleite de los sentidos, las modalidades de este reloj lucen una sinfonía de reflejos que
                    supone todo un espectáculo visual.
                </template>

            </RolexHeader>

            <div class="video-frame flex bg-rolex-brown-light-2 justify-center pb-[10vh]">
                <div class="w-11/12  aspect-w-16 aspect-h-9 ">
                    <iframe src="https://www.youtube.com/embed/5ZBOBs64rGQ?si=bs1k6MRdIsKCaVSx"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>
                </div>

            </div>



            <section class=" bg-rolex-brown-light-2">
                <header
                    class="flex flex-col gap-8 font-helvetica font-bold justify-around items-center  text-rolex-brown h-fit pb-[10vh]">
                    <h1 class="text-3xl md:text-5xl w-10/12 md:w-1/2">
                        Rolex presenta dos nuevas modalidades del Oyster Perpetual Sky Dweller en oro de 18 quilates,
                        ambas
                        provistas de un brazalete Jubilee. Es la primera vez que este modelo diseñado para los grandes
                        viajeros se
                        dota de un brazalete Jubilee en metal precioso.
                    </h1>



                    <p class="w-10/12 md:w-1/2 text-xl font-helvetica font-light text-justify md:text-left ">
                        La modalidad en oro Everose de 18 quilates luce una esfera de color pizarra, mientras que la
                        modalidad en
                        oro amarillo de 18 quilates exhibe una esfera de color blanco intenso.
                    </p>

                    <p class="w-10/12 md:w-1/2 text-xl font-helvetica font-light text-justify md:text-left ">

                        Los dos brazaletes Jubilee están provistos de un cierre Oysterclasp, el clásico del Sky Dweller.
                        Y, al igual
                        que la mayoría de los brazaletes Rolex realizados en material precioso, incorporan inserciones
                        de cerámica
                        en el interior de sus eslabones.
                    </p>

                    <p class="w-10/12 md:w-1/2 text-xl font-helvetica font-light text-justify md:text-left ">

                        El Sky Dweller está equipado con el calibre 9002, un movimiento a la vanguardia de la tecnología
                        relojera
                        que permite mostrar la fecha, el mes y un segundo huso horario con formato 24 horas además de
                        las horas, los
                        minutos y los segundos.
                    </p>

                </header>


            </section>


            <div class="flex justify-center py-[10vh]  bg-rolex-brown-light-1">
                <img src="/assets/routes-assets/new-watches/sky-dweller/rolex-new-watches-2024-sky-dweller-1.webp"
                    alt="sky-dweller-1" class="hidden md:block w-10/12 md:w-1/2">
                <img src="/assets/routes-assets/new-watches/sky-dweller/rolex-new-watches-2024-sky-dweller-1-mobile.webp"
                    alt="sky-dweller-1-mobile" class="md:hidden block w-10/12 md:w-1/2">
            </div>

            <section class=" bg-rolex-brown-light-1">
                <header
                    class="flex flex-col gap-8 font-helvetica font-bold justify-around items-center  text-rolex-brown h-fit pb-[10vh]">

                    <h1 class="text-3xl md:text-5xl w-10/12 md:w-1/2">
                        Concentrado de innovación

                    </h1>


                    <p class="w-10/12 md:w-1/2 text-xl font-helvetica font-light text-justify md:text-left ">
                        El Sky Dweller, reloj elegante para los grandes viajeros, permite la lectura simultánea de la
                        hora de dos
                        husos horarios y dispone de un calendario anual.
                        El calendario anual distingue automáticamente los meses de 30 días de los de 31 días. El
                        calendario anual,
                        bautizado como Saros y que diferencia automáticamente los meses de 30 días de los de 31, se
                        mueve mediante
                        un mecanismo patentado y se distingue por una innovadora visualización: los meses del año están
                        marcados por
                        12 ventanas distribuidas a lo largo del contorno de la esfera, en el exterior de los índices de
                        las horas
                        (el mes en curso se marca en rojo). El cambio de fecha instantáneo está vinculado a la hora
                        local.

                    </p>

                </header>

            </section>

            <section class="pt-[10vh] bg-rolex-brown-light-2">



                <div class="flex justify-center ">
                    <img src="/assets/routes-assets/new-watches/sky-dweller/rolex-new-watches-2024-sky-dweller-2.webp"
                        alt="rolex-new-watches-2024-sky-dweller-2" class="hidden md:block w-10/12 md:w-1/2">
                    <img src="/assets/routes-assets/new-watches/sky-dweller/rolex-new-watches-2024-sky-dweller-2-mobile.webp"
                        alt="rolex-new-watches-2024-sky-dweller-2-mobile" class="md:hidden block w-10/12 md:w-1/2">
                </div>

                <header
                    class="flex flex-col gap-8 font-helvetica font-bold justify-around items-center  text-rolex-brown h-fit py-[10vh]">
                    <h1 class="text-3xl md:text-5xl w-10/12 md:w-1/2">
                        La caja Oyster, símbolo de hermeticidad
                    </h1>
                    <p class="w-10/12 md:w-1/2 text-xl font-helvetica font-light text-justify md:text-left ">
                        Ejemplo de solidez y elegancia, la caja Oyster del Sky Dweller, de 42 mm de diámetro, garantiza
                        una
                        hermeticidad de hasta 100 metros de profundidad. La corona de cuerda Twinlock, provista de un
                        sistema de
                        doble hermeticidad, se enrosca firmemente a la caja. El cristal, coronado por la lente Cyclops
                        en la
                        posición de las 3 h para facilitar la lectura de la fecha, está realizado en zafiro
                        prácticamente imposible
                        de rayar y presenta un tratamiento antirreflejos.
                    </p>

                </header>

                <div class="flex justify-center ">
                    <img src="/assets/routes-assets/new-watches/sky-dweller/rolex-new-watches-2024-sky-dweller-3.webp"
                        alt="rolex-new-watches-2024-sky-dweller-2" class="hidden md:block ">
                    <img src="/assets/routes-assets/new-watches/sky-dweller/rolex-new-watches-2024-sky-dweller-3-mobile.webp"
                        alt="rolex-new-watches-2024-sky-dweller-2-mobile" class="md:hidden block ">
                </div>




            </section>

            <section class="pt-[10vh] bg-rolex-brown-light-2">



                <div class="flex justify-center ">
                    <img src="/assets/routes-assets/new-watches/sky-dweller/rolex-new-watches-2024-sky-dweller-4.webp"
                        alt="rolex-new-watches-2024-sky-dweller-2" class="hidden md:block w-10/12 md:w-1/2">
                    <img src="/assets/routes-assets/new-watches/sky-dweller/rolex-new-watches-2024-sky-dweller-4-mobile.webp"
                        alt="rolex-new-watches-2024-sky-dweller-2-mobile" class="md:hidden block w-10/12 md:w-1/2">
                </div>

                <header
                    class="flex flex-col gap-8 font-helvetica font-bold justify-around items-center  text-rolex-brown h-fit py-[10vh]">
                    <h1 class="text-3xl md:text-5xl w-10/12 md:w-1/2">
                        El calibre Perpetual 9002
                    </h1>
                    <p class="w-10/12 md:w-1/2 text-xl font-helvetica font-light text-justify md:text-left ">
                        El Sky Dweller está equipado con el calibre 9002, un movimiento completamente desarrollado y
                        manufacturado
                        por Rolex. Presentado en 2023, ese mismo año se introdujo en este modelo y ha quedado reservado
                        para él.
                        Concentrado de tecnología, este movimiento mecánico de cuerda automática ofrece un elevado
                        rendimiento,
                        especialmente en materia de precisión, autonomía, comodidad de uso y fiabilidad.
                    </p>



                </header>



                <div class="flex justify-center ">
                    <img src="/assets/routes-assets/new-watches/sky-dweller/rolex-new-watches-2024-sky-dweller-5.webp"
                        alt="rolex-new-watches-2024-sky-dweller-2" class="hidden md:block w-10/12 ">
                    <img src="/assets/routes-assets/new-watches/sky-dweller/rolex-new-watches-2024-sky-dweller-5-mobile.webp"
                        alt="rolex-new-watches-2024-sky-dweller-2-mobile" class="md:hidden block w-10/12 ">
                </div>

                <header
                    class="flex flex-col gap-8 font-helvetica font-bold justify-around items-center  text-rolex-brown h-fit py-[10vh]">
                    <h1 class="text-3xl md:text-5xl w-10/12 md:w-1/2">
                        Brazalete Jubilee
                    </h1>
                    <p class="w-10/12 md:w-1/2 text-xl font-helvetica font-light text-justify md:text-left ">
                        Las nuevas modalidades del Sky Dweller están provistas de un brazalete Jubilee. Fluido y
                        confortable, este
                        brazalete metálico de cinco elementos se creó específicamente para el Oyster Perpetual Datejust,
                        lanzado en
                        1945.
                    </p>
                    <p class="w-10/12 md:w-1/2 text-xl font-helvetica font-light text-justify md:text-left ">
                        El brazalete Jubilee de estas nuevas modalidades está equipado con un cierre desplegable
                        Oysterclasp y
                        dispone del cómodo sistema de extensión rápida Easylink, desarrollado por Rolex, que permite
                        ajustar
                        fácilmente su longitud en torno a unos 5 mm. El brazalete también incorpora, en el interior de
                        sus
                        eslabones, inserciones de cerámica —diseñadas por la marca— que mejoran su longevidad y
                        contribuyen a una
                        mayor flexibilidad de uso.
                    </p>

                </header>





            </section>
            <!-- ############### -->

            <section class="pt-[10vh] bg-rolex-brown-light-1">

                <div class="flex justify-center ">
                    <img src="/assets/routes-assets/new-watches/hub/rolex-new-watches-last-section.webp"
                        alt="rolex-new-watches-2024-sky-dweller-2" class="hidden md:block w-10/12 md:w-1/2">
                    <img src="/assets/routes-assets/new-watches/hub/rolex-new-watches-last-section-mobile.webp"
                        alt="rolex-new-watches-2024-sky-dweller-2-mobile" class="md:hidden block w-10/12 md:w-1/2">
                </div>


                <header
                    class="flex flex-col gap-8 font-helvetica font-bold justify-around items-center  text-rolex-brown h-fit py-[10vh]">

                    <h1 class="text-3xl md:text-5xl w-10/12 md:w-1/2 ">
                        Certificación de Cronómetro Superlativo

                    </h1>


                    <p class="w-10/12 md:w-1/2 text-xl font-helvetica font-light text-justify md:text-left ">
                        Como todos los relojes Rolex, el Oyster Perpetual Sky Dweller cuenta con la certificación de
                        Cronómetro
                        Superlativo redefinida por Rolex en 2015. Esta denominación atestigua que cada reloj que sale de
                        los
                        talleres de la marca ha superado con éxito una serie de pruebas llevadas a cabo por Rolex en sus
                        laboratorios internos y con arreglo a sus propios criterios, que siguen a la certificación
                        oficial del
                        movimiento por parte del Control Oficial Suizo de Cronómetros (COSC).

                    </p>

                </header>

            </section>



        </template>
    </RolexTemplate>
</template>
