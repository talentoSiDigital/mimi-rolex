<script setup>
import RolexTemplate from "../Rolex/RolexTemplate.view.vue";
import RolexHeader from "../../components/RolexHeader.vue";
import PageBanner from "../../components/banners-components/PageBanner.vue";
import SectionNavigationCard from "../../components/cards/SectionNavigationCard.vue";
</script>

<template>
  <RolexTemplate>
    <template #content>
      <PageBanner type="world-of-rolex" />

      <RolexHeader color="bg-rolex-brown-light-2">
        <template #title> El mundo de Rolex </template>
        <template #text>
          <strong>Durante casi un siglo, Rolex ha desarrollado colaboraciones con un
            grupo diverso y extraordinario de talentos de una miríada de
            disciplinas.
          </strong>
          La marca colabora con la exploración, los deportes de élite y las
          artes, así como con diversos eventos y organizaciones.
        </template>
      </RolexHeader>

      <section class="bg-rolex-brown-light-2 flex flex-col justify-center items-center pb-[10vh]">
        <div class="w-11/12">
          <SectionNavigationCard img="world-of-rolex/world-of-rolex-main" :link="{ name: 'world-of-rolex-article-11' }"
            class="w-full">
            <template #sub>Publicado el 4 de Septiembre, 2025</template>
            <template #title>Rolex SailGP Championship</template>
            <template #description>
              <h2 class="w-full md:w-1/2">
                Catamaranes aerodinámicos ultraligeros. Regatas espectaculares en los mares a través de cinco
                continentes. Una experiencia única para el público. El Rolex SailGP Championship, con Rolex como Title
                Partner y Reloj Oficial, ha revolucionado las regatas y ha impulsado la vela de competición hacia el
                futuro.
              </h2>
            </template>
            <template #button>Más información</template>
          </SectionNavigationCard>
        </div>
      </section>

      <section class="bg-rolex-brown-light-2 flex flex-col justify-center items-center pb-[10vh]">
        <div class="w-11/12 grid grid-cols-1  md:grid-cols-2  gap-2">
          <SectionNavigationCard img="world-of-rolex/world-of-rolex-endurance"
            :link="{ name: 'world-of-rolex-article-10' }" class="w-full">
            <template #sub>Publicado el 10 de Junio, 2025</template>
            <template #title>Resistencia</template>
            <template #description>
              <h2 class="w-full ">
                Dominar el poder de la mecánica para desafiar las leyes del tiempo. Controlar el riesgo para determinar
                la trayectoria ideal. Hasta la victoria. Rolex es un ilustre socio de los legendarios campeonatos de
                resistencia, los eventos más emblemáticos y los nombres más destacados del automovilismo.
              </h2>
            </template>
            <template #button>Más información</template>
          </SectionNavigationCard>

          <!-- <SectionNavigationCard img="world-of-rolex/world-of-rolex-viena" :link="{ name: 'world-of-rolex-article-9' }"
            class="w-full">
            <template #sub>Publicado el 5 de Diciembre, 2025</template>
            <template #title>Rolex y la Filarmónica de Viena</template>
            <template #description>
              <h2 class="w-full">

                Rolex es Socio Exclusivo de la Filarmónica de Viena desde el año 2008 y, desde enero de 2009,
                Patrocinador Exclusivo del Concierto de Año Nuevo.

              </h2>
            </template>
            <template #button>Más información</template>
          </SectionNavigationCard> -->


          <!-- <SectionNavigationCard img="world-of-rolex/world-of-rolex-us-open"
            :link="{ name: 'world-of-rolex-article-8' }" class="w-full">
            <template #sub>Publicado el 23 de Agosto, 2024</template>
            <template #title>Rolex y el US Open</template>
            <template #description>
              <h2 class="w-full ">
                El US Open es el último torneo de Grand Slam® de la temporada del tenis. Como socio privilegiado del
                deporte a nivel internacional durante casi 50 años, Rolex es el Reloj Oficial del evento desde 2018.
              </h2>
            </template>
            <template #button>Más información</template>
          </SectionNavigationCard> -->


          <!-- <SectionNavigationCard img="world-of-rolex/world-of-rolex-the-open"
            :link="{ name: 'world-of-rolex-article-7' }" class="w-full">
            <template #sub>Publicado el 12 de Julio, 2024</template>
            <template #title>Rolex y The Open: el major más antiguo del golf</template>
            <template #description>
              <h2 class="w-full ">
                The Open, tradicionalmente celebrado en el Reino Unido durante la tercera semana de julio, es el cuarto
                y último major masculino del año. Asociado con esta competición desde 1981, Rolex es actualmente un
                socio privilegiado del mundo del golf.

              </h2>
            </template>
            <template #button>Más información</template>
          </SectionNavigationCard> -->

          <!-- <SectionNavigationCard img="world-of-rolex/world-of-rolex-admundi"
            :link="{ name: 'world-of-rolex-article-6' }" class="w-full">
            <template #sub>Publicado el 4 de Julio, 2024</template>
            <template #title>Rolex y The Amundi Evian Championship</template>
            <template #description>
              <h2 class="w-full ">
                Rolex es Socio y Reloj Oficial del único <i>Major</i> de golf
                que se celebra en Europa continental. The Amundi Evian
                Championship se juega cada julio en el Evian Resort Golf Club en
                Évian les Bains, Francia. Este exigente campo se encuentra entre
                las prístinas costas del lago Lemán y los Alpes nevados. El
                torneo femenino, creado en 1994, fue elevado a la categoría de
                <i>Major</i> en 2013.
              </h2>
            </template>
            <template #button>Más información</template>
          </SectionNavigationCard> -->

          <!-- <SectionNavigationCard img="world-of-rolex/world-of-rolex-wimbledon"
            :link="{ name: 'world-of-rolex-article-5' }" class="w-full ">
            <template #sub>Publicado el 1 de Junio, 2024</template>
            <template #title>Rolex y The Championship, Wimbledon</template>
            <template #description>
              <h2 class="w-full">
                Rolex colaboró por primera vez con Wimbledon en 1978. El torneo
                de tenis más antiguo del mundo es el templo del tenis sobre
                hierba y del deporte original. También es donde los atletas se
                convierten en leyendas.Rolex colaboró por primera vez con
                Wimbledon en 1978. El torneo de tenis más antiguo del mundo es
                el templo del tenis sobre hierba y del deporte original. También
                es donde los atletas se convierten en leyendas.
              </h2>
            </template>
            <template #button>Más información</template>
          </SectionNavigationCard> -->

          <!-- <SectionNavigationCard img="world-of-rolex/world-of-rolex-lemans" :link="{ name: 'world-of-rolex-article-4' }"
            class="w-full">
            <template #sub>Publicado el 21 de Junio, 2024</template>
            <template #title>Las 24 Horas de Le Mans</template>
            <template #description>
              <h2 class="w-full">
                La 92.a edición de las 24 Horas de Le Mans, carrera que celebra
                la resistencia y la excelencia del automovilismo, se celebra los
                días 15 y 16 de junio de 2024. Rolex es Reloj Oficial de este
                evento legendario desde 2001.
              </h2>
            </template>
            <template #button>Más información</template>
          </SectionNavigationCard> -->

          <!-- <SectionNavigationCard img="world-of-rolex/world-of-rolex-grand-slam"
            :link="{ name: 'world-of-rolex-article-3' }" class="w-full">
            <template #sub>Publicado el 9 de Abril, 2024</template>
            <template #title>Rolex Grand Slam of Show Jumping</template>
            <template #description>
              <h2 class="w-full">
                Ampliamente considerado como el mayor desafío de la hípica, el
                Rolex Grand Slam of Show Jumping recompensa al jinete que gane
                el Grand Prix en tres de los cuatro Majors consecutivos de salto
                de obstáculos: The Dutch Masters de ’s-Hertogenbosch, el CSIO
                Spruce Meadows ‘Masters’ de Calgary, el CHIO Aachen y el
                Concurso Hípico Internacional de Ginebra.
              </h2>
            </template>
            <template #button>Más información</template>
          </SectionNavigationCard> -->

          <!-- <SectionNavigationCard img="world-of-rolex/world-of-rolex-sailgp" :link="{ name: 'world-of-rolex-article-2' }"
            class="w-full ">
            <template #sub>Publicado el 9 de Abril, 2024</template>
            <template #title>SailGP</template>
            <template #description>
              <h2 class="w-full">
                Rolex es Presenting Partner mundial y Reloj Oficial exclusivo
                del SailGP, un circuito de regatas en el que compiten las
                embarcaciones de vela más rápidas del mundo. Las regatas tienen
                lugar en los mares de todo el mundo, en catamaranes F50 con
                foils que parece que vuelan a través del agua.
              </h2>
            </template>
            <template #button>Más información</template>
          </SectionNavigationCard> -->

          <SectionNavigationCard img="world-of-rolex/world-of-rolex-beyond-rolex"
            :link="{ name: 'world-of-rolex-article-1' }" class="w-full">
            <template #sub>Publicado el 9 de Abril, 2024</template>
            <template #title>Viaje al corazón del universo Rolex</template>
            <template #description>
              <h2 class="w-full">
                Hans Wilsdorf estaba íntimamente convencido de la capacidad del
                ser humano para innovar con la excelencia como objetivo. Casi
                120 años después de la creación de la marca, el espíritu del
                fundador está más presente que nunca, tanto en lo que afecta a
                la fabricación de relojes como a los compromisos de Rolex en
                todo el mundo.
              </h2>
            </template>
            <template #button>Más información</template>
          </SectionNavigationCard>

        </div>
      </section>

    </template>
  </RolexTemplate>
</template>
