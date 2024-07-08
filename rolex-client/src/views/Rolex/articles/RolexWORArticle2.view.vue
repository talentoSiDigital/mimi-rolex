<script setup>
import { RouterLink } from 'vue-router';
import RolexTemplate from '../RolexTemplate.view.vue'
import SectionNavigationCard from '../../../components/cards/SectionNavigationCard.vue'



</script>

<template>
    <RolexTemplate>
        <template #content>
            <section class="py-[10vh] bg-rolex-brown-light-1">
                <header
                    class="flex flex-col gap-8 font-helvetica font-bold justify-around items-center  text-rolex-brown h-fit pb-[10vh]">

                    <h1 class="text-3xl md:text-5xl w-10/12 md:w-1/2">
                        SailGP

                    </h1>


                    <p class="w-10/12 md:w-1/2 text-xl md:text-2xl font-helvetica font-bold text-rolex-dark-grey text-justify md:text-left ">
                        Rolex es el patrocinador principal global y el reloj oficial exclusivo del campeonato SailGP, un
                        circuito de regatas que enfrenta a los veleros más rápidos del mundo.
                    </p>
                    <p class="w-10/12 md:w-1/2 h-fit text-lg md:text-xl text-rolex-dark-grey">
                        Publicado el 9 de Abril, 2024

                    </p>
                </header>



            </section>

            <div class="video-frame flex bg-rolex-brown-light-1 justify-center pb-[10vh]">
                <div class="w-11/12  aspect-w-16 aspect-h-9 ">
                    <iframe src="https://www.youtube.com/embed/Gd6CNULsQPA?si=ehfl7M5BZTpkr1Je"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>
                </div>

            </div>


            <section class=" bg-rolex-brown-light-1">
                <header
                    class="flex flex-col gap-8 font-helvetica font-bold justify-around items-center  text-rolex-brown h-fit pb-[10vh]">


                    <p class="w-10/12 md:w-1/2 text-xl font-helvetica font-light text-justify md:text-left ">
                        Se compite en los mares de todo el mundo, en catamaranes F50 que parecen volar sobre el agua.
                    </p>



                </header>


            </section>


            <section class=" bg-rolex-brown-light-1">
                <header
                    class="flex flex-col gap-8 font-helvetica font-bold justify-around items-center h-fit pb-[10vh]">


                    <p class="w-10/12 md:w-1/2 text-5xl font-georgia font-light text-justify md:text-left ">
                        "El circuito SailGP es un hito importante en la evolución de la navegación a vela. Los barcos
                        utilizan la tecnología más avanzada mientras la competición sigue ampliando el atractivo de la
                        navegación.".
                    </p>

                    <p class="w-10/12 md:w-1/2 text-xl font-helvetica font-light text-justify md:text-left ">
                        Sir Ben Ainslie.
                    </p>

                </header>


            </section>

            <section class="pb-[10vh] bg-rolex-brown-light-1">
                <header
                    class="flex flex-col gap-8 font-helvetica font-bold justify-around items-center  text-rolex-brown h-fit pb-[10vh]">

                    <h1 class="text-2xl md:text-5xl w-10/12 md:w-1/2">
                        Innovación al servicio del rendimiento
                    </h1>


                    <p class="w-10/12 md:w-1/2 text-xl font-helvetica font-light text-justify md:text-left ">
                        Tripulaciones formadas por algunos de los mejores navegantes. Catamaranes idénticos, con foils y
                        vela rígida, capaces de alcanzar los 50 nudos, es decir, casi 100 km/h. Espectaculares regatas
                        que duran 15 minutos como máximo. Una temporada organizada en los mares de los cinco
                        continentes. Lanzado en 2019, el circuito SailGP ha redefinido el mundo de la vela de
                        competición, utilizando catamaranes innovadores y continuamente optimizados. Estos yates
                        voladores llevan los colores de los países que representan y encarnan el presente y el futuro de
                        este deporte.

                    </p>
                    <p class="w-10/12 md:w-1/2 text-xl font-helvetica font-light text-justify md:text-left ">

                        El campeonato SailGP también ha generado la Impact League, el programa Women's Pathway y SailGP
                        Inspire, iniciativas destinadas a promover la sostenibilidad y la diversidad en el mundo de la
                        náutica.


                    </p>

                </header>


                <div class="flex justify-center ">
                    <img src="/assets/routes-assets/world-of-rolex/articles/article-2/article-1.webp" alt="article-1"
                        class="hidden md:block">
                    <img src="/assets/routes-assets/world-of-rolex/articles/article-2/article-1-mobile.webp"
                        alt="article-1-mobile" class="md:hidden block w-10/12">
                </div>

                <header
                    class="flex flex-col gap-8 font-helvetica font-bold justify-around items-center  text-rolex-brown h-fit py-[10vh]">


                    <h1 class="text-2xl md:text-5xl w-10/12 md:w-1/2">
                        Sir Ben Ainslie – Testimonial Rolex <br>
                        El estándar de oro en las regatas

                    </h1>

                    <p class="w-10/12 md:w-1/2 text-xl font-helvetica font-light text-justify md:text-left ">
                        Con cuatro medallas de oro y una de plata, Sir Ben Ainslie logró la hazaña sobresaliente de
                        conseguir una medalla en los cinco Juegos Olímpicos consecutivos en los que compitió.

                    </p>
                    <p class="w-10/12 md:w-1/2 text-xl font-helvetica font-light text-justify md:text-left ">
                        El regatista británico compite para el Royal Yacht Squadron, con el que Rolex colabora desde la
                        década de 1980. Y como patrón del equipo de Gran Bretaña, también es uno de los líderes del
                        circuito SailGP.

                    </p>
                    <p class="w-10/12 md:w-1/2 text-xl font-helvetica font-light text-justify md:text-left ">
                        Sir Ben Ainslie lleva un Yacht-Master 42.

                    </p>

                </header>

                <div class="flex justify-center ">
                    <img src="/assets/routes-assets/world-of-rolex/articles/article-2/article-2.webp" alt="article-2"
                        class="hidden md:block w-10/12 ">
                    <img src="/assets/routes-assets/world-of-rolex/articles/article-2/article-2-mobile.webp"
                        alt="article-2-mobile" class="md:hidden block w-10/12 ">
                </div>

                <header
                    class="flex flex-col gap-8 font-helvetica font-bold justify-around items-center  text-rolex-brown h-fit py-[10vh]">


                    <h1 class="text-2xl md:text-5xl w-10/12 md:w-1/2">

                        Hannah Mills – Testimonial de Rolex <br>
                        Un patrón comprometido con la inclusión


                    </h1>

                    <p class="w-10/12 md:w-1/2 text-xl font-helvetica font-light text-justify md:text-left ">
                        Con dos medallas de oro y una de plata, Hannah Mills es la regatista olímpica más exitosa de
                        todos los tiempos. Ganadora del premio Rolex World Sailor of the Year en 2016 y 2021, ocupa el
                        cargo de táctica en la tripulación de SailGP de Gran Bretaña. Como embajadora de SailGP para el
                        desarrollo sostenible, Mills también está muy comprometida con la inclusión de las mujeres en la
                        vela.

                    </p>
                    <p class="w-10/12 md:w-1/2 text-xl font-helvetica font-light text-justify md:text-left ">
                        Hannah Mills lleva un Yacht-Master 37.

                    </p>


                </header>

                <div class="flex justify-center ">
                    <img src="/assets/routes-assets/world-of-rolex/articles/article-2/article-3.webp" alt="article-3"
                        class="hidden md:block w-10/12 ">
                    <img src="/assets/routes-assets/world-of-rolex/articles/article-2/article-3-mobile.webp"
                        alt="article-3-mobile" class="md:hidden block w-10/12 ">
                </div>

                <header
                    class="flex flex-col gap-8 font-helvetica font-bold justify-around items-center  text-rolex-brown h-fit py-[10vh]">


                    <h1 class="text-2xl md:text-5xl w-10/12 md:w-1/2">

                        Rolex y la navegación <br>
                        Una asociación que llega hasta el final


                    </h1>

                    <p class="w-10/12 md:w-1/2 text-xl font-helvetica font-light text-justify md:text-left ">
                        Clubes náuticos, regatistas de renombre, regatas oceánicas icónicas y algunas de las regatas más célebres. Durante más de 60 años, Rolex ha forjado sólidas relaciones con el mundo de la navegación. La marca, un destacado socio de carreras de yates, comparte la búsqueda común de la excelencia y la pasión por el rendimiento premium con los custodios del espíritu perdurable del deporte.


                    </p>

                </header>
            </section>

            <section class="flex justify-center w-full bg-rolex-brown-light-1 pb-[10vh]">
                <SectionNavigationCard img="world-of-rolex/articles/article-2/article-4" link="/coleccion-rolex/yacht-master"
                    class="w-10/12  ">
                    <template #sub>Rolex Yatch-Master</template>
                    <template #title>El dominio de la ligereza</template>

                    <template #button>Más información</template>

                </SectionNavigationCard>
            </section>



        </template>
    </RolexTemplate>
</template>
