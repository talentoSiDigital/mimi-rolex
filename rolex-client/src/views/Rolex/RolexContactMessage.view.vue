<script setup>

import { computed, ref, useTemplateRef } from 'vue'
import RolexTemplate from '../Rolex/RolexTemplate.view.vue'
import { useElementVisibility } from '@vueuse/core'
import { useRoute } from 'vue-router'
import PageBanner from '../../components/banners-components/PageBanner.vue'
import NewContactForm from '../../components/form-components/NewContactForm.vue'
import Button from '../../components/global-components/Button.vue'
import mailDataService from '../../services/mailDataService'
const query = computed(() => {
    return useRoute().query.id ? useRoute().query.id : null
})
const error = ref(false)
const sliderCount = ref(0)
const messageInfo = ref({
    "tto": "Sr",
    "name": "",
    "lastName": "",
    "email": "",
    "phone": "",
    "country": "VE",
    "region": "",
    "conditions": false,
    "message": "",
})

if (query.value != null) {
    messageInfo.value.message = `Hola. Estoy interesado en el Rolex ${query.value}`
}

const target = useTemplateRef('target')
const targetIsVisible = useElementVisibility(target)


// const position = ref("-translate-x-2/3")
const position = ref("-translate-x-0")
const statusMessage = ref("")
// const position = ref("translate-x-0")
let positionArray = ['translate-x-0', '-translate-x-1/3', '-translate-x-2/3']
function moveForm(pos) {

    if (messageInfo.value.message == "") {
        error.value = true
    } else {
        // position.value = positionArray[pos] 
        sliderCount.value = pos
    }
}

function sendMessage() {

    mailDataService.rolexNewMail(messageInfo.value).then((d) => {

        statusMessage.value = "Su mensaje ha sido enviado con éxito al equipo de Rolex en Mimi Joyería"
        moveForm(2)
        mailDataService.rolexMailTrack(messageInfo.value).then(()=>{
            console.log("Message tracked");
        })
    }).catch(() => {
        statusMessage.value = "Hubo un error al enviar su mensaje, intente de nuevo más tarde."
        moveForm(2)

    })
}

function resetForm() {
    messageInfo.value = {
        "tto": "Sr",
        "name": "",
        "lastName": "",
        "email": "",
        "phone": "",
        "country": "VE",
        "region": "",
        "conditions": false,
        "message": "",
    };
    sliderCount.value = 0
}

</script>

<template>
    <div id="new-models">
        <RolexTemplate>
            <template #content>

                <PageBanner type="rolex-contact" />
                <main class="w-full overflow-hidden ">


                    <div :class="position" class="flex w-[300%] duration-300 ">
                        <section ref="target" v-if="sliderCount === 0"
                            class=" bg-rolex-brown-light-2 py-[10vh] w-1/3 max-h-fit">
                            <header
                                class="flex flex-col gap-4 font-helvetica w-full font-bold text-center justify-around items-center  text-rolex-brown  ">

                                <p class="w-10/12 md:w-1/2 text-xl font-helvetica  ">
                                    Enviar un mensaje
                                </p>

                                <h1 class="text-2xl md:text-5xl w-10/12 lg:w-1/2">
                                    Por favor, introduzca su mensaje
                                </h1>

                                <p class="w-10/12 lg:w-1/2 text-xl font-helvetica font-light  ">
                                    Gracias por su interés en los relojes Rolex. Por favor, introduzca su mensaje a
                                    continuación
                                    y estaremos encantados de ayudarle.
                                </p>

                                <textarea name="message" id="" cols="40" rows="10" placeholder="Escribe tu mensaje"
                                    class="border border-[#bbb]  h-60 p-4 w-10/12 lg:w-1/2"
                                    v-model="messageInfo.message"></textarea>
                                <h2 v-if="error" class="text-red-700">Debes colocar un mensaje</h2>


                                <button @click="moveForm(1)"
                                    class="bg-rolex-green text-white border w-fit border-rolex-green px-4 py-2 font-helvetica font-bold  rounded-3xl hover:bg-white hover:text-rolex-green duration-200">
                                    Siguiente
                                    <font-awesome-icon :icon="['fas', 'chevron-right']" class="text-xs pl-2" />

                                </button>
                            </header>

                        </section>

                        <NewContactForm v-if="sliderCount === 1" -color="bg-rolex-brown-light-2" v-model="messageInfo"
                            class="w-1/3" @get-back="moveForm" @send-mail="sendMessage" />


                        <section v-if="sliderCount === 2" class="border bg-rolex-brown-light-2 pt-[10vh] w-1/3">
                            <div>
                                <header
                                    class="flex flex-col gap-4 font-helvetica font-bold text-center justify-around items-center  text-rolex-brown h-fit ">

                                    <p class="w-10/12 md:w-1/2 text-xl font-helvetica  ">
                                        Enviar un mensaje
                                    </p>

                                    <h1 class="text-2xl md:text-5xl w-10/12 md:w-1/2">
                                        Gracias
                                    </h1>

                                    <p class="w-10/12 md:w-1/2 text-xl text-black font-helvetica font-bold ">
                                        {{ statusMessage }}
                                    </p>
                                    <p class="w-10/12 md:w-1/2 text-xl font-helvetica font-light  ">

                                        Uno de nuestros asesores de ventas de Rolex revisará su solicitud y responderá
                                        lo
                                        antes posible.


                                    </p>

                                    <button @click="resetForm"
                                        class="bg-rolex-green text-white border w-fit border-rolex-green px-4 py-2 font-helvetica font-bold  rounded-3xl hover:bg-white hover:text-rolex-green duration-200">
                                        Volver
                                        <font-awesome-icon :icon="['fas', 'chevron-right']" class="text-xs pl-2" />

                                    </button>


                                </header>

                                <div class="flex justify-center py-[10vh]">
                                    <img src="/assets/routes-assets/contact-rolex/contact-1.webp"
                                        alt="contact-rolex-center" class="hidden md:block  w-10/12 md:w-1/2">
                                    <img src="/assets/routes-assets/contact-rolex/contact-1-mobile.webp"
                                        alt="contact-rolex-center-mobile" class="md:hidden block w-10/12 md:w-1/2">
                                </div>


                            </div>


                        </section>

                    </div>
                </main>


            </template>
        </RolexTemplate>

    </div>
</template>
