<script setup>
import emailjs from '@emailjs/browser';
import { computed, ref } from 'vue';
import Terms from '../global-components/Terms.vue';

import { ErrorMessage, Field, Form } from "vee-validate";
import * as yup from "yup";
import router from '../../router';

const schema = yup.object().shape({
    nombre: yup.string().required("El nombre es obligatorio!"),
    apellido: yup.string().required("El apellido es obligatorio!"),
    email: yup.string().required("Email es obligatorio").email("Email invalido!").max(50, "Debe contener un maximo de 50 caracteres"),
    mensaje: yup.string().required("El campo no puede estar vacio"),
    
});

const { message } = defineProps(['message'])

const inputOptions = {
    "placeholder": "Ingrese su numero de telefono"
}

const phone = ref()


const terms = ref(false)

const showTerms = () => {
    terms.value = !terms.value
}

const messageToSend = computed(() => {
    return message == undefined ? "" : message
})



function sendValue(value) {
    for (const key in value) {
       if(value[key] == undefined && value[key] == ""){
            value[key] = "Datos no subministrados por el remitente."
       }
    }
    

    emailjs.init('ZW9HU7fRsG4rIrQbu') //Esta es una llave publica 
    emailjs.send("service_5phuk1y", "template_x6cajsr", {
        tto: value["tto"],
        nombre: value["nombre"],
        apellido: value["apellido"],
        email: value["email"],
        mensaje: value["mensaje"],
        direccion: value["direccion"],
        phone: value["phone"],

    })
    .then(function (response){
        router.go()
    },function(error) {
       console.log('FAILED...', error);
    })



}

</script> 

<template>
    <div id="main-contact" class="my-10 flex flex-col items-center">
        <h2 class="text-3xl text-neutral-800 text-center my-8">CONTÁCTENOS</h2>
        <p class="mb-4 text-center">Le rogamos que nos especifique su forma de contacto deseada y le responderemos lo más
            pronto posible.</p>

        <Form class="flex flex-col w-11/12 md:w-1/2" @submit="sendValue" :validation-schema="schema">
            <div id="row" class="py-2 flex flex-col md:flex-row w-full">
                <div class="flex flex-col w-full">
                    <label for="tto">Tto:</label>
                    <Field as="select" name="tto" id="tto" class="h-10 p-2 border border-[#bbb]">
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
                    <label for="nombre">*Nombre:</label>
                    <Field type="text" name="nombre" id="nombre" placeholder="Nombre"
                        class="h-10 p-2 border border-[#bbb]" />
                    <ErrorMessage name="nombre" class="text-red-700" />

                </div>

                <div class="flex flex-col w-full">
                    <label for="apellido">*Apellido:</label>
                    <Field type="text" name="apellido" placeholder="Apellido" class="h-10 p-2 border border-[#bbb]" />
                    <ErrorMessage name="apellido" class="text-red-700" />


                </div>
            </div>

            <div id="row" class="py-2 flex flex-col gap-4 md:flex-row items-end justify-center ">


                <div class="flex flex-col w-full md:w-1/3">
                    <label for="email">*Email:</label>
                    <Field type="email" name="email" placeholder="Correo Electronico" aria-autocomplete="@gmail.com"
                        class="h-10 p-2 border border-[#bbb]" />
                    <ErrorMessage name="email" class="text-red-700" />
                </div>

                <div class=" w-full">
                    <vue-tel-input :inputOptions="inputOptions" styleClasses="h-10 p-2" v-model="phone" />

                </div>
            </div>

            <div id="row" class="py-2 flex items-end justify-center ">
                <div class="flex flex-col w-full">
                    <label for="direccion">Dirección:</label>
                    <Field type="text" name="direccion" placeholder="Correo Electronico"
                        class="p-2 h-10  border border-[#bbb]" />
                    <ErrorMessage name="direccion" class="text-red-700" />

                </div>

            </div>

            <div id="row" class="py-2 flex flex-col">
                <label for="mensaje">Su mensaje:</label>
                <Field as="textarea" name="mensaje" placeholder="Introduzca su mensaje aquí"
                    class="border border-[#bbb] max-h-52 min-h-min h-24 p-4" v-model="messageToSend" />
                    <ErrorMessage name="mensaje" class="text-red-700" />

            </div>

            <div id="conditions">
                <Field type="checkbox" name="terms" value="conditions"
                    class="appearance-none border border-black w-4 h-4 rounded-none checked:bg-rolex-green cursor-pointer" />
                <label for="terms"> *He leído y acepto los <span class="underline cursor-pointer"
                        @click="showTerms">Términos y Condiciones y la Política de Privacidad.</span></label>
            </div>

            <Terms v-if="terms" />

            <div id="row">
                <Field type="checkbox" value="optional" name="optional" id="optional"
                    class="appearance-none border border-black w-4 h-4 rounded-none checked:bg-rolex-green cursor-pointer" />
                <label for="optional"> Acepto recibir información comercial sobre Rolex de Mimi Joyería</label>
            </div>


            <div class="flex justify-end gap-2 mt-4">
                <span
                    class=" border px-7 py-3 cursor-pointer rounded-3xl border-rolex-green  hover:bg-rolex-green hover:text-white text-rolex-green duration-200">
                    Cancelar
                </span>
                <button
                    class=" border px-6 py-2 rounded-3xl border-rolex-green hover:bg-rolex-green hover:text-white text-rolex-green duration-200">
                    Enviar mensaje
                </button>
            </div>






        </Form>

    </div>
</template>


