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
            Rolex y el US Open
          </h1>

          <p
            class="w-10/12 md:w-1/2 text-xl md:text-2xl font-helvetica font-bold text-rolex-dark-grey text-justify md:text-left"
          >
            El US Open es el último torneo de Grand Slam® de la temporada del
            tenis. Como socio privilegiado del deporte a nivel internacional
            durante casi 50 años, Rolex es el Reloj Oficial del evento desde
            2018.
          </p>
          <p
            class="w-10/12 md:w-1/2 h-fit text-lg md:text-xl text-rolex-dark-grey"
          >
            Publicado el 23 de Agosto, 2024
          </p>
        </header>
      </section>

      <div
        class="video-frame flex bg-rolex-brown-light-1 justify-center pb-[10vh]"
      >
        <div class="w-11/12 aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.youtube.com/embed/MW4gSWJKe28?si=8V-DK5SFVOLqVCNO"
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
            Inaugurado en 1881, este torneo se juega sobre la superficie dura
            del USTA Billie Jean King National Tennis Center en Flushing
            Meadows, en Nueva York, desde 1978. Entre sus 17 pistas de
            competición se encuentra la pista estrella, el Arthur Ashe Stadium,
            con un aforo de cerca de 23 800 asientos, la más grande del mundo.
          </p>
        </header>

        <div class="flex justify-center pb-[10vh]">
          <img
            src="/assets/routes-assets/world-of-rolex/articles/article-8/article-1.webp"
            alt="article-1"
            class="hidden md:block w-full"
          />
          <img
            src="/assets/routes-assets/world-of-rolex/articles/article-8/article-1-mobile.webp"
            alt="article-1-mobile"
            class="md:hidden block w-10/12 md:w-1/2"
          />
        </div>

        <header
          class="flex flex-col gap-8 font-helvetica font-bold justify-around items-center text-rolex-brown h-fit pb-[10vh]"
        >
          <h1 class="text-2xl md:text-5xl w-10/12 md:w-1/2">
            Impregnado de elegancia y tradición
          </h1>
          <p
            class="w-10/12 md:w-1/2 text-xl font-helvetica font-light text-justify md:text-left"
          >
            El US Open es conocido por su atmósfera electrizante, un reflejo de
            la propia Nueva York, «la ciudad que nunca duerme». En este evento
            intenso y dinámico, la acción también se desarrolla en las gradas,
            donde los espectadores no temen dar voz a su emoción. Durante los
            partidos, la energía que emana de los aficionados, de la pista y de
            la ciudad converge para estimular a los jugadores.
          </p>
        </header>

        <div class="flex justify-center">
          <img
            src="/assets/routes-assets/world-of-rolex/articles/article-8/article-2.webp"
            alt="article-2"
            class="hidden md:block w-9/12"
          />
          <img
            src="/assets/routes-assets/world-of-rolex/articles/article-8/article-2-mobile.webp"
            alt="article-2-mobile"
            class="md:hidden block w-10/12"
          />
        </div>

        <header
          class="flex flex-col gap-8 font-helvetica font-bold justify-around items-center text-rolex-brown h-fit py-[10vh]"
        >
          <h1 class="text-2xl md:text-5xl w-10/12 md:w-1/2">
            Los Testimoniales Rolex y el US Open
          </h1>
          <p
            class="w-10/12 md:w-1/2 text-xl font-helvetica font-light text-justify md:text-left"
          >
            En esta atmósfera electrizante, los partidos de este torneo de Grand
            Slam® se han convertido en legendarios. Los cinco títulos
            consecutivos que ganó Roger Federer desde 2004 hasta 2008 quedarán
            grabados por siempre en el recuerdo.
            <br />
            <br />
            Entre sus otros Testimoniales de tenis, Rolex cuenta con un gran
            número de ganadores en el US Open, concretamente: Rod Laver, Chris
            Evert, Stefan Edberg, Pat Rafter, Justine Henin, Juan Martín del
            Potro, Angelique Kerber, Sloane Stephens, Bianca Andreescu y Dominic
            Thiem. En 2022, Iga Świątek y Carlos Alcaraz se unieron a esta
            impresionante lista, con Coco Gauff siguiendo sus pasos el año
            siguiente.
            <br />
            <br />
            Todos encarnan la precisión técnica y la búsqueda de una mejor
            versión de uno mismo.
          </p>
        </header>
        <div class="flex justify-center">
          <img
            src="/assets/routes-assets/world-of-rolex/articles/article-8/article-3.webp"
            alt="article-3"
            class="hidden md:block w-9/12"
          />
          <img
            src="/assets/routes-assets/world-of-rolex/articles/article-8/article-3-mobile.webp"
            alt="article-3-mobile"
            class="md:hidden block w-10/12"
          />
        </div>

        <header
          class="flex flex-col gap-8 font-helvetica font-bold justify-around items-center text-rolex-brown h-fit py-[10vh]"
        >
          <h1 class="text-2xl md:text-5xl w-10/12 md:w-1/2">
            El torneo de los pioneros
          </h1>

          <p
            class="w-10/12 md:w-1/2 text-xl font-helvetica font-light text-justify md:text-left"
          >
            El US Open es un terreno fértil para la innovación en el tenis.
            Desde la introducción del desempate y la programación de los
            partidos por la noche hasta la implementación del ojo de halcón —un
            sistema de arbitraje digital que realiza las llamadas de línea de
            forma inmediata—, se hace todo lo posible para garantizar que el
            torneo siga siendo tan atractivo como siempre.
          </p>
        </header>

        <div class="flex justify-center">
          <img
            src="/assets/routes-assets/world-of-rolex/articles/article-8/article-4.webp"
            alt="article-5"
            class="hidden md:block w-1/2"
          />
          <img
            src="/assets/routes-assets/world-of-rolex/articles/article-8/article-4-mobile.webp"
            alt="article-5-mobile"
            class="md:hidden block w-10/12"
          />
        </div>
        <header
          class="flex flex-col gap-8 font-helvetica font-bold justify-around items-center text-rolex-brown h-fit py-[10vh]"
        >
          <h1 class="text-2xl md:text-5xl w-10/12 md:w-1/2">
            Rolex y el tenis: una colaboración de casi 50 años
          </h1>

          <p
            class="w-10/12 md:w-1/2 text-xl font-helvetica font-light text-justify md:text-left"
          >
            Desde que Rolex colaboró por primera vez con Wimbledon en 1978, la
            marca ha disfrutado de una relación privilegiada con el tenis,
            basada en una filosofía compartida: la búsqueda perpetua de la
            excelencia, la pasión por la precisión y la innovación, la elegancia
            del movimiento, un esfuerzo inquebrantable, el respeto por la
            tradición y una motivación por siempre sobrepasar los límites
            personales.
          </p>
        </header>
        <div class="flex justify-center">
          <img
            src="/assets/routes-assets/world-of-rolex/articles/article-8/article-5.webp"
            alt="article-3"
            class="hidden md:block w-full"
          />
          <img
            src="/assets/routes-assets/world-of-rolex/articles/article-8/article-5-mobile.webp"
            alt="article-3-mobile"
            class="md:hidden block w-full"
          />
        </div>

        <header
          class="flex flex-col gap-8 font-helvetica font-bold justify-around items-center text-rolex-brown h-fit py-[10vh]"
        >
          <p
            class="w-10/12 md:w-1/2 text-xl font-helvetica font-light text-justify md:text-left"
          >
            A lo largo de los años, Rolex se ha involucrado aún más con el
            deporte, convirtiéndose en el Patrocinador Premium del tenis
            mundial, tanto masculino como femenino.
            <br /><br />
            La marca apoya la mayoría de las grandes competiciones, incluyendo
            los cuatro torneos de Grand Slam®, el ATP y el WTA Finals, que ponen
            fin a la temporada, todos los torneos ATP Masters 1000 y nueve de
            los eventos WTA 1000 de alto rango, así como las principales
            competiciones por equipos a nivel internacional; la Copa Davis y la
            Laver Cup.
          </p>
        </header>
        <div class="flex justify-center">
          <img
            src="/assets/routes-assets/world-of-rolex/articles/article-8/article-6.webp"
            alt="article-3"
            class="hidden md:block w-1/2"
          />
          <img
            src="/assets/routes-assets/world-of-rolex/articles/article-8/article-6-mobile.webp"
            alt="article-3-mobile"
            class="md:hidden block w-10/12"
          />
        </div>
      </section>

      <section
        class="flex justify-center w-full bg-rolex-brown-light-1 pb-[10vh]"
      >
        <SectionNavigationCard
          img="banners/new-banner-collections-datejust"
          link="/coleccion-rolex/datejust"
          class="w-10/12"
        >
          <template #sub>Rolex Datejust</template>
          <template #title>Una fecha para recordar</template>

          <template #button>Más información</template>
        </SectionNavigationCard>
      </section>
    </template>
  </RolexTemplate>
</template>
     