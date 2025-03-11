<script setup>
import { storeToRefs } from "pinia";
import { computed, ref } from "vue";
import { RouterLink, useRoute } from "vue-router";
import { auth } from "../../store/auth.module";
const route = useRoute();
const search = defineModel();

const emit = defineEmits(["activateSearch"]);
const piniaStore = auth();
const IsLogged = storeToRefs(piniaStore);

const loggedIn = computed(() => {
  return IsLogged.status.value.loggedIn;
});

const activate = ref("h-20");

function collapseNav() {
  if (search.value == "h-60") {
    emit("activateSearch");
  }
  activate.value == "h-20"
    ? (activate.value = "h-fit")
    : (activate.value = "h-20");
}

function collapseSearch() {
  if (activate.value == "h-fit") {
    activate.value = "h-20";
  }
  emit("activateSearch");
}
</script>

<template>
  <nav class="relative z-30 duration-200">
    <!--  -->
    <main
      id="navigation-bar"
      :class="activate"
      class="flex overflow-hidden flex-col shadow-lg bg-main-green"
    >
      <section class="flex items-center w-full  justify-between px-10 border-b">
        <div class="py-6" @click="[collapseNav()]">
          <svg
            class="w-8 h-8 cursor-pointer"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              class="stroke-white"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </div>
        <div class="flex items-center gap-4">
          <font-awesome-icon
            :icon="['fas', 'magnifying-glass']"
            class="duration-200 cursor-pointer text-rolex-green text-2xl"
            @click="collapseSearch()"
          />
          <div v-if="loggedIn">
            <router-link
              to="/carrito"
              class="py-2 font-normal font-montserrat text-green-900 w-fit"
            >
              <font-awesome-icon
                :icon="['fas', 'cart-shopping']"
                class="text-2xl text-rolex-green duration-200 group-hover:underline"
              />
            </router-link>
          </div>
        </div>
      </section>

      <section class="w-full px-10 flex flex-col">
        <router-link
          @click="collapseNav"
          :to="{ name: 'rolex' }"
          class="py-2 font-normal font-montserrat text-green-900"
        >
          <h2 class="uppercase">Rolex</h2>
        </router-link>

        <router-link
          @click="collapseNav"
          to="/tudor"
          class="py-2 font-normal font-montserrat text-green-900 w-fit"
        >
          <h2 class="uppercase">Tudor</h2>
        </router-link>

        <router-link
          to="/joyeria"
          class="py-2 font-normal font-montserrat text-green-900 w-fit"
        >
          <h2 class="uppercase">Joyería</h2>
        </router-link>

        <div class="flex flex-col py-0">
          <router-link
            to="/joyeria/nacimiento-y-bautizos"
            class="py-2 font-normal font-montserrat text-green-900 w-fit"
          >
            <h2 class="uppercase">-- Nacimiento y bautizos</h2>
          </router-link>
          <router-link
            to="/joyeria/compromiso-y-matrimonio"
            class="py-2 font-normal font-montserrat text-green-900 w-fit"
          >
            <h2 class="uppercase">-- Compromiso y matrimonio</h2>
          </router-link>
          <router-link
            to="/joyeria/graduacion"
            class="py-2 font-normal font-montserrat text-green-900 w-fit"
          >
            <h2 class="uppercase">-- Graduación</h2>
          </router-link>
          <router-link
            to="/joyeria/regalos"
            class="py-2 font-normal font-montserrat text-green-900 w-fit"
          >
            <h2 class="uppercase">-- Regalos</h2>
          </router-link>
        </div>

        <router-link
          @click="collapseNav"
          to="/sobre-mimi"
          class="py-2 font-normal font-montserrat text-green-900 w-fit"
        >
          <h2 class="uppercase">Sobre Mimi</h2>
        </router-link>

        <router-link
          @click="collapseNav"
          to="/contactenos"
          class="py-2 font-normal font-montserrat text-green-900 w-fit"
        >
          <h2 class="uppercase">Contacto</h2>
        </router-link>

        <!-- LOGIN ATTEMPT  -->

        <a
          v-if="loggedIn"
          href="/logout"
          class="py-2 font-normal font-montserrat text-green-900 w-fit"
        >
          <h2 class="uppercase">Cerrar sesión</h2>
        </a>

        <router-link
          to="/login"
          v-else
          class="py-2 font-normal font-montserrat text-green-900 w-fit"
        >
          <h2 class="uppercase">Iniciar Sesión</h2>
        </router-link>
      </section>
    </main>
  </nav>
</template>


