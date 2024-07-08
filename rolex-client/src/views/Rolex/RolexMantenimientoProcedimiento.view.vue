<script setup>
import { RouterLink } from 'vue-router';

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

                <PageBanner type="mantenimiento-2" />
                <RolexHeader color="bg-rolex-brown-light-2">

                    <template #title>
                        Mantenimiento Rolex: las etapas de un servicio completo
                    </template>
                    <template #text>
                        Cualquier Distribuidor Oficial o filial de la marca puede hacerse cargo de su reloj Rolex para
                        su servicio. El personal competente registra sus posibles peticiones en el momento en que usted
                        le entrega su reloj. A continuación, se envía a un relojero.
                    </template>

                </RolexHeader>


                <div class="video-frame flex bg-rolex-brown-light-2 justify-center pb-10">
                    <div class="w-11/12  aspect-w-16 aspect-h-9 ">
                        <iframe src="https://www.youtube.com/embed/xZOhQcFS--w?si=JFrkfOhjDfiveKP5"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen></iframe>
                    </div>

                </div>




                <TwoSectionCard img-src="mantenimiento/procedimiento/procedimiento-1"
                    alt-text="procedimiento-mantenimiento-rolex-1" type="reverse" img-size="w-10/12">
                    <template #title>
                        Examen del reloj
                    </template>
                    <template #text>
                        Su reloj es minuciosamente examinado por un relojero, que estima las operaciones que hay que
                        realizar y establece un presupuesto. Una vez aceptado, comienza el servicio de mantenimiento.
                    </template>
                </TwoSectionCard>

                <TwoSectionCard img-src="mantenimiento/procedimiento/procedimiento-2"
                    alt-text="procedimiento-mantenimiento-rolex-2" type="normal" img-size="w-1/2">
                    <template #title>
                        Preparación del servicio
                    </template>
                    <template #text>
                        El movimiento, todavía coronado por la esfera y las agujas, se extrae de la caja, de la que se
                        ha desprendido previamente el brazalete. Movimiento, caja y brazalete se tratarán de forma
                        separada durante el proceso de mantenimiento, antes de volver a montarlos al concluir el
                        servicio.
                    </template>
                </TwoSectionCard>


                <TwoSectionCard img-src="mantenimiento/procedimiento/procedimiento-3"
                    alt-text="procedimiento-mantenimiento-rolex-3" type="reverse">
                    <template #title>
                        Desmontaje del movimiento
                    </template>
                    <template #text>
                        El movimiento se desmonta por completo y todos los componentes se examinan con el mayor de los
                        cuidados. Los que no cumplen con los criterios de Rolex se sustituyen siste-máticamente.cio de
                        mantenimiento.
                    </template>
                </TwoSectionCard>


                <TwoSectionCard img-src="mantenimiento/procedimiento/procedimiento-4"
                    alt-text="procedimiento-mantenimiento-rolex-4" type="reverse" img-size="w-10/12">
                    <template #title>
                        Lavado de los componentes del movimiento
                    </template>
                    <template #text>
                        Los diferentes componentes se limpian mediante baños de ultrasonidos, de tal modo que se
                        eliminan las impurezas hasta en las zonas de más difícil acceso.
                    </template>
                </TwoSectionCard>

                <TwoSectionCard img-src="mantenimiento/procedimiento/procedimiento-5"
                    alt-text="procedimiento-mantenimiento-rolex-5" type="normal" img-size="w-1/2">
                    <template #title>
                        Montaje del movimiento y lubricación
                    </template>
                    <template #text>
                        Los componentes se secan y, a continuación, el movimiento se vuelve a montar por com-pleto y se
                        lubrica.
                        El relojero ajusta una primera vez el movimiento de acuerdo con los criterios de la marca.

                    </template>
                </TwoSectionCard>


                <TwoSectionCard img-src="mantenimiento/procedimiento/procedimiento-6"
                    alt-text="procedimiento-mantenimiento-rolex-6" type="reverse">
                    <template #title>
                        Acabado de la caja y del brazalete
                    </template>
                    <template #text>
                        La caja se desmonta por completo y la carrura, el bisel, el fondo y el brazalete se pulen o
                        satinan, en función del acabado original. Estas sutiles operaciones exigen destreza y
                        deli-cadeza.
                    </template>
                </TwoSectionCard>

                <TwoSectionCard img-src="mantenimiento/procedimiento/procedimiento-7"
                    alt-text="procedimiento-mantenimiento-rolex-7" type="normal" img-size="w-1/2">
                    <template #title>
                        Montaje de la caja
                    </template>
                    <template #text>
                        Una vez reavivados y limpios, los elementos de la caja se vuelven a montar y las juntas de
                        hermeticidad se reemplazan. Se pone a prueba la hermeticidad de la caja.

                    </template>
                </TwoSectionCard>


                <TwoSectionCard img-src="mantenimiento/procedimiento/procedimiento-8"
                    alt-text="procedimiento-mantenimiento-rolex-8" type="reverse">
                    <template #title>
                        Encajado del movimiento
                    </template>
                    <template #text>
                        El movimiento, sobre el cual se han vuelto a montar la esfera y las agujas, se recoloca en la
                        caja después de que el relojero haya efectuado un riguroso control técnico y estético de todos
                        los elementos.
                    </template>
                </TwoSectionCard>

                <TwoSectionCard img-src="mantenimiento/procedimiento/procedimiento-9"
                    alt-text="procedimiento-mantenimiento-rolex-9" type="reverse" img-size="w-10/12">
                    <template #title>
                        Prueba de precisión
                    </template>
                    <template #text>
                        Tras el encajado del movimiento, se evalúa una vez más la precisión cronométrica. El relojero
                        procede a los últimos ajustes para que cumpla con las exigencias de Rolex.
                        <br>
                        A continuación, el relojero enrosca el fondo de la caja y entonces el reloj se pone a prueba, al
                        menos durante veinticuatro horas. Esta prueba, propia de la marca, permite verificar el buen
                        funcionamiento de su movimiento.

                    </template>
                </TwoSectionCard>

                <TwoSectionCard img-src="mantenimiento/procedimiento/procedimiento-10"
                    alt-text="procedimiento-mantenimiento-rolex-10" type="reverse">
                    <template #title>
                        Prueba de hermeticidad
                    </template>
                    <template #text>
                        La hermeticidad del reloj se controla con ayuda de una prueba realizada en el agua bajo presión y, a continuación, se vuelve a montar el brazalete en la caja.
                    </template>
                </TwoSectionCard>

                <TwoSectionCard img-src="mantenimiento/procedimiento/procedimiento-11"
                    alt-text="procedimiento-mantenimiento-rolex-11" type="reverse" img-size="w-10/12">
                    <template #title>
                        Control final
                    </template>
                    <template #text>
                        El reloj ya está preparado para un control final. Durante el mismo, el relojero comprueba que sus funciones estén perfectamente operativas y que su estética sea irreprochable. 
                    </template>
                </TwoSectionCard>

                <TwoSectionCard img-src="mantenimiento/procedimiento/procedimiento-12"
                    alt-text="procedimiento-mantenimiento-rolex-12" type="normal" img-size="w-1/2">
                    <template #title>
                        Devolución del reloj
                    </template>
                    <template #text>
                        Al concluir el servicio, se le devuelve el reloj en un estuche protector. El servicio tiene una garantía internacional de una duración de dos años que cubre tanto las piezas como la mano de obra.
                    </template>
                </TwoSectionCard>


                <TwoSectionCard img-src="mantenimiento/procedimiento/procedimiento-13"
                    alt-text="procedimiento-mantenimiento-rolex-13" type="reverse">
                    <template #title>
                        Un servicio de primer nivel
                    </template>
                    <template #text>
                        Rolex se compromete plenamente a ofrecerles a sus clientes un servicio posventa de pri-mer nivel. Gracias a la exigencia y al savoir faire de nuestros relojeros, su reloj Rolex pue-de mantenerse en el tiempo conservando una excelente fiabilidad y, al mismo tiempo, un brillo irreprochable.
                    </template>
                </TwoSectionCard>




                <div id="footer-banner">
                    <img src="/assets/routes-assets/mantenimiento/procedimiento/procedimiento-14.webp" alt="rolex-watchmaking-woman"
                        class="hidden md:block">
                    <img src="/assets/routes-assets/mantenimiento/procedimiento/procedimiento-14-mobile.webp"
                        alt="rolex-watchmaking-woman" class="md:hidden block">
                </div>







            </template>
        </RolexTemplate>

    </div>
</template>
