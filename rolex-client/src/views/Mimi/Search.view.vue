<script setup>
import { computed, ref, watch } from "vue";
import allRoutes from "../../data/allRoutes.json";
import searchResults from "../../data/searchResults.json";
import { useRoute } from "vue-router";
import router from "../../router";
import { useAsyncState } from "@vueuse/core";
import routesDataServices from "../../services/routesDataServices";

let query = useRoute().query.search;
const checkQuery = computed(() => {
  return query == "" ? true : false;
});
const correction = ref(true);

const input = ref("");

const moveResults = ref("translate-x-0");
const moveMeasures = ["translate-x-0", "-translate-x-1/3", "-translate-x-2/3"];

const activeButton = ref(0);

const { state, isLoading, isReady, execute } = useAsyncState(
  routesDataServices
    .getSearch(query)
    .then((d) => {
      for (let index = 0; index < d.data.length; index++) {
        const element = d.data[index];
        if (element.brand == "rolex") {
          router.push({
            name: "rolex-busqueda",
            query: { search: query },
          });
          break;
        }
      }
      return d.data;
    })
    .catch((e) => {
      console.log(e);
    })
);

const results = ref([]);

watch(isReady, () => {
  for (let i = 0; i < state.value.length; i++) {
    const resultItem = state.value[i];
    results.value.push(resultItem);
  }
});
</script>

<template>
  <div v-if="isReady">
    <div
      v-if="checkQuery"
      class="bg-rolex-brown-light-1 h-56 flex items-center justify-center text-2xl font-bold text-rolex-brown"
    >
      <h2>No hubo resultados de tu busqueda</h2>
    </div>

    <main v-else class="w-full overflow-hidden">
      <div class="w-full flex duration-200" :class="moveResults">
        <div class="w-full bg-rolex-brown-light-1 pl-8">
          <header class="text-rolex-brown w-10/12 py-4">
            <h2 class="text-3xl font-bold">{{ query }}</h2>
            <h3>Estas son las páginas relacionadas con tu búsqueda:</h3>
          </header>
          <section v-if="results.length == 0" class="h-screen">
            <h2 class="text-rolex-brown text-2xl font-bold pb-8">
              No se encontraron resultados
            </h2>
          </section>
          <section v-else>
            <div class="pb-10 flex flex-col gap-4" v-if="activeButton == 0">
              <a
                v-for="item in results"
                :key="item"
                :href="item.link"
                class="rounded-xl flex flex-col xs:flex-row items-center border w-[98%] bg-rolex-brown-light-2 shadow-md p-4 group"
              >
                <div class="w-36 rounded-xl overflow-hidden">
                  <img
                    :src="item.thumbnail"
                    :alt="item.title"
                    class="group-hover:scale-110 duration-200"
                  />
                </div>
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
      </div>
    </main>
  </div>
</template>

<style scoped>
</style>

