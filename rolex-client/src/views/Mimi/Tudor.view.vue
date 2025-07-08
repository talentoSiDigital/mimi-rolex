<script setup>
import { RouterLink } from 'vue-router'
import PageBanner from '../../components/banners-components/PageBanner.vue'
import TudorWatchesSlider from '../../components/cards/TudorWatchesSlider.vue';
import TudorHomepageSlider from '../../components/cards/TudorHomepageSlider.vue';
</script>

<template>
    <div id="main-container">
        <header
            class="font-tudor tracking-tighter  h-full flex flex-col  md:flex-row items-center justify-center  text-white bg-neutral-100 ">

            

            <RouterLink to="/tudor" class="text-red-700 duration-200 p-4 md:p-6">
                <h1 class="font-tudor tracking-tighter ">TUDOR EN MIMI JOYERÍA</h1>
            </RouterLink>
            <RouterLink to="/novedades/tudor" class="hover:text-red-700 text-black duration-200 p-4 md:p-6">
                <h1 class="font-tudor tracking-tighter ">NOVEDADES 2025</h1>
            </RouterLink>
            <RouterLink to="/relojeria/tudor" class="hover:text-red-700 text-black duration-200 p-4 md:p-6">
                <h1 class="font-tudor tracking-tighter ">QUIERO UN TUDOR</h1>
            </RouterLink>
            <RouterLink to="/contactenos" class="hover:text-red-700 text-black duration-200 p-4 md:p-6">
                <h1 class="font-tudor tracking-tighter ">CONTACTA CON NOSOTROS</h1>
            </RouterLink>


        </header>
        <PageBanner type="tudor-main" />


        <header class="flex flex-col justify-center  items-center  h-fit py-10 gap-2">
            <h1 class="font-tudor-title font-black  text-4xl text-center  ">
                RELOJES TUDOR

            </h1>
            <p class="font-tudor-title  font-black  text-tudor-red stroke-black">
                UNA SELECCIÓN DE DISEÑOS AUDACES
            </p>
            <p class="w-10/12 md:w-3/4 text-center text-gray-900 mb-14 font-sans">

                TUDOR es una marca galardonada de relojería suiza que ofrece relojes con un diseño refinado, fiabilidad
                probada y una exclusiva relación calidad-precio. Los orígenes de TUDOR se remontan a 1926, cuando «The
                Tudor» fue registrada por primera vez en nombre del fundador de Rolex, Hans Wilsdorf. En 1946 creó la
                empresa «Montres TUDOR S.A.» para ofrecer relojes con la calidad y confianza de un Rolex a un precio más
                asequible. Conocidos por su robustez y asequibilidad, a lo largo de su historia, los relojes TUDOR han
                acompañado a audaces aventureros en travesías submarinas, terrestres y glaciales. Hoy en día, la
                colección TUDOR incluye modelos emblemáticos como el Black Bay, Pelagos, 1926 y TUDOR Royal. Desde 2015,
                TUDOR también ofrece Calibres mecánicos de Manufactura con numerosas funciones y rendimiento
                excepcional.

            </p>

        </header>


        <TudorWatchesSlider />

        <div id="button" class="my-10 flex justify-center">
            <router-link :to="{ name: 'reloj' }"
                class=" duration-200 rounded-full text-sm bg-tudor-red border border-tudor-red text-white hover:bg-white hover:text-tudor-red p-3 uppercase font-bold">
                Explorar todos los relojes TUDOR
            </router-link>
        </div>

        <section class=" flex flex-col items-center justify-center py-10  ">
            <div>
                <img src="/assets/routes-assets/tudor/tudor-main.webp" alt="">
            </div>

            <h1 class="text-4xl py-4 text-center font-tudor-title ">
                EL MUNDO DE TUDOR
            </h1>
            <p class="w-3/4 text-center">En 2017, TUDOR lanzó una nueva campaña con el lema «Born To Dare». Refleja
                tanto la historia de la marca como lo que es hoy en día. Cuenta las aventuras de personas que han
                logrado lo extraordinario en tierra firme, sobre hielo, por aire o bajo el agua con un reloj TUDOR en
                sus muñecas. El lema también hace referencia a la visión de Hans Wilsdorf, fundador de TUDOR, quien
                fabricó relojes TUDOR diseñados para resistir las condiciones más extremas y concebidos para los estilos
                de vida más audaces. Es el testimonio del singular enfoque sobre la relojería por el que TUDOR es
                conocida en la actualidad. Sus innovaciones, pioneras en el sector de la relojería, se han convertido en
                toda una referencia hoy en día. El espíritu «Born To Dare» de TUDOR cuenta con el apoyo de embajadores
                ilustres por todo el mundo, cuyos logros son consecuencia de un estilo de vida desafiante
            </p>

        </section>

        <TudorHomepageSlider />

        <div id="button" class="my-10 flex justify-center">
            <a href="https://www.tudorwatch.com/es" target="_blank"
                class=" duration-200 rounded-full text-sm hover:bg-tudor-red border  border-tudor-red hover:text-white bg-white text-tudor-red p-3 uppercase font-bold ">
                Descubre más en tudorwatch.com
                <font-awesome-icon :icon="['fas', 'arrow-up-right-from-square']" />
            </a>
        </div>



        <section class="flex flex-col  justify-around items-center  w-full">
            <div>
                <img src="/assets/routes-assets/tudor/tudor-about-banner.webp" alt="">
            </div>
            <header class="flex flex-col justify-center  items-center  h-fit py-10 gap-2">
                <h1 class="font-tudor-title font-black  text-4xl text-center  ">
                    ACERCA DE TUDOR


                </h1>
                <p class="font-tudor-title  font-black  text-tudor-red stroke-black">
                    RELOJES FIABLES Y ROBUSTOS DESDE 1926
                </p>
               

            </header>
            <div class=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-3 sm:grid-rows-2 lg:grid-rows-1 place-content-center gap-10">
                <div class="w-[300px]">

                    <img src="/assets/routes-assets/tudor/tudor-about-1.webp" alt="" class="">
                    <header class="flex flex-col items-center">
                        <h2 class="py-2 font-tudor-title ">MANUFACTURA </h2>
                        <p class="text-xs font-light text-center w-11/12">
                            Cada reloj TUDOR está ensamblado y completamente puesto a prueba siguiendo los estándares
                            superiores de TUDOR en la Manufactura relojera de la marca ubicada en Le Locle, Suiza. Esta
                            nueva instalación de vanguardia, que reúne el savoir-faire de los relojeros con lo mejor de
                            la gestión de producción y de los sistemas de certificación automatizados, se completó en
                            2021 tras tres años de construcción.
                        </p>
                    </header>
                </div>
                <div class="w-[300px]">

                    <img src="/assets/routes-assets/tudor/tudor-about-2.webp" alt="" class="">
                    <header class="flex flex-col items-center">
                        <h2 class="py-2 font-tudor-title "> MOVIMIENTOS </h2>
                        <p class="text-xs font-light text-center w-11/12">
                            En 2015, TUDOR anunció el primer Calibre de Manufactura de su historia. Con un Calibre de
                            alto rendimiento y excelente precisión, además de probada resistencia, ofrece una reserva de
                            marcha de 70 horas. Esto quiere decir que el portador del reloj puede quitárselo un viernes
                            por la tarde y volver a ponérselo el lunes por la mañana sin tener que darle cuerda.
                        </p>
                    </header>
                </div>
                <div class="w-[300px]">

                    <img src="/assets/routes-assets/tudor/tudor-about-3.webp" alt="" class="">
                    <header class="flex flex-col items-center">
                        <h2 class="py-2 font-tudor-title ">HISTORIA</h2>
                        <p class="text-xs font-light text-center w-11/12">
                            Hans Wilsdorf creó TUDOR en 1926 para fabricar los mejores relojes al mejor precio. Casi un
                            siglo después, TUDOR está haciendo exactamente eso: crea relojes robustos y fiables a
                            precios asequibles.
                        </p>
                    </header>
                </div>
            </div>

            <a href="https://www.tudorwatch.com/es" target="_blank"
                class=" duration-200 rounded-full text-sm hover:bg-tudor-red border  border-tudor-red hover:text-white bg-white text-tudor-red p-3 uppercase font-bold mt-10">
                Descubre más en tudorwatch.com
                <font-awesome-icon :icon="['fas', 'arrow-up-right-from-square']" />
            </a>
        </section>







        <section class="pb-4 mt-8 w-full overflow-hidden  bg-black relative flex flex-col justify-center items-center">
            <img src="/assets/tudor-logo.webp" alt="tudor-logo" class="w-32">
            <a href="https://www.tudorwatch.com/es" target="_blank"
                class="text-white uppercase text-sm ">tudorwatch.com</a>


        </section>





    </div>
</template>
