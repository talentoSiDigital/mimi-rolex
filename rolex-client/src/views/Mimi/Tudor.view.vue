<script setup>
import { RouterLink } from 'vue-router'
import PageBanner from '../../components/banners-components/PageBanner.vue'

</script>

<template>
    <div id="main-container">
        <PageBanner type="tudor" />


        <header class="flex flex-col justify-center  items-center  h-fit py-10 bg-neutral-100">
            <p class="font-tudor tracking-tighter text-xl text-red-700 stroke-black">
                ADÉNTRESE EN TUDOR
            </p>
            <h1 class="font-tudor tracking-tighter text-4xl text-center py-4 ">
                NACIMIENTO DE LA MARCA

            </h1>
            <p class="w-3/4 text-center font-normal mb-14 font-sans">

                En febrero de 1926, Hans Wilsdorf registra la marca «The TUDOR» y comienza a fabricar relojes que llevan esa
                mención en la esfera. Recién terminada la Segunda Guerra Mundial, Hans Wilsdorf supo que había llegado el
                momento de expandirse y dotar a la marca de una identidad propia. El 6 de marzo de 1946, creó «Montres
                TUDOR S.A.», especializada en modelos tanto para hombre como para mujer. Rolex garantizaría las
                características técnicas, estéticas y funcionales, además de la distribución y el servicio postventa.

            </p>
            <div id="button" class="relative  py-2 px-14 bg-red-700">
                <div class="py-4 px-6 border"></div>
                <a href="#"
                    class="w-full h-full inset-0 absolute flex items-center justify-center gap-1  border bg-white border-red-700 hover:-translate-x-1 hover:-translate-y-1 duration-200">
                    <p class="text-sm font-tudor tracking-tighter  ">VER COLECCIÓN</p>
                    <font-awesome-icon :icon="['fas', 'arrow-right']" />
                </a>
            </div>
        </header>

        <section class=" flex flex-col items-center justify-center py-10  ">
            <p class="font-tudor tracking-tighter  text-xl text-red-700 stroke-black">
                HISTORIA DE TUDOR
            </p>
            <h1 class="text-4xl py-4 font-tudor tracking-tighter ">
                INTUICIÓN DE HANS WILSDORF
            </h1>
            <img class="mb-4 w-1/2" src="../../assets/routes-assets/tudor/tudor-1.webp" alt="tudor-mosaico">
            <p class="w-3/4 text-center">«Llevaba muchos años considerando la idea de crear relojes que nuestros
                distribuidores pudieran vender a un precio un poco más bajo que el de nuestros Rolex, pero alcanzando los
                mismos niveles de confianza por los que Rolex es reconocido en todo el mundo. Por eso decidí fundar una
                empresa específicamente dedicada a la fabricación y venta de estos nuevos relojes. Esta empresa se llama
                Montres TUDOR S.A.».
                <br>
                <br>
                -H. Wilsdorf
            </p>

        </section>

        <section class="flex flex-col md:flex-row w-full h-fit mb-14 bg-[#1a1a18]">
            <div class="md:w-1/2 py-10 flex flex-col justify-center items-center text-white ">

                <p class="font-tudor tracking-tighter  text-xl w-5/6">
                    HISTORIA DE TUDOR
                </p>
                <h1 class="text-4xl py-4 font-tudor tracking-tighter  w-5/6">
                    EL ARTE DEL MONTAJE

                </h1>
                <p class=" text-justify  w-5/6">

                    Un reloj TUDOR vive, vibra, y le lleva al mundo de la micro precisión. Todos sus componentes técnicos se
                    han puesto a prueba hasta el mínimo detalle. Hasta la obsesión. Sumérjase en el movimiento. Estética y
                    funcionamiento tienen en cuenta los imperativos para conseguir un producto dedicado a los más exigentes,
                    diseñado para resistir y para disfrutar. La vista se guía por la mente y por el corazón, el tiempo no
                    debe hacer mella en esta mecánica de precisión. Materiales de excepción, resistencia y fuerza de diseño
                    hacen de cada reloj una pieza única.

                </p>


            </div>
            <div class="md:w-1/2  flex flex-col justify-center">
                <div class="aspect-w-16 aspect-h-9">
                    <iframe src="https://www.youtube.com/embed/t0ZU3FoQ0Io?si=eTA7KBN88LYBD1gx" title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>../../assets/routes-assets
                </div>
            </div>


        </section>

        <section class="flex flex-col md:flex-row-reverse justify-around items-center p-10 w-full">
            <img src="../../assets/routes-assets/tudor/tudor-2.webp" alt="david-beckham">
            <header class="w-[40%]">
                <h3 class="font-tudor tracking-tighter  text-xl text-red-700">EMBAJADOR TUDOR</h3>
                <h1 class="text-4xl py-4 font-tudor tracking-tighter ">DAVID BECKHAM</h1>
                <p class=" text-justify">De niño, David Beckham tenía un sueño. Cada vez que le preguntaban qué quería ser
                    de mayor, él respondía siempre jugador de fútbol. Esto lo llevó pronto a convertirse en uno de los
                    jugadores más aclamados, queridos y de mayor éxito de la historia del deporte. Dejó su marca en el
                    fútbol moderno con tres clubes importantes y 115 partidos con la selección inglesa de fútbol, 59 de
                    ellos como capitán: 6 títulos de Premier League inglesa, 2 copas de Major League Soccer estadounidense,
                    1 Liga española y 1 UEFA Champions League.</p>
            </header>
        </section>

        <section class="flex flex-col md:flex-row justify-around items-center p-10 w-full">
            <img src="../../assets/routes-assets/tudor/tudor-3.webp" alt="jay-chou">
            <header class="w-[40%]">
                <h3 class="font-tudor tracking-tighter  text-xl text-red-700">EMBAJADOR TUDOR</h3>
                <h1 class="text-4xl py-4 font-tudor tracking-tighter ">JAY CHOU</h1>
                <p class=" text-justify">Jay Chou creció en el seno de una familia de maestros en Taiwán y, en vista de su
                    precoz talento para la música, empezó a familiarizarse con el piano a los cuatro años. Posteriormente,
                    aprendió a tocar el violonchelo y, hoy en día, Chopin sigue siendo su compositor favorito. Músico.
                    Actor. Director. Icono. Durante más de una década, el «rey del pop asiático» ha desafiado los límites
                    por todo el mundo. Desde Taipéi a Hollywood, Jay Chou siempre está dispuesto a embarcarse en el próximo
                    reto.</p>
            </header>
        </section>

        <section class=" h-[300px] w-full overflow-hidden bg-black relative">
            <img src="../../assets/routes-assets/tudor/tudor-overlay.webp" alt="tudor-banner" class="h-full w-full">
            <header
                class="absolute h-full bottom-0 left-0 right-0 flex flex-col items-center justify-center  text-white bg-black bg-opacity-40 font-bold">

                <h1 class="text-xl md:text-4xl  text-center  py-4 w-3/4 font-arial-bold">
                    «CONSERVAMOS LO MEJOR DEL PASADO: LOS MEJORES MÉTODOS DE RELOJERÍA, EL MEJOR DISEÑO»
                </h1>

            </header>

        </section>

        <section class="pb-16 w-full overflow-hidden gap-6 bg-black relative flex flex-col justify-center items-center">
            <img src="../../assets/tudor-logo.webp" alt="tudor-logo" class="w-32">
            <header
                class="font-tudor tracking-tighter  h-full flex flex-col  md:flex-row items-center justify-center  text-white bg-black bg-opacity-40 ">

                <h1 class="font-tudor tracking-tighter  text-red-700 p-4 md:p-6">TUDOR EN MIMI JOYERÍA</h1>
                
                <RouterLink to="/relojeria/tudor" class=" hover:text-red-700 duration-200 p-4 md:p-6">
                    <h1 class="font-tudor tracking-tighter ">QUIERO UN TUDOR</h1>
                </RouterLink>
                <RouterLink to="/contactenos" class=" hover:text-red-700 duration-200 p-4 md:p-6">
                    <h1 class="font-tudor tracking-tighter ">CONTACTA CON NOSOTROS</h1>
                </RouterLink>


            </header>
            <a href="#top-bar" class=" w-10 text-center">
                <font-awesome-icon :icon="['fas', 'angle-up']" class="text-white" />

            </a>

        </section>





    </div>
</template>



