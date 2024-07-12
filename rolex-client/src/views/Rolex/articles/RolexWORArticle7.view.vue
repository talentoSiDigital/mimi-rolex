<script setup>
import { RouterLink } from "vue-router";
import RolexTemplate from "../RolexTemplate.view.vue";
import SectionNavigationCard from "../../../components/cards/SectionNavigationCard.vue";
</script>

<template>
  <RolexTemplate>
    <template #content>
      <section class="py-[10vh] bg-rolex-brown-light-1">
        <header
          class="flex flex-col gap-8 font-helvetica font-bold justify-around items-center text-rolex-brown h-fit pb-[10vh]"
        >
          <h1 class="text-3xl md:text-5xl w-10/12 md:w-1/2">
            Rolex y The Open: el major más antiguo del golf
          </h1>

          <p
            class="w-10/12 md:w-1/2 text-xl md:text-2xl font-helvetica font-bold text-rolex-dark-grey text-justify md:text-left"
          >
            The Open, tradicionalmente celebrado en el Reino Unido durante la
            tercera semana de julio, es el cuarto y último major masculino del
            año. Asociado con esta competición desde 1981, Rolex es actualmente
            un socio privilegiado del mundo del golf.
          </p>
          <p
            class="w-10/12 md:w-1/2 h-fit text-lg md:text-xl text-rolex-dark-grey"
          >
            Publicado el 12 de Julio, 2024
          </p>
        </header>
      </section>

      <div
        class="video-frame flex bg-rolex-brown-light-1 justify-center pb-[10vh]"
      >
        <div class="w-11/12 aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.youtube.com/embed/a9eG-6w67xg?si=r5jBN7Ucr-WrheRO"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <section class="bg-rolex-brown-light-1 pb-[10vh]">
        <header
          class="flex flex-col gap-8 font-helvetica font-bold justify-around items-center text-rolex-brown h-fit pb-[10vh]"
        >
          <p
            class="w-10/12 md:w-1/2 text-xl font-helvetica font-light text-justify md:text-left"
          >
            La colaboración entre Rolex y el golf comenzó en 1967 cuando Arnold
            Palmer se convirtió en el primer Testimonial de este deporte. Desde
            entonces, la marca se ha convertido en Reloj Oficial y es socio
            principal de varios eventos destacados y participantes en el
            deporte.
          </p>
        </header>

        <div class="flex justify-center pb-[10vh]">
          <img
            src="/assets/routes-assets/world-of-rolex/articles/article-7/article-1.webp"
            alt="article-1"
            class="hidden md:block w-10/12 md:w-1/2"
          />
          <img
            src="/assets/routes-assets/world-of-rolex/articles/article-7/article-1-mobile.webp"
            alt="article-1-mobile"
            class="md:hidden block w-10/12 md:w-1/2"
          />
        </div>

        <header
          class="flex flex-col gap-8 font-helvetica font-bold justify-around items-center text-rolex-brown h-fit pb-[10vh]"
        >
          <p
            class="w-10/12 md:w-1/2 text-xl font-helvetica font-light text-justify md:text-left"
          >
            La colaboración entre Rolex y el golf comenzó en 1967 cuando Arnold
            Palmer se convirtió en el primer Testimonial de este deporte. Desde
            entonces, la marca se ha convertido en Reloj Oficial y es socio
            principal de varios eventos destacados y participantes en el
            deporte.
          </p>
        </header>

        <div class="flex justify-center">
          <img
            src="/assets/routes-assets/world-of-rolex/articles/article-7/article-2.webp"
            alt="article-2"
            class="hidden md:block w-full"
          />
          <img
            src="/assets/routes-assets/world-of-rolex/articles/article-7/article-2-mobile.webp"
            alt="article-2-mobile"
            class="md:hidden block w-full"
          />
        </div>

        <header
          class="flex flex-col gap-8 font-helvetica font-bold justify-around items-center text-rolex-brown h-fit py-[10vh]"
        >
          <h1 class="text-2xl md:text-5xl w-10/12 md:w-1/2">
            Impregnado de elegancia y tradición
          </h1>

          <p
            class="w-10/12 md:w-1/2 text-xl font-helvetica font-light text-justify md:text-left"
          >
            Según la tradición, The Open se juega siempre en un «links», es
            decir, un campo situado junto al mar, con tierra arenosa y pocos
            obstáculos de agua o árboles. Las condiciones meteorológicas
            impredecibles significan que los 156 jugadores que compiten en el
            torneo cada año necesitan hacer gala de una buena dosis de espíritu
            luchador, autocontrol y humildad ante la posibilidad de que se
            produzcan chubascos intensos, fuertes rachas de viento e incluso
            olas de calor.
          </p>
        </header>
        <div class="flex justify-center">
          <img
            src="/assets/routes-assets/world-of-rolex/articles/article-7/article-3.webp"
            alt="article-3"
            class="hidden md:block w-9/12"
          />
          <img
            src="/assets/routes-assets/world-of-rolex/articles/article-7/article-3-mobile.webp"
            alt="article-3-mobile"
            class="md:hidden block w-9/12"
          />
        </div>

        <header
          class="flex flex-col gap-8 font-helvetica font-bold justify-around items-center text-rolex-brown h-fit py-[10vh]"
        >
          <h1 class="text-2xl md:text-5xl w-10/12 md:w-1/2">
            Momentos inolvidables
          </h1>

          <p
            class="w-10/12 md:w-1/2 text-xl font-helvetica font-light text-justify md:text-left"
          >
            Con su pasado único, la belleza salvaje de los campos costeros donde
            se juega y sus conocedores aficionados, The Open ocupa un lugar
            venerado en la historia del deporte mundial. Desde los duelos entre
            Bobby Jones y Walter Hagen en la década de 1920 hasta el duelo entre
            Tom Watson y Jack Nicklaus en 1977; o las lágrimas de Tiger Woods al
            ganar su tercer trofeo en 2006.
          </p>
        </header>

        <div class="flex justify-center">
          <img
            src="/assets/routes-assets/world-of-rolex/articles/article-7/article-4.webp"
            alt="article-5"
            class="hidden md:block w-full"
          />
          <img
            src="/assets/routes-assets/world-of-rolex/articles/article-7/article-4-mobile.webp"
            alt="article-5-mobile"
            class="md:hidden block w-full"
          />
        </div>
        <header
          class="flex flex-col gap-8 font-helvetica font-bold justify-around items-center text-rolex-brown h-fit py-[10vh]"
        >
          <h1 class="text-2xl md:text-5xl w-10/12 md:w-1/2">
            Rolex y el golf: socios desde hace más de medio siglo
          </h1>

          <p
            class="w-10/12 md:w-1/2 text-xl font-helvetica font-light text-justify md:text-left"
          >
            Rolex disfruta de una relación privilegiada con el golf, basada en
            un respeto compartido por la tradición, la responsabilidad, la
            precisión técnica, la elegancia del movimiento, la búsqueda perpetua
            de la excelencia y un compromiso con las generaciones venideras.
            <br /><br />

            Actualmente, la colaboración entre Rolex y el golf se extiende a
            varias áreas del deporte: con cuerpos directivos y rankings
            mundiales, con las grandes figuras del golf internacional, y con los
            majors y los circuitos mundiales, tanto masculinos como femeninos,
            profesionales y amateurs, en niveles sénior y júnior.
            <br /><br />
            Además, la marca también ha impulsado la creación de: el Rolex
            Series, los mejores torneos del Dubái DP World; el premio Rolex
            Player of the Year, que reconoce a la mejor golfista del circuito de
            la Ladies Professional Golf Association (LPGA); y los premios Rolex
            Junior Players of the Year, que honran a los jugadores de 18 años o
            menos, chicos y chicas, con mejor
          </p>
        </header>
        <div class="flex justify-center">
          <img
            src="/assets/routes-assets/world-of-rolex/articles/article-7/article-5.webp"
            alt="article-3"
            class="hidden md:block w-10-12 md:w-1/2"
          />
          <img
            src="/assets/routes-assets/world-of-rolex/articles/article-7/article-5-mobile.webp"
            alt="article-3-mobile"
            class="md:hidden block w-10-12 md:w-1/2"
          />
        </div>

        <header
          class="flex flex-col gap-8 font-helvetica font-bold justify-around items-center text-rolex-brown h-fit py-[10vh]"
        >
          <h1 class="text-2xl md:text-5xl w-10/12 md:w-1/2">
            Testimoniales Rolex y The Open
          </h1>

          <p
            class="w-10/12 md:w-1/2 text-xl font-helvetica font-light text-justify md:text-left"
          >
            Varios miembros de la familia Rolex de Testimoniales pertenecen a la
            ilustre lista de jugadores que han ganado The Open: Gary Player,
            Arnold Palmer, Jack Nicklaus, Tom Watson, Tiger Woods, Jordan
            Spieth, Francesco Molinari y Collin Morikawa.
          </p>
        </header>
      </section>

      <section
        class="flex justify-center w-full bg-rolex-brown-light-1 pb-[10vh]"
      >
        <SectionNavigationCard
          img="banners/new-banner-collections-day-date"
          link="/coleccion-rolex/day-date"
          class="w-10/12"
        >
          <template #sub>Rolex Day-date</template>
          <template #title>Cada esfera, un descubrimiento</template>

          <template #button>Más información</template>
        </SectionNavigationCard>
      </section>
    </template>
  </RolexTemplate>
</template>
     