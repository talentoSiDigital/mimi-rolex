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

const active = ref(false)


const piniaStore = auth()

const isUserLogged = storeToRefs(piniaStore)
const user = piniaStore.$state.user.id

const totalAmount = ref(0)
const paymentStatus = ref("")

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
    "total":"0",
    "firstName": "",
    "lastName": "",
    "email": piniaStore.$state.user.email,
    "phone": piniaStore.$state.user.phone,
    "address": "",
    "country": "VE",
    "cardNumber": "",
    "cardExpirationMonth": "",
    "cardExpirationYear": "",
    "region": "",

})



function deleteItemInCart(id) {
    StoreDataService.deleteProductInCart(id, user).then(
        d => {
            router.go()
        }
    )
}

function activateModal() {
    dataObject.value.total = getPrice(state.value)
    return active.value = !active.value
}




function sendPayment() {
    console.log(user);
    paymentDataServices.payWithData(dataObject.value,user).then((d)=>{
        paymentStatus.value = d.data.status
        console.log(d.data.code);
        router.push(`/checkout/`)
    })
}


</script>

<template>
    <section>
        <div>
            <transition name="bounce">

                <ConfirmationModal v-if="active"  @activate-modal="activateModal" v-model="dataObject" @send-payment="sendPayment" :status="paymentStatus"/>
            </transition>
          

           
            <transition enter-active-class="duration-100 ease-in-out" enter-from-class="transform opacity-0"
                enter-to-class="opacity-100" leave-active-class="duration-700 ease-in-out"
                leave-from-class="opacity-700" leave-to-class="transform opacity-0">
                <div class="bg-[rgba(0,0,0,0.8)] z-40 fixed h-screen top-0 w-full" v-if="active">

                </div>
            </transition>
        </div>
        
        <div class="my-10 flex flex-col md:flex-row items-center justify-center w-full">
            <span class="block h-px w-1/3 md:w-1/6 bg-neutral-300"></span>
            <h1  class="text-center text-3xl tracking-widest mx-4 my-4 font-normal" >
                CARRITO DE COMPRAS
            </h1>

            <span class="block h-px w-1/3 md:w-1/6 bg-neutral-300"></span>
        </div>
        <div class=" min-h-[95vh] mb-10">
            <div class=" w-full h-full flex gap-4 lg:gap-0 flex-col lg:flex-row items-center lg:items-start justify-between px-20 mb-10" v-if="isReady">

                <div
                    :class="state.length > 0? 'w-[90vw] lg:w-[55%]' : 'w-full'"
                    class="h-[96vh] border-2 rounded-lg border-main-green  p-6 lg:ml-5 -translate-x-1.5 -translate-y-1.5">
                    <h2 class="text-2xl pb-1">Resumen del pedido</h2>
                    <section class="h-[84%] overflow-y-scroll" v-if="isReady">
                        <div v-if="state.length > 0">
                            <div v-for="product in state" :key="product">
                                <CartProductCard :product="product" @delete-item="deleteItemInCart" />

                            </div>
                        </div>
                        <div v-else class="border h-[88%] flex items-center justify-center">
                            <h2 class="text-4xl" >No hay productos en tu carrito</h2>
                        </div>
                    </section>

                    <hr class="mt-2">
                    <section>
                        <h2 class="text-2xl  text-right  py-2">Total: ${{ getPrice(state).toLocaleString('en-US') }} </h2>

                    </section>

                </div>

                <DashboardCards class="w-[90vw] lg:w-2/5 h-full bg-white" v-if="state.length > 0" >
                    <div v-if="isReady" class="w-full h-full">

                        <PayoutForm  
                            v-model="dataObject" 
                            :amount="getPrice(state)" 
                            @activate-modal="activateModal"
                             />
                    </div>
                </DashboardCards>

            </div>
        </div>
        

    </section>

</template>

<style scoped>
.bounce-enter-active {
    animation: bounce-in 0.5s;
}

.bounce-leave-active {
    animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
    0% {
        transform: scale(0);
    }

    50% {
        transform: scale(1.25);
    }

    100% {
        transform: scale(1);
    }
}

</style>
