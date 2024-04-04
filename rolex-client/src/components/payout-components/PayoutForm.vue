<script setup>
import Icons from '../payout-components/Icons.vue'
import InputCard from '../payout-components/InputCard.vue'
import { Form, Field, ErrorMessage } from "vee-validate";
import { ref, watch } from 'vue';
import * as yup from "yup";

const { data, amount } = defineProps(['data', 'amount'])
const card = ref("")
const actualYear = new Date().getFullYear()
const digitsOnly = (value) => /^\d+$/.test(value)
const mastercard = (value) => /(51[0-9]|55[0-9])+/.test(value)
const visa = (value) => /(4[0-9])+/.test(value)
const maestro = (value) => /(5020[0-9]|5018[0-9]|6[0-9])+/.test(value)
const regionWarn = ref(false)
const largeForm = ref(false)


function checkCard(value) {
    let card = mastercard(value)
    if (card) {
        return true
    } else {
        card = maestro(value)
        if (card) {
            return true
        } else {
            card = visa(value)
            if (card) {
                return true
            }
            return false
        }
    }
}

const schema = yup.object().shape({
    name: yup
        .string()
        .required("El nombre es obligatorio")
        .min(2, "Debe contener al menos 1 caracter")
        .max(40, "Debe contener un maximo de 40 caracteres"),
    lastname: yup
        .string()
        .required("Nombre de usuario es obligatorio")
        .min(2, "Debe contener al menos 1 caracter")
        .max(30, "Debe contener un maximo de 30 caracteres"),
    card: yup
        .string()
        .test('Solo Números', 'Tarjeta inválida', digitsOnly)
        .test('Tarjeta no aceptada', 'Tarjeta no aceptada', checkCard)
        .required("Debes colocar un número")
        .min(14, "Numero inválido: faltan datos")
        .max(19, "Numero inválido: sobran datos"),
    month: yup
        .number("Debes colocar un número")
        .typeError('Debes colocar un número')
        .integer("Número Inválido")
        .required("Dato obligatorio")
        .min(1, "Ese mes no existe")
        .max(12, "Ese mes no existe")
    ,
    year: yup
        .number("Debes colocar un número")
        .typeError('Debes colocar un número')
        .integer("Número Inválido")
        .required("Dato obligatorio")
        .min(actualYear, "Esta tarjeta está vencida")
        .max(actualYear + 10, "Fecha inválida")
    ,
    address: yup
        .string()
        .required("La dirección es obligatoria")
        .min(10, "La dirección es muy corta")
        .max(100, "La dirección es muy larga"),
    location: yup
        .string()
        .required("La dirección es obligatoria")
        .min(10, "La dirección es muy corta")
        .max(100, "La dirección es muy larga"),
    zip: yup
        .string()
        .required("Este campo es obligatorio")
        .min(5, "Código Inválido")
        .max(25, "Código Inválido"),
    buildingNumber: yup
        .number("Debes colocar un número")
        .typeError('Debes colocar un número')
        .integer("Número Inválido")
        .required("Dato obligatorio")
        .positive("Número Inválido"),


});


const dataToSend = ref({
    "amount": amount.toString(),
    "firstName": "",
    "lastName": "",
    "phone": data.phone,
    "email": data.email,
    "address": "",
    "country": "VE",
    "cardNumber": "",
    "cardExpirationMonth": "",
    "cardExpirationYear": "",

})

const dataExtra = ref({
    "region": "",
    "location": "",
    "zip": "",
    "buildingNumber": ""
})

watch(dataToSend.value, () => {
    if (dataToSend.value.country == "US" || dataToSend.value.country == "CA") {
        largeForm.value = true
    } else {
        largeForm.value = false

    }
})

function handleRegister(user, phoneNumber) {
    dataToSend.value.cardNumber = card.value
    if (dataToSend.value.region == "") {
        regionWarn.value = true
    } else {
        regionWarn.value = false
        console.log(dataToSend.value, dataExtra.value);

    }


}
function debug() {
    console.log(dataToSend.value);
}

</script>

<template>
    <!-- bg-neutral-100 -->
    <div class="w-full  h-full ">
        <h2 class="text-2xl pt-2" @click="debug()">Resumen del pedido</h2>
        <p>*Todos los campos son obligatorios</p>

        <Icons />
        <Form :validation-schema="schema" @submit="handleRegister(user, phoneNumber)">
            <div class="">

                <div class="flex w-full gap-2">
                    <div class="w-1/2">
                        <label for="name" class="block mb-1 text-sm font-medium text-gray-900 ">Nombre</label>
                        <Field id="name" type="text" name="name" placeholder="John"
                            class="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                            v-model="dataToSend.firstName" />

                        <div class=" h-6">

                            <ErrorMessage name="name" class="text-red-700 text-sm" />
                        </div>

                    </div>
                    <div class="w-1/2">
                        <label for="lastname" class="block mb-1 text-sm font-medium text-gray-900 ">Apellidos</label>
                        <Field id="lastname" type="text" name="lastname" placeholder="Doe"
                            class="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                            v-model="dataToSend.lastName" />
                        <div class=" h-6">

                            <ErrorMessage name="lastname" class="text-red-700 text-sm" />
                        </div>

                    </div>
                </div>

                <div>
                    <label for="card" class="block mb-1 text-sm font-medium text-gray-900 ">Número de tarjeta</label>
                    <div class="flex items-start gap-2">
                        <InputCard v-model="card" />
                        <div class="w-[90%]  h-full">
                            <Field id="card" type="text" name="card" placeholder="1234569789"
                                class="bg-white border border-gray-300 h-12 text-gray-900 sm:text-sm rounded-r-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                v-model="card" />
                        </div>

                    </div>
                    <div class=" h-6">

                        <ErrorMessage name="card" class="text-red-700 text-sm" />
                    </div>

                </div>

                <div class="flex w-full gap-2">
                    <div class="w-1/2">
                        <label for="month" class="block mb-1 text-sm font-medium text-gray-900 ">Mes de
                            vencimiento</label>
                        <Field id="month" type="number" name="month" placeholder="1"
                            class="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                            v-model="dataToSend.cardExpirationMonth" />

                        <div class=" h-6">

                            <ErrorMessage name="month" class="text-red-700 text-sm" />
                        </div>

                    </div>
                    <div class="w-1/2">
                        <label for="year" class="block mb-1 text-sm font-medium text-gray-900 ">Año de
                            vencimiento</label>
                        <Field id="year" type="number" name="year" placeholder="1982"
                            class="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                            v-model="dataToSend.cardExpirationYear" />

                        <div class=" h-6">
                            <ErrorMessage name="year" class="text-red-700 text-sm" />

                        </div>

                    </div>

                </div>

                <div>
                    <label for="address" class="block mb-1 text-sm font-medium text-gray-900 ">Dirección</label>
                    <Field id="address" type="text" name="address"
                        placeholder="C.C Tólon Fashion Mall Piso 1. Las Mercedes, 1080 Caracas."
                        class="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                        v-model="dataToSend.address" />
                    <h2 class="font-bold text-sm">*La Dirección debe ser tal como aparece en los registros del emisor de
                        la tarjeta de pago.</h2>

                    <div class=" h-6">

                        <ErrorMessage name="address" class="text-red-700 text-sm" />
                    </div>

                </div>

                <div>
                    <label for="year" class="block mb-1 text-sm font-medium text-gray-900 ">País</label>
                    <country-select v-model="dataToSend.country" :country="dataToSend.country" :shortCodeDropdown="true" topCountry="VE"
                        class="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " />
                    <div class=" h-6">

                    </div>
                </div>

                <transition 
                    enter-active-class="duration-300 ease-in-out" 
                    enter-from-class="opacity-0"
                    enter-to-class="opacity-100" 
                    leave-active-class="duration-300 ease-in-out"
                    leave-from-class="opacity-700" 
                    leave-to-class="transform opacity-0">
                    <div v-if="largeForm">

                        <div>
                            <h2 class="block mb-1 text-sm font-medium text-gray-900 ">Región</h2>
                            <region-select v-model="dataExtra.region" :country="dataToSend.country"
                                :region="dataExtra.region"
                                class="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " />
                            <div class=" h-6">
                                <h2 v-if="regionWarn" class="text-red-700 text-sm">Debes seleccionar una region</h2>

                            </div>
                        </div>

                        <div>
                            <label for="location" class="block mb-1 text-sm font-medium text-gray-900 ">Locación</label>
                            <Field id="location" type="text" name="location"
                                placeholder="C.C Tólon Fashion Mall Piso 1. Las Mercedes, 1080 Caracas."
                                class="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                v-model="dataExtra.location" />


                            <div class=" h-6">

                                <ErrorMessage name="location" class="text-red-700 text-sm" />
                            </div>

                        </div>

                        <div>
                            <label for="zip" class="block mb-1 text-sm font-medium text-gray-900 ">Código Postal</label>
                            <Field id="zip" type="text" name="zip" placeholder="00000-0000"
                                class="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                v-model="dataExtra.zip" />


                            <div class=" h-6">

                                <ErrorMessage name="zip" class="text-red-700 text-sm" />
                            </div>

                        </div>

                        <div>
                            <label for="buildingNumber" class="block mb-1 text-sm font-medium text-gray-900 ">Número de
                                edificio</label>
                            <Field id="buildingNumber" type="number" name="buildingNumber" placeholder="1234"
                                class="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                v-model="dataExtra.buildingNumber" />


                            <div class=" h-6">

                                <ErrorMessage name="buildingNumber" class="text-red-700 text-sm" />
                            </div>

                        </div>

                    </div>


                </transition>



                <button
                    class="w-full border border-main-green text-white bg-main-green hover:bg-white hover:text-main-green font-medium rounded-lg text-sm px-5 py-2.5 text-center duration-200 mt-4">
                    Proceder a confirmación de datos
                </button>

            </div>

        </Form>
    </div>
</template>

<style scoped></style>
