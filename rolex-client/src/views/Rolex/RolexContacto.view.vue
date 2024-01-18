<script setup>

import RolexTemplate from '../Rolex/RolexTemplate.view.vue'

import PageBanner from '../../components/banners-components/PageBanner.vue'
import RolexHeader from '../../components/RolexHeader.vue'
import ContactWatchRolex from '../../components/global-components/ContactWatchRolex.vue'



</script>

<template>
    <div id="new-models">
        <RolexTemplate>
            <template #content>

                <PageBanner type="contacto" />
                <RolexHeader>
                    <template #sub>
                        Mimi Joyería, su Distribuidor Oficial Rolex
                    </template>
                    <template #title>

                        PÓNGASE EN CONTACTO CON NOSOTROS
                    </template>
                    <template #text>
                        Gracias al conocimiento, la destreza y el equipo necesarios para darle el mejor servicio, podemos
                        garantizar la autenticidad de todas y cada una de las piezas de su Rolex. Déjenos dar respuesta a
                        sus consultas.

                    </template>

                </RolexHeader>
                <div class="flex flex-col justify-center items-center py-10">
                    <h2>NUESTRAS BOUTIQUES</h2>
                    <button
                        class=" border px-6 py-2 rounded-3xl border-rolex-green hover:bg-rolex-green hover:text-white text-rolex-green duration-200">
                        Envíanos un mensaje
                    </button>

                </div>

                <div class="bg-neutral-100 flex flex-col md:flex-row items-center justify-center gap-10 ">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.251050917702!2d-66.86339612548622!3d10.480864864576938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2a59f37042f1a5%3A0x7697992e7ac226cb!2sMimi%20Joyer%C3%ADa%20-%20Distribuidor%20Oficial%20Rolex!5e0!3m2!1ses-419!2sve!4v1705353418244!5m2!1ses-419!2sve"
                        width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade" class="pt-2/4 w-10/12 md:w-1/3"></iframe>

                    <div class="w-10/12 md:w-1/3">
                        <div class="w-full flex flex-col gap-2 ">
                            <h2 class="text-3xl">C.C. TOLÓN FASHION MAL</h2>
                            <h2>C.C. Tolón Fashion Mall Piso 1</h2>
                            <h2>Las Mercedes</h2>
                            <h2>1080</h2>
                            <h2>Distrito Capital/Caracas</h2>
                            <div class="flex  items-center gap-6 text-xl">
                                <font-awesome-icon :icon="['fas', 'phone']" class="text-rolex-green bg-white hover:bg-rolex-green hover:text-white duration-200 cursor-pointer p-3 rounded-full"/>
                                <p>Llámenos al +58 212-3008742</p>
                            </div>
                            <div class="flex  items-center gap-6 text-xl">
                                <font-awesome-icon :icon="['fas', 'envelope']" class="text-rolex-green bg-white hover:bg-rolex-green hover:text-white duration-200 cursor-pointer p-3 rounded-full"/>
                                <p>Envíenos un mensaje</p>
                            </div>
                            <div class="flex  items-center gap-6 text-xl">
                                <font-awesome-icon :icon="['fas', 'location-arrow']" class="text-rolex-green bg-white hover:bg-rolex-green hover:text-white duration-200 cursor-pointer p-3 rounded-full"/>
                                <p>Conseguir la dirección</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <ContactWatchRolex/>
                </div>

            </template>
        </RolexTemplate>

    </div>
</template>
