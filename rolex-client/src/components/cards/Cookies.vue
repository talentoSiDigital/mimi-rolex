<script setup>
import { useCookies } from "@vueuse/integrations/useCookies";
import { computed, ref, watchEffect } from "vue";
import { useRoute } from "vue-router";
import routerFile from "../../router";

const router = useRoute();

const cookies = useCookies();
const checkOpen = ref(false);
const cookieLog = ref(false);

let externalScript = document.createElement("script");
externalScript.setAttribute(
  "src",
  "//assets.adobedtm.com/7e3b3fa0902e/7ba12da1470f/launch-5de25e657d80.min.js"
);

// externalScript.setAttribute('src', '//assets.adobedtm.com/7e3b3fa0902e/7ba12da1470f/launch-73c56043319a-staging.min.js')

if (cookies.get("rlx-consent") === undefined) {
  cookies.set("rlx-consent", "false");
}
if (cookies.get("rlx-consent") === false) {
  checkOpen.value = true;
}

function checkCookies() {
  if (cookies.get("rlx-consent") && router.fullPath.includes("rolex")) {
    document.head.appendChild(externalScript);
  }
}
checkCookies();

const isOpenUp = computed(() => {
  return checkOpen.value ? "bottom-0" : "-bottom-3/4";
});

function openUp() {
  checkOpen.value = !checkOpen.value;
}

function changeCookie(value) {
  if (cookies.get("rlx-consent") === value) {
    checkOpen.value = false;
  } else {
    cookies.set("rlx-consent", value);
    openUp();
    checkCookies();
    if (!cookies.get("rlx-consent")) {
      routerFile.go();
    }
  }
}

watchEffect(() => {
  checkCookies();
});
</script>

<template>
  <div :class="isOpenUp" class="fixed z-30 h-fit duration-500">
    <div :class="checkOpen ? 'bottom-[70%] md:bottom-1/2' : 'bottom-0'"
      class="h-[10vh] duration-500 flex justify-end fixed z-20 left-[98%] right-4 mr-16 border">
      <div
        class="group border-l border-r border-t rounded-t-md shadow-md shadow-rolex-green border-rolex-green cursor-pointer p-4 fixed flex pt-5 gap-2 bg-white hover:text-rolex-green duration-100 h-[10rem]"
        @click="openUp">
        <font-awesome-icon :icon="['fas', 'gear']" class="group-hover:animate-spin" />
        <h2>Cookies</h2>
      </div>
    </div>
    <div class="h-[70vh] lg:h-[50vh] relative w-full border z-40">
      <div id="content"
        class="border-2 bg-white border-rolex-green h-full w-full relative flex flex-col md:flex-row items-center">
        <div
          class="md:w-2/3 overflow-y-scroll md:overflow-y-hidden h-4/5 md:h-full flex flex-col justify-start md:justify-center items-center">
          <div class="flex items-center gap-10 pb-10">
            <img src="/assets/mimi-logo-gray.svg" alt="Logo mimi joyeria" class="w-32" />
            <img src="/assets/svg-badge-rolex.svg" alt="Logo rolex" class="w-32" />
          </div>
          <div class="flex flex-col items-center overflow-scroll">
            <h2 class="w-10/12 text-justify text-xs md:text-sm">
              Para brindar las mejores experiencias, utilizamos tecnologías como
              cookies para almacenar y/o acceder a información del dispositivo.
              Dar su consentimiento a estas tecnologías nos permitirá procesar
              datos como el comportamiento de navegación o identificaciones
              únicas en este sitio. No dar o retirar el consentimiento puede
              afectar negativamente a determinadas características y funciones.
            </h2>
            <button @click="cookieLog = !cookieLog"
              class="w-10/12 text-justify text-xs md:text-sm font-black hover:underline">
              > Cookies Analiticas.
            </button>
            <Transition>
              <div class="grid grid-cols-3 content-center w-10/12" v-if="cookieLog">
                <h2 class="pl-2 text-sm font-bold border border-rolex-green">Nombre</h2>
                <h2 class="pl-2 text-sm font-bold border border-rolex-green">Duración</h2>
                <h2 class="pl-2 text-sm font-bold border border-rolex-green">Descripción</h2>
                <h2 class="pl-2 text-sm border border-rolex-green">'rlx-consent'</h2>
                <h2 class="pl-2 text-sm border border-rolex-green">360 Días</h2>
                <h2 class="pl-2 text-sm border border-rolex-green">
                  Cookie analítica de Rolex
                </h2>
              </div>
            </Transition>

            <h2 class="w-10/12 text-justify font-semibold text-xs md:text-sm">
              *Puedes cambiar de decisión en cualquier en momento
            </h2>
          </div>
        </div>
        <div class="flex flex-col items-center justify-center w-1/3 gap-2 h-3/5 md:h-full">
          <button @click="changeCookie(true)"
            class="border-2 border-rolex-green font-semibold px-6 py-2 hover:bg-rolex-green hover:text-white duration-200 w-44 sm:w-60 md:w-80 text-xs md:text-lg">
            Permitir todas
          </button>
          <button @click="changeCookie(true)"
            class="border-2 border-rolex-green font-semibold px-6 py-2 hover:bg-rolex-green hover:text-white duration-200 w-44 sm:w-60 md:w-80 text-xs md:text-lg">
            Permitir solo analíticas
          </button>

          <button @click="changeCookie(false)"
            class="border-2 border-rolex-green font-semibold px-6 py-2 hover:bg-rolex-green hover:text-white duration-200 w-44 sm:w-60 md:w-80 text-xs md:text-lg">
            Rechazar todas
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>