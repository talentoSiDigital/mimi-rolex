<script setup>
import { RouterLink } from 'vue-router';
import RolexTemplate from '../Rolex/RolexTemplate.view.vue'
import RolexHeader from '../../components/RolexHeader.vue'
import PageBanner from '../../components/banners-components/PageBanner.vue'
import ActivationsBanner from '../../components/banners-components/ActivationsBanner.vue'
import Button from '../../components/global-components/Button.vue'
import SectionNavigationCard from '../../components/cards/SectionNavigationCard.vue'


</script>

<template>
    <RolexTemplate>
        <template #content>
     

            <ActivationsBanner/>
           


            <RolexHeader color="bg-rolex-brown-light-2">

                <template #title>
                    Bienvenido a Mimi Joyería <br> Distribuidor Oficial Rolex

                </template>
                <template #text>
                    <strong>Mimi Joyería se enorgullece de formar parte de la red mundial de Distribuidores Oficiales
                        Rolex</strong>, autorizados para vender y realizar el mantenimiento de los relojes Rolex.
                </template>

            </RolexHeader>

            <section class="bg-rolex-brown-light-2 flex flex-col justify-center items-center pb-[10vh]">
                <h2 class="w-11/12 pb-4 font-helvetica font-bold text-rolex-brown text-2xl md:text-4xl">Relojes Rolex
                </h2>
                <div class="w-11/12">
                    <SectionNavigationCard img="discover-rolex/discover-rolex-1" link="/coleccion-rolex"
                        class="w-full ">
                        <template #sub>Encuentre su Rolex</template>
                        <template #title>Descubra la colección Rolex</template>
                        <template #button>Explore más</template>

                    </SectionNavigationCard>
                </div>
            </section>

            <section class="bg-rolex-brown-light-2 flex flex-col justify-center items-center pb-[10vh]">
                <h2 class="w-11/12 pb-4 font-helvetica font-bold text-rolex-brown text-4xl">Relojes Rolex</h2>
                <div class="w-11/12 ">
                    <SectionNavigationCard img="discover-rolex/discover-rolex-3" link="/contacto"
                        class="w-full  ">
                        <template #title>Deja tu mensaje</template>
                        <template #button>Contáctanos</template>

                    </SectionNavigationCard>

                </div>
            </section>

            <section class="bg-rolex-brown-light-2 flex flex-col justify-center items-center pb-10">
                <h2 class="w-11/12 pb-4 font-helvetica font-bold text-rolex-brown text-4xl">Descubre Rolex</h2>
                <div class="w-11/12 flex flex-col md:flex-row gap-2">
                    <SectionNavigationCard img="discover-rolex/discover-rolex-4" link="/world-of-rolex"
                        class="w-full md:w-1/3 ">
                        <template #sub>Un compromiso con la excelencia</template>
                        <template #title>World Of Rolex</template>
                        <template #button>Explorar</template>

                    </SectionNavigationCard>
                    <SectionNavigationCard img="discover-rolex/discover-rolex-5" link="/watchmaking"
                        class="w-full md:w-1/3 ">
                        <template #sub>Excelencia en la elaboración</template>
                        <template #title>Watchmaking</template>
                        <template #button>Explorar</template>

                    </SectionNavigationCard>
                    <SectionNavigationCard img="discover-rolex/discover-rolex-6" link="/mantenimiento-rolex"
                        class="w-full md:w-1/3 ">
                        <template #sub>Nuestra filosofía de servicio</template>
                        <template #title>Mantenimiento</template>
                        <template #button>Explorar</template>

                    </SectionNavigationCard>

                </div>
            </section>


        </template>
    </RolexTemplate>
</template>
