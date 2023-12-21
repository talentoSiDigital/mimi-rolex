<script setup>
import PageBanner from '../components/banners-components/PageBanner.vue'
import TwoSectionsCard from '../components/cards/TwoSectionCard.vue'
</script>

<template>
    <div id="main-container">
        <PageBanner type="tudor" />


        <header class="flex flex-col justify-center font-black items-center  h-fit py-10">
            <p class="font-black text-xl text-red-700 stroke-black">
                ADÉNTRESE EN TUDOR
            </p>
            <h1 class="text-4xl text-center py-4 ">
                NACIMIENTO DE LA MARCA

            </h1>
            <p class="w-3/4 text-center font-normal mb-14">

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
                    <p class="text-sm ">VER COLECCIÓN</p>
                    <font-awesome-icon :icon="['fas', 'arrow-right']" />
                </a>
            </div>
        </header>


        <section class=" flex flex-col items-center justify-center py-10  ">
            <p class="font-black text-xl text-red-700 stroke-black">
                HISTORIA DE TUDOR
            </p>
            <h1 class="text-4xl py-4 font-black">
                INTUICIÓN DE HANS WILSDORF
            </h1>
            <img class="mb-4 w-1/2" src="../assets/routes-assets/tudor/tudor-1.webp" alt="tudor-mosaico">
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

        <!-- <section class="flex w-full border h-fit">
            <header class="w-1/2 border border-red-400">
                <p class="font-black text-xl text-red-700 stroke-black">
                        ADÉNTRESE EN TUDOR
                </p>
                <h1 class="text-4xl py-4 ">
                    NACIMIENTO DE LA MARCA

                </h1>
                <p class=" text-justify font-normal mb-14">

                    En febrero de 1926, Hans Wilsdorf registra la marca «The TUDOR» y comienza a fabricar relojes que llevan
                    esa
                    mención en la esfera. Recién terminada la Segunda Guerra Mundial, Hans Wilsdorf supo que había llegado
                    el
                    momento de expandirse y dotar a la marca de una identidad propia. El 6 de marzo de 1946, creó «Montres
                    TUDOR S.A.», especializada en modelos tanto para hombre como para mujer. Rolex garantizaría las
                    características técnicas, estéticas y funcionales, además de la distribución y el servicio
                    postventa.

                </p>

            </header>
            <div class="aspect-w-16 aspect-9">
                
            <iframe width="912" height="513" src="https://www.youtube.com/embed/t0ZU3FoQ0Io?si=mRGHyv_ln29D6W0H" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            
        
        </section> -->

        <section class="flex flex-col md:flex-row-reverse justify-around items-center p-10 w-full">
            <img src="../assets/routes-assets/tudor/tudor-2.webp" alt="david-beckham">
            <header class="w-[40%]">
                <h3 class="font-black text-xl text-red-700">EMBAJADOR TUDOR</h3>
                <h1 class="text-4xl py-4 font-black">DAVID BECKHAM</h1>
                <p class=" text-justify">De niño, David Beckham tenía un sueño. Cada vez que le preguntaban qué quería ser de mayor, él respondía siempre jugador de fútbol. Esto lo llevó pronto a convertirse en uno de los jugadores más aclamados, queridos y de mayor éxito de la historia del deporte. Dejó su marca en el fútbol moderno con tres clubes importantes y 115 partidos con la selección inglesa de fútbol, 59 de ellos como capitán: 6 títulos de Premier League inglesa, 2 copas de Major League Soccer estadounidense, 1 Liga española y 1 UEFA Champions League.</p>
            </header>
        </section>
        <section class="flex flex-col md:flex-row justify-around items-center p-10 w-full">
            <img src="../assets/routes-assets/tudor/tudor-3.webp" alt="jay-chou">
            <header class="w-[40%]">
                <h3 class="font-black text-xl text-red-700">EMBAJADOR TUDOR</h3>
                <h1 class="text-4xl py-4 font-black">JAY CHOU</h1>
                <p class=" text-justify">Jay Chou creció en el seno de una familia de maestros en Taiwán y, en vista de su precoz talento para la música, empezó a familiarizarse con el piano a los cuatro años. Posteriormente, aprendió a tocar el violonchelo y, hoy en día, Chopin sigue siendo su compositor favorito. Músico. Actor. Director. Icono. Durante más de una década, el «rey del pop asiático» ha desafiado los límites por todo el mundo. Desde Taipéi a Hollywood, Jay Chou siempre está dispuesto a embarcarse en el próximo reto.</p>
            </header>
        </section>
      

        <section class=" h-[300px] w-full overflow-hidden bg-black mb-36
                 relative">
                    <img src="../../assets/routes-assets/historia/historia-overlay.webp" alt="mantenimiento-rolex-mimi" class="h-full w-full">
                    <header class="absolute h-full bottom-0 left-0 right-0 flex flex-col items-center justify-center  text-white bg-black bg-opacity-40 font-bold">
                    
                        <h1 class="text-2xl  text-center  py-4">
                            YA SON CUARENTA AÑOS DE EXPERIENCIA, CONSTANCIA Y DEDICACIÓN, QUE RESPALDAN NUESTRO COMPROMISO COMO DISTRIBUIDORES ROLEX , BRINDANDO UNA EXCELENTE EXPERIENCIA DE COMPRA.
                        </h1>
                    
                    </header>                    

                </section>



    </div>
</template>

<style scoped></style>

