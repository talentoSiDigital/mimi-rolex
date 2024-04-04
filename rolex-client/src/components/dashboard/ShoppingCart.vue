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


const piniaStore = auth()

const isUserLogged = storeToRefs(piniaStore)
const user = piniaStore.$state.user.id

const totalAmount = ref(0)

function getPrice(product) {
    let total = 0

    for (let index = 0; index < product.length; index++) {
        let string = product[index].precio
        string = string.replace('$', "")
        string = string.replace(',', "")
        total = total + parseInt(string)
    }
    return total
}

const { state ,isReady} = useAsyncState(
    StoreDataService.getCartByUser(user)
        .then(d => {
            return d.data
        })
    
)

const dataObject = ref({
    "email": piniaStore.$state.user.email,
    "phone": piniaStore.$state.user.phone,
})

function deleteItemInCart(id) {
    StoreDataService.deleteProductInCart(id, user).then(
        d => {
            router.go()
        }
    )
}




</script>

<template>
    <section>
        <div class="my-10 flex flex-col md:flex-row items-center justify-center w-full">
            <span class="block h-px w-1/3 md:w-1/6 bg-neutral-300"></span>
            <h1 class="text-center text-3xl tracking-widest mx-4 my-4 font-normal ">
                CARRITO DE COMPRAS
            </h1>

            <span class="block h-px w-1/3 md:w-1/6 bg-neutral-300"></span>
        </div>
        <div class=" min-h-[95vh] mb-10">
            <div  class="w-full h-full flex items-start justify-between px-20 mb-10" v-if="isReady">

                <div
                    :class="state.length > 0? 'w-[55%]' : 'w-full'"
                    class="h-[96vh] border-2 rounded-lg border-main-green  p-6 ml-5 -translate-x-1.5 -translate-y-1.5">
                    <h2 class="text-2xl pb-1">Resumen del pedido</h2>
                    <section class="h-[84%] overflow-y-scroll" v-if="isReady">
                        <div v-if="state.length > 0">
                            <div v-for="product in state" :key="product">
                                <CartProductCard :product="product" @delete-item="deleteItemInCart" />

                            </div>
                        </div>
                        <div v-else class="border h-[88%] flex items-center justify-center">
                            <h2 class="text-4xl">No hay productos en tu carrito</h2>
                        </div>
                    </section>

                    <hr class="mt-2">
                    <section>
                        <h2 class="text-2xl  text-right  py-2">Total: ${{ getPrice(state).toLocaleString('en-US') }} </h2>

                    </section>

                </div>

                <DashboardCards class="w-2/5 h-full bg-white" v-if="state.length > 0" >
                    <div v-if="isReady" class="w-full h-full">

                        <PayoutForm  :data="dataObject" :amount="getPrice(state)" />
                    </div>
                </DashboardCards>

            </div>
        </div>
        

    </section>

</template>
