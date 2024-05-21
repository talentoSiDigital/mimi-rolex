<script setup>
import { computed, ref } from "vue";
import { RouterLink } from "vue-router";
import paymentDataServices from '../../services/paymentDataServices'
import DashboardCards from '../cards/DashboardCards.vue'


const status = defineModel('status')
const dataToSend = defineModel('dataObject')

const emit = defineEmits(['activate-modal', 'send-payment'])
const paymentProcess = ref(false)
const nameTranslate = ref({
    "total": "Monto Total",
    "region": "Región",
    "location": "Locación",
    "documentId": "Documento de Identidad",
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
    emit('send-payment')

}

function filterData(index) {
    return index !== 'code' && index !== 'deviceFingerPrintID' && index !== 'ip'
}
const responseTypes = {
    'PENDING_AUTHENTICATION': 'Se ha detectado algo inusual en la autenticación de la tarjeta, debemos comprobar la veracidad del comprador.',
    'AUTHENTICATION_SUCCESSFUL': 'Tarjeta autenticada con exito.',
    'AUTHENTICATION_FAILED': 'Tarjeta no valida, ingrese un nuevo metodo de pago.'
}
const responseArray = ['PENDING_AUTHENTICATION','AUTHENTICATION_SUCCESSFUL','AUTHENTICATION_FAILED']

const checkIfCorrect = computed(() => {
    if (responseArray.includes(status.value.status)) {
        return true
    } else {
        return false
    }
})

const checkIfFailed = computed(() => {
    if (status.value.status == 'INVALID_REQUEST') {
        return true
    } else {
        return false
    }
})




</script>

<template>
    <section class=" z-40 fixed h-screen top-0 w-full flex  items-center justify-center ">
        <div class="h-fit w-full flex items-center justify-center">
            <DashboardCards class="w-4/5 lg:w-3/5">

                <div class=" w-full h-full  flex flex-col justify-between items-center gap-4" v-if="!paymentProcess">

                    <h2 class="text-3xl font-bold ">Confirma tus datos</h2>
                    <h2 class="text-xl font-bold text-red-500 ">*AL ACEPTAR, LOS DATOS NO PODRAN SER CAMBIADOS</h2>


                    <div class="relative overflow-y-scroll h-64 w-full ">
                        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">

                            <tbody>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                    v-for="(item, index) in dataToSend" :key="index">
                                    <th scope="row" v-if="filterData(index)"
                                        class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {{ nameTranslate[index] }}
                                    </th>
                                    <td class="px-6 py-2" v-if="filterData(index)">
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

                <div class=" flex flex-col items-center justify-center h-[80vh]"
                    v-if="paymentProcess && status.status == undefined">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        style="background: none; display: block; shape-rendering: auto;" width="200px" height="200px"
                        viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                        <circle cx="50" cy="50" r="37" stroke-width="8" stroke="#adbaad"
                            stroke-dasharray="58.119464091411174 58.119464091411174" fill="none" stroke-linecap="round">
                            <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="2s"
                                keyTimes="0;1" values="0 50 50;360 50 50"></animateTransform>
                        </circle>
                    </svg>
                    <h2 class="text-3xl">Procesando Pago...</h2>
                </div>

                <div class=" flex flex-col items-center justify-center h-[80vh]" v-if="checkIfFailed">
                    <img src="/assets/mimi-logo.png" alt="logo-mimi">
                    <h2 class="text-xl">Pago Fallido</h2>
                    <h2>{{ status.errorInformation.reason }}</h2>
                    <h2>{{ status.errorInformation.message }}</h2>
                    <font-awesome-icon v-if="!icon" :icon="['fas', 'circle-xmark']"
                        class="text-6xl text-red-500 py-8" />

                    <button
                        class="uppercase border border-black py-4 px-10 text-neutral-600 bg-white hover:text-white hover:bg-neutral-600 duration-100 "
                        @click="$emit('activate-modal')">
                        <font-awesome-icon :icon="['fas', 'arrow-left']" />
                        <span class="pl-2">Volver</span>
                    </button>
                </div>

                <div class=" flex flex-col items-center justify-center h-[80vh]" v-if="status.status == 'COMPLETED'">
                    <img src="/assets/mimi-logo.png" alt="logo-mimi">
                    <!-- <h2 class="text-xl">{{ status }}</h2> -->
                    <h2 class="text-xl">Servicio Configurado con exito</h2>
                    <font-awesome-icon :icon="['fas', 'circle-check']" class="text-6xl text-green-500 py-8" />
                    <h2 class="text-xl">
                        Recolectando data
                        <font-awesome-icon :icon="['fas', 'spinner']" class="animate-spin " />
                    </h2>

                </div>
                <div class=" flex flex-col items-center justify-center h-[80vh] text-center" v-if="checkIfCorrect">
                    <img src="/assets/mimi-logo.png" alt="logo-mimi" class="pb-4">
                    <h2 class="text-xl">Estatus: {{ status.status }}</h2>
                    <h2 class="text-xl w-10/12">{{ responseTypes[status.status] }}</h2>
                    <font-awesome-icon :icon="['fas', 'circle-check']" class="text-6xl text-green-500 py-8" v-if="status.status == 'AUTHENTICATION_SUCCESSFUL'"/>
                    <font-awesome-icon :icon="['fas', 'circle-exclamation']" class="text-6xl text-yellow-500 py-8" v-if="status.status == 'PENDING_AUTHENTICATION'"/>
                    <font-awesome-icon  :icon="['fas', 'circle-xmark']"
                        class="text-6xl text-red-500 py-8" v-if="status.status == 'AUTHENTICATION_FAILED'"/>
                    <h2 v-if="status.errorInformation != undefined">Respuesta del servidor: {{ status.errorInformation.reason }}</h2>
                    
                    <h2 v-if="status.errorInformation != undefined" class="w-10/12">{{ status.errorInformation.message }}</h2>
                    <!-- <h2 class="text-xl">Redirigiendo... </h2> -->
                    <h2 class="text-xl" v-if="status.status == 'PENDING_AUTHENTICATION'">
                        Autenticando tarjeta 
                        <font-awesome-icon :icon="['fas', 'spinner']" class="animate-spin " />
                    </h2>
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
