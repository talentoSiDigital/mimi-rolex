<script setup>

import { useAsyncState } from '@vueuse/core';
import { storeToRefs } from 'pinia';
import { RouterLink } from "vue-router";
import StoreDataService from '../../services/storeDataService';
import { auth } from '../../store/auth.module';

const piniaStore = auth()
const user = piniaStore.$state.user.id


const { state, isReady } = useAsyncState(
    StoreDataService.getCartByUser(user)
        .then(d => {

            return d.data.length
        })

)

</script>

<template>
    <router-link v-if="state > 0" to="/carrito" class="fixed bottom-48 md:bottom-16 right-12 z-20 w-fit pt-2">
        <span
            class="bg-red-600 absolute right-2 top-2 px-1 text-xs font-bold rounded-full text-white h-4 w-4 animate-ping"></span>
        <p class="bg-red-600 absolute right-2 top-2 px-1 text-xs font-bold rounded-full text-white h-4 w-4 ">{{ state }}
        </p>
        <div
            class="bg-main-green w-fit p-5 rounded-full cursor-pointer group border border-main-green  duration-200 hover:bg-white">
            <font-awesome-icon :icon="['fas', 'cart-shopping']"
                class="text-4xl text-white duration-200  group-hover:text-main-green" />
        </div>

    </router-link>

</template>

<style scoped></style>
