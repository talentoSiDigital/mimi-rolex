<script setup>
import { onMounted, ref, watch } from 'vue';
import { RouterLink } from 'vue-router';
import DashboardCard from '../../../components/dashboard/admin/DashboardCard.vue';
import adminDataServices from '../../../services/adminDataServices';
import WatchesAvailability from '../../../components/dashboard/admin/WatchesAvailability.vue';
import Loading from '../../../components/global-components/Loading.vue';
import WatchForm from '../../../components/form-components/WatchForm.vue';
import RelojeriaForm from '../../../components/dashboard/RelojeriaForm.vue';
import { auth } from '../../../store/auth.module';

const piniaStore = auth()
const errorHandlerMessage = ref({
    messagesError: '',
    rolexMessageError: '',
    watchesError: ''
})

const user = piniaStore.$state.user
const allWatches = ref([])
const messages = ref({
    messages: [],
    rolexMessages: [],
    activeMessage: {}
})
const displayWatches = ref([])
const searchParam = ref('')

const messageToggle = ref(false)
const notification = ref(false)

const icon = ref(['fas', 'magnifying-glass'])
const sortingIndicator = ref(0)

const modal = ref(false)

function getAllWatches() {
    allWatches.value=[]
    displayWatches.value=[]
    adminDataServices.getAllWatches(user)
        .then((data) => {
            allWatches.value = data.data
            displayWatches.value = data.data
        }).catch((e) => {
            console.log(e);
            errorHandlerMessage.value.watchesError = 'Hubo un error obteniendo los relojes'
        })
}


function deleteParams() {
    searchParam.value = ''
}

function filterWatches() {
    displayWatches.value = displayWatches.value.filter(e => e.serie.includes(searchParam.value))
}

function sortByParam(param, number) {

    const isDescending = number === sortingIndicator.value;

    const direction = isDescending ? -1 : 1;

    const sortComparison = (a, b) => {
        if (param === 'precio' || param === 'disponible') {
            return (a[param] - b[param]) * direction;
        } else {
            return a[param].localeCompare(b[param]) * direction;
        }
    };
    displayWatches.value.sort(sortComparison);
    sortingIndicator.value = isDescending ? 0 : number;
}

function getMessages() {
    adminDataServices.getAllMessages(user)
        .then((d) => {
            messages.value.messages = d.data
        }).catch(e => {
            console.log(e);
            errorHandlerMessage.value.messagesError = 'Hubo un error obteniendo los mensajes'

        })
}

function getRolexMessages() {
    adminDataServices.getAllRolexMessages(user)
        .then((d) => {
            messages.value.rolexMessages = d.data
        }).catch(e => {
            console.log(e);
            errorHandlerMessage.value.rolexMessageError = 'Hubo un error obteniendo los mensajes del formulario de Rolex'

        })
}

function activateMessageToggle(index, type) {
    if (index) {
        messages.value.activeMessage = messages.value[type][index]
    } else {
        messages.value.activeMessage = {}
    }
    messageToggle.value = !messageToggle.value
}

function getFormattedDate(ISODate) {
    if (typeof ISODate !== 'string' || !ISODate.includes('T')) {
        return "Formato de fecha inválido";
    }


    const parts = ISODate.split('T');
    const date = parts[0];

    const formattedDate = date.replace(/-/g, '/');

    return formattedDate
}

// setInterval(() => {
//     notification.value = !notification.value
// }, 3000);


watch(searchParam, () => {
    if (searchParam.value.length > 0) {
        icon.value = ['fas', 'xmark']
        filterWatches()


    } else {
        icon.value = ['fas', 'magnifying-glass']
        displayWatches.value = allWatches.value
    }
})
watch(modal, () => {
    if(modal.value == false){
        getAllWatches()
    }
})



onMounted(() => {
    getAllWatches()
    getMessages()
    getRolexMessages()
})

</script>

<template>
    <section>
        <div class=" flex justify-center w-full py-6">
            <header class="text-center bg-main-green rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-80 border border-gray-100 px-3 py-3 font-montserrat w-11/12 text-rolex-green">
                <h2 class="font-bold text-2xl">Bienvenido al panel de control</h2>
                <p class="text-xl">Que deseas hacer?</p>
            </header>

        </div>
        <Transition name="notification">

            <section v-if="notification"
                class="bg-main-green text-dark-green rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-80 custom-border px-3 py-3 fixed shadow border-2 border-white z-[99] top-6 right-6">
                <h2>MMMMMM</h2>
            </section>
        </Transition>

        <section class="flex flex-col  w-full justify-center items-center ">

            <DashboardCard class="col-span-2 w-11/12 shadow-xl">
                <template #title>
                    <div class="flex justify-between">
                        <h2 class="text-4xl">Relojes Tudor</h2>
                        <div class="relative">
                            <input type="text" name="" id="" v-model="searchParam" placeholder="m111111-0000"
                                class="p-2 rounded-lg ">
                            <font-awesome-icon @click="deleteParams" :icon="icon"
                                class="absolute right-3 top-3 cursor-pointer" />
                        </div>
                    </div>
                </template>
                <template #content>
                    <div class=" overflow-scroll h-[600px] pb-4 w-full">
                        <div v-if="errorHandlerMessage.watchesError != ''"
                            class=" overflow-scroll h-[450px] space-y-4 flex justify-center items-center">
                            <h2 class="text-3xl font-bold">{{ errorHandlerMessage.watchesError }}</h2>

                        </div>

                        <table v-else-if="displayWatches.length > 0" class="w-full text-xl">
                            <thead>
                                <tr>
                                    <th @click="sortByParam('nombre', 1)"
                                        :class="sortingIndicator == 1 ? 'font-black underline' : 'font-bold '"
                                        class="h-10 border border-white w-[10%] hover:underline cursor-pointer">Nombre
                                    </th>

                                    <th @click="sortByParam('serie', 2)"
                                        :class="sortingIndicator == 2 ? 'font-black underline' : 'font-bold '"
                                        class="h-10 border border-white w-[20%] hover:underline cursor-pointer">Serie
                                    </th>

                                    <th class="h-10 border border-white w-[15%]">IMG</th>

                                    <th @click="sortByParam('precio', 3)"
                                        :class="sortingIndicator == 3 ? 'font-black underline' : 'font-bold '"
                                        class="h-10 border border-white w-[10%] hover:underline cursor-pointer">Precio
                                    </th>

                                    <th @click="sortByParam('disponible', 4)"
                                        :class="sortingIndicator == 4 ? 'font-black underline' : 'font-bold '"
                                        class="h-10 border border-white w-[10%] hover:underline cursor-pointer">
                                        Disponible</th>

                                    <th class="h-10 border border-white w-[10%]">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr class="text-center" v-for="value in displayWatches" :key="value">
                                    <td class="border border-white ">{{ value.nombre }}</td>
                                    <td class="border border-white">{{ value.serie }}</td>
                                    <td class="border border-white flex justify-center"><img :src="value.img" alt=""
                                            class="w-2/3"></td>
                                    <td class="border border-white w-[10%]">${{ value.precio }}</td>
                                    <td class="border border-white w-[10%]">{{ value.disponible == 1 ? 'Disponible' :
                                        'No disponible' }}</td>
                                    <td class="border border-white w-[10%]">
                                        <p class="underline cursor-pointer">Desactivar/Activar</p>
                                        <p class="underline cursor-pointer">Actualizar</p>
                                    </td>
                                </tr>

                            </tbody>
                        </table>

                        <div v-else class=" overflow-scroll h-[450px] space-y-4 flex justify-center items-center">
                            <h2 class="text-3xl font-bold">No hay resultados</h2>
                        </div>
                    </div>


                </template>

            </DashboardCard>
            <div class="w-11/12 flex gap-4 py-6">

                <DashboardCard class="w-1/2 shadow-xl">
                    <template #title>
                        Mensajes generales
                    </template>
                    <template #content>
                        <div v-if="errorHandlerMessage.messagesError != ''"
                            class=" overflow-scroll h-[450px] space-y-4 flex justify-center items-center">
                            <h2 class="text-3xl font-bold">{{ errorHandlerMessage.messagesError }}</h2>

                        </div>
                        <div v-else-if="messages.messages.length > 0"
                            class=" overflow-scroll h-[450px] w-full space-y-4">
                            <div v-for="(value, index) in messages.messages"
                                class="border  border-main-green bg-white rounded-xl shadow p-3" :key="value">
                                <h2 class="font-bold">{{ value.name }}</h2>
                                <p class="font-light">{{ value.email }} (+{{ value.phone }})</p>
                                <p class="font-light">{{ getFormattedDate(value.createdAt) }}</p>
                                <div @click="activateMessageToggle(index, 'messages')"
                                    class=" h-8 w-[600px] whitespace-nowrap overflow-hidden hover:underline cursor-pointer relative italic text-lg text-ellipsis">
                                    {{ value.message }}

                                </div>

                            </div>
                        </div>
                        <div v-else class="overflow-scroll h-[450px] space-y-4 flex justify-center items-center">
                            <h2 class="text-3xl font-bold">No hay mensajes disponibles</h2>
                        </div>
                    </template>
                </DashboardCard>
                <DashboardCard class="w-1/2 shadow-xl">
                    <template #title>
                        Mensajes Rolex
                    </template>
                    <template #content>
                        <div v-if="errorHandlerMessage.rolexMessageError != ''"
                            class=" overflow-scroll h-[450px] space-y-4 flex justify-center items-center">
                            <h2 class="text-3xl font-bold">{{ errorHandlerMessage.rolexMessageError }}</h2>

                        </div>
                        <div v-else-if="messages.rolexMessages.length > 0"
                            class=" overflow-scroll h-[450px] w-full space-y-4">
                            <div v-for="(value, index) in messages.rolexMessages"
                                class="border  border-main-green bg-white rounded-xl shadow p-3" :key="value">
                                <h2 class="font-bold">{{ value.name }}</h2>
                                <p class="font-light">{{ value.email }} (+{{ value.phone }})</p>
                                <p class="font-light">{{ getFormattedDate(value.createdAt) }}</p>
                                <div @click="activateMessageToggle(index, 'rolexMessages')"
                                    class=" h-8 w-[600px] whitespace-nowrap overflow-hidden hover:underline cursor-pointer relative italic text-lg text-ellipsis">
                                    {{ value.message }}

                                </div>

                            </div>
                        </div>
                        <div v-else class=" overflow-scroll h-[450px] space-y-4 flex justify-center items-center">
                            <h2 class="text-3xl font-bold">No hay mensajes disponibles</h2>
                        </div>
                    </template>


                </DashboardCard>
            </div>

        </section>

        <section class="fixed z-50 bottom-10 right-10">
            <DashboardCard class="w-fit">

                <template #content>
                    <div class="flex flex-col gap-2">
                        <h2 class="font-montserrat text-xl">Acciones rápidas</h2>
                        <RouterLink :to="{ name: 'agregar-reloj' }"
                            class="p-2 border-2 border-rolex-green  rounded-xl bg-rolex-green text-white duration-200 hover:bg-white hover:text-dark-green  flex items-center gap-2 ">
                            <font-awesome-icon :icon="['fas', 'plus']" class="text-3xl" />
                            <p>Agregar reloj</p>
                        </RouterLink>
                        <button @click="modal = true"
                            class="p-2 border-2 border-rolex-green  rounded-xl bg-rolex-green text-white duration-200 hover:bg-white hover:text-dark-green  flex items-center gap-2 ">
                            <font-awesome-icon :icon="['fas', 'pen-to-square']" class="text-3xl" />
                            <p>Actualizar inventario</p>

                        </button>

                    </div>
                </template>
            </DashboardCard>
        </section>



        <transition enter-active-class="duration-100 ease-in-out" enter-from-class="transform opacity-0"
            enter-to-class="opacity-100" leave-active-class="duration-700 ease-in-out" leave-from-class="opacity-700"
            leave-to-class="transform opacity-0">

            <section v-if="messageToggle" class="fixed w-full h-screen z-50 top-0 bg-rolex-green/60 ">

            </section>
        </transition>

        <transition name="bounce">
            <div v-if="messageToggle" class="fixed w-full h-screen z-50 top-0 flex justify-center items-center">

                <div class="border  border-main-green bg-white rounded-xl shadow p-3 w-1/2 relative">

                    <button @click="messageToggle = false" class="absolute top-2 right-4 text-2xl text-rolex-green">
                        <font-awesome-icon :icon="['fas', 'xmark']" />
                    </button>


                    <h2 class="font-bold">Nombre: {{ messages.activeMessage.name }}</h2>
                    <p class="">Email: {{ messages.activeMessage.email }} </p>
                    <p class="">Número de teléfono: +{{ messages.activeMessage.phone }} </p>
                    <div class=" relative italic text-lg ">
                        "{{ messages.activeMessage.message }}"

                    </div>
                    <p class="text-right font-light"> {{ getFormattedDate(messages.activeMessage.createdAt) }}</p>


                </div>
            </div>
        </transition>

        <Transition enter-active-class="duration-100 ease-in-out" enter-from-class="transform opacity-0"
            enter-to-class="opacity-100" leave-active-class="duration-700 ease-in-out" leave-from-class="opacity-700"
            leave-to-class="transform opacity-0">
            <WatchesAvailability v-if="modal" v-model="modal"/>

        </Transition>
      

    </section>
</template>

<style scoped>
.bounce-enter-active {
    animation: bounce-in 0.5s;
}

.bounce-leave-active {
    animation: bounce-in 0.5s reverse;
}


.notification-enter-active {
    animation: notificate 0.5s;
}

.notification-enter-active {
    animation: notificate 0.5s reverse;
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

@keyframes notificate {
    0% {
        transform: translateY(-100%);
    }

    80% {
        transform: translateY(1%);
    }

    100% {
        transform: translateY(0%);
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
