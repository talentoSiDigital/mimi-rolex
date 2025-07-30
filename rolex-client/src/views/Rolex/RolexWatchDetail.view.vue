<script setup>
import { useAsyncState } from "@vueuse/core";
import { computed, ref, watch } from "vue";
import { injectHead, useHead } from '@unhead/vue'
import { Head } from "@unhead/vue/components";
import { Carousel, Slide } from "vue3-carousel";
import { useRoute } from "vue-router";

import "vue3-carousel/dist/carousel.css";
import collectionsID from '../../data/collectionsID.json'
import SectionNavigationCard from "../../components/cards/SectionNavigationCard.vue";
import RolexDataServices from "../../services/rolexDataService";
import RolexTemplate from "./RolexTemplate.view.vue";
import router from '../../router'
import axios from "axios";

import { useElementHover, useWindowSize } from "@vueuse/core";
import Button from "../../components/global-components/Button.vue";
import NewContactForm from "../../components/form-components/NewContactForm.vue";
import mailDataService from "../../services/mailDataService";
import digitalDataLayer from "../../utils/digitalDataLayer";
const { width, height } = useWindowSize()
const isDesktop = computed(() => width.value > 768)
const currentSlide = ref(0);

const head = injectHead()
const myHoverableElement = ref();
const isHovered = useElementHover(myHoverableElement);
const sliderItems = (item,modelo) => {
  if (item == 0) {
    return `${storageRoute.value}${modelo}-showcase.webp`
  }
  return `${storageRoute.value}${modelo}-slider-${item}.webp`
}


const textBoxCounter = ref(0)
function isVisible(item) {
  if (textBoxCounter.value == item) {
    return true
  }
  return false
}

const storageRoute = ref("https://mimijoyeria.com/storage/rolex-relojes-new/");
// const storageRoute = ref("http://localhost:3000/storage/rolex-relojes-new/");

const route = useRoute();
const currentRoute = route.params.id;
const location = ref(null);
const name = ref(currentRoute);
const family = ref("")
const rmc = ref("")
const watchName = ref("")

function getDiameter(text) {
  const r = /\d+/;
  return text.match(r)[0] + " mm";
}
function getMaterialName(text) {
  let string = text.split(",");
  return string[2];
}

axios
  .get("https://ipinfo.io/json?token=4ee0a261f56090")
  .then(function (response) {
    // handle success
    location.value = response.data.country;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });


const checkLocation = computed(() => {
  return location.value != "VE";
});

let { isLoading, state, isReady, execute } = useAsyncState(
  RolexDataServices.getDetailedWatch(currentRoute)
    .then((d) => {
      console.log(d.data)

      family.value =collectionsID.rows[d.data.getAll.RolexCollectionId-1]
     
      rmc.value = d.data.getAll.modelo
      watchName.value = d.data.getAll.nombre

      return d.data;
    })
    .catch((e) => {
      router.push({name:'coleccion-rolex'})
    })
);

function addComma(price) {
  return `${price.slice(0, price.length - 3)},${price.slice(
    price.length - 3,
    price.length
  )}`;
}
function parseModelNumber(number) {
  return number.slice(1, number.indexOf("-"));
}

function capitalizeFirstLetter(inputString) {
  // Convert the entire string to lowercase
  const lowerCaseString = inputString.toLowerCase();

  // Capitalize the first letter
  const capitalizedString =
    lowerCaseString.charAt(0).toUpperCase() + lowerCaseString.slice(1);

  return capitalizedString;
}

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



const position = ref("-translate-x-0");
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

watch(isReady, () => {
  useHead({
    script: [`var digitalDataLayer = ${JSON.stringify(digitalDataLayer(family.value.idName, rmc.value))}; `]
  }, { head })
  messageInfo.value.message = `Estoy interesado en el ${watchName.value}. Referencia: ${rmc.value}`
})


// nombre, get
</script>

<template>
  <div id="new-models">
    <RolexTemplate>
      <template #content>
        <div v-if="isReady" class="bg-rolex-brown-light-2 ">

          <Head>
            <title>
              Rolex {{ state.getAll.nombre }}
              {{ getMaterialName(state.getAll.cajaDelModelo) }},
              {{ state.getAll.modelo }}
            </title>
            <meta name="description"
              :content="`Descubra el reloj Rolex ${state.getAll.nombre
                },  ${getDiameter(
                  state.getAll.cajaDelModelo
                )}, de  ${getMaterialName(
                  state.getAll.cajaDelModelo
                )} en Mimi Joyería, Distribuidor Oficial Rolex autorizado para vender y realizar el mantenimiento de los relojes Rolex.`" />
          </Head>
          <section class=" relative md:h-[85vh]">
            <div v-if="isDesktop" class="flex items-center justify-center w-full">
              <img :src="`https://mimijoyeria.com/storage/rolex-relojes-new/${state.getAll.modelo}-showcase.webp`"
                :alt="`${state.getAll.nombre}-main-image`" class="w-1/2 md:w-[30%]" />
            </div>
            <div v-else>
              <carousel :items-to-show="1" v-model="currentSlide" :wrapAround="true" :autoplay="3000" :transition="600"
                class="w-full ">
                <slide v-for="slide in 5" :key="slide">
                  <div class=" flex justify-center w-full">
                    <img :src="sliderItems(slide-1, state.getAll.modelo)" :alt="`slide-${slide}`" class=" w-10/12 " :class="slide-1 == 0? 'w-2/3':'w-full'" />

                  </div>

                </slide>
              </carousel>
              <div class="flex gap-2 justify-center w-full mt-4 ">
                <div v-for="(item, index) in 5" :key="item">
                  <div class="duration-200  h-2 block rounded hover:bg-rolex-green active:bg-rolex-green"
                    @click="currentSlide = index" :class="currentSlide == index ? 'w-14 bg-rolex-green' : 'w-4 bg-gray-200'">
                  </div>
                </div>

              </div>
            </div>

            <div class="md:absolute w-full h-full top-0 flex  items-center justify-center pl-10 md:pl-0 pb-10 md:pb-0">
              <div class="font-helvetica w-full md:w-[85%] ">
                <div class="md:w-1/3">
                  <h1 class="font-bold text-rolex-brown text-xl">Rolex</h1>
                  <h1 class="font-bold text-rolex-brown text-5xl pb-4">
                    {{ state.getAll.nombre }}
                  </h1>
                  <h1 class="font-thin text-rolex-brown text-sm">{{ state.getAll.cajaDelModelo }}</h1>
                  <h1 class="font-thin text-rolex-brown text-sm">{{ state.getAll.modelo.toUpperCase() }}</h1>
                  <div v-if="!checkLocation" class="text-rolex-brown flex items-center gap-2">
                    <h2 class="font-light">
                      $ {{ addComma(state.details[0].precio) }}
                    </h2>
                    <font-awesome-icon ref="myHoverableElement" :icon="['fas', 'circle-info']"
                      class="text-sm cursor-pointer duration-200" />
                  </div>
                  <Transition name="fade">
                    <p v-if="isHovered"
                      class="text-xs md:w-1/5 duration-200 absolute border-2 border-rolex-brown rounded p-4 bg-rolex-brown-light-1">
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

          <section v-if="isDesktop" class="flex w-full justify-center py-14 ">
            <div class="md:w-[85%] flex gap-1 pr-3">
              <img v-for="item in 4" :src="`${storageRoute}${state.getAll.modelo}-slider-${item}.webp`" alt=""
                class="w-1/4 bg-rolex-brown-light-1">
            </div>

          </section>

          <section class="flex w-full justify-center  pb-[10vh]">
            <div class="md:w-[85%] flex flex-col-reverse items-center md:flex-row">
              <div class="w-10/12 md:w-1/2">
                <img src="/assets/routes-assets/rolex-model-card.webp" alt="">
              </div>
              <div class="md:w-1/2 flex flex-col items-center md:items-end justify-center">
                <div class="w-10/12 flex flex-col items-center justify-center">
                  <header class="border-t py-4 w-full">
                    <div class="flex justify-between h-10">
                      <h2 class="pb-1 text-lg font-semibold text-rolex-brown">La garantía Rolex</h2>
                      <button @click="textBoxCounter = 0">
                        <font-awesome-icon v-if="textBoxCounter != 0" :icon="['fas', 'plus']" />
                        <font-awesome-icon v-else :icon="['fas', 'minus']" />

                      </button>
                    </div>
                    <Transition name="appear">
                      <p v-if="isVisible(0)" class="font-thin h-[170px]  text-rolex-brown text-sm  overflow-hidden duration-300">
                        Para garantizar la precisión y la
                        fiabilidad de sus relojes, Rolex somete a cada reloj, tras el ensam-blaje, a una serie de
                        pruebas
                        estrictas. Todos los nuevos relojes adquiridos en uno de los Distribui-dores Oficiales de la
                        marca
                        incluyen una garantía internacional de cinco años. Cuando compra un Rolex, el Distribuidor
                        Oficial
                        rellena y deja registrada la fecha en la tarjeta de garantía Rolex, que certifica la
                        autenticidad
                        de su reloj.</p>
                    </Transition>

                  </header>
                  <header class="border-t py-4 w-full">
                    <div class="flex justify-between h-10">
                      <h2 class="pb-1 text-lg font-semibold text-rolex-brown">El sello verde</h2>
                      <button @click="textBoxCounter = 1">
                        <font-awesome-icon v-if="textBoxCounter != 1" :icon="['fas', 'plus']" />
                        <font-awesome-icon v-else :icon="['fas', 'minus']" />

                      </button>
                    </div>
                    <Transition name="appear">
                      <p v-if="isVisible(1)" class="font-thin h-[170px]  text-rolex-brown text-sm  overflow-hidden duration-300">
                        La garantía de cinco años que se aplica a todos los modelos Rolex viene acompañada de un sello
                        verde, un símbolo de su estatus de Cronómetro Superlativo. Esta exclusiva certificación da fe de
                        que el reloj ha superado con éxito una serie de controles finales específicos llevados a cabo
                        por
                        Rolex en sus propios laboratorios y según sus propios criterios, como complemento de la
                        certifica-ción oficial COSC de su movimiento.
                      </p>
                    </Transition>

                  </header>
                  <header class="border-t py-4 w-full">
                    <div class="flex justify-between h-10">
                      <h2 class="pb-1 text-lg font-semibold text-rolex-brown">Estuche Rolex</h2>
                      <button @click="textBoxCounter = 2">
                        <font-awesome-icon v-if="textBoxCounter != 2" :icon="['fas', 'plus']" />
                        <font-awesome-icon v-else :icon="['fas', 'minus']" />

                      </button>
                    </div>
                    <Transition name="appear">
                      <p v-if="isVisible(2)" class="font-thin h-[170px]  text-rolex-brown text-sm  overflow-hidden duration-300">
                        Todos los relojes Rolex se entregan en un precioso estuche verde que protege y guarda la joya
                        que
                        anida en su interior. Además, el estuche simboliza igualmente el acto de regalar. Por ello, si
                        usted quiere obsequiar a alguien con un Rolex, es importante que lo primero que vea el
                        destinatario esté a la altura de su contenido.
                      </p>
                    </Transition>

                  </header>

                </div>
              </div>
            </div>

          </section>

          <section class="flex flex-col-reverse md:flex-row items-center justify-center w-full ">
            <section class="w-[85%] flex flex-col items-center bg-rolex-brown-light-1">
              <div class="grid grid-cols-2 md:grid-cols-3 md:grid-rows-4 gap-y-5 gap-x-5 w-11/12 p-10">
           
                  <header class="">
                    <h2 class="text-rolex-brown font-helvetica font-bold text-xl">
                      Referencia
                    </h2>
                    <p class="font-light">
                      {{ parseModelNumber(state.getAll.modelo) }}
                    </p>
                  </header>
                  <header class="">
                    <h2 class="text-rolex-brown font-helvetica font-bold text-xl">
                      Movimiento
                    </h2>
                    <p class="font-light">{{ state.details[0].movimiento }}</p>
                  </header>
                  <header class="">
                    <h2 class="text-rolex-brown font-helvetica font-bold text-xl">
                      Brazalete
                    </h2>
                    <p class="font-light">{{ state.details[0].brazalete }}</p>
                  </header >


                  <header class="">
                    <h2 class="text-rolex-brown font-helvetica font-bold text-xl">
                      Caja del modelo
                    </h2>
                    <h1 class="font-light">{{ state.getAll.cajaDelModelo }}</h1>
                  </header>
                  <header class="">
                    <h2 class="text-rolex-brown font-helvetica font-bold text-xl">
                      Movimiento
                    </h2>
                    <p class="font-light">Automático</p>
                  </header>
                  <header class="">
                    <h2 class="text-rolex-brown font-helvetica font-bold text-xl">
                      Esfera
                    </h2>
                    <p class="font-light">{{ state.details[0].esfera }}</p>
                  </header>



                  <header class="">
                    <h2 class="text-rolex-brown font-helvetica font-bold text-xl">
                      Bisel
                    </h2>
                    <p class="font-light">{{ state.details[0].bisel }}</p>
                  </header>
                  <header class="">
                    <h2 class="text-rolex-brown font-helvetica font-bold text-xl">
                      Calibre
                    </h2>
                    <p class="font-light">{{ state.details[0].calibre }}</p>
                  </header>
                  <header class="">
                    <h2 class="text-rolex-brown font-helvetica font-bold text-xl">
                      Certificación
                    </h2>
                    <p class="font-light">
                      {{ state.details[0].certificacion }}
                    </p>
                  </header>
               

                  <header class="">
                    <h2 class="text-rolex-brown font-helvetica font-bold text-xl">
                      Hermeticidad
                    </h2>
                    <p class="font-light">
                      {{ state.details[0].hermeticidad }}
                    </p>
                  </header>
                  <header class="">
                    <h2 class="text-rolex-brown font-helvetica font-bold text-xl">
                      Reserva de marcha
                    </h2>
                    <p class="font-light">
                      {{ state.details[0].reservaDeMarcha }}
                    </p>
                  </header>


               
               
                 

                  
                  
  
                 


              </div>
              <hr class="w-[85%] pb-6" />
              <div class="w-[85%] pb-10">
                <a :href="state.details[0].brochure" target="_blank"
                  class="flex gap-2 font-helvetica text-white hover:text-rolex-green bg-rolex-green border border-rolex-green w-fit py-3 px-6 hover:bg-white font-bold rounded-full duration-200 group">
                  <svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 15 15" xml:space="preserve"
                    class="w-4">
                    <path id="icons_x2F_download" class="fill-white group-hover:fill-rolex-green"
                      d="M15,10v5h-1h-1H2H0v-2v-3h2v3h11v-3H15z M5.5,9.5l2,2l2-2l2-2h-3V0H8H7H6.5v7.5h-3L5.5,9.5z" />
                  </svg>
                  <h2>Descargar Folleto</h2>
                </a>
              </div>
            </section>

          </section>

          <section class="flex flex-col items-center w-full bg-rolex-brown-light-2">
            <div class="flex flex-col items-center py-[10vh]">
              <header class="flex flex-col gap-8 justify-around items-center text-rolex-brown h-fit pb-[10vh]">
                <h1 class="font-helvetica font-bold text-2xl md:text-5xl w-10/12 md:w-1/2">
                  {{ state.headers.header1 }}
                </h1>

                <p
                  class="text-rolex-brown w-10/12 md:w-1/2 text-xl font-helvetica font-light text-justify md:text-left">
                  {{ state.headers.texto1 }}
                </p>
              </header>
              <section class="w-10/12 md:w-1/2">
                <img :src="`https://mimijoyeria.com/storage/rolex-relojes-new/${state.headers.imagen1}.webp`"
                  alt="heading-img-1" class="hidden md:block" />
                <img :src="`https://mimijoyeria.com/storage/rolex-relojes-new/${state.headers.imagen1}-mobile.webp`"
                  alt="heading-img-1-mobile" class="block md:hidden w-full" />
              </section>
            </div>

            <div class="flex flex-col items-center py-[10vh]">
              <header class="flex flex-col gap-8 justify-around items-center text-rolex-brown h-fit pb-[10vh]">
                <h1 class="font-helvetica font-bold text-2xl md:text-5xl w-10/12 md:w-1/2">
                  {{ state.headers.header2 }}
                </h1>

                <p
                  class="text-rolex-brown w-10/12 md:w-1/2 text-xl font-helvetica font-light text-justify md:text-left">
                  {{ state.headers.texto2 }}
                </p>
              </header>
              <section class="w-10/12 md:w-1/2">
                <img :src="`https://mimijoyeria.com/storage/rolex-relojes-new/${state.headers.imagen2}.webp`"
                  alt="heading-img-2" class="hidden md:block" />
                <img :src="`https://mimijoyeria.com/storage/rolex-relojes-new/${state.headers.imagen2}-mobile.webp`"
                  alt="heading-img-2-mobile" class="block md:hidden w-full" />
              </section>
            </div>

            <div class="flex flex-col items-center py-[10vh]">
              <header class="flex flex-col gap-8 justify-around items-center text-rolex-brown h-fit pb-[10vh]">
                <h1 class="font-helvetica font-bold text-2xl md:text-5xl w-10/12 md:w-1/2">
                  {{ state.headers.header3 }}
                </h1>

                <p
                  class="text-rolex-brown w-10/12 md:w-1/2 text-xl font-helvetica font-light text-justify md:text-left">
                  {{ state.headers.texto3 }}
                </p>
              </header>
              <section class="w-10/12 md:w-1/2">
                <img :src="`https://mimijoyeria.com/storage/rolex-relojes-new/${state.headers.imagen3}.webp`"
                  alt="heading-img-3" class="hidden md:block" />
                <img :src="`https://mimijoyeria.com/storage/rolex-relojes-new/${state.headers.imagen3}-mobile.webp`"
                  alt="heading-img-3-mobile" class="block md:hidden w-full" />
              </section>
            </div>
            <div class="flex flex-col justify-center items-center pt-[10vh] bg-rolex-brown-light-2">
              <header class="flex flex-col gap-8 w-10/12 pt-10 pb-20 justify-around items-center text-rolex-brown h-fit bg-rolex-brown-light-1">
                <img src="/assets/crown-logo-rolex.svg" alt="logo-rolex" class="w-12 py-4" />

                <h1 class="font-helvetica font-bold text-2xl md:text-5xl w-10/12 md:w-1/2 text-center">
                  Disponibilidad de los modelos
                </h1>

                <p class="text-rolex-brown w-10/12 md:w-1/2 text-sm font-helvetica font-light text-center">
                  Todos los relojes Rolex se ensamblan a mano con sumo cuidado para garantizar una calidad excep-cional. Unos estándares tan altos limitan naturalmente la capacidad de producción de Rolex y, a veces, la demanda de relojes Rolex supera esta capacidad.



                  <br />
                  <br />
                  Por lo tanto, la disponibilidad de ciertos modelos puede ser
                  limitada. Los relojes Rolex nuevos se venden exclusivamente a
                  través de los Distribuidores Oficiales Rolex, que reciben
                  entregas habituales y gestionan de manera independiente la
                  distribución y las ventas a sus clientes.
                  <br />
                  <br />

                  Mimi Joyería C.A. se enorgullece de formar parte de la red
                  mundial de Distribui-dores Oficiales Rolex, y puede
                  proporcionar información sobre la disponibilidad de los
                  relojes Rolex.
                </p>
             
              </header>
            </div>
          </section>

          <section class="w-full overflow-hidden py-[10vh] bg-rolex-brown-light-2">
            <div class="flex flex-col items-center">
              <header
                class="w-10/12 flex flex-col gap-4 font-helvetica font-bold justify-around items-start text-rolex-brown h-fit py-2">
                <h1 class="text-2xl md:text-5xl w-full">Contáctanos</h1>
                <hr class="mt-4 mb-2 w-full" />

                <h1 class="text-2xl md:text-3xl">Envíenos su mensaje</h1>
              </header>
              <div class="relative w-10/12">
                <img class="w-full hidden lg:block" :src="`/assets/routes-assets/banners/new-banner-rolex-contact.webp`"
                  :alt="type" />
                <img class="w-full block lg:hidden"
                  :src="`/assets/routes-assets/banners/new-banner-rolex-contact-mobile.webp`" :alt="type" />
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

          <section class="bg-rolex-brown-light-2 flex flex-col justify-center items-center py-[10vh]">
            <div class="w-10/12">
              <SectionNavigationCard :img="`banners/new-banner-collections-${family.idName}`"
                :link="{ name: `rolex-coleccion-${family.idName}` }" class="w-full ">
                <template #sub>Rolex {{ capitalizeFirstLetter(family.nombre) }}</template>
                <template #title>{{ family.subHeader }}</template>

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
