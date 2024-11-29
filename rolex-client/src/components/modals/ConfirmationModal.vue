<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import paymentDataServices from '../../services/paymentDataServices'
import DashboardCards from '../cards/DashboardCards.vue'

const {status} = defineProps(["status"])

const  emit  = defineEmits(['activate-modal','send-payment'])
const dataToSend = defineModel()
const unavailable = ref(false)
const paymentProcess = ref(false)
const nameTranslate = ref({
    "total": "Monto Total",
    "region": "Región",
    "location": "Locación",
    "zip": "Codigo Postal",
    "buildingNumber": "Número de Apartamento",
    "email": "Email",
    "phone": "Teléfono",
    "firstName": "Nombre",
    "lastName": "Apellido",
    "address": "Dirección",
    "country": "País",
    "cardNumber": "Número de tarjeta",
    "cardExpirationMonth": "Més de expiración de la tarjeta",
    "cardExpirationYear": "Año de expiración de la tarjeta",
})

function payWithData() {
    paymentProcess.value = true
    unavailable.value = true
    // emit('send-payment')
}

console.log(dataToSend.value);

</script>

<template>
    <section class=" z-50 fixed h-screen top-0 w-full flex  items-center justify-center ">
        <div class="h-fit w-full flex items-center justify-center">
            <DashboardCards class="w-4/5 lg:w-3/5">
                

                    <div class=" w-full h-full  flex flex-col justify-between items-center gap-4"
                        v-if="!paymentProcess">

                        <h2 class="text-3xl font-bold ">Confirma tus datos</h2>
                        <h2 class="text-xl font-bold text-red-500 ">*AL ACEPTAR, LOS DATOS NO PODRAN SER CAMBIADOS</h2>


                        <div class="relative overflow-y-scroll h-64 w-full ">
                            <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">

                                <tbody>
                                    <tr class="bg-white border-b "
                                        v-for="(item, index) in dataToSend" :key="index">
                                        <th scope="row" v-if="index != 'region'"
                                            class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap ">
                                            {{ nameTranslate[index] }}
                                        </th>
                                        <td class="px-6 py-2" v-if="index != 'region'">
                                            <h2 v-if="index == 'total'">${{ item }}</h2>
                                            <h2 v-else>{{ item }}</h2>
                                        </td>

                                    </tr>


                                </tbody>
                            </table>
                        </div>



                        <button @click="$emit('activate-modal')"
                            class="w-full border border-main-green text-white bg-main-green hover:bg-white hover:text-main-green font-medium rounded text-sm px-5 py-2.5 text-center duration-200 mt-0">
                            Volver
                        </button>
                        <button @click="payWithData()"
                            class="w-full border border-main-green text-white bg-main-green hover:bg-white hover:text-main-green font-medium rounded text-sm px-5 py-2.5 text-center duration-200 mt-0">
                            Pagar
                        </button>
                    </div>

                    <div class=" flex flex-col items-center justify-center h-[80vh]" v-if="unavailable">
                        <img src="/assets/mimi-logo.png" alt="logo-mimi">
                        <h2 class="text-2xl ">Sistema en mantenimiento</h2>
                        <p class="w-10/12 text-center text-lg">
                            
                            Pedimos disculpas por las molestias ocasionadas.

                        </p>
                        <!--  -->
                        <button
                            class="uppercase border border-black py-4 px-10 text-neutral-600 bg-white hover:text-white hover:bg-neutral-600 duration-100 mt-4 "
                            @click="$emit('activate-modal')">
                            <font-awesome-icon :icon="['fas', 'arrow-left']" />
                            <span class="pl-2">Volver</span>
                        </button>
                    </div>

                    <div class=" flex flex-col items-center justify-center h-[80vh]" v-if="paymentProcess && status.status == '1'">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            style="background: none; display: block; shape-rendering: auto;" width="200px"
                            height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                            <circle cx="50" cy="50" r="37" stroke-width="8" stroke="#adbaad"
                                stroke-dasharray="58.119464091411174 58.119464091411174" fill="none"
                                stroke-linecap="round">
                                <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite"
                                    dur="2s" keyTimes="0;1" values="0 50 50;360 50 50"></animateTransform>
                            </circle>
                        </svg>
                        <h2 class="text-3xl">Procesando Pago...</h2>
                    </div>
                    
                    
                    <div class=" flex flex-col items-center justify-center h-[80vh]" v-if="paymentProcess3 && status.status != 'AUTHORIZED'">
                        <img src="/assets/mimi-logo.png" alt="logo-mimi">
                        <h2 class="text-xl">Pago Fallido</h2>
                        <font-awesome-icon v-if="!icon" :icon="['fas', 'circle-xmark']"
                            class="text-6xl text-red-500 py-8" />
                        {{ status.status }} <br>
                        {{ status.reason }} <br><br>
                        <button
                            class="uppercase border border-black py-4 px-10 text-neutral-600 bg-white hover:text-white hover:bg-neutral-600 duration-100 "
                            @click="$emit('activate-modal')">
                            <font-awesome-icon :icon="['fas', 'arrow-left']" />
                            <span class="pl-2">Volver</span>
                        </button>
                    </div>

                    <div class=" flex flex-col items-center justify-center h-[80vh]" v-if="paymentProcess &&status.status == 'AUTHORIZED'">
                        <img src="/assets/mimi-logo.png" alt="logo-mimi">
                        <h2 class="text-xl">Pago exitoso</h2>
                        <font-awesome-icon :icon="['fas', 'circle-check']" class="text-6xl text-green-500 py-8" />
                        <h2 class="text-xl">Redirigiendo... </h2>
                    </div>

            </DashboardCards>

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
