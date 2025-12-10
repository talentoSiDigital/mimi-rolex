<script setup>
import { ref, onMounted, watch } from 'vue';
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';
import { Carousel, Slide } from 'vue3-carousel';
import { auth } from '../../store/auth.module';
import ShareSocialsButton from '../../components/global-components/ShareSocialsButton.vue';
import RegisterModal from '../../components/modals/RegisterModal.vue';
import router from '../../router';
import StoreDataService from '../../services/storeDataService';
import 'vue3-carousel/dist/carousel.css';
import PageBanner from '../../components/banners-components/PageBanner.vue';
import TudorShowcaseCard from '../../components/cards/TudorShowcaseCard.vue';
import { useHead } from '@unhead/vue';
const route = useRoute()
const currentSlide = ref(1)
const descriptionModal = ref(false)


const piniaStore = auth()
const isUserLogged = storeToRefs(piniaStore)
const user = piniaStore.$state.user

const active = ref(false)
const complete = ref(false)
const state = ref([])
const isReady = ref(false)

const recommend = ref([])
const isRecommendReady = ref(false)



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

onMounted(() => {
    StoreDataService.getRelojeriaDetails(route.params.id)
        .then(d => {
            state.value = d.data

            console.log(state.value[0]);
            if(state.value[0].disponible == 0){
                window.location.href = '/404'
            }
            isReady.value = true
        }).catch(e => {
            console.log(e);
            window.location.href = '/404'
        })

    StoreDataService.getRelojeriaSlider()
        .then(d => {
            recommend.value = d.data
            isRecommendReady.value = true
        })
})
const headMeta = useHead({
    title: 'Cargando... | Mimi Joyería',
    meta: [
        {
            name: 'description',
            content: 'Cargando...'
        },
        {
            property: 'og:title',
            content: 'Cargando... | Mimi Joyería'
        },
        {
            property: 'og:description',
            content: 'Cargando...'
        },
        {
            property: 'og:image',
            content: '/assets/mimi-logo.png'
        },
        {
            property: 'og:type',
            content: 'website'
        }
    ]
})

watch(isReady, () => {
    headMeta.patch({
        title:  state.value[0].nombre + ' | Mimi Joyería' ,
        meta: [
            {
                name: 'description',
                content:  state.value[0].descripcion
            },

            {
                property: 'og:title',
                content: state.value[0].nombre + ' | Mimi Joyería' 
            },
            {
                property: 'og:description',
                content: state.value[0].descripcion
            },
            {
                property: 'og:image',
                content: state.value[0].img 
            },
       
        ]
    })
})


</script>

<template>


    <section class="flex w-full justify-center border-b bg-white border-tudor-red">
        <RouterLink to="/tudor" class="hover:text-red-700 text-black duration-200 p-4 md:p-6">
            <h1 class="font-tudor tracking-tighter ">TUDOR EN MIMI JOYERÍA</h1>
        </RouterLink>
        <RouterLink to="/novedades/tudor" class="hover:text-red-700 text-black duration-200 p-4 md:p-6">
            <h1 class="font-tudor tracking-tighter ">NOVEDADES 2025</h1>
        </RouterLink>
        <RouterLink to="/relojeria/tudor" class="hover:text-red-700 text-black duration-200 p-4 md:p-6">
            <h1 class="font-tudor tracking-tighter ">QUIERO UN TUDOR</h1>
        </RouterLink>
        <RouterLink to="/contactenos" class="hover:text-red-700 text-black duration-200 p-4 md:p-6">
            <h1 class="font-tudor tracking-tighter ">CONTACTA CON NOSOTROS</h1>
        </RouterLink>
    </section>
    <section class=" font-montserrat text-neutral-700 flex ">

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


        <div v-if="isReady" class="w-full">

            <div class="mb-4 flex flex-col md:flex-row items-center justify-center  w-full h-32">
                <!-- The left line -->
                <span class="block h-px w-1/3 md:w-1/6 bg-neutral-300"></span>
                <!-- Your text here -->
                <h1 class="text-center text-xl tracking-widest mx-4 my-4 font-medium">PRESENTE EN TUS
                    MOMENTOS ESPECIALES</h1>

                <!-- The right line -->
                <span class="block h-px w-1/3 md:w-1/6 bg-neutral-300"></span>
            </div>

            <section class="flex flex-col items-center justify-center w-full md:flex-row px-10 h-fit">
                <div id="carousel" class="w-fit px-10 flex flex-col md:flex-row items-center gap-6  h-fit ">
                    <carousel :items-to-show="1" :wrap-around="false" v-model="currentSlide"
                        class="w-[90vw] md:w-[640px]  md:h-[640px] ">
                        <slide v-for="(slide, index) in state[0].cantidadImagenes + 1" :key="index" class="bg-white ">
                            <img :src="state[0].img[index - 1]" :alt="slide.serie" class=" bg-neutral-100">
                        </slide>

                    </carousel>
                    <div id="slider-nav" class="flex flex-row md:flex-col md:justify-between gap-4 md:h-[640px]">

                        <button class="bg-white  md:w-28 border border-gray-400"
                            v-for="(slide, index) in state[0].cantidadImagenes" :key="index" button
                            @click="currentSlide = index + 1">
                            <img :src="state[0].img[index]" :alt="slide.serie" class="">

                        </button>




                    </div>
                </div>
                <div id="info" class="mt-4 md:mt-0 w-full md:w-1/2 flex flex-col gap-6 ">

                    <h2 class="font-tudor-title text-3xl font-semibold uppercase">{{ state[0].nombre }}</h2>
                    <h2 class="font-tudor-title text-lg font-medium ">{{ state[0].serie }}</h2>
                    <div>
                        <p v-for="item in getTableContent(state[0].descripcion, ',')" :key="item" class="text-lg">{{
                            item }}</p>

                    </div>


                    <button @click="addToCart(state[0].id)"
                        v-if="state[0].coleccion == 'Tudor' && state[0].cantidad > 0"
                        class="duration-200 rounded-full text-sm bg-tudor-red border border-tudor-red text-white hover:bg-white hover:text-tudor-red p-3 uppercase font-bold w-1/2">Agregar
                        al carrito</button>
                    <a :href="sendMessage(state)" target="_blank"
                        class="duration-200 rounded-full text-sm bg-tudor-red border border-tudor-red text-white hover:bg-white hover:text-tudor-red p-3 uppercase font-bold text-center w-1/2">Contactar
                    </a>

                    <h2 class="font-tudor-title text-lg font-medium ">Acerca del {{ state[0].tudor_collection.nombre }}
                    </h2>

                    <p>{{ state[0].tudor_collection.description }}</p>

                    <button @click="descriptionModal = true"
                        class="duration-200 rounded-full text-sm bg-white border border-tudor-red text-tudor-red hover:bg-tudor-red hover:text-white py-1 px-3 font-bold w-fit letter-spacing-4">
                        + Especificaciones</button>
                    <Transition name="scale">
                        <section v-if="descriptionModal"
                            class="fixed z-999 w-full h-screen top-0 left-0 bg-white flex flex-col pt-14 items-center text-black overflow-y-scroll">
                            <div class="w-10/12 md:w-1/2 flex justify-end">
                                <button @click="descriptionModal = false">
                                    <p class="text-3xl">x</p>
                                    <!-- <font-awesome-icon :icon="['fas', 'xmark']" class="text-4xl"/> -->
                                </button>

                            </div>
                            <h2 class="font-tudor-title text-2xl w-1/2">Especificaciones</h2>
                            <hr class="w-1/2 my-2 border-t border-gray-400">
                            <div v-for="item in getTableContent(state[0].contenidoTabla, ';')" :key="item"
                                class="w-10/12 md:w-1/2 py-2">


                                <div v-for="(item, index) in getTableContent(item, ':')" :key="item" class="py-2">
                                    <p v-if="item != ''" :class="[index === 0 ? 'font-bold h-full ' : 'font-normal']"
                                        class=" w-full  text-sm">
                                        {{ item }}
                                    </p>

                                    <hr v-if="index !== 0" class="w-full mt-4 border-t border-gray-400">

                                </div>
                            </div>
                        </section>

                    </Transition>


                </div>
            </section>


            <section class=" py-14">
                <PageBanner type="model-page" />
                <header class=" py-8 flex flex-col items-center">
                    <h1 class="font-tudor-title font-black  text-4xl text-center uppercase  text-black">
                        Sobre Tudor

                    </h1>
                    <p class="font-tudor-title  font-black text-center text-tudor-red stroke-black">
                        EL ARTE TRADICIONAL DE LA ARTESANÍA A MANO
                    </p>
                    <p class="w-3/4 text-center pt-6">Un reloj TUDOR vive. Pulsa. Te llevará al mundo de la
                        microprecisión. La alta tecnología en todos
                        los componentes se prueba incansablemente hasta el último momento.
                        El más mínimo detalle... hasta el punto de la obsesión. Examina el movimiento. Estética y
                        prestaciones para los productos más exigentes, diseñados
                        tanto para la resistencia como para el placer. Agradable a la vista y excitante para la mente,
                        este mecanismo de precisión resistirá los rigores del tiempo.
                        Materiales excepcionales, durabilidad y solidez del diseño hacen de cada reloj un objeto único.
                    </p>

                </header>
                <div class="flex justify-center mt-8">

                    <router-link to="/tudor"
                        class=" duration-200 rounded-full text-sm bg-tudor-red border border-tudor-red text-white hover:bg-white hover:text-tudor-red p-3 uppercase font-bold">
                        Descubre la marca tudor
                        <font-awesome-icon :icon="['fas', 'arrow-up-right-from-square']" />
                    </router-link>
                </div>
            </section>

            <div class="video-frame flex justify-center pb-[10vh]">
                <div class="w-11/12 aspect-w-16 aspect-h-9">
                    <iframe src="https://www.youtube.com/embed/YXcvew6NPQ4?si=cg44MtjzZ2AdH70S"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>
                </div>
            </div>
            <header class=" py-8 flex flex-col items-center">
                <h1 class="font-tudor-title font-black  text-4xl text-center uppercase  text-black">
                    También te puede gustar

                </h1>
                <p class="font-tudor-title text-xl font-black text-center text-tudor-red stroke-black">
                    Colección Tudor
                </p>


            </header>

            <div id="tudor" class="w-full flex items-center justify-center pb-16">
                <div class="grid grid-cols-2 place-items-center gap-2 md:gap-6 md:grid-cols-4 w-11/12">

                    <TudorShowcaseCard v-for="(items, key) in recommend" :key="key" :items="items" />


                </div>
            </div>
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


.scale-enter-active,
.scale-leave-active {
    transition: all 0.2s ease;
}

.scale-enter-from,
.scale-leave-to {
    opacity: 0;
    transform: scale(0);
}

.scale-enter-to,
.scale-leave-from {
    opacity: 1;
    transform: scale(1);
}
</style>