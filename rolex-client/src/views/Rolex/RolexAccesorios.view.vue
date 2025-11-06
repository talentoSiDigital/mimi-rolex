<script setup>
import { Head } from "@unhead/vue/components";
import { useRoute } from "vue-router";
import PageBanner from "../../components/banners-components/PageBanner.vue";
import WatchCard from "../../components/cards/WatchCard.vue";
import PageLoader from '../../components/global-components/PageLoader.vue';
import RolexHeader from "../../components/RolexHeader.vue";
import RolexTemplate from "../Rolex/RolexTemplate.view.vue";
import GLOBAL_OBJECT from "../../utils/globaj";
import { onMounted, ref } from "vue";
import rolexDataService from "../../services/rolexDataService";

const route = useRoute();
const accesories = ref()
const isReady = ref(false)

function getAllAccesories() {
    rolexDataService.getAllAccesories()
        .then((d => {
            accesories.value = d.data
            isReady.value = true
        })).catch((e) => {

        })
}

onMounted(() => {
    getAllAccesories()
})

</script>

<template>
    <RolexTemplate>

        <Head>
            <title>Relojes Rolex| Mimi Joyería</title>
            <meta name="description"
                :content="`Descubra los relojes Rolex en línea en Mimi Joyería, Distribuidor Oficial autorizado para vender relojes Rolex para hombre y mujer. Descubra más en Mimi Joyería.`" />
        </Head>
        <template #content>
            <PageBanner type="accesorios" />
            <RolexHeader color="bg-rolex-brown-light-2">
                <template #sub>
                    <!-- {{ currentData.headerSection.sub }} -->
                </template>
                <template #title>
                    <span>Accesorios Rolex </span>
                </template>
                <template #text>
                    <strong>Gemelos elegantes y exclusivos de Rolex.</strong>
                    <h2>
                        Estos accesorios reflejan los códigos visuales de la marca a la vez que cumplen los mismos
                        estándares de calidad y fiabilidad que los de cualquier reloj Rolex.

                    </h2>
                    <!-- <span v-html="currentData.headerSection.text"></span> -->
                </template>
            </RolexHeader>

            <section v-if="isReady">
                <div class="flex justify-center bg-rolex-brown-light-2 text-rolex-brown pb-[10vh]">
                    <div class="grid grid-cols-2 md:grid-cols-3 w-10/12 md:w-8/12 gap-2">
                        <a v-for="item in accesories" :key="item" :href="`/rolex/accesorios/${item.modelo}`"
                            class="bg-rolex-brown-light-1 h-full flex flex-col items-center justify-center pb-6 cursor-pointer group ">

                            <img :src="`${GLOBAL_OBJECT.STORAGE_URL}rolex-relojes-new/rolex-accessories-${item.modelo}-packshot.webp`"
                                :alt="item.modelo"
                                class="w-full md:w-1/2 lg:w-[55%] xl:w-[60%] duration-200 ease-in-out group-hover:scale-110" />
                            <div class="w-9/12 h-32">
                                <p class="font-helvetica font-bold text-[16px] md:text-[24px] ">{{ item.nombre }}</p>
                                <p class="font-helvetica font-extralight text-[12px] md:text-[16px] ">{{ item.sub }}</p>
                            </div>
                        </a>

                    </div>

                </div>
                <section class="bg-rolex-brown-light-2 py-[10vh]">


                    <div class="flex justify-center pb-[10vh]">
                        <img src="/assets/routes-assets/accesorios/accesorios-1.webp" alt="article-1"
                            class="hidden md:block w-10/12 " />
                        <img src="/assets/routes-assets/accesorios/accesorios-1-mobile.webp" alt="article-1-mobile"
                            class="md:hidden block w-10/12 " />
                    </div>

                    <header
                        class="flex flex-col gap-8 font-helvetica font-bold justify-around items-center text-rolex-brown h-fit pb-[10vh]">
                        <h1 class="text-2xl md:text-5xl w-10/12 md:w-1/2">
                            Gemelos<br />
                            Elegancia en la muñeca
                        </h1>
                        <p class="w-10/12 md:w-1/2 text-xl font-helvetica font-light text-justify md:text-left">

                            Hay tres gemelos de elegancia discreta y atemporal disponibles, y se presentan en oro
                            amarillo, blanco o
                            Everose de 18 quilates.

                        </p>
                    </header>

                    <div class="flex justify-center">
                        <img src="/assets/routes-assets/accesorios/accesorios-2.webp" alt="article-2"
                            class="hidden md:block w-9/12" />
                        <img src="/assets/routes-assets/accesorios/accesorios-2-mobile.webp" alt="article-2-mobile"
                            class="md:hidden block w-10/12" />
                    </div>

                    <header
                        class="flex flex-col gap-8 font-helvetica font-bold justify-around items-center text-rolex-brown h-fit py-[10vh]">
                        <h1 class="text-2xl md:text-5xl w-10/12 md:w-1/2">
                            Gemelos «Corona» <br>
                            Un símbolo para tener en la muñeca

                        </h1>

                        <p class="w-10/12 md:w-1/2 text-xl font-helvetica font-light text-justify md:text-left">
                            El logotipo de Rolex, una corona de cinco puntas, puede llevarse como gemelos. Añaden un
                            toque
                            distinguido a las muñecas de aquellas personas para las que la excelencia debe expresarse
                            con la máxima
                            atención al detalle.

                        </p>
                    </header>
                    <div class="flex justify-center">
                        <img src="/assets/routes-assets/accesorios/accesorios-3.webp" alt="article-3"
                            class="hidden md:block w-9/12" />
                        <img src="/assets/routes-assets/accesorios/accesorios-3-mobile.webp" alt="article-3-mobile"
                            class="md:hidden block w-10/12" />
                    </div>

                    <header
                        class="flex flex-col gap-8 font-helvetica font-bold justify-around items-center text-rolex-brown h-fit py-[10vh]">
                        <h1 class="text-2xl md:text-5xl w-10/12 md:w-1/2">
                            Gemelos «Aguja»<br>
                            Siempre con brillo

                        </h1>

                        <p class="w-10/12 md:w-1/2 text-xl font-helvetica font-light text-justify md:text-left">
                            Inspirados en la forma del disco redondo que se encuentra en las puntas de las agujas de los
                            modelos
                            Profesionales de Rolex, estos gemelos brillan en la oscuridad gracias a su material
                            luminiscente, el
                            mismo que se utiliza en la visualización Chromalight de los relojes Rolex.

                        </p>
                    </header>

                    <div class="flex justify-center">
                        <img src="/assets/routes-assets/accesorios/accesorios-4.webp" alt="article-5"
                            class="hidden md:block w-9/12" />
                        <img src="/assets/routes-assets/accesorios/accesorios-4-mobile.webp" alt="article-5-mobile"
                            class="md:hidden block w-10/12" />
                    </div>
                    <header
                        class="flex flex-col gap-8 font-helvetica font-bold justify-around items-center text-rolex-brown h-fit py-[10vh]">
                        <h1 class="text-2xl md:text-5xl w-10/12 md:w-1/2">
                            Gemelos «Estriado» <br>
                            Una estética icónica

                        </h1>

                        <p class="w-10/12 md:w-1/2 text-xl font-helvetica font-light text-justify md:text-left">
                            Estos gemelos reúnen varios elementos característicos de los relojes Rolex. En el centro, la
                            corona de
                            cinco puntas está grabada en un botón Cerachrom de cerámica, rodeado de un acanalado que
                            evoca el
                            emblemático bisel que aparece en los modelos Clásicos de Rolex.

                        </p>
                    </header>
                    <header
                        class="flex flex-col gap-8 font-helvetica font-bold justify-around items-center text-rolex-brown h-fit py-[10vh] bg-rolex-brown-light-1">
                        <h1 class="text-2xl md:text-5xl w-10/12 md:w-1/2">
                            Relojes de sobremesa <br>
                            Hora de interior

                        </h1>

                        <p class="w-10/12 md:w-1/2 text-xl font-helvetica font-light text-justify md:text-left">
                            Inspirados directamente en los modelos emblemáticos de la marca, estos relojes de sobremesa
                            reinterpretan la estética de los relojes Rolex para un entorno de interior mediante un
                            savoir-faire
                            interno.

                        </p>
                    </header>
                    <div class="flex justify-center bg-rolex-brown-light-1 pb-[10vh]">
                        <img src="/assets/routes-assets/accesorios/accesorios-5.webp" alt="article-3"
                            class="hidden md:block  w-10/12" />
                        <img src="/assets/routes-assets/accesorios/accesorios-5-mobile.webp" alt="article-3-mobile"
                            class="md:hidden block  w-10/12" />
                    </div>

                    <header
                        class="flex flex-col gap-8 font-helvetica font-bold justify-around items-center text-rolex-brown h-fit py-[10vh] ">
                        <h1 class="text-2xl md:text-5xl w-10/12 md:w-1/2">
                            Reloj de calendario <br>
                            Honrando al Submariner

                        </h1>

                        <p class="w-10/12 md:w-1/2 text-xl font-helvetica font-light text-justify md:text-left">
                            Este reloj de sobremesa Rolex con calendario secular reinterpreta fielmente el diseño del
                            Submariner
                            Date. Muestra la hora y la fecha mediante un disco de bisel monobloque Cerachrom graduado 60
                            minutos,
                            además de una visualización Chromalight que emite una tenue luz azul en la oscuridad.
                            <br><br>
                            Su caja hemisférica de acero inoxidable se sitúa sobre una base con forma de anillo que
                            permite que el
                            objeto se oriente en cualquier dirección.
                            <br><br>
                            Equipado con un movimiento de cuarzo, incorpora un calendario secular. Este mecanismo se
                            ajusta
                            automáticamente durante meses con 28, 30 o 31 días, reconoce los años bisiestos —en los que
                            febrero
                            tiene 29 días— e incluso tiene en cuenta excepciones excepcionales que no son años
                            bisiestos.

                        </p>
                    </header>
                    <div class="flex justify-center  ">
                        <img src="/assets/routes-assets/accesorios/accesorios-6.webp" alt="article-3"
                            class="hidden md:block  w-1/2" />
                        <img src="/assets/routes-assets/accesorios/accesorios-6-mobile.webp" alt="article-3-mobile"
                            class="md:hidden block  w-10/12" />
                    </div>


                </section>

            </section>


        </template>
    </RolexTemplate>
</template>
