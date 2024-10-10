<script setup>
import { useRoute } from "vue-router";
import RolexTemplate from "../Rolex/RolexTemplate.view.vue";
import RolexHeader from "../../components/RolexHeader.vue";
import { useAsyncState } from "@vueuse/core";
import WatchCard from "../../components/cards/WatchCard.vue";

import PageBanner from "../../components/banners-components/PageBanner.vue";
import collectionsCopy from "../../collectionsCopy.json";
import RolexDataServices from "../../services/rolexDataService";
import { ref } from "vue";
import { computed } from "vue";
import { useHead } from "@unhead/vue";
import { Head } from "@unhead/vue/components";

const route = useRoute();
const currentRoute = route.params.id;
const currentData = collectionsCopy[currentRoute];

const currentPage = ref(1);
const totalPages = ref(1);
const itemsPerPage = 6;

const { state, isLoading, isReady, execute } = useAsyncState(
  RolexDataServices.getByCollection(currentRoute)
    .then((d) => {
      totalPages.value = Math.ceil(d.data.length / 6);
      return d.data;
    })
    .catch((e) => {
      console.log("error: ", e.message);
    })
);
const itemsToShow = computed(() => {
  return currentPage.value * itemsPerPage;
});

function filterItems() {
  let items = [];
  for (let index = 0; index < state.value.length; index++) {
    if (index < itemsToShow.value) {
      items.push(state.value[index]);
    }
  }
  return items;
}

function loadMore() {
  currentPage.value = currentPage.value++;
  if (currentPage.value < totalPages.value) {
  }
}


</script>

<template>
  <RolexTemplate>
    <Head>
      <title>Relojes Rolex {{currentData.name}} | Mimi Joyería</title>
      <meta name="description" :content="`Descubra los relojes Rolex ${currentData.name} en línea en Mimi Joyería, Distribuidor Oficial autorizado para vender relojes Rolex para hombre y mujer. Descubra más en Mimi Joyería.`" />
    </Head>
    <template #content>
      <PageBanner :type="`collections-${currentRoute}`" />
      <RolexHeader color="bg-rolex-brown-light-2">
        <template #sub>
          {{ currentData.headerSection.sub }}
        </template>
        <template #title>
          <span> Rolex {{ currentData.name }} </span>
        </template>
        <template #text>
          <span v-html="currentData.headerSection.text"></span>
        </template>
      </RolexHeader>

      <div
        class="video-frame flex bg-rolex-brown-light-2 justify-center pb-[10vh]"
      >
        <div class="w-11/12 aspect-w-16 aspect-h-9">
          <iframe
            :src="currentData.mainSection.videoEmbed"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <section :class="currentData.mainSection.backgroundColor">
        <header
          class="flex flex-col gap-8 justify-around items-center text-rolex-brown h-fit pb-[10vh]"
        >
          <h1
            v-if="currentData.mainSection.title"
            :class="
              currentData.mainSection.type
                ? 'font-georgia text-black '
                : 'font-helvetica font-bold'
            "
            class="text-3xl md:text-5xl w-10/12 md:w-1/2"
          >
            <span v-html="currentData.mainSection.title"></span>
          </h1>

          <p
            v-if="currentData.mainSection.text"
            :class="
              currentData.mainSection.type ? ' text-black' : 'text-rolex-brown'
            "
            class="w-10/12 md:w-1/2 text-xl font-helvetica font-light text-justify md:text-left"
          >
            <span v-html="currentData.mainSection.text"></span>
          </p>
        </header>
      </section>

      <main>
        <section v-for="(item, key, index) in currentData.sections" :key="item">
          <div
            v-if="item.hasVideo"
            class="video-frame flex justify-center py-[10vh]"
            :class="item.backgroundColor"
          >
            <div class="w-11/12 aspect-w-16 aspect-h-9">
              <iframe
                :src="item.videoEmbed"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>

          <div
            v-else
            class="flex justify-center"
            :class="[
              item.backgroundColor,
              item.imgSize == 'w-full' ? 'pb-[10vh]' : 'py-[10vh]',
            ]"
          >
            <img
              :src="`/assets/routes-assets/collections/${currentRoute}/collections-${currentRoute}-${
                index + 1
              }.webp`"
              :alt="`collection-${currentRoute}-${index + 1}`"
              class="hidden md:block"
              :class="item.imgSize"
            />
            <img
              :src="`/assets/routes-assets/collections/${currentRoute}/collections-${currentRoute}-${
                index + 1
              }-mobile.webp`"
              :alt="`collection-${currentRoute}-${index + 1}`"
              class="md:hidden block"
              :class="item.imgSize"
            />
          </div>

          <section :class="item.backgroundColor">
            <header
              v-if="item.title || item.text"
              class="flex flex-col gap-8 font-helvetica font-bold justify-around items-center text-rolex-brown h-fit pb-[10vh]"
            >
              <h1
                v-if="item.title"
                class="text-3xl md:text-5xl w-10/12 md:w-1/2"
              >
                <span v-html="item.title"></span>
              </h1>

              <p
                v-if="item.text"
                class="w-10/12 md:w-1/2 text-xl font-helvetica font-light text-justify md:text-left"
              >
                <span v-html="item.text"></span>
              </p>
            </header>
          </section>
        </section>
        <section class="bg-rolex-brown-light-2 text-rolex-brown">
          <div class="w-full flex justify-center">
            <h1
              class="text-3xl md:text-5xl font-helvetica font-bold text-center py-[10vh] w-10/12"
            >
              Rolex {{ currentData.name }} <br />
              Una selección de modelos.
            </h1>
          </div>
          <div class="flex justify-center">
            <div
              class="grid grid-cols-2 md:grid-cols-3 place-items-center w-11/12 md:w-8/12 gap-4"
            >
              <div
                v-for="(item, key) in filterItems()"
                :key="key"
                class="border h-[500px]"
                :class="key < itemsToShow ? 'h-[500px]' : 'h-0'"
              >
                <WatchCard :item="item" :collection="currentRoute" />
              </div>
            </div>
          </div>
          <div class="w-full flex justify-center py-[10vh]">
            <button
              v-if="currentPage < totalPages"
              @click="currentPage++"
              class="bg-rolex-green text-white border w-fit border-rolex-green px-4 py-2 font-helvetica font-bold rounded-3xl hover:bg-white hover:text-rolex-green duration-200"
            >
              Ver más
            </button>
          </div>
        </section>
      </main>
    </template>
  </RolexTemplate>
</template>
