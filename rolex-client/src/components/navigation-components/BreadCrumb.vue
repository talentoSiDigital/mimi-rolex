<script setup>
import { ref } from "vue";
import { routerKey, RouterLink, useRoute } from "vue-router";
const route = useRoute();
const routeArray = ref(route.fullPath.split("/"));
function getLink(index) {
  let link = "";
  for (let i = 1; i <= index; i++) {
    link = `${link}/${routeArray.value[i]}`;
  }
  return link;
}

function sanitizeString(string, index) {
  if (string == "gmt-master-ii") {
    return "GMT Master II";
  }
  if (index != 3) {
    let input = string;
    input = input.replace("-", " ");

    const words = input.split(" ");

    // Capitaliza la primera letra de cada palabra
    const capitalizedWords = words.map((word) => {
      const lowerCaseWord = word.toLowerCase();
      return lowerCaseWord.charAt(0).toUpperCase() + lowerCaseWord.slice(1);
    });
    // Une las palabras capitalizadas en una sola cadena
    let capitalizedString = capitalizedWords.join(" ");
    capitalizedString = capitalizedString.replace("rolex", "Rolex");
    if (index == 2) {
      capitalizedString = capitalizedString.replaceAll("-", " ");
    } else {
      capitalizedString = capitalizedString.replace("-", " ");
    }

    return capitalizedString;
  }

  return string;
}

</script>

<template>
  <div
    class="h-12 items-center md:px-36 font-helvetica bg-rolex-gradient flex"
  >
    <div
      class="hidden md:flex gap-4 pr-4"
      v-if="routeArray[2] != 'descubre-rolex'"
    >
      <router-link :to="'/rolex/descubre-rolex'" class="text-white hover:underline"
        >Descubre Rolex
      </router-link>
      <font-awesome-icon
        :icon="['fas', 'chevron-right']"
        class="py-1 text-white"
      />
    </div>


    <div  v-if="routeArray[2] != 'descubre-rolex' && routeArray.length == 2" class="md:hidden flex gap-4 px-6">
      <font-awesome-icon
        :icon="['fas', 'chevron-left']"
        class="py-1 text-white"
      />
      <router-link :to="'/rolex/descubre-rolex'" class="text-white hover:underline"
        >Descubre Rolex
      </router-link>
    </div>

    <div v-for="(item, index) in routeArray" :key="index">
      <div v-if="index > 1" class="hidden md:flex gap-4 pr-4">
        <router-link :to="getLink(index)" class="text-white hover:underline"
          >{{ sanitizeString(item, index) }}
        </router-link>
        <font-awesome-icon
          v-if="index < routeArray.length - 1"
          :icon="['fas', 'chevron-right']"
          class="py-1 text-white"
        />
      </div>

      <div
        v-if="index == routeArray.length - 2"
        class=" flex  md:hidden gap-4 px-6"
      >
    
        <router-link :to="getLink(index)" class="text-white hover:underline"
          >{{ sanitizeString(item, index) }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
