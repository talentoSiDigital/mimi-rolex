<script setup>
import { RouterLink, useRoute } from "vue-router";

import { ref, computed, watch } from "vue";
const route = useRoute();

const activate = ref("h-20");
const button = computed(() => {
  return activate.value == "h-20" ? "rotate-0" : "rotate-180";
});
function collapseNav() {
  activate.value == "h-20"
    ? (activate.value = "h-[80vh]")
    : (activate.value = "h-20");
}

const search = ref("h-0");
const activeSearch = ref(false);
function activateSearch() {
  activeSearch.value = !activeSearch.value;

  if (activeSearch.value == true) {
    search.value = "h-56";
  } else {
    search.value = "h-0";
  }
}

const input = ref("");
const searchResults = [
  "descubre",
  "rolex",
  "mantenimiento",
  "procedimiento",
  "watchmaking",
  "contacto",
  "formulario",
  "nuevos",
  "relojes",
  "modelos",
  "2024",
  "1908",
  "cosmograph",
  "daytona",
  "day-date",
  "deepsea",
  "gmt-master",
  "gmt",
  "master",
  "ii",
  "sky",
  "sky-dweller",
  "dweller",
  "world",
  "of",
  "viaje",
  "al",
  "corazon",
  "del",
  "universo",
  "sailgp",
  "sail",
  "gp",
  "grand",
  "slam",
  "las",
  "24",
  "horas",
  "de",
  "lemans",
  "le",
  "mans",
  "the",
  "championships",
  "wimbledon",
  "amundi",
  "evian",
  "championship",
  "open",
  "us",
  "yacht-master",
  "master-ii",
  "explorer",
  "oyster",
  "perpetual",
  "datejust",
  "lady",
  "air",
  "king",
  "submariner",
  "sea",
  "sea-dweller",
  "42",
  "40",
  "37",
  "36",
  "34",
  "41",
  "28",
  "31",
  "challenge",
  "lady-datejust",
  "air-king",
  "date",
  "filarmonica",
  "viena",
  "m126506-0001",
  "m126515ln-0006",
  "m126500ln-0001",
  "m126503-0003",
  "m126505-0001",
  "m126508-0003",
  "m126519ln-0006",
  "m126509-0001",
  "m126518ln-0012",
  "m126535tbr-0002",
  "m126538tbr-0004",
  "m126539tbr-0002",
  "m126579rbr-0001",
  "m126589rbr-0001",
  "m126595tbr-0001",
  "m126598tbr-0001",
  "m52508-0006",
  "m52506-0002",
  "m52509-0002",
  "m226627-0001",
  "m226658-0001",
  "m126622-0001",
  "m126655-0002",
  "m268655-0019",
  "m268622-0002",
  "m226659-0002",
  "m126621-0002",
  "m268621-0003",
  "m336239-0002",
  "m336934-0001",
  "m336238-0002",
  "m336935-0001",
  "m336235-0003",
  "m336933-0004",
  "m336934-0004",
  "m336933-0001",
  "m336935-0008",
  "m336938-0006",
  "m126713grnr-0001",
  "m126718grnr-0001",
  "m126715chnr-0001",
  "m126719blro-0002",
  "m126720vtnr-0001",
  "m126711chnr-0002",
  "m126710blnr-0003",
  "m126710grnr-0003",
  "m126710grnr-0004",
  "m124273-0001",
  "m224270-0001",
  "m226570-0001",
  "m226570-0002",
  "m124270-0001",
  "m126000-0009",
  "m124200-0003",
  "m124300-0002",
  "m124300-0005",
  "m276200-0001",
  "m126000-0008",
  "m277200-0007",
  "m277200-0010",
  "m228236-0012",
  "m128345rbr-0068",
  "m128349rbr-0031",
  "m128348rbr-0049",
  "m128239-0005",
  "m128396tbr-0003",
  "m128235-0009",
  "m228238-0042",
  "m228349rbr-0003",
  "m228396tbr-0002",
  "m228345rbr-0016",
  "m228349rbr-0040",
  "m228238-0059",
  "m228239-0033",
  "m228348rbr-0002",
  "m228398tbr-0036",
  "m128235-0037",
  "m128235-0070",
  "m128235-0078",
  "m128236-0018",
  "m128238-0022",
  "m128238-0045",
  "m128238-0113",
  "m128238-0118",
  "m128239-0063",
  "m128239-0065",
  "m128395tbr-0032",
  "m128398tbr-0035",
  "m128398tbr-0037",
  "m128399tbr-0029",
  "m228235-0001",
  "m228235-0055",
  "m228235-0056",
  "m228238-0069",
  "m228238-0071",
  "m228239-0076",
  "m228239-0078",
  "m126234-0051",
  "m126333-0019",
  "m126300-0005",
  "m126333-0010",
  "m126333-0005",
  "m126284rbr-0011",
  "m126303-0001",
  "m126283rbr-0012",
  "m278289rbr-0019",
  "m278384rbr-0008",
  "m278273-0019",
  "m278274-0018",
  "m126233-0018",
  "m278288rbr-0038",
  "m278288rbr-0006",
  "m278343rbr-0016",
  "m126331-0016",
  "m278285rbr-0005",
  "m126233-0035",
  "m278275-0029",
  "m126331-0007",
  "m126334-0006",
  "m126067-0001",
  "m126200-0002",
  "m126201-0013",
  "m126203-0020",
  "m126231-0016",
  "m126231-0020",
  "m126234-0037",
  "m126281rbr-0016",
  "m126331-0001",
  "m126334-0002",
  "m278240-0018",
  "m278241-0018",
  "m278271-0002",
  "m278278-0032",
  "m278341rbr-0003",
  "m278344rbr-0021",
  "m278381rbr-0023",
  "m278383rbr-0025",
  "m279174-0020",
  "m279174-0015",
  "m279384rbr-0004",
  "m279173-0012",
  "m279139rbr-0002",
  "m279171-0007",
  "m279138rbr-0015",
  "m279381rbr-0013",
  "m279458rbr-0001",
  "m279135rbr-0021",
  "m279163-0023",
  "m279175-0020",
  "m279178-0013",
  "m279381rbr-0004",
  "m279383rbr-0003",
  "m279384rbr-0011",
  "m126900-0001",
  "m124060-0001",
  "m126610lv-0002",
  "m126613lb-0002",
  "m126610ln-0001",
  "m126618lb-0002",
  "m126613ln-0002",
  "m126618ln-0002",
  "m126619lb-0003",
  "m126603-0001",
  "m126600-0002",
  "m136660-0005",
  "m136668lb-0001",
];
let suggestions = [];

function searchInResults() {
  for (let i = 0; i < searchResults.length; i++) {
    const element = searchResults[i];

    if (element.includes(input.value)) {
      if (suggestions.length < 4) {
        suggestions.push(element);
      }
    }
  }
}
watch(input, () => {
  suggestions = [];
  if (input.value.length > 3) {
    input.value=input.value.trim()
    input.value=input.value.toLowerCase()
    searchInResults();
  }
});


</script>

<template>
  <nav class="relative">
    <div
      :class="search"
      class="absolute duration-200 w-full overflow-hidden z-50 top-full bg-rolex-green border-t border-white text-white"
    >
      <form
        action="/rolex/busqueda"
        class="w-full flex items-center justify-center h-20"
      >
        <input
          v-model="input"
          type="text"
          placeholder="Buscar"
          name="search"
          id=""
          class="w-11/12 h-1/2 rounded-full bg-rolex-green-2 px-6 placeholder:text-white/75"
        />
        <button>
          <font-awesome-icon
            :icon="['fas', 'arrow-right']"
            class="duration-200 -translate-x-6"
          />
        </button>
      </form>
      <div id="results" class="w-full flex flex-col items-center">
        <h2 class="w-11/12">Resultados:</h2>
        <h2 v-if="input.length < 3" class="text-center w-full">
          Comienza a buscar
        </h2>
        <ul
          v-else-if="input.length >= 3 && suggestions.length > 0"
          class="w-11/12 pl-4"
        >
          <li
            v-for="item in suggestions"
            :key="item"
            class="list-disc cursor-pointer hover:underline"
          >
          <router-link :to="`/rolex/busqueda?search=${item}`">
            {{ item }}
          </router-link>
          </li>
        </ul>
        <h2 v-else class="text-center w-full">No hay resultados</h2>
      </div>
    </div>
    <div
      id="navigation-bar"
      :class="activate"
      class="relative lg:h-24 flex overflow-hidden flex-col lg:flex-row lg:justify-center items-start lg:items-center shadow-lg gap-4 lg:gap-2 pb-4 lg:pb-0 font-arial bg-rolex-gradient font-helvetica-light text-sm duration-200 text-white"
    >
      <div
        class="py-4 lg:hidden flex items-center w-full px-6 md:px-20 justify-between relative z-20"
      >
        <img
          src="/assets/rolex-retailer.webp"
          alt="rolex-retailer-badge"
          class="w-20 md:w-24 lg:w-0"
        />
        <div class="flex items-center gap-4">
          <div v-if="route.name != 'busqueda'">
            <font-awesome-icon
              :icon="['fas', 'magnifying-glass']"
              class="duration-200 cursor-pointer"
              @click="activateSearch()"
            />
          </div>
          <div
            class="flex items-center gap-2 justify-center h-2 hover:text-rolex-green-3 duration-200 cursor-pointer"
            @click="collapseNav"
          >
            <h2>Menú</h2>
            <font-awesome-icon
              :icon="['fas', 'sort-down']"
              :class="button"
              class="pb-2 duration-200"
            />
          </div>
        </div>
      </div>

      <!-- Navigation -->
      <div
        class="w-full px-4 flex flex-col lg:flex-row lg:justify-center items-start lg:items-center"
      >
        <img
          src="/assets/rolex-retailer.webp"
          alt="rolex-retailer-badge"
          class="hidden lg:block w-28 duration-200"
        />
        <router-link
          :to="{ name: 'rolex' }"
          class="pr-6 font-bold md:font-normal py-4 text-xl md:text-sm pl-6 md:pl-16 lg:pl-6 hover:text-rolex-green-3 duration-200 w-full lg:w-fit lg:text-center"
        >
          <h2>Descubre Rolex</h2>
        </router-link>

        <router-link
          :to="{ name: 'coleccion-rolex' }"
          class="pr-6 font-bold md:font-normal py-4 text-xl md:text-sm pl-6 md:pl-16 lg:pl-6 hover:text-rolex-green-3 duration-200 w-full lg:w-fit lg:text-center"
        >
          <h2>Colección Rolex</h2>
        </router-link>

        <router-link
          :to="{ name: 'rolex-nuevos-modelos' }"
          class="pr-6 font-bold md:font-normal py-4 text-xl md:text-sm pl-6 md:pl-16 lg:pl-6 hover:text-rolex-green-3 duration-200 w-full lg:w-fit lg:text-center"
        >
          <h2>Nuevos Modelos 2024</h2>
        </router-link>

        <router-link
          :to="{ name: 'rolex-watchmaking' }"
          class="pr-6 font-bold md:font-normal py-4 text-xl md:text-sm pl-6 md:pl-16 lg:pl-6 hover:text-rolex-green-3 duration-200 w-full lg:w-fit lg:text-center"
        >
          <h2>Rolex Watchmaking</h2>
        </router-link>

        <router-link
          :to="{ name: 'mantenimiento-rolex' }"
          class="pr-6 font-bold md:font-normal py-4 text-xl md:text-sm pl-6 md:pl-16 lg:pl-6 hover:text-rolex-green-3 duration-200 w-full lg:w-fit lg:text-center"
        >
          <h2>Mantenimiento Rolex</h2>
        </router-link>

        <router-link
          :to="{ name: 'world-of-rolex-hub' }"
          class="pr-6 font-bold md:font-normal py-4 text-xl md:text-sm pl-6 md:pl-16 lg:pl-6 hover:text-rolex-green-3 duration-200 w-full lg:w-fit lg:text-center"
        >
          <h2>World of Rolex</h2>
        </router-link>

        <router-link
          :to="{ name: 'rolex-contacto' }"
          class="pr-6 font-bold md:font-normal py-4 text-xl md:text-sm pl-6 md:pl-16 lg:pl-6 hover:text-rolex-green-3 duration-200 w-full lg:w-fit lg:text-center"
        >
          <h2>Contacto</h2>
        </router-link>
        <div v-if="route.name != 'busqueda'">
            <font-awesome-icon
              :icon="['fas', 'magnifying-glass']"
              class="duration-200 cursor-pointer"
              @click="activateSearch()"
            />
          </div>
      </div>
    </div>
  </nav>
</template>


