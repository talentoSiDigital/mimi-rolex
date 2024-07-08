<script setup>
import { RouterLink } from "vue-router"

defineProps({
    img: String,
    link: String,
    altText:String
})

</script>

<template>
    <router-link :to="link" class="font-helvetica font-bold text-rolex-brown group py-2 ">
        <div class="overflow-hidden w-full ">
            <img :src="`/assets/routes-assets/${img}.webp`" :alt="altText" class="hidden md:block   group-hover:scale-110 duration-200">
        </div>
        <img :src="`/assets/routes-assets/${img}-mobile.webp`" :alt="altText" class="md:hidden block w-full ">
        <div class="py-2">
            <h2>Rolex</h2>
            <h2>
                <slot name="sub"></slot>
            </h2>
            <h2 class="text-sm sm:text-lg md:text-2xl pb-2">
                <slot name="title"></slot>
            </h2>
            
          
        </div>

    </router-link>
</template>
