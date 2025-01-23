<script setup>
import { useCookies } from '@vueuse/integrations/useCookies';
import { computed, ref, watchEffect } from "vue";
import { useRoute } from 'vue-router';
import routerFile from '../../router';

const router = useRoute()

const cookies = useCookies()
const checkOpen = ref(false)

let externalScript = document.createElement('script')
externalScript.setAttribute('src', '//assets.adobedtm.com/7e3b3fa0902e/db4a1bdd4eaa/launch384bfb3a027c.min.js')
// externalScript.setAttribute('src', '//assets.adobedtm.com/7e3b3fa0902e/db4a1bdd4eaa/launch-98ac5c6226e2-staging.min.js')

if (cookies.get('rlx-consent') === undefined) {
    cookies.set('rlx-consent', 'false')
}
if( cookies.get('rlx-consent') === false ){
    checkOpen.value = true
    
}


function checkCookies() {
    if (cookies.get('rlx-consent') && router.fullPath.includes('rolex')) {
        document.head.appendChild(externalScript)
    }
}
checkCookies()

const isOpenUp = computed(() => {
    return checkOpen.value ? "bottom-0" : "-bottom-2/3"
})

function openUp() { 
    checkOpen.value = !checkOpen.value 
}

function changeCookie(value) {
    if(cookies.get('rlx-consent') === value ){
        checkOpen.value = false
    }else{
        cookies.set('rlx-consent', value)
        openUp()
        checkCookies()
        if (!cookies.get('rlx-consent')) {
            routerFile.go()
        }
    }
    
}

watchEffect(() => {
    checkCookies()
})

</script>

<template>
    <div :class="isOpenUp" class="fixed z-30 h-fit duration-500">
        <div :class="checkOpen?'bottom-1/2':'bottom-0'" class="h-[10vh] duration-500 flex justify-end fixed z-20 left-[98%] right-4 mr-16 border">
            <div class=" group border-l border-r border-t rounded-t-md shadow-md shadow-rolex-green border-rolex-green cursor-pointer p-4 fixed flex pt-5 gap-2 bg-white  hover:text-rolex-green duration-100 h-[10rem]"
                @click="openUp">
                <font-awesome-icon :icon="['fas', 'gear']" class="group-hover:animate-spin " />
                <h2>Cookies</h2>
            </div>
        </div>
        <div class=" h-[50vh] relative  w-full  border z-40 ">

            <div id="content"
                class="border-2 bg-white border-rolex-green h-full w-full relative flex flex-col md:flex-row items-center">
                <div
                    class="md:w-2/3 overflow-y-scroll md:overflow-y-hidden h-3/5 md:h-full flex flex-col justify-start md:justify-center items-center">
                    <img src="/assets/mimi-logo-gray.svg" alt="Logo mimi joyeria" class="w-32">
                    <h2 class="w-10/12 text-justify text-xs md:text-sm">Para brindar las mejores experiencias,
                        utilizamos tecnologías como cookies para almacenar y/o
                        acceder a información del dispositivo. Dar su consentimiento a estas tecnologías nos permitirá
                        procesar datos como el comportamiento de navegación o identificaciones únicas en este sitio. No
                        dar o retirar el consentimiento puede afectar negativamente a determinadas características y
                        funciones.</h2>
                    <h2 class="w-10/12 text-justify font-semibold text-xs md:text-sm">*Puedes cambiar de decisión en
                        cualquier en momento</h2>
                </div>
                <div class="flex flex-col items-center justify-center w-1/3 gap-2 h-3/5 md:h-full ">
                    <button @click="changeCookie(true)"
                        class="border-2 border-rolex-green font-semibold px-6 py-2 hover:bg-rolex-green hover:text-white duration-200 w-44 sm:w-60 md:w-80 text-xs md:text-lg ">Permitir
                        todas</button>

                    <button @click="changeCookie(false)"
                        class="border-2 border-rolex-green font-semibold px-6 py-2 hover:bg-rolex-green hover:text-white duration-200 w-44 sm:w-60 md:w-80 text-xs md:text-lg ">Rechazar
                        todas</button>
                </div>

            </div>

        </div>
    </div>
</template>
