<script setup>
import { Head } from "@unhead/vue/components";
import { useAsyncState } from "@vueuse/core";
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import newModelsCopy from "../../data/newModelsCopy.json";
import PageBanner from "../../components/banners-components/PageBanner.vue";
import WatchCard from "../../components/cards/WatchCard.vue";
import RolexHeader from "../../components/RolexHeader.vue";
import RolexDataServices from "../../services/rolexDataService";
import RolexTemplate from "../Rolex/RolexTemplate.view.vue";
import PageLoader from '../../components/global-components/PageLoader.vue';
const route = useRoute();
const currentRoute = route.params.id
const currentData = newModelsCopy[currentRoute];

console.log(currentData);


</script>

<template>
  <RolexTemplate>
    <Head>
      <title>Relojes Rolex {{currentData.name}} | Mimi Joyería</title>
      <meta name="description" :content="`Descubra los relojes Rolex ${currentData.name} en línea en Mimi Joyería, Distribuidor Oficial autorizado para vender relojes Rolex para hombre y mujer. Descubra más en Mimi Joyería.`" />
    </Head>
    <template #content>
        <PageBanner :type="`new-watches-${currentRoute}`" />
        <RolexHeader color="bg-rolex-brown-light-2">
          <template #sub>
            {{ currentData.headerSection.sub }}
          </template>
          <template #title>
            <span v-html="currentData.headerSection.title">  </span>
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
          <section v-for="(item, key, index) in currentData.sections" :key="key">
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
              v-if="item.imgSize"
                :src="`/assets/routes-assets/new-watches/${currentRoute}/new-watches-${currentRoute}-${
                  index + 1
                }.webp`"
                :alt="`collection-${currentRoute}-${index + 1}`"
                class="hidden md:block"
                :class="item.imgSize"
              />
              <img
                :src="`/assets/routes-assets/new-watches/${currentRoute}/new-watches-${currentRoute}-${
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
        
        </main>
    </template>
  </RolexTemplate>
</template>
