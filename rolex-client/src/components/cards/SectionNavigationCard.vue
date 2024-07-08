<script setup>
import { RouterLink } from "vue-router";

defineProps({
  img: String,
  link: String,
});
</script>

<template>
  <div class="font-helvetica font-bold text-rolex-brown">
    <router-link :to="link">
      <img
        :src="`/assets/routes-assets/${img}.webp`"
        alt="discover-rolex"
        class="hidden md:block"
      />
      <img
        :src="`/assets/routes-assets/${img}-mobile.webp`"
        alt="discover-rolex"
        class="md:hidden block"
      />
    </router-link>
    <div class="py-2">
      <h2 class="">
        <slot name="sub"></slot>
      </h2>
      <h2 class="text-2xl md:text-4xl pb-2">
        <slot name="title"></slot>
      </h2>
      <div class="font-light w-full">
        <slot name="description"></slot>
      </div>

      <router-link
        :to="link"
        class="text-rolex-green duration-200 hover:text-rolex-green-2 group"
      >
        <slot name="button"></slot>
        <font-awesome-icon
          :icon="['fas', 'chevron-right']"
          class="text-xs pl-2 group-hover:translate-x-2 duration-200 ease-in-out"
        />
      </router-link>
    </div>
  </div>
</template>
