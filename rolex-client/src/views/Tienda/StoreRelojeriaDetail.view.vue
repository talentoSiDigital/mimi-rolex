<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';
import { useAsyncState } from '@vueuse/core';
import { Carousel, Slide } from 'vue3-carousel';
import { auth } from '../../store/auth.module';
import ShareSocialsButton from '../../components/global-components/ShareSocialsButton.vue';
import RegisterModal from '../../components/modals/RegisterModal.vue';
import router from '../../router';
import StoreDataService from '../../services/storeDataService';
import 'vue3-carousel/dist/carousel.css';

const route = useRoute()
const currentSlide = ref(1)
const closeModalInfo = ref({})

const piniaStore = auth()
const isUserLogged = storeToRefs(piniaStore)
const user = piniaStore.$state.user

const active = ref(false)
const complete = ref(false)



const { isLoading, state, isReady, execute } = useAsyncState(
    StoreDataService.getRelojeriaDetails(route.params.id)
        .then(d => {
            return d.data
        })
)


function getTableContent(item, char) {
    return item.split(char)
}
function activateModal() {
    return active.value = !active.value
}

function addToCart(id) {
    if (!isUserLogged.status.value.loggedIn) {
        activateModal()
    } else {
        console.log(user.id);
        StoreDataService.postAddToCart(id, user.id).then((d) => {
            router.replace('/carrito')


        })
    }
}

function goBack() {
    router.go(-1)
}


function sendMessage(state) {
    const message = `Quisiera saber mas informacion acerca del modelo ${state[0].nombre} de la colección ${state[0].coleccion}, por favor.`
    return `https://wa.me/584122909996/?text=${message}`
}


</script>

<template>



    <section class="bg-neutral-100 font-montserrat text-neutral-700 flex ">
        <div>
          

            <transition name="bounce">

                <RegisterModal v-if="active" @activate-modal="activateModal" />
            </transition>
            <transition enter-active-class="duration-100 ease-in-out" enter-from-class="transform opacity-0"
                enter-to-class="opacity-100" leave-active-class="duration-700 ease-in-out"
                leave-from-class="opacity-700" leave-to-class="transform opacity-0">
                <div class="bg-[rgba(0,0,0,0.8)] z-40 fixed h-screen top-0 w-full" v-if="active || complete">

                </div>
            </transition>
        </div>


        <div v-if="isReady">

            <div class="mb-4 flex flex-col md:flex-row items-center justify-center  w-full h-32">
                <!-- The left line -->
                <span class="block h-px w-1/3 md:w-1/6 bg-neutral-300"></span>
                <!-- Your text here -->
                <h1 class="text-center text-xl tracking-widest mx-4 my-4 font-medium">PRESENTE EN TUS
                    MOMENTOS ESPECIALES</h1>

                <!-- The right line -->
                <span class="block h-px w-1/3 md:w-1/6 bg-neutral-300"></span>
            </div>

            <section class="flex flex-col items-center md:items-start md:flex-row px-10 ">
                <div id="carousel" class="md:w-1/2 flex flex-col items-center gap-3">
                    <carousel :items-to-show="1" :wrap-around="false" v-model="currentSlide">
                        <slide v-for="(slide, index) in state[0].cantidadImagenes + 1" :key="index">
                            <img :src="state[0].img[index - 1]" :alt="slide.serie" class="md:w-3/4 bg-white">
                        </slide>

                    </carousel>
                    <div id="slider-nav" class="flex">

                        <div class="flex gap-2">
                            <div class="hover:bg-gray-400"
                                :class="[index == currentSlide + 1 ? 'bg-gray-400' : 'bg-white']"
                                v-for="(slide, index) in state[0].cantidadImagenes" :key="index">
                                <div class="cursor-pointer" @click="currentSlide = index + 1">
                                    <img :src="state[0].img[index]" :alt="slide.serie" class="w-10 md:w-20">

                                </div>
                            </div>


                        </div>


                    </div>
                </div>
                <div id="info" class="mt-4 md:mt-0 w-full md:w-1/3 flex flex-col">

                    <h2 class="text-3xl font-semibold uppercase pb-6">{{ state[0].nombre }}</h2>
                    <h2 class="text-xl font-medium pb-3">MIMI JOYERÍA</h2>
                   
                    
                   
                    <button @click="addToCart(state[0].id)" v-if="state[0].coleccion == 'Tudor' && state[0].cantidad >0"
                        class="border border-black w-full mb-2 py-2 text-center text-white bg-neutral-600 font-medium hover:bg-white hover:text-neutral-600 duration-100">Agregar
                        al carrito</button>
                    <a :href="sendMessage(state)" target="_blank"
                        class="border border-black w-full mb-6 py-2 text-center text-white bg-neutral-600 font-medium hover:bg-white hover:text-neutral-600 duration-100">Contactar </a>
                    <div v-for="item in getTableContent(state[0].contenidoTabla, ';')" :key="item"
                        class="flex flex-col md:flex-row justify-center ">


                        <div v-for="(item, index) in getTableContent(item, ':')" :key="item" class=" flex md:w-1/2 ">
                            <p v-if="item != ''" :class="[index === 0 ? 'font-bold h-full ' : 'font-normal']"
                                class="border w-full  flex items-center p-4">
                                {{ item }}
                            </p>

                        </div>
                    </div>
                    <div id="socials">
                        <h2>Compartir en:</h2>
                        <div class="flex flex-col md:flex-row md:items-center gap-4 mt-2">
                            <ShareSocialsButton social="x" />
                            <ShareSocialsButton social="facebook" />
                            <ShareSocialsButton social="pinterest" />
                        </div>
                    </div>

                </div>
            </section>

            <section class="flex items-center justify-center h-44">
                <button
                    class="uppercase border border-black py-4 px-10 text-neutral-600 bg-white hover:text-white hover:bg-neutral-600 duration-100 "
                    @click="goBack()">
                    <font-awesome-icon :icon="['fas', 'arrow-left']" />
                    <span class="pl-2">Volver a la colección {{ state[0].coleccion }}</span>
                </button>
            </section>


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