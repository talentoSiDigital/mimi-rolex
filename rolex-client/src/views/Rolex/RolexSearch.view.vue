<script setup>
import { ref } from "vue";
import RolexTemplate from "../Rolex/RolexTemplate.view.vue";
import allRoutes from "../../allRoutes.json";
import { useRoute,RouterLink } from "vue-router";
const params = useRoute().query.search;
const input = ref("");
const searchResults = ref([]);
const moveResults = ref("translate-x-0")
const moveMeasures = ['translate-x-0', '-translate-x-1/3', '-translate-x-2/3']

for (const [key, value] of Object.entries(allRoutes)) {
  searchResults.value.push(value);
}
const activeButton = ref(0)
function changeClick(num){
    activeButton.value = num;
    moveResults.value = moveMeasures[num]
    
}
function checkClick(num){
    return num == activeButton.value ? "underline":"" 
}



const debugObject = allRoutes["1"];

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
        <button class="w-1/3 border-l h-full hover:underline active:underline" :class="checkClick(0)" @click="changeClick(0)">Pagínas</button>
        <button class="w-1/3 border-l h-full hover:underline active:underline" :class="checkClick(1)" @click="changeClick(1)">Relojes</button>
        <button class="w-1/3 border-l h-full hover:underline active:underline" :class="checkClick(2)" @click="changeClick(2)">Artículos</button>
      </div>
      <main class=" w-full overflow-hidden">
        <div class="w-[300%] flex duration-200" :class="moveResults">
            <div class="w-1/3 bg-rolex-brown-light-1 pl-8">
                <header class="text-rolex-brown w-10/12 py-4">

                    <h2 class="text-3xl font-bold ">Pagínas</h2>
                    <h3>Estas son las pagínas relacionadas con tu busqueda:</h3>
                </header>
                <section class="pb-10">
                    <router-link :to="debugObject.link" class="flex flex-col xs:flex-row items-center border w-11/12 bg-rolex-brown-light-2 shadow-md">
                        <img :src="debugObject.thumbnail" :alt="debugObject.title" class="w-36">
                        <header class="py-4 pl-4">
                            <h2>{{ debugObject.title }}</h2>
                            <h2 class="text-sm">{{ debugObject.description }}</h2>
                            
                        </header>
                    </router-link>
                </section>
            </div>



            <div class="w-1/3 bg-rolex-brown-light-1">
                <header class="text-rolex-brown pl-10 py-4">

                    <h2 class="text-3xl font-bold ">Relojes</h2>
                    <h3>Estas son los relojes relacionados con tu busqueda:</h3>
                </header>
            </div>
            <div class="w-1/3 bg-rolex-brown-light-1">
                <header class="text-rolex-brown pl-10 py-4">
                    
                    <h2 class="text-3xl font-bold ">Artículos</h2>
                    <h3>Estas son los artículos relacionados con tu busqueda:</h3>
                </header>
            </div>
            

        </div>

      </main>
      <!-- <h2>Busqueda: {{ debugObject }}</h2> -->
    </template>
  </RolexTemplate>
</template>

<style scoped>
</style>

