<script setup>
import { RouterLink,useRoute } from "vue-router";

import { ref, computed } from "vue";
const route = useRoute()

const activate = ref("h-20");
const button = computed(() => {
  return activate.value == "h-20" ? "rotate-0" : "rotate-180";
});
function collapseNav() {
  activate.value == "h-20"
    ? (activate.value = "h-[80vh]")
    : (activate.value = "h-20");
}

const search = ref("h-0")
const activeSearch = ref(false)
function activateSearch(){
    activeSearch.value = !activeSearch.value

    if(activeSearch.value== true){
        search.value = "h-44" 
    }else{
        search.value = "h-0"
    }

    
}

const input = ref("")


</script>

<template>
  <nav class="relative">
    <div :class="search" class="absolute duration-200 w-full overflow-hidden z-50 top-full bg-rolex-green border-t border-white text-white ">
          <form action="/rolex/busqueda" class="w-full flex items-center justify-center h-20">
            <input v-model="input" type="text" placeholder="Buscar" name="search" id="" class="w-11/12 h-1/2 rounded-full bg-rolex-green-2  px-6 placeholder:text-white/75">
            <button>
                <font-awesome-icon
                :icon="['fas', 'arrow-right']"
                class="duration-200  -translate-x-6"
              />
            </button>
          </form>
          <div id="results" class="w-full flex flex-col items-center">
                
              <h2 class="w-11/12">Resultados:</h2>
              <h2 v-if="input.length < 3" class="text-center w-full">Comienza a buscar</h2>
              <h2 v-else class="text-center w-full">No hay resultados</h2>

          </div>
          
      </div>
    <div
      id="navigation-bar"
      :class="activate"
      class="relative lg:h-24  flex overflow-hidden flex-col lg:flex-row lg:justify-center items-start lg:items-center shadow-lg gap-4 lg:gap-2 pb-4 lg:pb-0 font-arial bg-rolex-gradient font-helvetica-light text-sm duration-200 text-white"
    >
      <div
        class="py-4 lg:hidden flex items-center w-full px-6 md:px-20 justify-between relative z-20 "
        
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
              class="flex items-center gap-2 justify-center h-2 hover:text-rolex-green-3 duration-200 cursor-pointer" @click="collapseNav"
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
      <div class="w-full px-4 flex flex-col lg:flex-row lg:justify-center items-start lg:items-center">
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
      </div>

    </div>
  </nav>
</template>


