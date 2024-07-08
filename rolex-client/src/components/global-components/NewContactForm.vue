<script setup>
import { computed, ref, watch } from 'vue';
import Terms from '../global-components/Terms.vue';

import { ErrorMessage, Field, Form } from "vee-validate";
import * as yup from "yup"


import SelectInput from '../payout-components/SelectInput.vue'


import mailDataService from '../../services/mailDataService';

const model = defineModel()
const emit = defineEmits(['get-back','send-mail'])
const digitsOnly = (value) => /^\d+$/.test(value)
const activateLoader = ref(false)

const schema = yup.object().shape({
    nombre: yup.string().required("El nombre es obligatorio!"),
    apellido: yup.string().required("El apellido es obligatorio!"),
    email: yup.string().required("Email es obligatorio").email("Email invalido!").max(50, "Debe contener un maximo de 50 caracteres"),
    number: yup
        .string()
        .test('Solo Números', 'Número invalido', digitsOnly)
        .required("Debes colocar un número")
        .min(7, "Numero inválido: faltan datos")
        .max(15, "Numero inválido: sobran datos"),
    terms: yup.boolean().oneOf([true], 'Debes aceptar los terminos y condiciones')

});


const inputOptions = {
    "placeholder": "Ingrese su numero de telefono"
}


const phoneNumber = ref({
    "phone": 0,
    "code": 58
})

watch(phoneNumber, () => {
    model.value.phone = `+${phoneNumber.value.code}${phoneNumber.value.phone}`
})

const terms = ref(false)

const showTerms = () => {
    terms.value = !terms.value
}

const messageToSend = computed(() => {
    return message == undefined ? "" : message
})

function sendMail() {
    activateLoader.value = !activateLoader.value
    model.value.phone = `+${phoneNumber.value.code}${phoneNumber.value.phone}`
    emit('send-mail')
}

</script>

<template>

    <div id="main-contact" class="py-10 flex flex-col items-center bg-rolex-brown-light-2">


        <Form class="flex flex-col w-11/12 md:w-1/2" :validation-schema="schema" @submit="sendMail" v-if="!activateLoader">
            <div id="row" class="py-2 flex flex-col gap-2 md:flex-row w-full">
                <div class="flex flex-col w-full text-rolex-brown">
                    <label for="tto" class="text-[#ad988e] font-helvetica font-bold">Tto:</label>
                    <Field as="select" name="tto" id="tto"
                        class="h-10 p-2 bg-rolex-brown-light-2 border-b font-helvetica font-bold border-rolex-brown"
                        v-model="model.tto">
                        <option selected value="Sr">Sr.</option>
                        <option value="Mrs">Mrs.</option>
                        <option value="Sra">Sra.</option>
                        <option value="Sr">Sr.</option>
                        <option value="Miss">Miss</option>
                        <option value="Dr">Dr.</option>
                        <option value="Dra">Dra.</option>
                    </Field>


                </div>

                <div class="flex flex-col w-full">
                    <label for="nombre" class="text-[#ad988e] font-helvetica font-bold">*Nombre:</label>
                    <Field type="text" name="nombre" id="nombre" placeholder="Nombre"
                        class="h-10 p-2 bg-rolex-brown-light-2 border-b font-helvetica font-bold border-rolex-brown"
                        v-model="model.name" />
                    <ErrorMessage name="nombre" class="text-red-700" />

                </div>

                <div class="flex flex-col w-full">
                    <label for="apellido" class="text-[#ad988e] font-helvetica font-bold">*Apellido:</label>
                    <Field type="text" name="apellido" placeholder="Apellido"
                        class="h-10 p-2 bg-rolex-brown-light-2 border-b font-helvetica font-bold border-rolex-brown"
                        v-model="model.lastName" />
                    <ErrorMessage name="apellido" class="text-red-700" />


                </div>
            </div>

            <div id="row" class="py-2 flex flex-col gap-4 md:flex-row items-end justify-center ">


                <div class="flex flex-col w-full ">
                    <label for="email" class="text-[#ad988e] font-helvetica font-bold">*Email:</label>
                    <Field type="email" name="email" placeholder="Correo Electronico" aria-autocomplete="@gmail.com"
                        class="h-10 p-2 bg-rolex-brown-light-2 border-b font-helvetica font-bold border-rolex-brown"
                        v-model="model.email" />
                    <ErrorMessage name="email" class="text-red-700" />
                </div>


            </div>
            <div id="row" class="py-2 flex flex-col gap-4 md:flex-row items-end justify-center ">
                <div class=" w-full">

                    <label for="phonecode" class="text-[#ad988e] font-helvetica font-bold">Teléfono</label>
                    <label for="phonenumber" class="text-[#ad988e] font-helvetica font-bold"></label>

                    <div class="flex items-center gap-2">
                        <h2 class="">+</h2>
                        <Field id="phonecode" type="number" name="phonecode" placeholder="00"
                            class="h-10 p-2 bg-rolex-brown-light-2 border-b font-helvetica font-bold border-rolex-brown w-16  "
                            v-model="phoneNumber.code" />
                        <Field id="phonenumber" type="number" name="number" placeholder="4245556666"
                            class="h-10 p-2 bg-rolex-brown-light-2 border-b font-helvetica font-bold border-rolex-brown w-full "
                            v-model="phoneNumber.phone" />

                    </div>
                    <ErrorMessage name="number" class="text-red-700" />
                </div>
            </div>
            <div id="row" class="py-2 ">
                <label for="year" class="text-[#ad988e] font-helvetica font-bold">País</label>
                <SelectInput
                    class="h-10 p-2 bg-rolex-brown-light-2 border-b font-helvetica font-bold border-rolex-brown w-full  "
                    v-model="model.country" />

            </div>
            <div id="row" class="py-2  ">
                <label for="year" class="block mb-1 font-bold text-[#ad988e] ">Región</label>
                <region-select v-model="model.region" :country="model.country" :region="model.region" :regionName="true"
                    placeholder="Seleccione una región"
                    class="h-10 p-2 bg-rolex-brown-light-2 border-b font-helvetica font-bold border-rolex-brown w-full  " />

                <h2 v-if="model.region == ''" class="text-red-700">Debes escoger una región</h2>



            </div>



            <div id="conditions">
                <Field type="checkbox" name="terms" :value="true"
                    class="appearance-none border border-black w-4 h-4 rounded-none checked:bg-rolex-green cursor-pointer"
                    v-model="model.conditions" />
                <label for="terms">
                    *He leído y acepto los
                    <span class="underline cursor-pointer" @click="showTerms">
                        Términos y Condiciones y la Política de Privacidad.
                    </span>
                </label>
                <br>
                <ErrorMessage name="terms" class="text-red-700" />

            </div>


            <transition name="bounce">

                <Terms v-if="terms" class="duration-200" />
            </transition>




            <div class="flex justify-end gap-2 mt-4">
                <span @click="$emit('get-back', 0)"
                    class=" border px-7 py-3 cursor-pointer rounded-3xl border-rolex-green  hover:bg-rolex-green hover:text-white text-rolex-green duration-200 font-helvetica font-bold">
                    Cancelar
                </span>
                <button
                    class=" border px-6 py-2 rounded-3xl border-rolex-green hover:bg-rolex-green hover:text-white text-rolex-green duration-200 font-helvetica font-bold">
                    Enviar mensaje
                </button>
            </div>







        </Form>

        <div class=" flex flex-col items-center justify-center h-[80vh]" v-else>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                style="background: none; display: block; shape-rendering: auto;" width="200px" height="200px"
                viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                <circle cx="50" cy="50" r="37" stroke-width="8" class="stroke-rolex-green"
                    stroke-dasharray="58.119464091411174 58.119464091411174" fill="none" stroke-linecap="round">
                    <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="2s"
                        keyTimes="0;1" values="0 50 50;360 50 50"></animateTransform>
                </circle>
            </svg>
            <h2 class="text-3xl">Enviando ...</h2>
        </div>

    </div>
</template>

<style scoped>
.bounce-enter-active {

    opacity: 1;
}

.bounce-leave-active {
    opacity: 0;
}
</style>
