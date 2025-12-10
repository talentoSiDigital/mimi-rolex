<script setup>
import { Head } from "@unhead/vue/components";
import { useRoute } from "vue-router";
import PageBanner from "../../components/banners-components/PageBanner.vue";
import WatchCard from "../../components/cards/WatchCard.vue";
import PageLoader from '../../components/global-components/PageLoader.vue';
import RolexHeader from "../../components/RolexHeader.vue";
import RolexTemplate from "../Rolex/RolexTemplate.view.vue";
import GLOBAL_OBJECT from "../../utils/globaj";
import { onMounted, ref, computed, watch } from "vue";
import rolexDataService from "../../services/rolexDataService";
import { useElementHover, useWindowSize } from "@vueuse/core";
import axios from "axios";
import NewContactForm from "../../components/form-components/NewContactForm.vue";
import SectionNavigationCard from "../../components/cards/SectionNavigationCard.vue";

const deskWatchDetails = ref({
  "esfera": "Lacada negra",
  "esferaDetalles": "Visualización Chromalight de alta legibilidad con luminiscencia azul de larga duración",
  "reversoCaja": "Decoración Côtes de Genève Rolex",
  "bisel": "Fijo, graduado 60 minutos, disco Cerachrom de cerámica negra resistente a las rayaduras",
  "cristal": "Zafiro resistente a las rayaduras, lente Cyclops sobre la fecha",
  "arquitectura": "Caja hemisférica sobre una base que permite que el reloj se oriente en la dirección deseada",
  "hermeticidad": "No hermético"
})
const storageRoute = ref(GLOBAL_OBJECT.STORAGE_URL + 'rolex-relojes-new');
const route = useRoute();

const accesories = ref()
const isReady = ref(false)
const myHoverableElement = ref();
const location = ref('')


const isDesktop = computed(() => width.value > 768)

const isClock = computed(()=>{
  return route.params.id == "c909010ln-0001"
})

const { width } = useWindowSize()
const isHovered = useElementHover(myHoverableElement);


const checkLocation = computed(() => {
  return location.value != "VE";
});








function getIndividualAccesories() {
  rolexDataService.getIndividualAccesories(route.params.id)
    .then((d => {
      accesories.value = d.data[0]
      isReady.value = true
    })).catch((e) => {
      console.log(e);
    })
}


function addComma(price) {
  const formatter = new Intl.NumberFormat('en-US');
  return formatter.format(price);
}




// Contact
const error = ref(false);
const messageInfo = ref({
  tto: "Sr",
  name: "",
  lastName: "",
  email: "",
  phone: "",
  country: "VE",
  region: "",
  conditions: false,
  message: "",
});



const position = ref("translate-x-0");
const statusMessage = ref("");
let positionArray = ["translate-x-0", "-translate-x-1/3", "-translate-x-2/3"];
function moveForm(pos) {
  if (messageInfo.value.message == "") {
    error.value = true;
  } else {
    position.value = positionArray[pos];
  }
}
function sendMessage() {
  messageInfo.value.message =
    messageInfo.value.message + ". Codigo de modelo: " + currentRoute;
  mailDataService
    .rolexNewMail(messageInfo.value)
    .then((d) => {
      statusMessage.value =
        "Su mensaje ha sido enviado con éxito al equipo de Rolex en Mimi Joyería";
      moveForm(2);
    })
    .catch(() => {
      statusMessage.value =
        "Hubo un error al enviar su mensaje, intente de nuevo más tarde.";
      moveForm(2);
    });
}




onMounted(() => {
  getIndividualAccesories()



  axios
    .get("https://ipinfo.io/json?token=4ee0a261f56090")
    .then(function (response) {
      location.value = response.data.country;
    })
    .catch(function (error) {
      location.value = "N/A"
    });
})


watch(accesories, () => {
  messageInfo.value.message = `Estoy interesado(a) en el accesorio Rolex ${accesories.value.modelo}`

})
</script>

<template>
  <div id="new-models">
    <RolexTemplate>
      <template #content>

        <div v-if="isReady" class="bg-rolex-brown-light-2 ">

          <Head>
            <title>
              Rolex {{ accesories.nombre }} - Distribuidor Oficial Rolex
            </title>
            <meta name="description"
              :content="`Descubra el reloj Rolex  en Mimi Joyería, Distribuidor Oficial Rolex autorizado para vender y realizar el mantenimiento de los relojes Rolex.`" />
          </Head>

          <section class=" relative md:h-[85vh]">
            <div class="flex items-center justify-center w-full">
              <img :src="`${storageRoute}/rolex-accessories-${accesories.modelo}-packshot.webp`"
                :alt="`${accesories.nombre} imagen principal`" class="w-1/2 md:w-[30%]" />
            </div>

            <div class="md:absolute w-full h-full top-0 flex  items-center justify-center pl-10 md:pl-0 pb-10 md:pb-0">
              <div class="font-helvetica w-full md:w-[85%] ">
                <div class="md:w-1/3">
                  <h1 class="font-bold text-rolex-brown text-xl">Rolex</h1>
                  <h1 class="font-bold text-rolex-brown text-5xl pb-4">
                    {{ accesories.nombre }}
                  </h1>
                  <h1 class="font-extralight text-rolex-brown text-sm">{{ accesories.sub }}</h1>
                  <h1 class="font-extralight text-rolex-brown text-sm"> {{ accesories.modelo.toUpperCase() }}</h1>
                  <div v-if="!checkLocation" class="text-rolex-brown flex items-center gap-2">
                    <h2 class="font-light">
                      $ {{ addComma(accesories.precio) }}
                    </h2>
                    <font-awesome-icon ref="myHoverableElement" :icon="['fas', 'circle-info']"
                      class="text-sm cursor-pointer duration-200" />
                  </div>
                  <Transition name="fade">
                    <p v-if="isHovered"
                      class="text-xs md:w-1/5 duration-200 absolute border-2 border-rolex-brown rounded-sm p-4 bg-rolex-brown-light-1">
                      <span v-if="checkLocation">
                        Descargue la lista de precios recomendados de su país para
                        encontrar la información de los precios específicos de su
                        país.
                      </span>
                      <span v-else>
                        Precio de venta recomendado, IVA incluido. El precio de
                        venta recomendado puede modificarse en cualquier momento
                        sin previo aviso.
                      </span>
                    </p>
                  </Transition>
                  <br />
                  <div class="space-y-2 text-sm text-rolex-brown">
                    <div class="grid grid-cols-4 w-full md:grid-cols-2  md:grid-rows-2 md:gap-y-2">
                      <a href="tel:582123008742" class="flex items-center gap-4">
                        <font-awesome-icon :icon="['fas', 'phone']"
                          class="text-md bg-rolex-brown-light-1 hover:bg-rolex-brown hover:text-white duration-200 cursor-pointer p-3 rounded-full" />
                        <p v-if="isDesktop">+58 212-3008742</p>
                      </a>
                      <a href="https://wa.link/rwawyl" target="_blank" class="flex items-center gap-4">
                        <font-awesome-icon :icon="['fab', 'whatsapp']"
                          class="text-md bg-rolex-brown-light-1 hover:bg-rolex-brown hover:text-white duration-200 cursor-pointer p-3 rounded-full" />
                        <p v-if="isDesktop">Chat</p>
                      </a>

                      <router-link :to="{
                        name: 'rolex-contacto-enviar-mensaje',
                        query: { id: currentRoute },
                      }" class="flex items-center gap-4">
                        <font-awesome-icon :icon="['fas', 'envelope']"
                          class="text-md bg-rolex-brown-light-1 hover:bg-rolex-brown hover:text-white duration-200 cursor-pointer p-3 rounded-full" />
                        <p v-if="isDesktop">Envíenos un mensaje</p>
                      </router-link>
                      <a href="https://maps.app.goo.gl/EED9Kdco8zec8ygT8" class="flex items-center gap-4"
                        target="_blank">
                        <font-awesome-icon :icon="['fas', 'location-arrow']"
                          class="text-md bg-rolex-brown-light-1 hover:bg-rolex-brown hover:text-white duration-200 cursor-pointer p-3 rounded-full" />
                        <p v-if="isDesktop">Conseguir la dirección</p>
                      </a>
                    </div>
                  </div>


                </div>
              </div>
            </div>
          </section>

          <section class="w-full flex justify-center">
            <div v-if="!isClock" class="w-10/12 bg-rolex-brown-light-1 grid grid-cols-2 md:grid-cols-3 gap-8 p-10 md:p-20">
              <header class="">
                <h2 class="text-rolex-brown font-helvetica font-bold ">
                  RMC
                </h2>
                <p class="font-light text-sm uppercase">
                  {{ accesories.modelo }}
                </p>
              </header>

              <header class="">
                <h2 class="text-rolex-brown font-helvetica font-bold ">
                  Coleccíon
                </h2>
                <p class="font-light text-sm ">
                  Accesorios Rolex
                </p>
              </header>
              <header class="">
                <h2 class="text-rolex-brown font-helvetica font-bold ">
                  Modelo
                </h2>
                <p class="font-light text-sm ">
                  {{ accesories.nombre }}
                </p>
              </header>
              <header class="">
                <h2 class="text-rolex-brown font-helvetica font-bold ">
                  Material
                </h2>
                <p class="font-light text-sm capitalize">
                  {{ accesories.spec }}
                </p>
              </header>

            </div>
            <div v-else class="w-10/12 bg-rolex-brown-light-1 grid grid-cols-2 md:grid-cols-3 gap-8 p-10 md:p-20">
              <header class="">
                <h2 class="text-rolex-brown font-helvetica font-bold ">
                  RMC
                </h2>
                <p class="font-light text-sm uppercase">
                  {{ accesories.modelo }}
                </p>
              </header>

              <header class="">
                <h2 class="text-rolex-brown font-helvetica font-bold ">
                  Esfera
                </h2>
                <p class="font-light text-sm ">
                  {{ deskWatchDetails.esfera }}
                </p>
              </header>
              <header class="">
                <h2 class="text-rolex-brown font-helvetica font-bold ">
                  Detalles de la esfera
                </h2>
                <p class="font-light text-sm ">
                  {{deskWatchDetails.esferaDetalles }}
                </p>
              </header>
              <header class="">
                <h2 class="text-rolex-brown font-helvetica font-bold ">
                  Caja del modelo
                </h2>
                <p class="font-light text-sm ">
                  {{ accesories.spec }}
                </p>
              </header>
              <header class="">
                <h2 class="text-rolex-brown font-helvetica font-bold ">
                  Reverso de caja
                </h2>
                <p class="font-light text-sm ">
                  {{ deskWatchDetails.reversoCaja }}
                </p>
              </header>
              <header class="">
                <h2 class="text-rolex-brown font-helvetica font-bold ">
                  Bisel
                </h2>
                <p class="font-light text-sm ">
                  {{ deskWatchDetails.bisel }}
                </p>
              </header>
              <header class="">
                <h2 class="text-rolex-brown font-helvetica font-bold ">
                  Bisel
                </h2>
                <p class="font-light text-sm ">
                  {{ deskWatchDetails.cristal }}
                </p>
              </header>
              <header class="">
                <h2 class="text-rolex-brown font-helvetica font-bold ">
                  Arquitectura del reloj
                </h2>
                <p class="font-light text-sm ">
                  {{ deskWatchDetails.arquitectura }}
                </p>
              </header>
              <header class="">
                <h2 class="text-rolex-brown font-helvetica font-bold ">
                  Hermeticidad
                </h2>
                <p class="font-light text-sm ">
                  {{ deskWatchDetails.hermeticidad }}
                </p>
              </header>

            </div>
          </section>


          <section class="bg-rolex-brown-light-2 py-[10vh]">
            <header
              class="flex flex-col gap-8 font-helvetica font-bold justify-around items-center text-rolex-brown h-fit pb-[10vh]">
              <h1 class="text-2xl md:text-5xl w-10/12 md:w-1/2">
                {{accesories.titulo}}
              </h1>
              <p class="w-10/12 md:w-1/2 text-xl font-helvetica font-light text-justify md:text-left">

                {{ accesories.contenido }}
              </p>
            </header>

            <div class="flex justify-center ">
              <img :src="`${storageRoute}/rolex-accessories-${accesories.modelo}-landscape.webp`" :alt="`Accesorios rolex RMC ${accesories.modelo}` "
                class="hidden md:block w-1/2 " />
              <img :src="`${storageRoute}/rolex-accessories-${accesories.modelo}-portrait.webp`" :alt="`Accesorios rolex RMC ${accesories.modelo}` "
                class="md:hidden block w-10/12 " />
            </div>






          </section>


          <section class="w-full overflow-hidden pb-[10vh] bg-rolex-brown-light-2">
            <div class="flex flex-col items-center">
              <header
                class="w-10/12 flex flex-col gap-4 font-helvetica font-bold justify-around items-start text-rolex-brown h-fit py-2">
                <h1 class="text-2xl md:text-5xl w-full">Contáctanos</h1>
                <hr class="mt-4 mb-2 w-full" />

                <h1 class="text-2xl md:text-3xl">Envíenos su mensaje</h1>
              </header>
              <div class="relative w-10/12">
                <img class="w-full hidden lg:block" :src="`/assets/routes-assets/banners/new-banner-rolex-contact.webp`"
                  alt="banner rolex accesorios" />
                <img class="w-full block lg:hidden"
                  src="/assets/routes-assets/banners/new-banner-rolex-contact-mobile.webp"
                  alt="banner rolex accesorios" />
              </div>

              <div class="w-10/12 overflow-hidden">
                <div :class="position" class="flex w-[300%] duration-300 pt-[10vh] bg-white">
                  <section class="w-1/3">
                    <header
                      class="flex flex-col gap-4 font-helvetica font-bold text-center justify-around items-center text-rolex-brown h-fit">
                      <p class="w-10/12 md:w-1/2 text-xl font-helvetica">
                        Enviar un mensaje
                      </p>

                      <h1 class="text-2xl md:text-5xl w-10/12 lg:w-1/2">
                        Por favor, introduzca su mensaje
                      </h1>

                      <p class="w-10/12 lg:w-1/2 text-xl font-helvetica font-light">
                        Gracias por su interés en los relojes Rolex. Por favor,
                        introduzca su mensaje a continuación y estaremos
                        encantados de ayudarle.
                      </p>

                      <textarea name="message" id="" cols="40" rows="10" placeholder="Escribe tu mensaje"
                        class="border border-[#bbb] h-60 p-4 w-10/12 lg:w-1/2" v-model="messageInfo.message"></textarea>
                      <h2 v-if="error" class="text-red-700">
                        Debes colocar un mensaje
                      </h2>

                      <button @click="moveForm(1)"
                        class="bg-rolex-green text-white border w-fit border-rolex-green px-4 py-2 font-helvetica font-bold rounded-3xl hover:bg-white hover:text-rolex-green duration-200">
                        Siguiente
                        <font-awesome-icon :icon="['fas', 'chevron-right']" class="text-xs pl-2" />
                      </button>
                    </header>
                  </section>

                  <NewContactForm v-model="messageInfo" class="w-1/3" @get-back="moveForm" @send-mail="sendMessage"
                    Color="bg-white" />

                  <section class="border py-[10vh] w-1/3">
                    <header
                      class="flex flex-col gap-4 font-helvetica font-bold text-center justify-around items-center text-rolex-brown h-fit">
                      <p class="w-10/12 md:w-1/2 text-xl font-helvetica">
                        Enviar un mensaje
                      </p>

                      <h1 class="text-2xl md:text-5xl w-10/12 md:w-1/2">
                        Gracias
                      </h1>

                      <p class="w-10/12 md:w-1/2 text-xl text-black font-helvetica font-bold">
                        {{ statusMessage }}
                      </p>
                      <p class="w-10/12 md:w-1/2 text-xl font-helvetica font-light">
                        Uno de nuestros asesores de ventas de Rolex revisará su
                        solicitud y responderá lo antes posible.
                      </p>

                      <Button :to="`${route.fullPath}`">Volver</Button>
                    </header>
                  </section>
                </div>
              </div>
            </div>
          </section>


          <section class="bg-rolex-brown-light-2 flex flex-col justify-center items-center pb-[10vh]">

            <div class="w-10/12">
              <SectionNavigationCard :img="`banners/new-banner-accesorios`" :link="{ name: `rolex-accesorios` }"
                class="w-full ">
                <template #sub>Rolex </template>
                <template #title>Accesorios</template>

                <template #button>Más información</template>
              </SectionNavigationCard>
            </div>
          </section>
        </div>
      </template>
    </RolexTemplate>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.appear-enter-active,
.appear-leave-active {
  transition: 0.3s ease-in-out;
  height: 170px;
}

.appear-enter-from,
.appear-leave-to {
  height: 0px;
}
</style>
