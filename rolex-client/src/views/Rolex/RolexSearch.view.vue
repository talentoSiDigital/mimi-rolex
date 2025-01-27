<script setup>
import { computed, ref } from "vue";
import RolexTemplate from "../Rolex/RolexTemplate.view.vue";
import allRoutes from "../../data/allRoutes.json";
import { useRoute, RouterLink } from "vue-router";
let query = useRoute().query.search;
const checkQuery = computed(() => {
  return query == "" ? true : false;
});

const input = ref("");

const moveResults = ref("translate-x-0");
const moveMeasures = ["translate-x-0", "-translate-x-1/3", "-translate-x-2/3"];

const activeButton = ref(0);

function changeClick(num) {
  activeButton.value = num;
  moveResults.value = moveMeasures[num];
}
function checkClick(num) {
  return num == activeButton.value ? "underline" : "";
}

const resultsPage = ref([]);
const resultsWatch = ref([]);
const resultsArticle = ref([]);
if (query != "") {
  
  query = query.toLowerCase();
  query = query.trim();
  query = query.split(" ");
  for (const [key, value] of Object.entries(allRoutes)) {
    for (let i = 0; i < value.keywords.length; i++) {
      const element = value.keywords[i];
      
      if (element.includes(query)) {
        if (value.type == "pagina") {
          resultsPage.value.push(value);
        }
        if (value.type == "reloj") {
          resultsWatch.value.push(value);
        }
        if (value.type == "articulo") {
          resultsArticle.value.push(value);
        }
        break;
      }
    }
  }
}
</script>

<template>
  <RolexTemplate>
    <template #content>
      <div
        class="duration-200 w-full overflow-hidden z-50 top-full bg-rolex-green border-t border-white text-white"
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
      </div>

      <div
        class="h-12 duration-200 w-full overflow-hidden z-50 top-full bg-rolex-green border-t border-white text-white"
      >
        <button
          class="w-1/3 border-l h-full hover:underline active:underline"
          :class="checkClick(0)"
          @click="changeClick(0)"
        >
          Páginas
        </button>
        <button
          class="w-1/3 border-l h-full hover:underline active:underline"
          :class="checkClick(1)"
          @click="changeClick(1)"
        >
          Relojes
        </button>
        <button
          class="w-1/3 border-l h-full hover:underline active:underline"
          :class="checkClick(2)"
          @click="changeClick(2)"
        >
          Artículos
        </button>
      </div>
      <h2>{{ searchResults }}</h2>

      <div
        v-if="checkQuery"
        class="bg-rolex-brown-light-1 h-56 flex items-center justify-center text-2xl font-bold text-rolex-brown"
      >
        <h2>No hubo resultados de tu busqueda</h2>
      </div>
      <main v-else class="w-full overflow-hidden">
        <div class="w-[300%] flex duration-200" :class="moveResults">
          <div class="w-1/3 bg-rolex-brown-light-1 pl-8">
            <header class="text-rolex-brown w-10/12 py-4">
              <h2 class="text-3xl font-bold">Páginas</h2>
              <h3>Estas son las páginas relacionadas con tu búsqueda:</h3>
            </header>
            <section v-if="resultsPage.length == 0" >
              <h2 class="text-rolex-brown text-2xl font-bold pb-8">
                No se encontraron resultados
              </h2>
            </section>
            <section v-else>
              <div class="pb-10 flex flex-col gap-4" v-if="activeButton ==0">
                <a
                  v-for="item in resultsPage"
                  :key="item"
                  :href="item.link"
                  class="rounded-xl flex flex-col xs:flex-row items-center border w-11/12 bg-rolex-brown-light-2 shadow-md p-4"
                >
                  <img
                    :src="item.thumbnail"
                    :alt="item.title"
                    class="w-36 rounded-xl"
                  />
                  <header class="py-4 px-4 w-full">
                    <h2>{{ item.title }}</h2>
                    <h2 class="text-sm">{{ item.description }}</h2>

                    <div class="text-right pr-0 xs:pr-4 w-full">
                      <font-awesome-icon
                        :icon="['fas', 'arrow-right']"
                        class="duration-200 text-rolex-green text-xl"
                      />
                    </div>
                  </header>
                </a>
              </div>
            </section>
          </div>

          <div class="w-1/3 bg-rolex-brown-light-1">
            <header class="text-rolex-brown pl-8 py-4">
              <h2 class="text-3xl font-bold">Relojes</h2>
              <h3>Estos son los relojes relacionados con tu búsqueda:</h3>
            </header>
            <section v-if="resultsWatch.length == 0" class="pl-8">
              <h2 class="text-rolex-brown text-2xl font-bold pb-8">
                No se encontraron resultados
              </h2>
            </section>

            <section v-else >
                <div class="pl-8 pb-10 flex flex-col gap-4" v-if="activeButton ==1">
                    <a
                      v-for="item in resultsWatch"
                      :key="item"
                      :href="item.link"
                      class="rounded-xl flex flex-col xs:flex-row items-center border w-11/12 bg-rolex-brown-light-2 shadow-md p-4"
                    >
                      <img
                        :src="item.thumbnail"
                        :alt="item.title"
                        class="w-36 rounded-xl"
                      />
                      <header class="py-4 px-4 w-full">
                        <h2 class="text-xl font-bold text-rolex-brown">
                          {{ item.title }}
                        </h2>
                        <h2 class="text-sm">{{ item.description }}</h2>
      
                        <div class="text-right pr-0 xs:pr-4 mt-10 w-full">
                          <font-awesome-icon
                            :icon="['fas', 'arrow-right']"
                            class="duration-200 text-rolex-green text-xl"
                          />
                        </div>
                      </header>
                    </a>

                </div>
            </section>
          </div>

          <div class="w-1/3 bg-rolex-brown-light-1">
            <header class="text-rolex-brown pl-8 py-4">
              <h2 class="text-3xl font-bold">Artículos</h2>
              <h3>Estos son los artículos relacionados con tu búsqueda:</h3>
            </header>
            <section v-if="resultsArticle.length == 0" class="text pl-8">
              <h2 class="text-rolex-brown pb-8 text-2xl font-bold">
                No se encontraron resultados
              </h2>
            </section>

            <section v-else >
                <div class="pb-10 pl-8 flex flex-col gap-4" v-if="activeButton ==2">

                    <a
                      v-for="item in resultsArticle"
                      :key="item"
                      :href="item.link"
                      class="rounded-xl flex flex-col xs:flex-row items-center border w-11/12 bg-rolex-brown-light-2 shadow-md p-4"
                    >
                      <img
                        :src="item.thumbnail"
                        :alt="item.title"
                        class="w-36 rounded-xl"
                      />
                      <header class="py-4 px-4">
                        <h2>{{ item.title }}</h2>
                        <h2 class="text-sm">{{ item.description }}</h2>
      
                        <div class="text-right pr-0 xs:pr-4">
                          <font-awesome-icon
                            :icon="['fas', 'arrow-right']"
                            class="duration-200 text-rolex-green text-xl"
                          />
                        </div>
                      </header>
                    </a>

                </div>
            </section>
          </div>
        </div>
      </main>
    </template>
  </RolexTemplate>
</template>

<style scoped>
</style>

