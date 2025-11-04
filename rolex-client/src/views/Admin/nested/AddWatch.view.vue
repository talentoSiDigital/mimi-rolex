<script setup>
import { onMounted, ref, watch } from 'vue';
import { RouterLink } from 'vue-router';
import DashboardCard from '../../../components/dashboard/admin/DashboardCard.vue';
import adminDataServices from '../../../services/adminDataServices';
import WatchesAvailability from '../../../components/dashboard/admin/WatchesAvailability.vue';
import Loading from '../../../components/global-components/Loading.vue';
import WatchForm from '../../../components/form-components/WatchForm.vue';
import RelojeriaForm from '../../../components/dashboard/RelojeriaForm.vue';
const errorHandlerMessage = ref({
    messagesError: '',
    rolexMessageError: '',
    watchesError: ''
})


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
    allWatches.value = []
    displayWatches.value = []
    adminDataServices.getAllWatches()
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
    adminDataServices.getAllMessages()
        .then((d) => {
            messages.value.messages = d.data
        }).catch(e => {
            console.log(e);
            errorHandlerMessage.value.messagesError = 'Hubo un error obteniendo los mensajes'

        })
}

function getRolexMessages() {
    adminDataServices.getAllRolexMessages()
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
    if (modal.value == false) {
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

    <section class="flex flex-col  w-full justify-center items-center ">

        <RelojeriaForm/>

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
