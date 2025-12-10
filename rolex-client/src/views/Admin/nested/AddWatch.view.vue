<script setup>
import { ref } from 'vue';
import RelojeriaForm from '../../../components/dashboard/RelojeriaForm.vue';
import DashboardCard from '../../../components/dashboard/admin/DashboardCard.vue';
import { RouterLink } from 'vue-router';
const check = ref(false)
</script>

<template>

    <section class="flex flex-col  w-full justify-center items-center ">
        <Transition name="bounce">
            <RelojeriaForm v-if="!check" v-model="check" />

            <div v-else class="min-h-screen w-full flex justify-center items-center">
                <DashboardCard class="w-11/12 h-36">
                    <template #content>
                        <div class="flex flex-col items-center justify-center h-full gap-3">
                            <h2 class="font-bold text-2xl">Reloj agregado con exito</h2>
                            <RouterLink to="/dashboard/"
                                class="border border-rolex-green text-white bg-rolex-green hover:bg-white hover:text-rolex-green font-medium rounded-lg text-sm px-5 py-2.5 text-center duration-200 mt-0">
                                Volver a relojeria</RouterLink>
                        </div>
                    </template>

                </DashboardCard>

            </div>
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
        transform: scale(1.1);
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
