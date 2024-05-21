<script setup>
import { computed, ref, watchEffect } from "vue";
import { useCookies } from '@vueuse/integrations/useCookies'
import {useRoute} from 'vue-router'
import routerFile from '../../router'

const router = useRoute()



let externalScript = document.createElement('script')
externalScript.setAttribute('src', '//assets.adobedtm.com/7e3b3fa0902e/7ba12da1470f/launch-5de25e657d80.min.js')

const cookies = useCookies()

if(cookies.get('rlx-consent') === undefined) {
    cookies.set('rlx-consent','false')
}


function checkCookies() {
    if (cookies.get('rlx-consent') && router.name.includes('rolex')) {
        document.head.appendChild(externalScript)
    } 
}


const checkOpen = ref(false)
const isOpenUp = computed(() => {
    return checkOpen.value ? "bottom-0" : "-bottom-2/4"
})

function openUp() {checkOpen.value = !checkOpen.value}

function changeCookie(value) {
  cookies.set('rlx-consent', value)
  openUp()
  checkCookies()
  if(!cookies.get('rlx-consent')){
    routerFile.go()
  }
}

watchEffect(()=>{
   checkCookies()
})

</script>

<template>
        <div :class="isOpenUp" class="fixed z-20 h-fit duration-500">
            <div class=" h-[60vh] relative  w-full flex flex-col justify-end items-center z-10">
                <div class="h-1/6 flex justify-end w-full mr-16">
                    <div class=" group border-l border-r border-t rounded-t-md shadow-md shadow-rolex-green border-rolex-green cursor-pointer p-4 fixed flex items-center gap-2 bg-white  hover:text-rolex-green duration-100 h-[4.5rem]"
                        @click="openUp">
                        <font-awesome-icon :icon="['fas', 'gear']" class="group-hover:animate-spin " />
                        <h2>Cookies</h2>
                    </div>
                </div>

                <div id="content" class="border-2 bg-white border-rolex-green h-4/5 w-full relative flex flex-col md:flex-row items-center">
                    <div class="md:w-2/3 overflow-y-scroll md:overflow-y-hidden border h-3/5 md:h-full flex flex-col justify-start md:justify-center items-center" >
                        <img src="/assets/mimi-logo.png" alt="Logo mimi joyeria" class="w-32">
                        <h2 class="w-10/12 text-justify text-xs md:text-sm">Para brindar las mejores experiencias, utilizamos tecnologías como cookies para almacenar y/o
                            acceder a información del dispositivo. Dar su consentimiento a estas tecnologías nos permitirá
                            procesar datos como el comportamiento de navegación o identificaciones únicas en este sitio. No
                            dar o retirar el consentimiento puede afectar negativamente a determinadas características y
                            funciones.</h2>
                        <h2 class="w-10/12 text-justify font-semibold text-xs md:text-sm">*Puedes cambiar de decisión en cualquier en momento</h2>
                    </div>
                    <div class="flex flex-col items-center justify-center w-1/3 gap-2 h-3/5 md:h-full " >
                        <button @click="changeCookie(true)" class="border-2 border-rolex-green font-semibold px-6 py-2 hover:bg-rolex-green hover:text-white duration-200 w-44 sm:w-60 md:w-80 text-xs md:text-lg ">Permitir todas</button>
                        
                        <button @click="changeCookie(false)" class="border-2 border-rolex-green font-semibold px-6 py-2 hover:bg-rolex-green hover:text-white duration-200 w-44 sm:w-60 md:w-80 text-xs md:text-lg ">Rechazar todas</button>
                    </div>

                </div>

            </div>
        </div>
</template>



