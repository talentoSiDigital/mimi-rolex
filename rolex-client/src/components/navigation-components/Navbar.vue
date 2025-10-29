<script setup>
import { useWindowSize } from "@vueuse/core";
import { storeToRefs } from "pinia";
import { computed, ref} from "vue";
import { RouterLink,useRoute } from "vue-router";
import router from "../../router";
import { auth } from "../../store/auth.module";
import SearchBar from "../form-components/SearchBar.vue";
import MobileNavbar from "./MobileNavbar.vue";

const { width } = useWindowSize();
const piniaStore = auth();
const IsLogged = storeToRefs(piniaStore);
const loggedIn = computed(() => {
  return IsLogged.status.value.loggedIn;
});

const userRole = computed(()=>{
  return IsLogged.user.value.roles[0]
})
const activate = ref("h-20");

function collapseNav() {
  if (windowWidth.value < 1023) {
    activate.value == "h-20"
      ? (activate.value = "h-fit")
      : (activate.value = "h-20");
  }
}



const search = ref("h-0");
const activeSearch = ref(false);


function activateSearch() {
  if(router != 'busqueda'){
    activeSearch.value = !activeSearch.value;
  
    if (activeSearch.value == true) {
      search.value = "h-60";
    } else {
      search.value = "h-0";
    }

  }
}
</script>

<template>
  <nav class="relative z-30">
    <div id="top-bar" class="flex justify-around items-center p-2">
      <router-link to="/tudor" class="cursor-pointer hidden md:block">
        <img
          src="/assets/tudor-retailer.jpg"
          alt="tudor-retailer-badge"
          class="w-24 md:w-32"
        />
      </router-link>
      <router-link to="/" class="w-fit">
        <img
          src="/assets/mimi-logo-gray.svg"
          alt="mimi-joyeria-logo"
          class="w-24 md:w-56"
        />
      </router-link>
      <div class="relative items-center overflow-hidden">
        <router-link
          :to="{ name: 'rolex' }"
          class="cursor-pointer absolute z-10 block w-full h-[160px] md:w-40 md:h-20"
          aria-label="Rolex"
        >
        </router-link>
        <iframe
          src="https://static.rolex.com/retailers/clock/?colour=gold&apiKey=7513b85ede328a319698cf7a3eebed49&lang=es"
          frameborder="0"
          class="w-40 h-[5.5rem] cursor-pointer"
          title="Distribuidor oficial: Mimi Joyería"
        ></iframe>
      </div>
    </div>

    <!--  -->
    <div
      v-if="width > 1000"
      id="navigation-bar"
      :class="activate"
      class="flex h-20 flex-row justify-center items-center shadow-lg gap-2 bg-main-green"
    >
      <router-link
        @click="collapseNav"
        :to="{ name: 'rolex' }"
        class="border-0 border-b-2 border-transparent tracking-widest hover:bg-neutral-200 hover:bg-transparent hover:border-white px-6 py-2 text-lg font-normal font-montserrat text-green-900 w-fit text-center"
      >
        <h2 class="uppercase">Rolex</h2>
      </router-link>

      <router-link
        @click="collapseNav"
        to="/tudor"
        class="border-0 border-b-2 border-transparent tracking-widest hover:bg-neutral-200 hover:bg-transparent hover:border-white px-6 py-2 text-lg font-normal font-montserrat text-green-900 w-fit text-center"
      >
        <h2 class="uppercase">Tudor</h2>
      </router-link>

      <div class="block group relative">
        <router-link
          to="/joyeria"
          class="tracking-widest hover:bg-neutral-200 hover:bg-transparent px-6 py-2 text-lg font-normal font-montserrat text-green-900 w-fit text-center flex items-center"
        >
          <h2 class="uppercase">Joyería</h2>
          <font-awesome-icon
            :icon="['fas', 'angle-down']"
            class="text-sm pt-1"
          />
        </router-link>

        <div
          class="absolute z-50 border left-3 w-fit bg-main-green p-5 hidden group-hover:block"
        >
          <router-link
            to="/joyeria/nacimiento-y-bautizos"
            class="text-xl whitespace-nowrap font-normal font-montserrat text-green-900 hover:underline"
          >
            <h2 class="my-1 uppercase">Nacimiento y bautizos</h2>
          </router-link>
          <router-link
            to="/joyeria/compromiso-y-matrimonio"
            class="text-xl font-normal whitespace-nowrap font-montserrat text-green-900 hover:underline"
          >
            <h2 class="my-1 uppercase">Compromiso y matrimonio</h2>
          </router-link>
          <router-link
            to="/joyeria/graduacion"
            class="text-xl whitespace-nowrap font-normal font-montserrat text-green-900 hover:underline"
          >
            <h2 class="my-1 uppercase">Graduación</h2>
          </router-link>
          <router-link
            to="/joyeria/regalos"
            class="text-xl font-normal font-montserrat text-green-900 hover:underline"
          >
            <h2 class="my-1 uppercase">Regalos</h2>
          </router-link>
        </div>
      </div>

      <!-- ## END MOBILE NAV -->

      <router-link
        @click="collapseNav"
        to="/sobre-mimi"
        class="border-b-2 border-transparent tracking-widest hover:bg-neutral-200 hover:bg-transparent hover:border-white px-6 py-2 text-lg font-normal font-montserrat text-green-900 w-fit text-center"
      >
        <h2 class="uppercase">Sobre Mimi</h2>
      </router-link>

      <router-link
        @click="collapseNav"
        to="/contactenos"
        class="border-b-2 border-transparent tracking-widest hover:bg-neutral-200 hover:bg-transparent hover:border-white px-6 py-2 text-lg font-normal font-montserrat text-green-900 w-fit text-center"
      >
        <h2 class="uppercase">Contacto</h2>
      </router-link>

      <router-link
      v-if="!loggedIn"
        to="/login"
        class="border-0 border-b-2 border-transparent tracking-widest hover:bg-neutral-600 hover:bg-transparent hover:border-white px-6 py-2 text-lg font-normal font-montserrat text-green-900 w-fit text-center"
      >
        <h2 class="uppercase">Iniciar Sesión</h2>
      </router-link>

      <!-- LOGIN ATTEMPT -->

      <div v-if="loggedIn" class="block group relative">
        <div
          class="tracking-widest hover:bg-neutral-600 hover:bg-transparent px-6 py-2 text-lg font-normal font-montserrat text-green-900 w-fit text-center flex items-center"
        >
          <h2 class="uppercase">Panel</h2>
          <font-awesome-icon
            :icon="['fas', 'angle-down']"
            class="text-sm pt-1"
          />
        </div>

        <div
          class="absolute z-50 border left-3 w-fit bg-main-green p-5 hidden group-hover:block"
        >

          <a v-if="userRole == 'ROLE_ADMIN'"
            href="/dashboard"
            class="text-xl font-normal whitespace-nowrap font-montserrat text-green-900 hover:underline"
            aria-label="Logout"
          >
            <h2 class="my-1 uppercase">Panel de control</h2>
          </a>
          <a
            href="/logout"
            class="text-xl font-normal whitespace-nowrap font-montserrat text-green-900 hover:underline"
            aria-label="Logout"
          >
            <h2 class="my-1 uppercase">Cerrar sesión</h2>
          </a>
        </div>
      </div>
      <div v-if="loggedIn">
        <router-link
          to="/carrito"
          class="border-b-2 border-transparent tracking-widest hover:bg-neutral-200 hover:bg-transparent hover:border-white px-6 py-2 text-lg font-normal font-montserrat text-green-900 w-fit text-center"
        >
          <font-awesome-icon
            :icon="['fas', 'cart-shopping']"
            class="text-2xl text-rolex-green duration-200 py-2 group-hover:underline"
          />
        </router-link>
      </div>
      <div>
        <font-awesome-icon
          :icon="['fas', 'magnifying-glass']"
          class="duration-200 cursor-pointer text-rolex-green"
          @click="activateSearch()"
        />
      </div>
      <!-- LOGIN ATTEMPT END -->
    </div>

    <MobileNavbar v-else v-model="search" @activate-search="activateSearch" />

    <SearchBar  v-model="search" @activate-search="activateSearch" />
  </nav>
</template>


