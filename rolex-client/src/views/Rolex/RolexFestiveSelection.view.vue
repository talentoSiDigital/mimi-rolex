<script setup>
import { Head } from "@unhead/vue/components";
import { ref } from "vue";

import PageBanner from "../../components/banners-components/PageBanner.vue";
import RolexHeader from "../../components/RolexHeader.vue";
import festiveSelection from "../../data/festiveSelection.json";
import RolexTemplate from "../Rolex/RolexTemplate.view.vue";
import GLOBAL_OBJECT from "../../utils/globaj";

const watchItems = ref(festiveSelection["watches"]);
const accesoriesItems = ref(festiveSelection["accesories"]);


</script>

<template>
    <RolexTemplate>

        <Head>
            <title>Selección festiva | Mimi Joyería</title>
            <meta name="description"
                content="Para las fiestas, Rolex presenta una selección especial de distintivos y refinados relojes y exclusivos accesorios. Descúbralos en Mimi Joyería, su Distribuidor Oficial Rolex en Venezuela." />
        </Head>
        <template #content>
            <div>
                <PageBanner type="festive" />
                <RolexHeader color="bg-rolex-brown-light-2">

                    <template #title>
                        <span> Selección de relojes Rolex para las fiestas <br>
                            Hora de brillar
                        </span>
                    </template>
                    <template #text>
                        <p>
                            <strong>
                                Para las fiestas, Rolex presenta una selección especial de distintivos y refinados
                                relojes y exclusivos accesorios.
                            </strong>
                            Cada reloj, cuidadosamente elaborado, es el resultado de un «savoir‑faire» relojero
                            único. Cada artículo, desde los sofisticados modelos engastados con esferas
                            deslumbrantes y los emblemáticos relojes herramienta hasta los elegantes y preciosos
                            accesorios, es sinónimo de fiabilidad, precisión y atemporalidad.

                        </p>
                    </template>
                </RolexHeader>

                <section class="bg-rolex-brown-light-2 text-rolex-brown pb-20">

                    <div class="flex gap-2 items-center flex-col">
                        <div class="grid grid-cols-2 md:grid-cols-3 place-items-center w-11/12 md:w-8/12 gap-2">
                            <div v-for="(item, key) in watchItems" :key="key" class="h-[450px] ">
                                <a :href="`/${item.url}`"
                                    class="bg-rolex-brown-light-1 h-full flex flex-col items-center justify-center py-0 cursor-pointer group">

                                    <img :src="`${GLOBAL_OBJECT.STORAGE_URL}${item.img}`" :alt="item.name"
                                        class="w-3/4  xl:w-[60%] duration-200 ease-in-out group-hover:scale-110 " />
                                    <div class="w-9/12 h-1/4 ">
                                        <p class="font-helvetica font-bold text-[16px] ">Rolex</p>
                                        <p class="font-helvetica font-bold text-[20px] ">{{ item.name }}</p>
                                        <p class="font-helvetica font-light text-[16px] text-black ">
                                            {{ item.description }}
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="w-11/12 md:w-8/12 ">
                            <img src="/assets/routes-assets/festive/festive-1.webp" alt="festive-banner" class="hidden md:block"/>
                            <img src="/assets/routes-assets/festive/festive-1-mobile.webp" alt="festive-banner-mobile" class="block md:hidden"/>
                        </div>
                        <div class="grid grid-cols-2 md:grid-cols-3 place-items-center w-11/12 md:w-8/12 gap-2">
                            <div v-for="(item, key) in accesoriesItems" :key="key" class="h-[450px] ">
                                <a :href="`/${item.url}`"
                                    class="bg-rolex-brown-light-1 h-full flex flex-col items-center justify-center py-0 cursor-pointer group">

                                    <img :src="`${GLOBAL_OBJECT.STORAGE_URL}${item.img}`" :alt="item.name"
                                        class="w-full md:w-1/2 lg:w-[55%] xl:w-[60%] duration-200 ease-in-out group-hover:scale-110 " />
                                    <div class="w-9/12 h-1/4 ">
                                        <p class="font-helvetica font-bold text-[20px] ">{{ item.name }}</p>
                                        <p class="font-helvetica font-light text-[16px] text-black ">
                                            {{ item.description }}
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                </section>



            </div>
        </template>
    </RolexTemplate>
</template>
