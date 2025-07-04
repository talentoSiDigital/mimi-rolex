<script setup>
import { RouterLink } from "vue-router";
import RolexTemplate from "../RolexTemplate.view.vue";
import SectionNavigationCard from "../../../components/cards/SectionNavigationCard.vue";
</script>

<template>
  <RolexTemplate>
    <template #content>
      <section class="pt-[10vh] bg-rolex-brown-light-1">
        <header
          class="flex flex-col gap-8 font-helvetica font-bold justify-around items-center text-rolex-brown h-fit pb-[10vh]">
          <h1 class="text-3xl md:text-5xl w-10/12 md:w-1/2">SailGP</h1>

          <p
            class="w-10/12 md:w-1/2 text-xl md:text-2xl font-helvetica font-bold text-rolex-dark-grey text-justify md:text-left">
            Rolex es Title Partner y Reloj Oficial exclusivo del Rolex SailGP Championship, un circuito de regatas en el
            que compiten algunas de las embarcaciones de vela más rápidas del mundo. Las regatas tienen lugar en los
            mares de todo el mundo, en catamaranes F50 con foils que parece que vuelan a través del agua.
          </p>
          <p class="w-10/12 md:w-1/2 h-fit text-lg md:text-xl text-rolex-dark-grey">
            Publicado el 9 de Abril, 2024
          </p>
        </header>
      </section>



      <section class="pb-[10vh] bg-rolex-brown-light-1">
        <div class="flex justify-center pb-[10vh]">
          <img src="/assets/routes-assets/world-of-rolex/articles/article-2/article-0.webp" alt="article-0"
            class="hidden md:block w-10/12" />
          <img src="/assets/routes-assets/world-of-rolex/articles/article-2/article-0-mobile.webp"
            alt="article-0-mobile" class="md:hidden block w-10/12" />
        </div>

        <header
          class="flex flex-col gap-8 font-helvetica font-bold justify-around items-center text-rolex-brown h-fit pb-[10vh]">
          <h1 class="text-2xl md:text-5xl w-10/12 md:w-1/2">
            Innovación al servicio del rendimiento
          </h1>

          <p class="w-10/12 md:w-1/2 text-xl font-helvetica font-light text-justify md:text-left">
            Las tripulaciones incluyen algunos de los mejores navegantes. Catamaranes idénticos, con foils y vela
            rígida, capaces de alcanzar 50 nudos (casi 100 km/h). Regatas espectaculares que duran como mucho 15
            minutos. Una temporada que transcurre en los mares de los cinco continentes. Presentado en 2019, el circuito
            del SailGP ha redefinido el mundo de la vela de competición, con catamaranes innovadores, optimizados de
            forma constante. Estos veleros voladores llevan los colores de los países a los que representan y encarnan
            el presente y el futuro del deporte.
          </p>
          <p class="w-10/12 md:w-1/2 text-xl font-helvetica font-light text-justify md:text-left">
            El SailGP también ha impulsado la Impact League, el programa Women’s Pathway y el SailGP Inspire,
            iniciativas destinadas a fomentar la sostenibilidad y la diversidad en el mundo de la vela.
          </p>
        </header>


        <div class="flex justify-center">
          <img src="/assets/routes-assets/world-of-rolex/articles/article-2/article-1.webp" alt="article-1"
            class="hidden md:block" />
          <img src="/assets/routes-assets/world-of-rolex/articles/article-2/article-1-mobile.webp"
            alt="article-1-mobile" class="md:hidden block w-10/12" />
        </div>

        <header
          class="flex flex-col gap-8 font-helvetica font-bold justify-around items-center text-rolex-brown h-fit py-[10vh]">
          <h1 class="text-2xl md:text-5xl w-10/12 md:w-1/2">
            Tom Slingsby, Testimonial Rolex
            <br />
            Maestro en varias clases
          </h1>

          <p class="w-10/12 md:w-1/2 text-xl font-helvetica font-light text-justify md:text-left">
            Tom Slingsby es sin duda el navegante más exitoso y codiciado de Australia. Medallista de oro en los Juegos
            Olímpicos de 2012, fue nombrado Rolex World Sailor of the Year en tres ocasiones y tricampeón del SailGP
            como director ejecutivo y timonel del equipo australiano.
          </p>
          <p class="w-10/12 md:w-1/2 text-xl font-helvetica font-light text-justify md:text-left">
            En su talentoso palmarés se incluye estar al timón de tripulaciones con victorias en tiempo real en la Rolex
            Sydney Hobart Yacht Race y la Rolex Middle Sea Race.
          </p>
          <p class="w-10/12 md:w-1/2 text-xl font-helvetica font-light text-justify md:text-left">
            Tom Slingsby lleva un Yacht Master 42 en titanio RLX.
          </p>
        </header>
        <div class="flex justify-center">
          <img src="/assets/routes-assets/world-of-rolex/articles/article-2/article-2.webp" alt="article-2"
            class="hidden md:block w-10/12" />
          <img src="/assets/routes-assets/world-of-rolex/articles/article-2/article-2-mobile.webp"
            alt="article-2-mobile" class="md:hidden block w-10/12" />
        </div>
        <header
          class="flex flex-col gap-8 font-helvetica font-bold justify-around items-center text-rolex-brown h-fit py-[10vh]">
          <h1 class="text-2xl md:text-5xl w-10/12 md:w-1/2">
            Sir Ben Ainslie – Testimonial Rolex <br />
            La máxima referencia en competiciones náuticas
          </h1>

          <p class="w-10/12 md:w-1/2 text-xl font-helvetica font-light text-justify md:text-left">
            Con cuatro medallas de oro y una de plata, sir Ben Ainslie logró la
            espectacular hazaña de ganar una medalla en los cinco Juegos
            Olímpicos consecutivos en los que compitió.
          </p>
          <p class="w-10/12 md:w-1/2 text-xl font-helvetica font-light text-justify md:text-left">
            El navegante británico compite para el Royal Yacht Squadron, con el que Rolex colabora desde 1980, y es
            capitán del equipo británico en del circuito SailGP.
          </p>
          <p class="w-10/12 md:w-1/2 text-xl font-helvetica font-light text-justify md:text-left">
            Ainslie es ganador de la Copa América, además de haber ejercido como táctico para el Oracle Team USA en su
            victoria sobre el Emirates Team New Zealand en 2013.
          </p>
          <p class="w-10/12 md:w-1/2 text-xl font-helvetica font-light text-justify md:text-left">
            Sir Ben Ainslie lleva un Yacht-Master 42.
          </p>
        </header>

        <div class="flex justify-center">
          <img src="/assets/routes-assets/world-of-rolex/articles/article-2/article-3.webp" alt="article-3"
            class="hidden md:block w-10/12" />
          <img src="/assets/routes-assets/world-of-rolex/articles/article-2/article-3-mobile.webp"
            alt="article-3-mobile" class="md:hidden block w-10/12" />
        </div>

        <header
          class="flex flex-col gap-8 font-helvetica font-bold justify-around items-center text-rolex-brown h-fit py-[10vh]">
          <h1 class="text-2xl md:text-5xl w-10/12 md:w-1/2">
            Hannah Mills – Testimonial de Rolex <br />
            Comprometida con la inclusión
          </h1>

          <p class="w-10/12 md:w-1/2 text-xl font-helvetica font-light text-justify md:text-left">
            Con dos medallas de oro y una de plata, Hannah Mills es una de las regatistas olímpicas más condecoradas en
            la historia de los Juegos Olímpicos. Ganadora del Rolex World Sailor of the Year Award en 2016 y 2021, ocupa
            el puesto de táctica en la tripulación británica del SailGP.
          </p>
          <p class="w-10/12 md:w-1/2 text-xl font-helvetica font-light text-justify md:text-left">
            Fuera del agua, Mills es una defensora comprometida de su deporte. Embajadora de SailGP para el desarrollo
            sostenible y embajadora de sostenibilidad del Comité Olímpico Internacional (COI), también es cofundadora de
            Athletes of the World, en campaña por un impacto positivo en torno al cambio climático.
          </p>
          <p class="w-10/12 md:w-1/2 text-xl font-helvetica font-light text-justify md:text-left">
            Mills está muy comprometida con la inclusión de mujeres en la vela. En 2022, junto con el Testimonial Rolex
            sir Ben Ainslie, lanzó Athena Pathway para acelerar el desarrollo de mujeres jóvenes y navegantes en
            competiciones de alto rendimiento y aportar diversidad al deporte.
          </p>
          <p class="w-10/12 md:w-1/2 text-xl font-helvetica font-light text-justify md:text-left">
            Fuera del agua, Mills es una defensora comprometida de su deporte. Embajadora de SailGP para el desarrollo
            sostenible y embajadora de sostenibilidad del Comité Olímpico Internacional (COI), también es cofundadora de
            Athletes of the World, en campaña por un impacto positivo en torno al cambio climático.
          </p>
          <p class="w-10/12 md:w-1/2 text-xl font-helvetica font-light text-justify md:text-left">
            Hannah Mills lleva un Yacht Master 37.
          </p>
        </header>

        <div class="flex justify-center">
          <img src="/assets/routes-assets/world-of-rolex/articles/article-2/article-4.webp" alt="article-3"
            class="hidden md:block w-full" />
          <img src="/assets/routes-assets/world-of-rolex/articles/article-2/article-4-mobile.webp"
            alt="article-3-mobile" class="md:hidden block w-full" />
        </div>

        <header
          class="flex flex-col gap-8 font-helvetica font-bold justify-around items-center text-rolex-brown h-fit py-[10vh]">
          <h1 class="text-2xl md:text-5xl w-10/12 md:w-1/2">
            Martine Grael – Testimonial Rolex

            <br />
            Hacer historia
          </h1>

          <p class="w-10/12 md:w-1/2 text-xl font-helvetica font-light text-justify md:text-left">
            La navegante brasileña Martine Grael está haciendo historia como la primera directora femenina en SailGP con
            el equipo brasileño, recién establecido en la temporada 2025.
          </p>
          <p class="w-10/12 md:w-1/2 text-xl font-helvetica font-light text-justify md:text-left">
            Nacida en una familia de navegantes e inspirada por su padre —el renombrado regatista Torben Grael— comenzó
            a navegar de joven en la bahía de Guanabara, donde los diversos patrones de viento perfeccionaron su
            adaptabilidad, habilidad y espíritu competitivo. Con solo 22 años, fue nombrada la Rolex World Sailor of the
            Year 2014. Dos años más tarde, en Río de Janeiro, ganó la primera de dos medallas de oro olímpicas en la
            clase 49er FX, repitiendo la hazaña en Tokio en 2021.
          </p>
          <p class="w-10/12 md:w-1/2 text-xl font-helvetica font-light text-justify md:text-left">
            Grael también demostró su versatilidad y resistencia al competir en alta mar en la extenuante Volvo Ocean
            Race 2017-2018, consolidando aún más su reputación como una de las navegantes más completas del mundo.
          </p>
        </header>
        <div class="flex justify-center">
          <img src="/assets/routes-assets/world-of-rolex/articles/article-2/article-5.webp" alt="article-5"
            class="hidden md:block w-1/2" />
          <img src="/assets/routes-assets/world-of-rolex/articles/article-2/article-5-mobile.webp"
            alt="article-5-mobile" class="md:hidden block w-10/12" />
        </div>
        <header
          class="flex flex-col gap-8 font-helvetica font-bold justify-around items-center text-rolex-brown h-fit py-[10vh]">
          <h1 class="text-2xl md:text-5xl w-10/12 md:w-1/2">
            Rolex y la vela
            <br />
            Una colaboración contra viento y marea
          </h1>

          <p class="w-10/12 md:w-1/2 text-xl font-helvetica font-light text-justify md:text-left">
            Clubes náuticos, navegantes famosos, emblemáticas competiciones de
            alta mar y algunas de las más célebres regatas. Durante más de 60
            años, Rolex ha forjado sólidas relaciones con el mundo de la vela.
            La marca, patrocinadora destacada de las regatas, comparte la
            búsqueda de la excelencia y una pasión por el máximo rendimiento con
            los guardianes del eterno espíritu de este deporte.
          </p>
        </header>
      </section>

      <section class="flex justify-center w-full bg-rolex-brown-light-1 pb-[10vh]">
        <SectionNavigationCard img="world-of-rolex/articles/article-2/article-6" link="/coleccion-rolex/yacht-master"
          class="w-10/12">
          <template #sub>Rolex Yatch-Master</template>
          <template #title>El dominio de la ligereza</template>

          <template #button>Más información</template>
        </SectionNavigationCard>
      </section>
    </template>
  </RolexTemplate>
</template>
