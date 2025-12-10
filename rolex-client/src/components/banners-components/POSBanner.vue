<script setup>
import Watch from "./Watch.vue";
import { useDateFormat, useNow } from "@vueuse/core";
import axios from "axios";
import { ref, watch } from "vue";

let counter = 0;
const localHour = useDateFormat(useNow(), "HH");
const localMinute = useDateFormat(useNow(), "mm");

const nativeHour = ref({
  hour: localHour.value,
  minute: localMinute.value,
  seconds: 0,
});

const day = new Date().getDay();
const dayChecker = ref("Cerrada actualmente");

function checkIfOpenStore() {
  if (day == 7) {
    if (nativeHour.value.hour > 19 || nativeHour.value.hour < 12) {
      dayChecker.value = "Cerrada actualmente";
    }
  } else {
    console.log(nativeHour.value.hour);
    if (nativeHour.value.hour < 10 || nativeHour.value.hour > 20) {
      dayChecker.value = "Cerrada actualmente";
    } else {
      dayChecker.value = "Abierta actualmente";
    }
  }
}

axios
  .get("https://timeapi.io/api/time/current/zone?timeZone=America%2FCaracas")
  .then(function (response) {
    // handle success
    nativeHour.value.hour = response.data.hour;
    nativeHour.value.minute = response.data.minute;
    checkIfOpenStore();
    counter = response.data.seconds;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });

setInterval(() => {
  if (counter < 59) {
    counter += 1;
  } else {
    counter = 0;
    if (nativeHour.value.minute == 59) {
      nativeHour.value.minute = 0;

      if (nativeHour.value.hour == 23) {
        nativeHour.value.hour = 0;
      } else {
        nativeHour.value.hour += 1;
      }
    } else {
      nativeHour.value.minute += 1;
    }
  }
}, 1000);

watch(nativeHour, checkIfOpenStore());
const width = ref("scale-x-0 opacity-0");
function openHours() {
  width.value =
    width.value == "scale-x-0 opacity-0"
      ? "scale-x-100 opacity-100"
      : "scale-x-0 opacity-0";
}
function highlightDay(pos) {
  if (day == pos) {
    return "text-[rgba(97_189_147)]";
  }
}
</script>

<template>
  <div class="h-[65vh]  flex justify-center">
    <div class="w-full flex flex-col-reverse sm:flex-row h-full relative">
      <div class="bg-[#0b3e27] sm:w-[400px] h-[65vh]">
        <div
          class="flex flex-col items-center justify-evenly font-montserrat font-bold text-white text-sm h-full -translate-y-12 sm:translate-y-0"
        >
          <Watch />
          <div class="flex justify-between w-9/12 py-4 sm:py-0">
            <h2>Su hora:</h2>
            <h2>{{ localHour }}:{{ localMinute }}</h2>
          </div>
          <div class="flex justify-between w-9/12 py-4 sm:py-0">
            <h2>Venezuela</h2>
          </div>
          <div
            v-if="nativeHour"
            class="flex justify-between w-9/12 py-4 sm:py-0"
          >
            <h2>Caracas:</h2>

            <h2>
              {{
                nativeHour.hour.toLocaleString("en-US", {
                  minimumIntegerDigits: 2,
                })
              }}:{{
                nativeHour.minute.toLocaleString("en-US", {
                  minimumIntegerDigits: 2,
                })
              }}
            </h2>
          </div>
          <div
            @click="openHours()"
            class="w-10/12 px-4 py-2 shadow-[0px_8px_30px_-7px_rgba(0,0,0,0.5)] rounded-lg flex items-center justify-between cursor-pointer"
          >
            <h2 class="opacity-50 text-[rgba(97_189_147)]">{{ dayChecker }}</h2>
            <font-awesome-icon :icon="['fas', 'chevron-right']" />
          </div>
          <router-link
            :to="{ name: 'rolex-contacto' }"
            class="font-helvetica w-9/12 flex flex-col items-center pt-4 sm:pt-0"
          >
            <img src="/assets/rolex-logo.svg" alt="" class="w-14" />
            <h3 class="text-[6pt] text-center tracking-widest">
              DISTRIBUIDOR OFICIAL
            </h3>
          </router-link>
        </div>
        <div
          :class="width"
          class="bg-[#0b3e27] w-full sm:w-[400px] duration-200 overflow-hidden origin-right h-[65vh] sm:h-full absolute top-0 z-30 flex flex-col items-center text-white"
        >
          <div class="h-1/3 w-full text-right pt-6 pr-10 text-3xl">
            <font-awesome-icon
              :icon="['fas', 'xmark']"
              @click="openHours()"
              class="cursor-pointer"
            />
          </div>
          <div class="w-10/12 font-semibold text-sm">
            <header
              :class="highlightDay(1)"
              class="flex w-full justify-between"
            >
              <h2>Lun</h2>
              <h2>10:00 - 20:00</h2>
            </header>

            <header
              :class="highlightDay(2)"
              class="flex w-full justify-between"
            >
              <h2>Mar</h2>
              <h2>10:00 - 20:00</h2>
            </header>

            <header
              :class="highlightDay(3)"
              class="flex w-full justify-between"
            >
              <h2>Mie</h2>
              <h2>10:00 - 20:00</h2>
            </header>

            <header
              :class="highlightDay(4)"
              class="flex w-full justify-between"
            >
              <h2>Jue</h2>
              <h2>10:00 - 20:00</h2>
            </header>

            <header
              :class="highlightDay(5)"
              class="flex w-full justify-between"
            >
              <h2>Vie</h2>
              <h2>10:00 - 20:00</h2>
            </header>

            <header
              :class="highlightDay(6)"
              class="flex w-full justify-between"
            >
              <h2>Sab</h2>
              <h2>10:00 - 20:00</h2>
            </header>

            <header
              :class="highlightDay(7)"
              class="flex w-full justify-between"
            >
              <h2>Dom</h2>
              <h2>12:00 - 20:00</h2>
            </header>
          </div>
        </div>
      </div>
      <router-link
            :to="{ name: 'rolex' }" class="w-full sm:w-[80%]">

            <div
              class="h-fit sm:h-full bg-rolex-green  bg-center bg-cover bg-[url(/assets/routes-assets/banners/new-banner-contact-location.jpg)]"
            >
            <span class="opacity-0 h-[100px] sm:h-0 block">
      
              mimijoyeria
            </span>
          </div>

          </router-link>
    </div>
  </div>
</template>

<style scoped>
</style>

