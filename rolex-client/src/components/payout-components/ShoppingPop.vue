<script setup>

import { useAsyncState } from '@vueuse/core';
import { computed, ref, watch } from "vue";
import { storeToRefs } from 'pinia';
import StoreDataService from '../../services/storeDataService';
import { auth } from '../../store/auth.module';
import CartProductCard from '../cards/CartProductCard.vue';
import DashboardCards from '../cards/DashboardCards.vue';
import router from '../../router';
import PayoutForm from '../payout-components/PayoutForm.vue'
import ConfirmationModal from '../global-components/ConfirmationModal.vue'
import paymentDataServices from '../../services/paymentDataServices'
import axios from "axios"
import { RouterLink } from "vue-router";
import {cart} from '../../store/cart.module';
console.log(cart.cart);

const piniaStore = auth()
const isUserLogged = storeToRefs(piniaStore)
const user = piniaStore.$state.user.id


const { state, isReady } = useAsyncState(
    StoreDataService.getCartByUser(user)
        .then(d => {
            
            return d.data.length
        })

)

</script>

<template>
    <router-link v-if="state > 0" to="/carrito" class="fixed bottom-16 right-12 z-20 w-fit pt-2">
        <p class="bg-red-600 absolute right-2 top-2 px-1 text-xs font-bold rounded-full text-white">{{ state }}</p>
        <div
            class="bg-main-green w-fit p-5 rounded-full cursor-pointer group border border-main-green  duration-200 hover:bg-white">
            <font-awesome-icon :icon="['fas', 'cart-shopping']"
                class="text-4xl text-white duration-200  group-hover:text-main-green" />
        </div>

    </router-link>

</template>

<style scoped></style>
