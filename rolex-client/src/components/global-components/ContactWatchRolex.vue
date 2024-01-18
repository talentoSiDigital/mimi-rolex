<script setup>
import { computed, ref } from 'vue';
import Terms from '../global-components/Terms.vue'

const {message} = defineProps(['message'])

const inputOptions = {
    "placeholder": "Ingrese su numero de telefono"
}

const terms = ref(false)

const showTerms = () => {
    terms.value = !terms.value
}

const messageToSend = computed(()=>{
    return message == undefined ? "":message
})

</script>

<template>
    <div id="main-contact" class="my-10 flex flex-col items-center">
        <h2 class="text-3xl text-neutral-800 my-8">CONTÁCTENOS</h2>
        <p class="mb-4">Le rogamos que nos especifique su forma de contacto deseada y le responderemos lo más pronto posible.</p>

        <form class="flex flex-col w-1/2 ">
            <div id="row" class="py-2 flex w-full">
                <div class="flex flex-col w-full">
                    <label for="tto">Tto:</label>
                    <select name="tto" id="" class="h-10 p-2 border border-[#bbb]">
                        <option value="Sr">Sr.</option>
                        <option value="Mrs">Mrs.</option>
                        <option value="Sra">Sra.</option>
                        <option value="Sr">Sr.</option>
                        <option value="Miss">Miss</option>
                        <option value="Dr">Dr.</option>
                        <option value="Dra">Dra.</option>
                    </select>

                </div>

                <div class="flex flex-col w-full">
                    <label for="nombre">*Nombre:</label>
                    <input type="text" name="nombre" placeholder="Nombre" class="h-10 p-2 border border-[#bbb]">

                </div>

                <div class="flex flex-col w-full">
                    <label for="apellido">*Apellido:</label>
                    <input type="text" name="apellido" placeholder="Apellido" class="h-10 p-2 border border-[#bbb]">

                </div>
            </div>

            <div id="row" class="py-2 flex items-end justify-center ">


                <div class="flex flex-col w-1/3">
                    <label for="email">*Email:</label>
                    <input type="text" name="email" placeholder="Correo Electronico" class="h-10 p-2 border border-[#bbb]">

                </div>

                <div class=" w-full">
                    <vue-tel-input :inputOptions="inputOptions" styleClasses="h-10 p-2"></vue-tel-input>

                </div>
            </div>

            <div id="row" class="py-2 flex items-end justify-center ">


                <div class="flex flex-col w-full">
                    <label for="nombre">Dirección:</label>
                    <input type="text" name="nombre" placeholder="Correo Electronico"
                        class="p-2 h-10  border border-[#bbb]">

                </div>

            </div>

            <div id="row" class="py-2 flex flex-col">
                <label for="mensaje">Su mensaje:</label>
                <textarea name="mensaje" id="" placeholder="Introduzca su mensaje aquí"
                    class="border border-[#bbb] max-h-52 min-h-min h-24 p-4" v-model="messageToSend"></textarea>
            </div>

            <div id="conditions">
                <input type="checkbox" name="terms" id=""
                    class="appearance-none border border-black w-4 h-4 rounded-none checked:bg-rolex-green cursor-pointer">
                <label for="terms"> *He leído y acepto los <span class="underline cursor-pointer"
                        @click="showTerms">Términos y Condiciones y la Política de Privacidad.</span></label>
            </div>

            <Terms v-if="terms" />

            <div id="row">
                <input type="checkbox" name="optional" id=""
                    class="appearance-none border border-black w-4 h-4 rounded-none checked:bg-rolex-green cursor-pointer">
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






        </form>

    </div>
</template>


