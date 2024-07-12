<script setup>
import { RouterLink } from "vue-router";
import RolexTemplate from "../Rolex/RolexTemplate.view.vue";
import RolexHeader from "../../components/RolexHeader.vue";
import PageBanner from "../../components/banners-components/PageBanner.vue";
import Button from "../../components/global-components/Button.vue";
import SectionNavigationCard from "../../components/cards/SectionNavigationCard.vue";
</script>

<template>
  <RolexTemplate>
    <template #content>
      <PageBanner type="world-of-rolex" />

      <RolexHeader color="bg-rolex-brown-light-2">
        <template #title> World of Rolex </template>
        <template #text>
          <strong
            >Durante casi un siglo, Rolex ha desarrollado colaboraciones con un
            grupo diverso y extraordinario de talentos de una miríada de
            disciplinas.
          </strong>
          La marca colabora con la exploración, los deportes de élite y las
          artes, así como con diversos eventos y organizaciones.
        </template>
      </RolexHeader>

      <section
        class="bg-rolex-brown-light-2 flex flex-col justify-center items-center pb-[10vh]"
      >
        <div class="w-11/12">
          <SectionNavigationCard
            img="world-of-rolex/world-of-rolex-main"
            link="/world-of-rolex/rolex-y-the-open"
            class="w-full"
          >
            <template #sub>Publicado el 12 de Julio, 2024</template>
            <template #title>Rolex y The Open: el major más antiguo del golf</template>
            <template #description>
              <h2 class="w-full md:w-1/2">
                The Open, tradicionalmente celebrado en el Reino Unido durante la tercera semana de julio, es el cuarto y último major masculino del año. Asociado con esta competición desde 1981, Rolex es actualmente un socio privilegiado del mundo del golf.
              </h2>
            </template>
            <template #button>Más información</template>
          </SectionNavigationCard>
        </div>
      </section>

      <section
        class="bg-rolex-brown-light-2 flex flex-col justify-center items-center pb-[10vh]"
      >
        <div class="w-11/12 grid grid-cols-1  md:grid-cols-2  gap-2">
          <SectionNavigationCard
            img="world-of-rolex/world-of-rolex-admundi"
            link="/world-of-rolex/rolex-y-the-amundi-evian-championship"
            class="w-full"
          >
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
          </SectionNavigationCard>
          <SectionNavigationCard
            img="world-of-rolex/world-of-rolex-wimbledon"
            link="/world-of-rolex/rolex-y-the-championships-wimbledon"
            class="w-full "
          >
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
          </SectionNavigationCard>

          <SectionNavigationCard
            img="world-of-rolex/world-of-rolex-lemans"
            link="/world-of-rolex/las-24-horas-de-le-mans"
            class="w-full"
          >
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
          </SectionNavigationCard>
          <SectionNavigationCard
            img="world-of-rolex/world-of-rolex-beyond-rolex"
            link="/world-of-rolex/viaje-al-corazon-del-universo-rolex"
            class="w-full"
          >
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

          <SectionNavigationCard
            img="world-of-rolex/world-of-rolex-sailgp"
            link="/world-of-rolex/sail-gp"
            class="w-full "
          >
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
          </SectionNavigationCard>

          <SectionNavigationCard
            img="world-of-rolex/world-of-rolex-grand-slam"
            link="/world-of-rolex/rolex-grand-slam"
            class="w-full "
          >
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
          </SectionNavigationCard>
        </div>
      </section>
    
    </template>
  </RolexTemplate>
</template>
