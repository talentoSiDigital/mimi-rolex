<script setup>
import { onMounted, ref } from "vue";
import { routerKey, RouterLink, useRoute, useRouter } from "vue-router";
import breadcrumb from "../../breadcrumb.json";
const route = useRoute();
const router = useRouter();
const actual = ref(breadcrumb[route.name]);
console.log(router.getRoutes());
const routeArray = ref(route.fullPath.split("/"));
const parentRoutes = {
  "Mantenimiento Rolex": "mantenimiento-rolex",
  Contacto: "rolex-contacto",
  "Nuevos Modelos": "rolex-nuevos-modelos",
  "World Of Rolex": "world-of-rolex-hub",
  "Colección Rolex": "coleccion-rolex",
};
function generateLink(pos) {
  if (actual.value[pos] == actual.value[actual.value.length - 1]) {
    router.go();
  }
  if (actual.value[pos] == actual.value[0]) {
    router.push({ name: parentRoutes[actual.value[0]] });
  }
  if (
    actual.value.length == 3 &&
    actual.value[pos] == actual.value[actual.value.length - 2]
  ) {
    router.go(-1);
  }
}

function capitalizeFirstLetterOfEachWord(string) {
  return string.replace(/\b\w/g, (char) => char.toUpperCase());
}
function getModelName() {
  if (route.name == "relojes-rolex") {
    actual.value = [];
    console.log(actual.value);
    actual.value = breadcrumb[route.name];
    let string = route.fullPath;
    string = string.split("/");
    string = string[string.length - 1].split("-");
    let collection = string.slice(string.length - 2).join(" ");
    collection = collection.replace(/\s/g, "-").toUpperCase();
    string = capitalizeFirstLetterOfEachWord(
      string.slice(string[0], string.length - 2).join(" ")
    );

    actual.value.push(string);
    actual.value.push(collection);
  }
}

function getCollectionName() {
  if (route.name == "rolex-coleccion") {
    actual.value = [];
    console.log(actual.value);
    actual.value = breadcrumb[route.name];
    let string = route.fullPath;
    string = string.split("/");

    actual.value.push(
      capitalizeFirstLetterOfEachWord(string[string.length - 1])
    );
  }
}

onMounted(() => {
  console.log("isMounted");
  getCollectionName();
  getModelName();
});
</script>

<template>
  <div class="h-12 items-center md:px-36 font-helvetica bg-rolex-gradient flex">
    <div class="hidden md:flex gap-4 pr-4">
      <router-link :to="{ name: 'rolex' }" class="text-white hover:underline"
        >Descubre Rolex
      </router-link>
    </div>

    <div v-for="(item, index) in actual" :key="index">
      <div class="hidden md:flex gap-4 pr-4">
        <font-awesome-icon
          :icon="['fas', 'chevron-right']"
          class="py-1 text-white"
        />

        <div
          @click="generateLink(index)"
          class="text-white hover:underline cursor-pointer"
        >
          {{ item }}
        </div>
      </div>

      
    </div>

    <div
      v-for="(item, index) in actual"
      :key="index"
      class="flex md:hidden  pr-4 pl-6"
    >
      <font-awesome-icon
        v-if="!actual || actual.length == 1"
        :icon="['fas', 'chevron-left']"
        class="py-1 pr-2 text-white"
      />
      
      <router-link
        v-if="!actual || actual.length == 1"
        :to="{ name: 'rolex' }"
        class="text-white hover:underline"
        >Descubre Rolex
      </router-link>
      
      <div class="flex gap-4" v-else>
        <font-awesome-icon
         v-if="index == actual.length - 1"
        :icon="['fas', 'chevron-left']"
        class="py-1 text-white"
      /> 
        <div
          v-if="index == actual.length - 1"
          @click="generateLink(index-1)"
          class="text-white hover:underline cursor-pointer"
        >
          {{ actual[index-1] }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
