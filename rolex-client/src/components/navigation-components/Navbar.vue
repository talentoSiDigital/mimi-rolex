<script setup>
import { RouterLink } from 'vue-router';
import { storeToRefs } from 'pinia';
import { computed, ref } from 'vue'
import { auth } from '../../store/auth.module'
import router from '../../router'


const windowWidth = ref(window.innerWidth)
const piniaStore = auth()
const IsLogged = storeToRefs(piniaStore)

const loggedIn = computed(() => {
    return IsLogged.status.value.loggedIn
})

const activate = ref('h-20')

function collapseNav() {
    if (windowWidth.value < 1023) {
        activate.value == 'h-20' ? activate.value = 'h-fit' : activate.value = 'h-20'
    }
}



function handleLogout() {
    logginOut.value = true
    piniaStore.logout()
    router.push("/")
}

</script>

<template>
    <nav class="relative z-30">
        <div id="top-bar" class="flex justify-around items-center p-2">
            <router-link to="/tudor" class="cursor-pointer hidden md:block">
                <img src="/assets/tudor-retailer.jpg" alt="tudor-retailer-badge" class="w-24 md:w-32">
            </router-link>
            <router-link to="/" class="w-fit">
                <img src="/assets/mimi-logo-gray.svg" alt="mimi-joyeria-logo" class="w-24 md:w-56">
            </router-link>
            <div class="relative items-center overflow-hidden">
                <router-link :to="{name:'rolex'}" class=" cursor-pointer absolute z-10 block w-full h-[160px] md:w-40 md:h-20">
                </router-link>
                <iframe
                    src="https://static.rolex.com/retailers/clock/?colour=gold&apiKey=7513b85ede328a319698cf7a3eebed49&lang=es"
                    frameborder="0" class="  w-40 h-[5.5rem]  cursor-pointer"></iframe>
            </div>

        </div>

        <!--  -->
        <div id="navigation-bar" :class="activate"
            class="flex overflow-hidden lg:overflow-visible flex-col lg:flex-row lg:justify-center items-center  shadow-lg md:gap-2  bg-main-green">

            <div class="py-6 lg:hidden" @click="collapseNav()">
                <svg class="w-8 h-8 cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 17 14">
                    <path class="stroke-white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M1 1h15M1 7h15M1 13h15" />
                </svg>
            </div>

            <router-link @click="collapseNav" :to="{name:'rolex'}"
                class=" md:border-0 md:border-b-2  md:border-transparent tracking-widest hover:bg-neutral-200 md:hover:bg-transparent md:hover:border-white px-6 py-2 text-lg font-normal font-montserrat text-green-900  w-full md:w-fit text-center">
                <h2 class="uppercase">Rolex</h2>
            </router-link>

            <router-link @click="collapseNav" to="/tudor"
                class="md:border-0 md:border-b-2 md:border-transparent tracking-widest hover:bg-neutral-200 md:hover:bg-transparent md:hover:border-white px-6 py-2 text-lg font-normal font-montserrat text-green-900  w-full md:w-fit text-center">
                <h2 class="uppercase">Tudor</h2>
            </router-link>
                <!-- <div class="hidden md:block group relative">
                    <router-link to="/relojeria"
                        class=" tracking-widest hover:bg-neutral-200 md:hover:bg-transparent px-6 py-2 text-lg font-normal font-montserrat text-green-900 w-full md:w-fit text-center flex items-center ">
                        <h2 class="uppercase">Relojería</h2>
                        <font-awesome-icon :icon="['fas', 'angle-down']" class="text-sm pt-1" />

                    </router-link>

                    <div
                        class="absolute z-50 border left-0 md:left-3 bg-[#637263]  md:bg-main-green p-8 md:p-5 hidden group-hover:block ">
                        <router-link :to="{ name: 'reloj', params: { id: 'tudor' } }"
                            class="text-xl font-normal font-montserrat text-green-900 md:hover:underline">
                            <h2 class="my-1 uppercase">Tudor</h2>
                        </router-link>
                    
                        <router-link to="/relojeria/longines"
                            class="text-xl font-normal font-montserrat text-green-900 md:hover:underline">
                            <h2 class="my-1 uppercase">Longines</h2>
                        </router-link>
                        <router-link to="/relojeria/victorinox"
                            class="text-xl font-normal font-montserrat text-green-900 md:hover:underline">
                            <h2 class="my-1 uppercase">Victorinox</h2>
                        </router-link>
                    </div>

                </div> -->

            <div class="hidden md:block group relative">

                <router-link to="/joyeria"
                    class=" tracking-widest hover:bg-neutral-200 md:hover:bg-transparent px-6 py-2 text-lg font-normal font-montserrat text-green-900 w-full md:w-fit text-center flex items-center ">
                    <h2 class="uppercase">Joyería</h2>
                    <font-awesome-icon :icon="['fas', 'angle-down']" class="text-sm pt-1" />

                </router-link>

                <div
                    class="absolute z-50 border left-0 md:left-3 bg-[#637263] w-fit md:bg-main-green p-8 md:p-5 hidden group-hover:block ">
                    <router-link to="/joyeria/nacimiento-y-bautizos"
                        class="text-xl whitespace-nowrap  font-normal font-montserrat text-green-900 md:hover:underline">
                        <h2 class="my-1 uppercase">Nacimiento y bautizos</h2>
                    </router-link>
                    <router-link to="/joyeria/compromiso-y-matrimonio"
                        class="text-xl font-normal whitespace-nowrap  font-montserrat text-green-900 md:hover:underline">
                        <h2 class="my-1 uppercase">Compromiso y matrimonio</h2>
                    </router-link>
                    <router-link to="/joyeria/graduacion"
                        class="text-xl whitespace-nowrap  font-normal font-montserrat text-green-900 md:hover:underline">
                        <h2 class="my-1 uppercase">Graduación</h2>
                    </router-link>
                    <router-link to="/joyeria/regalos"
                        class="text-xl font-normal font-montserrat text-green-900 md:hover:underline">
                        <h2 class="my-1 uppercase">Regalos</h2>
                    </router-link>
                </div>

            </div>

            <!-- ##MOBILE NAV -->
            <div class=" md:hidden w-full flex flex-col items-center">
                

                <router-link @click="collapseNav" to="/joyeria"
                    class="border md:border-0 md:border-b-2 md:border-transparent tracking-widest hover:bg-neutral-200 md:hover:bg-transparent md:hover:border-white px-6 py-2 text-lg font-normal font-montserrat text-green-900 w-full md:w-fit text-center">
                    <h2 class="uppercase">Joyería</h2>
                </router-link>

                <router-link @click="collapseNav" to="/joyeria/nacimiento-y-bautizos"
                    class=" tracking-widest border bg-neutral-400 px-6 py-2 text-xl font-normal font-montserrat      text-center text-white w-full ">
                    <h2 class="uppercase">Nacimiento y bautizos</h2>
                </router-link>
                <router-link @click="collapseNav" to="/joyeria/compromiso-y-matrimonio"
                    class=" tracking-widest border bg-neutral-400 px-6 py-2 text-xl font-normal font-montserrat text-white w-full text-center  ">
                    <h2 class="uppercase">Compromiso y matrimonio</h2>
                </router-link>
                <router-link @click="collapseNav" to="/joyeria/graduacion"
                    class=" tracking-widest border bg-neutral-400 px-6 py-2 text-xl font-normal font-montserrat text-white w-full text-center  ">
                    <h2 class="uppercase">Graduación</h2>
                </router-link>
                <router-link @click="collapseNav" to="/joyeria/regalos"
                    class=" tracking-widest border bg-neutral-400 px-6 py-2 text-xl font-normal font-montserrat text-white w-full text-center  ">
                    <h2 class="uppercase">Regalos</h2>
                </router-link>


            </div>
            <!-- ## END MOBILE NAV -->



            <router-link @click="collapseNav" to="/sobre-mimi"
                class="border-b-2 md:border-transparent tracking-widest hover:bg-neutral-200 md:hover:bg-transparent md:hover:border-white px-6 py-2 text-lg font-normal font-montserrat text-green-900 w-full md:w-fit text-center">
                <h2 class="uppercase">Sobre Mimi</h2>
            </router-link>

            <router-link @click="collapseNav" to="/contactenos"
                class="border-b-2 md:border-transparent tracking-widest hover:bg-neutral-200 md:hover:bg-transparent md:hover:border-white px-6 py-2 text-lg font-normal font-montserrat text-green-900 w-full md:w-fit text-center">
                <h2 class="uppercase">Contacto</h2>
            </router-link>


            <!-- LOGIN ATTEMPT -->
            <div v-if="loggedIn" class="md:hidden w-full flex flex-col items-center">
                <div
                    class="border md:border-0 md:border-b-2 md:border-transparent tracking-widest hover:bg-neutral-600 md:hover:bg-transparent md:hover:border-gray-button px-6 py-2 text-lg font-normal font-montserrat text-green-900 md:hover:text-gray-button w-full md:w-fit text-center">
                    <h2 class="uppercase">Perfil</h2>
                </div>

                
           
                <button @click="collapseNav, handleLogout"
                    class=" tracking-widest border bg-neutral-500 px-6 py-2 text-xl font-normal font-montserrat text-slate-50 w-full text-center  ">
                    <h2 class="uppercase">Cerrar sesión</h2>

                </button>

            </div>
            <router-link to="/login" v-else
                class="border md:border-0 md:border-b-2 md:border-transparent tracking-widest hover:bg-neutral-600 md:hover:bg-transparent md:hover:border-white px-6 py-2 text-lg font-normal font-montserrat text-green-900  w-full md:w-fit text-center ">
                <h2 class="uppercase">Iniciar Sesión</h2>
            </router-link>


            <div v-if="loggedIn" class="hidden md:block group relative">

                <div
                    class=" tracking-widest hover:bg-neutral-600 md:hover:bg-transparent px-6 py-2 text-lg font-normal font-montserrat text-green-900   w-full md:w-fit text-center flex items-center ">
                    <h2 class="uppercase">Panel</h2>
                    <font-awesome-icon :icon="['fas', 'angle-down']" class="text-sm pt-1" />

                </div>

                <div
                    class="absolute z-50 border left-0 md:left-3 bg-[#637263] w-fit md:bg-main-green p-8 md:p-5 hidden group-hover:block ">
              
                  
                    <a href="/logout"
                        class="text-xl font-normal whitespace-nowrap  font-montserrat text-green-900  md:hover:underline">
                        <h2 class="my-1 uppercase">Cerrar sesión</h2>
                    </a>

                </div>

            </div>
            <div v-if="loggedIn">
                <router-link to="/carrito" class="border-b-2 md:border-transparent tracking-widest hover:bg-neutral-200 md:hover:bg-transparent md:hover:border-white px-6 py-2 text-lg font-normal font-montserrat text-green-900 w-full md:w-fit text-center">
                    <font-awesome-icon :icon="['fas', 'cart-shopping']"
                    class="text-2xl text-rolex-green duration-200 py-2 group-hover:underline" />
                </router-link>
            </div>
            <!-- LOGIN ATTEMPT END -->


        </div>



    </nav>
</template>
