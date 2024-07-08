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
            Rolex y The Championships, Wimbledon
          </h1>

          <p
            class="w-10/12 md:w-1/2 text-xl md:text-2xl font-helvetica font-bold text-rolex-dark-grey text-justify md:text-left"
          >
            Rolex colaboró por primera vez con Wimbledon en 1978. El torneo de
            tenis más antiguo del mundo es el templo del tenis sobre hierba y
            del deporte original. También es donde los atletas se convierten en
            leyendas.
          </p>
          <p class="w-10/12 md:w-1/2 h-fit text-lg md:text-xl text-rolex-dark-grey">Publicado el 1 de Julio, 2024</p>
        </header>
      </section>

      <div
        class="video-frame flex bg-rolex-brown-light-1 justify-center pb-[10vh]"
      >
        <div class="w-11/12 aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.youtube.com/embed/8bEdzkZ45pw?si=V6LCGjGW0FJIspDj"
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
            Rolex es el Reloj Oficial y unos de los socios más importantes de
            todos los principales torneos. La historia comenzó en Wimbledon en
            1978, cuando la marca colaboró por primera vez con un deporte que
            captaba la atención mundial como nunca antes. <br /><br />
            El All England Lawn Tennis and Croquet Club en el sudoeste de
            Londres ha acogido al Wimbledon desde su edición inaugural en 1877.
            Wimbledon, el torneo de tenis más antiguo del mundo, es el hogar del
            deporte y su templo en pistas de césped.
          </p>
        </header>

        <div class="flex justify-center pb-[10vh]">
          <img
            src="/assets/routes-assets/world-of-rolex/articles/article-5/article-1.webp"
            alt="article-1"
            class="hidden md:block w-10/12 md:w-1/2"
          />
          <img
            src="/assets/routes-assets/world-of-rolex/articles/article-5/article-1-mobile.webp"
            alt="article-1-mobile"
            class="md:hidden block w-10/12"
          />
        </div>

        <header
          class="flex flex-col gap-8 font-helvetica font-bold justify-around items-center text-rolex-brown h-fit pb-[10vh]"
        >
          <h1 class="text-2xl md:text-5xl w-10/12 md:w-1/2">
            Un templo de la tradición del tenis
          </h1>

          <p
            class="w-10/12 md:w-1/2 text-xl font-helvetica font-light text-justify md:text-left"
          >
            Sobre la entrada de los jugadores a la pista Centre Court, con
            capacidad para 15 000 espectadores, se leen versos del poema Si de
            Rudyard Kipling:
            <span class="italic">
              <br />
              Si puedes encontrarte con el
              <br />
              Triunfo y el Desastre
              <br />
              Y tratar a esos dos impostores
              <br />
              De la misma manera
              <br />
            </span>

            Estos versos resumen la filosofía del evento porque, en Wimbledon,
            la grandeza del deporte no reside en la victoria sino en la humildad
            y la perseverancia de los campeones.
          </p>
        </header>

        <div class="flex justify-center">
          <img
            src="/assets/routes-assets/world-of-rolex/articles/article-5/article-2.webp"
            alt="article-2"
            class="hidden md:block w-full"
          />
          <img
            src="/assets/routes-assets/world-of-rolex/articles/article-5/article-2-mobile.webp"
            alt="article-2-mobile"
            class="md:hidden block w-full"
          />
        </div>

        <header
          class="flex flex-col gap-8 font-helvetica font-bold justify-around items-center text-rolex-brown h-fit py-[10vh]"
        >
          <h1 class="text-2xl md:text-5xl w-10/12 md:w-1/2">
            Escenario de grandes enfrentamientos
          </h1>

          <p
            class="w-10/12 md:w-1/2 text-xl font-helvetica font-light text-justify md:text-left"
          >
            La intensidad de las finales de Wimbledon en la pista Centre Court
            hace que perduren en la memoria como momentos extraordinarios de la
            historia del tenis. Las batallas épicas entre tenistas como Rod
            Laver y John Newcombe, Björn Borg y John McEnroe, Chris Evert y
            Martina Navratilova, Roger Federer y Rafael Nadal han escrito la
            leyenda de Wimbledon y del tenis mundial. <br /><br />
            Este nivel de excelencia deportiva sin precedentes conecta con los
            valores intrínsecos de Rolex y ha desarrollado una colaboración
            natural con todos los eventos importantes del tenis.
          </p>
        </header>

        <div class="flex justify-center">
          <img
            src="/assets/routes-assets/world-of-rolex/articles/article-5/article-3.webp"
            alt="article-3"
            class="hidden md:block w-10/12 md:w-1/2"
          />
          <img
            src="/assets/routes-assets/world-of-rolex/articles/article-5/article-3-mobile.webp"
            alt="article-3-mobile"
            class="md:hidden block w-10/12 md:w-1/2"
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
            Rolex ha mantenido una relación especial con el tenis, que está
            profundamente arraigada a una filosofía común: la continua búsqueda
            de la excelencia, un deseo por la precisión y la innovación, la
            elegancia del movimiento, el esfuerzo inquebrantable, el respeto por
            la tradición y una motivación por siempre desafiar más allá de los
            límites personales.
            <br />
            <br />
            A lo largo de los años, Rolex se ha involucrado aún más con el
            deporte, convirtiéndose en el Patrocinador Premium del tenis
            mundial, tanto masculino como femenino.
            <br />
            <br />
            La marca apoya la mayoría de las grandes competiciones, incluyendo
            los cuatro torneos de Grand Slam®, el ATP y el WTA Finals, que ponen
            fin a la temporada, los torneos ATP Masters y WTA 1000 de alto
            rango, y las competiciones líder por equipos a nivel internacional;
            la Copa Davis y la Laver Cup.
          </p>
        </header>

        <header
          class="flex flex-col gap-8 font-helvetica font-bold justify-around items-center text-rolex-brown h-fit py-[10vh]"
        >
          <h1 class="text-2xl md:text-5xl w-10/12 md:w-1/2">
            Los Testimoniales Rolex y Wimbledon
          </h1>

          <p
            class="w-10/12 md:w-1/2 text-xl font-helvetica font-light text-justify md:text-left"
          >
            Los Testimoniales Rolex y Wimbledon Entre sus Testimoniales, Rolex
            cuenta con un gran número de campeones de Wimbledon: las leyendas
            del tenis Björn Borg y Chris Evert, así como Stefan Edberg, Garbiñe
            Muguruza, Angelique Kerber, Roger Federer, que tiene el récord de
            ocho victorias en el torneo, y la estrella en alza, Carlos Alcaraz.
            Las figuras principales de hoy en día, como los miembros de la
            familia Rolex Iga Świątek, Jannik Sinner y Coco Gauff, desean unirse
            a estos grandes en la lista de ganadores de este prestigioso torneo.
          </p>
        </header>

        <div class="flex justify-center">
          <img
            src="/assets/routes-assets/world-of-rolex/articles/article-5/article-4.webp"
            alt="article-5"
            class="hidden md:block w-10/12"
          />
          <img
            src="/assets/routes-assets/world-of-rolex/articles/article-5/article-4-mobile.webp"
            alt="article-5-mobile"
            class="md:hidden block w-10/12"
          />
        </div>

        <header
          class="flex flex-col gap-8 font-helvetica font-bold justify-around items-center text-rolex-brown h-fit py-[10vh]"
        >
          <h1 class="text-2xl md:text-5xl w-10/12 md:w-1/2">
            Rolex y el deporte
          </h1>

          <p
            class="w-10/12 md:w-1/2 text-xl font-helvetica font-light text-justify md:text-left"
          >
            Durante varias décadas, la marca ha apoyado activamente la cultura,
            la arquitectura y la exploración y conservación del planeta. En el
            mundo del deporte, ha forjado una gran variedad de alianzas con el
            tenis, el golf, la hípica, el esquí, la vela y el automovilismo.
            Rolex establece asociaciones duraderas con órganos directivos,
            competiciones y atletas —desde campeones consagrados hasta talentos
            en ciernes— con el fin de perpetuar el futuro de estas disciplinas y
            promover la excelencia.
          </p>
        </header>

        <div class="flex justify-center">
          <img
            src="/assets/routes-assets/world-of-rolex/articles/article-5/article-5.webp"
            alt="article-5"
            class="hidden md:block w-10/12 md:w-1/2"
          />
          <img
            src="/assets/routes-assets/world-of-rolex/articles/article-5/article-5-mobile.webp"
            alt="article-5-mobile"
            class="md:hidden block w-10/12 md:w-1/2"
          />
        </div>
      </section>

      <section
        class="flex justify-center w-full bg-rolex-brown-light-1 pb-[10vh]"
      >
        <SectionNavigationCard
          img="world-of-rolex/articles/article-1/article-10"
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
     