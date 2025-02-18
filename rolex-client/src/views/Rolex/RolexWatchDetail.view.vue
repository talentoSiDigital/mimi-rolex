<script setup>
import { useAsyncState } from "@vueuse/core";
import { computed, ref, watch } from "vue";
import { useHead } from "@unhead/vue";
import { Head } from "@unhead/vue/components";

import { useRoute } from "vue-router";

import "vue3-carousel/dist/carousel.css";

import PageBanner from "../../components/banners-components/PageBanner.vue";
import SectionNavigationCard from "../../components/cards/SectionNavigationCard.vue";
import RolexDataServices from "../../services/rolexDataService";
import RolexTemplate from "./RolexTemplate.view.vue";

import axios from "axios";

import { useElementHover } from "@vueuse/core";
import Button from "../../components/global-components/Button.vue";
import NewContactForm from "../../components/form-components/NewContactForm.vue";
import mailDataService from "../../services/mailDataService";

const myHoverableElement = ref();
const isHovered = useElementHover(myHoverableElement);
const myHoverableElement2 = ref();
const isHovered2 = useElementHover(myHoverableElement2);
const collections = {
  1: {
    nombre: "COSMOGRAPH DAYTONA",
    subHeader: "Un icono que desafía al tiempo",
    idName: "cosmograph-daytona",
  },
  2: {
    nombre: "1908",
    subHeader: "El nuevo rostro de la excelencia",
    idName: "1908",
  },
  3: {
    nombre: "YACHT‑MASTER",
    subHeader: "El dominio de la ligereza",
    idName: "yacht-master",
  },
  4: {
    nombre: "SKY‑DWELLER",
    subHeader: "Rumbo a lo ideal y más allá",
    idName: "sky-dweller",
  },
  5: {
    nombre: "GMT-MASTER II",
    subHeader: "Ilumina nuestros vínculos con el mundo",
    idName: "gmt-master-ii",
  },
  6: {
    nombre: "EXPLORER",
    subHeader: "La grandeza de la aventura",
    idName: "explorer",
  },
  7: {
    nombre: "OYSTER PERPETUAL",
    subHeader: "La efervescencia de la excelencia",
    idName: "oyster-perpetual",
  },
  8: {
    nombre: "DAY‑DATE",
    subHeader: "Cada esfera, un descubrimiento",
    idName: "day-date",
  },
  9: {
    nombre: "DATEJUST",
    subHeader: "Una fecha para recordar",
    idName: "datejust",
  },
  10: {
    nombre: "LADY‑DATEJUST",
    subHeader: "Elegancia en femenino",
    idName: "lady-datejust",
  },
  11: {
    nombre: "AIR-KING",
    subHeader: "Llevarlo al cielo",
    idName: "air-king",
  },
  12: {
    nombre: "SUBMARINER",
    subHeader: "Conexión profunda",
    idName: "submariner",
  },
  13: {
    nombre: "SEA-DWELLER",
    subHeader: "Ciudadano de las profundidades",
    idName: "sea-dweller",
  },
};



const windowWidth = ref(window.innerWidth);
const route = useRoute();
const currentRoute = route.params.id;
const location = ref(null);
const name = ref(currentRoute);

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
const excludedCountries = ["US", "IN", "AU", "NZ", "JE", "GG", "CA"];
const checkLocation = computed(() => {
  return location.value != "VE";
});

let { isLoading, state, isReady, execute } = useAsyncState(
  RolexDataServices.getDetailedWatch(currentRoute)
    .then((d) => {
      return d.data;
    })
    .catch((e) => {
      console.log(e.error);
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
// nombre, get
</script>

<template>
  <div id="new-models">
    <RolexTemplate>
      <template #content>
        <div v-if="isReady">
          <Head>
            <title>
              Rolex {{ state.getAll.nombre }}
              {{ getMaterialName(state.getAll.cajaDelModelo) }},
              {{ state.getAll.modelo }}
            </title>
            <meta
              name="description"
              :content="`Descubra el reloj Rolex ${
                state.getAll.nombre
              },  ${getDiameter(
                state.getAll.cajaDelModelo
              )}, de  ${getMaterialName(
                state.getAll.cajaDelModelo
              )} en Mimi Joyería, Distribuidor Oficial Rolex autorizado para vender y realizar el mantenimiento de los relojes Rolex.`"
            />
          </Head>
          <section class="bg-white relative md:h-[85vh]">
            <div class="flex items-center justify-center w-full">
              <img
                :src="`https://mimijoyeria.com/storage/rolex-relojes-new/${state.getAll.modelo}-showcase.webp`"
                :alt="`${state.getAll.nombre}-main-image`"
                class="w-1/2 md:w-1/4"
              />
            </div>
            <div
              class="md:absolute w-full h-full top-0 flex items-center pl-10 md:pl-24 pb-10 md:pb-0"
            >
              <div class="font-helvetica md:w-1/3">
                <h1 class="font-bold text-rolex-brown text-2xl">Rolex</h1>
                <h1 class="font-bold text-rolex-brown text-6xl">
                  {{ state.getAll.nombre }}
                </h1>
                <h1 class="font-light">{{ state.getAll.cajaDelModelo }}</h1>
                <div
                  v-if="!checkLocation"
                  class="text-rolex-brown flex items-center gap-2"
                >
                  <h2 class="font-light">
                    $ {{ addComma(state.details[0].precio) }}
                  </h2>
                  <font-awesome-icon
                    ref="myHoverableElement"
                    :icon="['fas', 'circle-info']"
                    class="text-sm cursor-pointer duration-200"
                  />
                </div>
                <Transition name="fade">
                  <p
                    v-if="isHovered"
                    class="text-xs w-1/5 duration-200 absolute border-2 border-rolex-brown rounded p-4 bg-rolex-brown-light-1"
                  >
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
                  <div class="grid grid-cols-2 grid-rows-2 gap-y-2">
                    <a href="tel:582123008742" class="flex items-center gap-4">
                      <font-awesome-icon
                        :icon="['fas', 'phone']"
                        class="text-md bg-rolex-brown-light-1 hover:bg-rolex-brown hover:text-white duration-200 cursor-pointer p-3 rounded-full"
                      />
                      <p>+58 212-3008742</p>
                    </a>
                    <a
                      href="https://wa.link/rwawyl"
                      target="_blank"
                      class="flex items-center gap-4"
                    >
                      <font-awesome-icon
                        :icon="['fab', 'whatsapp']"
                        class="text-md bg-rolex-brown-light-1 hover:bg-rolex-brown hover:text-white duration-200 cursor-pointer p-3 rounded-full"
                      />
                      <p>Chat</p>
                    </a>

                    <router-link
                      :to="{
                        name: 'rolex-contacto-enviar-mensaje',
                        query: { id: currentRoute },
                      }"
                      class="flex items-center gap-4"
                    >
                      <font-awesome-icon
                        :icon="['fas', 'envelope']"
                        class="text-md bg-rolex-brown-light-1 hover:bg-rolex-brown hover:text-white duration-200 cursor-pointer p-3 rounded-full"
                      />
                      <p>Envíenos un mensaje</p>
                    </router-link>
                    <a
                      href="https://maps.app.goo.gl/EED9Kdco8zec8ygT8"
                      class="flex items-center gap-4"
                      target="_blank"
                    >
                      <font-awesome-icon
                        :icon="['fas', 'location-arrow']"
                        class="text-md bg-rolex-brown-light-1 hover:bg-rolex-brown hover:text-white duration-200 cursor-pointer p-3 rounded-full"
                      />
                      <p>Conseguir la dirección</p>
                    </a>
                  </div>
                </div>
                <hr class="mt-8 mb-2 border-rolex-brown-light-1" />
                <div class="text-rolex-brown flex items-center gap-2">
                  <h2 class="font-bold">Disponibilidad de los modelos</h2>
                  <font-awesome-icon
                    ref="myHoverableElement2"
                    :icon="['fas', 'circle-info']"
                    class="text-sm cursor-pointer duration-200"
                  />
                  <Transition name="fade">
                    <p
                      v-if="isHovered2"
                      class="text-xs w-10/12 duration-200 absolute bottom-4 border-2 border-rolex-brown rounded p-4 bg-rolex-brown-light-1"
                    >
                      Todos los relojes Rolex se ensamblan a mano con sumo
                      cuidado para garantizar una calidad excep-cional. Unos
                      estándares tan altos limitan naturalmente la capacidad de
                      producción de Rolex y, a veces, la demanda de relojes
                      Rolex supera esta capacidad.
                      <br />

                      Por lo tanto, la disponibilidad de ciertos modelos puede
                      ser limitada. Los relojes Rolex nuevos se venden
                      exclusivamente a través de los Distribuidores Oficiales
                      Rolex, que reciben entregas habituales y gestionan de
                      manera independiente la distribución y las ventas a sus
                      clientes. <br />
                      Mimi Joyería se enorgullece de formar parte de la red
                      mundial de Distribuidores Oficiales Rolex, y puede
                      propor-cionar información sobre la disponibilidad de los
                      relojes Rolex.
                    </p>
                  </Transition>
                </div>
              </div>
            </div>
          </section>

          <section
            class="flex flex-col-reverse md:flex-row items-center justify-between w-full bg-rolex-brown-light-1 py-[2vh]"
          >
            <section class="w-2/3 flex flex-col items-center">
              <div class="flex gap-20 justify-center w-full pb-10">
                <div class="w-1/3 space-y-4">
                  <header>
                    <h2
                      class="text-rolex-brown font-helvetica font-bold text-xl"
                    >
                      Referencia
                    </h2>
                    <p class="font-light">
                      {{ parseModelNumber(state.getAll.modelo) }}
                    </p>
                  </header>
                  <header>
                    <h2
                      class="text-rolex-brown font-helvetica font-bold text-xl"
                    >
                      Caja del modelo
                    </h2>
                    <h1 class="font-light">{{ state.getAll.cajaDelModelo }}</h1>
                  </header>
                  <header>
                    <h2
                      class="text-rolex-brown font-helvetica font-bold text-xl"
                    >
                      Hermeticidad
                    </h2>
                    <p class="font-light">
                      {{ state.details[0].hermeticidad }}
                    </p>
                  </header>
                  <header>
                    <h2
                      class="text-rolex-brown font-helvetica font-bold text-xl"
                    >
                      Bisel
                    </h2>
                    <p class="font-light">{{ state.details[0].bisel }}</p>
                  </header>
                  <header>
                    <h2
                      class="text-rolex-brown font-helvetica font-bold text-xl"
                    >
                      Esfera
                    </h2>
                    <p class="font-light">{{ state.details[0].esfera }}</p>
                  </header>
                </div>

                <div class="w-1/3 space-y-4">
                  <header>
                    <h2
                      class="text-rolex-brown font-helvetica font-bold text-xl"
                    >
                      Brazalete
                    </h2>
                    <p class="font-light">{{ state.details[0].brazalete }}</p>
                  </header>
                  <header>
                    <h2
                      class="text-rolex-brown font-helvetica font-bold text-xl"
                    >
                      Movimiento
                    </h2>
                    <p class="font-light">{{ state.details[0].movimiento }}</p>
                  </header>
                  <header>
                    <h2
                      class="text-rolex-brown font-helvetica font-bold text-xl"
                    >
                      Calibre
                    </h2>
                    <p class="font-light">{{ state.details[0].calibre }}</p>
                  </header>
                  <header>
                    <h2
                      class="text-rolex-brown font-helvetica font-bold text-xl"
                    >
                      Reserva de marcha
                    </h2>
                    <p class="font-light">
                      {{ state.details[0].reservaDeMarcha }}
                    </p>
                  </header>
                  <header>
                    <h2
                      class="text-rolex-brown font-helvetica font-bold text-xl"
                    >
                      Certificación
                    </h2>
                    <p class="font-light">
                      {{ state.details[0].certificacion }}
                    </p>
                  </header>
                </div>
              </div>
              <hr class="w-9/12 pb-6" />
              <div class="w-3/4">
                <a
                  :href="state.details[0].brochure"
                  target="_blank"
                  class="flex gap-2 font-helvetica text-rolex-green font-bold hover:underline duration-200"
                >
                  <svg
                    version="1.1"
                    id="Calque_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 15 15"
                    xml:space="preserve"
                    class="w-4"
                  >
                    <path
                      id="icons_x2F_download"
                      class="fill-rolex-green"
                      d="M15,10v5h-1h-1H2H0v-2v-3h2v3h11v-3H15z M5.5,9.5l2,2l2-2l2-2h-3V0H8H7H6.5v7.5h-3L5.5,9.5z"
                    />
                  </svg>
                  <h2>Descargar Folleto</h2>
                </a>
              </div>
            </section>
            <section class="w-10/12 md:w-1/3">
              <img
                :src="state.details[1].img"
                alt="specs-section-img"
                class="hidden md:block"
              />
              <img
                :src="state.details[1].imgMobile"
                alt="specs-section-img-mobile"
                class="block md:hidden w-full"
              />
            </section>
          </section>

          <section
            class="flex flex-col items-center w-full bg-rolex-brown-light-2"
          >
            <div class="flex flex-col items-center py-[10vh]">
              <header
                class="flex flex-col gap-8 justify-around items-center text-rolex-brown h-fit pb-[10vh]"
              >
                <h1
                  class="font-helvetica font-bold text-2xl md:text-5xl w-10/12 md:w-1/2"
                >
                  {{ state.headers.header1 }}
                </h1>

                <p
                  class="text-rolex-brown w-10/12 md:w-1/2 text-xl font-helvetica font-light text-justify md:text-left"
                >
                  {{ state.headers.texto1 }}
                </p>
              </header>
              <section class="w-10/12 md:w-1/2">
                <img
                  :src="`https://mimijoyeria.com/storage/rolex-relojes-new/${state.headers.imagen1}.webp`"
                  alt="heading-img-1"
                  class="hidden md:block"
                />
                <img
                  :src="`https://mimijoyeria.com/storage/rolex-relojes-new/${state.headers.imagen1}-mobile.webp`"
                  alt="heading-img-1-mobile"
                  class="block md:hidden w-full"
                />
              </section>
            </div>

            <div class="flex flex-col items-center py-[10vh]">
              <header
                class="flex flex-col gap-8 justify-around items-center text-rolex-brown h-fit pb-[10vh]"
              >
                <h1
                  class="font-helvetica font-bold text-2xl md:text-5xl w-10/12 md:w-1/2"
                >
                  {{ state.headers.header2 }}
                </h1>

                <p
                  class="text-rolex-brown w-10/12 md:w-1/2 text-xl font-helvetica font-light text-justify md:text-left"
                >
                  {{ state.headers.texto2 }}
                </p>
              </header>
              <section class="w-10/12 md:w-1/2">
                <img
                  :src="`https://mimijoyeria.com/storage/rolex-relojes-new/${state.headers.imagen2}.webp`"
                  alt="heading-img-2"
                  class="hidden md:block"
                />
                <img
                  :src="`https://mimijoyeria.com/storage/rolex-relojes-new/${state.headers.imagen2}-mobile.webp`"
                  alt="heading-img-2-mobile"
                  class="block md:hidden w-full"
                />
              </section>
            </div>

            <div class="flex flex-col items-center py-[10vh]">
              <header
                class="flex flex-col gap-8 justify-around items-center text-rolex-brown h-fit pb-[10vh]"
              >
                <h1
                  class="font-helvetica font-bold text-2xl md:text-5xl w-10/12 md:w-1/2"
                >
                  {{ state.headers.header3 }}
                </h1>

                <p
                  class="text-rolex-brown w-10/12 md:w-1/2 text-xl font-helvetica font-light text-justify md:text-left"
                >
                  {{ state.headers.texto3 }}
                </p>
              </header>
              <section class="w-10/12">
                <img
                  :src="`https://mimijoyeria.com/storage/rolex-relojes-new/${state.headers.imagen3}.webp`"
                  alt="heading-img-3"
                  class="hidden md:block"
                />
                <img
                  :src="`https://mimijoyeria.com/storage/rolex-relojes-new/${state.headers.imagen3}-mobile.webp`"
                  alt="heading-img-3-mobile"
                  class="block md:hidden w-full"
                />
              </section>
            </div>
            <div
              class="flex flex-col justify-center items-center pt-[10vh] bg-rolex-brown-light-2"
            >
              <header
                class="flex flex-col gap-8 w-10/12 justify-around items-center text-rolex-brown h-fit bg-white"
              >
                <img
                  src="/assets/crown-logo-rolex.svg"
                  alt="logo-rolex"
                  class="w-12 py-4"
                />

                <h1
                  class="font-helvetica font-bold text-2xl md:text-5xl w-10/12 md:w-1/2 text-center"
                >
                  Disponibilidad de los modelos
                </h1>

                <p
                  class="text-rolex-brown w-10/12 md:w-1/2 text-xl font-helvetica font-light text-center"
                >
                  Todos los relojes Rolex se ensamblan a mano con sumo cuidado
                  para garantizar una calidad excep-cional. Unos estándares tan
                  altos limitan naturalmente la capacidad de producción de Rolex
                  y, a veces, la demanda de relojes Rolex supera esta capacidad.
                  <br />
                  <br />
                  Por lo tanto, la disponibilidad de ciertos modelos puede ser
                  limitada. Los relojes Rolex nuevos se venden exclusivamente a
                  través de los Distribuidores Oficiales Rolex, que reciben
                  entregas habitua-les y gestionan de manera independiente la
                  distribución y las ventas a sus clientes.
                  <br />
                  <br />

                  Mimi Joyería C.A. se enorgullece de formar parte de la red
                  mundial de Distribui-dores Oficiales Rolex, y puede
                  proporcionar información sobre la disponibilidad de los
                  relojes Rolex.
                </p>
                <img
                  :src="`https://mimijoyeria.com/storage/rolex-relojes-new/${state.getAll.modelo}_presentation-box.webp`"
                  alt="box-presentation-img"
                  class="w-1/2"
                />
              </header>
            </div>
          </section>

          <section
            class="w-full overflow-hidden py-[10vh] bg-rolex-brown-light-2"
          >
            <div class="flex flex-col items-center">
              <header
                class="w-10/12 flex flex-col gap-4 font-helvetica font-bold justify-around items-start text-rolex-brown h-fit py-2"
              >
                <h1 class="text-2xl md:text-5xl w-full">Contáctanos</h1>
                <hr class="mt-4 mb-2 w-full" />

                <h1 class="text-2xl md:text-3xl">Envíenos su mensaje</h1>
              </header>
              <div class="relative w-10/12">
                <img
                  class="w-full hidden lg:block"
                  :src="`/assets/routes-assets/banners/new-banner-rolex-contact.webp`"
                  :alt="type"
                />
                <img
                  class="w-full block lg:hidden"
                  :src="`/assets/routes-assets/banners/new-banner-rolex-contact-mobile.webp`"
                  :alt="type"
                />
              </div>

              <div class="w-10/12 overflow-hidden">
                <div
                  :class="position"
                  class="flex w-[300%] duration-300 pt-[10vh] bg-white"
                >
                  <section class="w-1/3">
                    <header
                      class="flex flex-col gap-4 font-helvetica font-bold text-center justify-around items-center text-rolex-brown h-fit"
                    >
                      <p class="w-10/12 md:w-1/2 text-xl font-helvetica">
                        Enviar un mensaje
                      </p>

                      <h1 class="text-2xl md:text-5xl w-10/12 lg:w-1/2">
                        Por favor, introduzca su mensaje
                      </h1>

                      <p
                        class="w-10/12 lg:w-1/2 text-xl font-helvetica font-light"
                      >
                        Gracias por su interés en los relojes Rolex. Por favor,
                        introduzca su mensaje a continuación y estaremos
                        encantados de ayudarle.
                      </p>

                      <textarea
                        name="message"
                        id=""
                        cols="40"
                        rows="10"
                        placeholder="Escribe tu mensaje"
                        class="border border-[#bbb] h-60 p-4 w-10/12 lg:w-1/2"
                        v-model="messageInfo.message"
                      ></textarea>
                      <h2 v-if="error" class="text-red-700">
                        Debes colocar un mensaje
                      </h2>

                      <button
                        @click="moveForm(1)"
                        class="bg-rolex-green text-white border w-fit border-rolex-green px-4 py-2 font-helvetica font-bold rounded-3xl hover:bg-white hover:text-rolex-green duration-200"
                      >
                        Siguiente
                        <font-awesome-icon
                          :icon="['fas', 'chevron-right']"
                          class="text-xs pl-2"
                        />
                      </button>
                    </header>
                  </section>

                  <NewContactForm
                    v-model="messageInfo"
                    class="w-1/3"
                    @get-back="moveForm"
                    @send-mail="sendMessage"
                    Color="bg-white"
                  />

                  <section class="border py-[10vh] w-1/3">
                    <header
                      class="flex flex-col gap-4 font-helvetica font-bold text-center justify-around items-center text-rolex-brown h-fit"
                    >
                      <p class="w-10/12 md:w-1/2 text-xl font-helvetica">
                        Enviar un mensaje
                      </p>

                      <h1 class="text-2xl md:text-5xl w-10/12 md:w-1/2">
                        Gracias
                      </h1>

                      <p
                        class="w-10/12 md:w-1/2 text-xl text-black font-helvetica font-bold"
                      >
                        {{ statusMessage }}
                      </p>
                      <p
                        class="w-10/12 md:w-1/2 text-xl font-helvetica font-light"
                      >
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

          <section
            class="bg-rolex-brown-light-2 flex flex-col justify-center items-center py-[10vh]"
          >
            <div class="w-10/12">
              <SectionNavigationCard
                :img="`banners/new-banner-collections-${collections[state.getAll.rolexCollectionId].idName}`"
                :link="{ name: `rolex-coleccion-${collections[state.getAll.rolexCollectionId].idName}` }"
                class="w-full"
              >
                <template #sub
                  >Rolex
                  {{ capitalizeFirstLetter(collections[state.getAll.rolexCollectionId].nombre) }}</template
                >
                <template #title>{{ collections[state.getAll.rolexCollectionId].subHeader }}</template>

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
</style>
