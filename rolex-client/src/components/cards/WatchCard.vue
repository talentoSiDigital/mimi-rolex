<script setup>
import { RouterLink } from "vue-router";

defineProps({
  item: Object,
  collection: String,
});
</script>

<template>
  <router-link
    :to="{name:'relojes-rolex', params:{collectionName:collection,id:item.modelo}}"
    class="bg-rolex-brown-light-1 h-full flex flex-col items-center justify-center py-0 cursor-pointer group"
  >

    <img
      :src="`https://mimijoyeria.com/storage/rolex-relojes-new/${item.modelo}-showcase.webp`"
      :alt="item.modelo"
      class="w-[100%] md:w-1/2 lg:w-[55%] xl:w-[60%] duration-200 ease-in-out group-hover:scale-110"
    />
    <div class="w-9/12">
      <p class="font-helvetica font-bold text-[16px]">Rolex</p>
      <p class="font-helvetica font-bold text-[24px]">{{ item.nombre }}</p>
      <p class="font-helvetica font-light text-[16px] text-black">
        {{ item.cajaDelModelo }}
      </p>
    </div>
  </router-link>
</template>

<style scoped></style>
